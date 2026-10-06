const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const MEDIA_DIR = path.join(PUBLIC_DIR, 'media');
const PLACEHOLDER = path.join(MEDIA_DIR, 'placeholder.svg');

if (!fs.existsSync(MEDIA_DIR)) {
  fs.mkdirSync(MEDIA_DIR, { recursive: true });
}

// Load asset manifest
let manifest = {};
const manifestPath = path.join(__dirname, 'asset-manifest.json');
try {
  if (fs.existsSync(manifestPath)) {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  }
} catch (e) {
  console.warn('Failed to load asset manifest:', e.message);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

function resolveFile(requestedPath) {
  // 1. Direct match
  let target = path.join(PUBLIC_DIR, requestedPath);
  if (fs.existsSync(target) && fs.statSync(target).isFile()) {
    return target;
  }

  // 2. Directory with index.html
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    const dirIndex = path.join(target, 'index.html');
    if (fs.existsSync(dirIndex) && fs.statSync(dirIndex).isFile()) {
      return dirIndex;
    }
  }

  // 3. Append .html
  const withHtml = path.join(PUBLIC_DIR, requestedPath + '.html');
  if (fs.existsSync(withHtml) && fs.statSync(withHtml).isFile()) {
    return withHtml;
  }

  // 4. Default fallback to root index.html
  const fallback = path.join(PUBLIC_DIR, 'index.html');
  if (fs.existsSync(fallback)) {
    return fallback;
  }

  return null;
}

function streamLocalFile(filePath, req, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const stats = fs.statSync(filePath);

  const range = req.headers.range;
  if (range && (contentType.startsWith('video/') || contentType.startsWith('audio/'))) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
    const chunksize = end - start + 1;

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${stats.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType,
    });

    const fileStream = fs.createReadStream(filePath, { start, end });
    fileStream.pipe(res);
    return;
  }

  res.writeHead(200, {
    'Content-Length': stats.size,
    'Content-Type': contentType,
    'Cache-Control': 'public, max-age=31536000, immutable',
    'Access-Control-Allow-Origin': '*'
  });

  fs.createReadStream(filePath).pipe(res);
}

function servePlaceholder(res, req) {
  if (fs.existsSync(PLACEHOLDER)) {
    streamLocalFile(PLACEHOLDER, req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}

function downloadAndServe(remoteUrl, localPath, req, res) {
  const tmpPath = localPath + '.tmp_' + Date.now();
  const fileStream = fs.createWriteStream(tmpPath);

  function doFetch(url, redirects = 0) {
    if (redirects > 5) {
      fileStream.close();
      try { fs.unlinkSync(tmpPath); } catch (e) {}
      return servePlaceholder(res, req);
    }

    https.get(url, (fetchRes) => {
      if (fetchRes.statusCode >= 300 && fetchRes.statusCode < 400 && fetchRes.headers.location) {
        return doFetch(fetchRes.headers.location, redirects + 1);
      }
      if (fetchRes.statusCode !== 200) {
        fileStream.close();
        try { fs.unlinkSync(tmpPath); } catch (e) {}
        return servePlaceholder(res, req);
      }

      fetchRes.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close(() => {
          try {
            fs.renameSync(tmpPath, localPath);
            if (!res.headersSent) {
              streamLocalFile(localPath, req, res);
            }
          } catch (err) {
            if (!res.headersSent) {
              servePlaceholder(res, req);
            }
          }
        });
      });
    }).on('error', () => {
      fileStream.close();
      try { fs.unlinkSync(tmpPath); } catch (e) {}
      if (!res.headersSent) {
        servePlaceholder(res, req);
      }
    });
  }

  doFetch(remoteUrl);
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Clean trailing slashes except for root
  if (pathname.length > 1 && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Check if media request
  if (pathname.startsWith('/media/')) {
    const filename = path.basename(pathname);
    const localPath = path.join(MEDIA_DIR, filename);

    if (fs.existsSync(localPath) && fs.statSync(localPath).isFile() && fs.statSync(localPath).size > 0) {
      streamLocalFile(localPath, req, res);
      return;
    }

    // Check manifest for fallback download & persist
    if (manifest[filename]) {
      downloadAndServe(manifest[filename], localPath, req, res);
      return;
    }

    // Fallback to placeholder for missing media
    servePlaceholder(res, req);
    return;
  }

  // Security check: prevent directory traversal
  const resolved = resolveFile(pathname);
  if (!resolved || !resolved.startsWith(PUBLIC_DIR)) {
    res.statusCode = 404;
    res.end('Not Found');
    return;
  }

  streamLocalFile(resolved, req, res);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
