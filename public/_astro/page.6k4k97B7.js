import { m as es } from "./module.esm.B4UCoxDo.js";
import { m as $c } from "./module.esm.CR1UTuU-.js";
import { m as Hc } from "./module.esm.DUd3sQ38.js";
import {
  i as Uc,
  a as zc,
  b as jc,
  c as Wc,
  d as qc,
  g as Gc,
  e as Yc,
  f as Vc,
  h as Xc,
} from "./image.BeqL_TKl.js";
import "./dayjs.min.D1pIAJdy.js";
import { y as Kc } from "./card-carousel.IQo6jGGf.js";
import { l as js, d as Jc } from "./cursor.DsajEiNB.js";
import "./client.C3G48Cdd.js";
import { a as Zc, g as Qc, o as eu } from "./auth.xsl0E0Mr.js";
import { s as wn, a as Ws } from "./event-helpers.kQt6IrIG.js";
import {
  l as tu,
  c as qs,
  b as Gs,
  d as nu,
  e as ru,
  f as su,
  j as iu,
} from "./mappers.SzzIYfgj.js";
import { b as dr, c as fr, d as ou, e as au } from "./helpers.TKXE-3NQ.js";
import { c as hr } from "./constants.CX-DaRJf.js";
import "./_commonjsHelpers.gnU0ypJ3.js";
import "./analytics.DndsQryn.js";
import "./keen-slider.es.DpJYeJpL.js";
import "./GA4Service.h0PwkgNc.js";
import "./map-search-result.BQ3gJ3oA.js";
import "./format-price.BXVYhA84.js";
import "./format-date.BD_GeHUo.js";
import "./lz-string.BYBRaMBl.js";
const cu = (e) => {
  const n = Wc(e).split("."),
    r = n[n.length - 1];
  return e.replace(r, "jpg");
};
function Ys(e, t, n) {
  if (Uc(e)) return e;
  const r = "bunny",
    s = jc(r),
    i = zc(e, t, n, r, "video");
  return `${s}${i}`;
}
function uu(e) {
  let t = () => {
    let n, r;
    try {
      r = localStorage;
    } catch (s) {
      (console.error(s),
        console.warn(
          "Alpine: $persist is using temporary storage since localStorage is unavailable.",
        ));
      let i = new Map();
      r = { getItem: i.get.bind(i), setItem: i.set.bind(i) };
    }
    return e.interceptor(
      (s, i, o, a, c) => {
        let u = n || `_x_${a}`,
          l = Vs(u, r) ? Xs(u, r) : s;
        return (
          o(l),
          e.effect(() => {
            let d = i();
            (Ks(u, d, r), o(d));
          }),
          l
        );
      },
      (s) => {
        ((s.as = (i) => ((n = i), s)), (s.using = (i) => ((r = i), s)));
      },
    );
  };
  (Object.defineProperty(e, "$persist", { get: () => t() }),
    e.magic("persist", t),
    (e.persist = (n, { get: r, set: s }, i = localStorage) => {
      let o = Vs(n, i) ? Xs(n, i) : r();
      (s(o),
        e.effect(() => {
          let a = r();
          (Ks(n, a, i), s(a));
        }));
    }));
}
function Vs(e, t) {
  return t.getItem(e) !== null;
}
function Xs(e, t) {
  let n = t.getItem(e);
  if (n !== void 0) return JSON.parse(n);
}
function Ks(e, t, n) {
  n.setItem(e, JSON.stringify(t));
}
var lu = uu;
function du(e) {
  e.data("saveButton", (t) => ({
    moodboard: e.store("moodboard"),
    async addItem() {
      try {
        (this.moodboard.addItemToDefaultBoard(t),
          this.$dispatch("openAddToMenu", { item: t }));
      } catch {
        this.$dispatch("createToast", {
          type: "error",
          heading: "Oops",
          message: "Unable to add item. Moodboards are limited to 50 items",
        });
      }
    },
    async removeItem() {
      try {
        this.$dispatch("openAddToMenu", { item: t });
      } catch (n) {
        (console.error("Error removing item from moodboard:", n),
          this.$dispatch("createToast", {
            type: "error",
            heading: "Error",
            message: "Could not remove item from moodboard.",
          }));
      }
    },
    toggleSaved() {
      this.isSaved ? this.removeItem() : this.addItem();
    },
    get isSaved() {
      return this.moodboard.isSaved(t.id, t.context);
    },
  }));
}
function fu({ ratio: e, widths: t }) {
  return {
    ":url"() {
      const {
        width: n,
        height: r,
        transformationParams: s,
      } = qc(this.width, this.height, e);
      ((this.width = n),
        (this.height = r),
        this.url &&
          ((this.src = Gc(this.url, s, this.width)),
          (this.srcset = Yc(this.url, s, t)),
          (this.srcsetWebp = this.srcset.replaceAll(
            /\.(jpe?g|png)/g,
            ".webp",
          ))));
    },
  };
}
function hu({ width: e, transforms: t }) {
  return {
    ":url"() {
      if (!this.url) return;
      const n = Ys(this.url, { q: "70", ...t }, e),
        r = n.replaceAll(/\.(mp4)/g, ".webm"),
        s = Ys(cu(this.url), { q: "auto", so: "auto", ...t }, e * 2);
      ((this.src = n), (this.srcWebm = r), (this.posterSrc = s));
    },
  };
}
const pu = (e) => !!e && e?.disableCarousel !== !0 && e?.items?.length > 1,
  mu = (e, { heading: t, firstItem: n }) => [
    n,
    ...(e?.items.map((r) => ({
      url: r?.url,
      alt: r?.alt || t || "",
      type: r?.format === "mp4" ? "video" : "image",
    })) || []),
  ],
  gu = (e, t) =>
    t === "purchase" || (!t && !e)
      ? ""
      : !t || (!t && e)
        ? "p/w"
        : t === "m"
          ? "p/m"
          : t === "d"
            ? "p/d"
            : "p/w",
  _u = ({
    id: e,
    amenities: t = [],
    cabins: n = 0,
    frequency: r = "",
    guests: s = 0,
    heading: i = "",
    href: o = "",
    image: a = "",
    isCharter: c = !1,
    isFeatured: u = !1,
    lengthMetres: l = 0,
    listingType: d = "",
    mediaHover: f,
    price: h = 0,
    subheading: p = "",
    badges: g,
    description: y,
    subtitle: _,
    cardCarousel: S = [],
    disableCardMediaGallery: b,
    trackEventName: w,
  }) => ({
    id: e,
    amenities: t,
    cabins: n,
    frequency: r,
    guests: s,
    heading: i,
    href: o,
    image: a,
    isCharter: c,
    isFeatured: u,
    lengthMetres: l,
    listingType: d,
    mediaHover: f,
    price: h,
    subheading: p,
    frequencyString: "",
    badges: g,
    description: y,
    subtitle: _,
    cardCarousel: S,
    disableCardMediaGallery: b,
    hasCarousel: !1,
    cardCarouselItems: [],
    trackEventName: w,
    init() {
      (pu({ items: S, disableCarousel: b }) &&
        ((this.hasCarousel = !0),
        (this.cardCarouselItems = mu(
          { items: S },
          { heading: i, firstItem: a },
        ))),
        (this.frequencyString = gu(c, r)));
    },
  }),
  yu = (e, t, n) => ({
    localCursorOptions: {
      text: e,
      size: t,
      isActive: !1,
      isClicked: !1,
      icon: n,
    },
    isScrolling: !1,
    onMouseEnter() {
      ((this.localCursorOptions = {
        ...this.localCursorOptions,
        text: e,
        size: t,
        isActive: !0,
      }),
        this.$dispatch("cursor:options", this.localCursorOptions));
    },
    onMouseLeave() {
      ((this.localCursorOptions = { ...this.localCursorOptions, isActive: !1 }),
        this.$dispatch("cursor:options", this.localCursorOptions));
    },
    onMouseClickToggle(r) {
      ((this.localCursorOptions = { ...this.localCursorOptions, isClicked: r }),
        this.$dispatch("cursor:options", this.localCursorOptions));
    },
  }),
  Su = () => ({
    isHovering: !1,
    raf: null,
    mouse: { x: 0.5, y: 0.5 },
    cursor: { x: 0.5, y: 0.5 },
    speed: 0.05,
    init() {
      this.$refs.cursor &&
        this.$watch("isHovering", (e) => {
          e ? this.addCursorListener() : this.removeCursorListener();
        });
    },
    setMouseCoordinates() {
      if (
        ((this.cursor.x = js(this.cursor.x, this.mouse.x, this.speed)),
        (this.cursor.y = js(this.cursor.y, this.mouse.y, this.speed)),
        this.$refs.cursor.style.setProperty(
          "--cursor-x",
          String(this.cursor.x),
        ),
        this.$refs.cursor.style.setProperty(
          "--cursor-y",
          String(this.cursor.y),
        ),
        Jc(this.mouse.x, this.mouse.y, this.cursor.x, this.cursor.y) < 0.001)
      ) {
        (this.raf && cancelAnimationFrame(this.raf), (this.raf = null));
        return;
      }
      this.raf = requestAnimationFrame(() => this.setMouseCoordinates());
    },
    onMouseMove(e) {
      if (!this.$refs?.button) return;
      const n = this.$refs.button.getBoundingClientRect();
      ((this.mouse.x = e.clientX - n.right),
        (this.mouse.y = e.clientY - n.bottom),
        this.raf ||
          (this.raf = requestAnimationFrame(() => this.setMouseCoordinates())));
    },
    addCursorListener() {
      (window.addEventListener("mousemove", (e) => this.onMouseMove(e)),
        (this.raf = requestAnimationFrame(() => this.setMouseCoordinates())));
    },
    removeCursorListener() {
      (window.removeEventListener("mousemove", (e) => this.onMouseMove(e)),
        this.raf && cancelAnimationFrame(this.raf));
    },
    destroy() {
      this.removeCursorListener();
    },
  }),
  bu = () =>
    new Promise((e) => {
      if (window.mapboxgl) {
        e(window.mapboxgl);
        return;
      }
      const t = (n = 0) => {
        if (n > 25)
          throw new Error(
            "Mapbox GL JS not yet loaded. Use waitForMapbox() for async access.",
          );
        if (window.mapboxgl) e(window.mapboxgl);
        else {
          const r = setTimeout(() => {
            (clearTimeout(r), t(n + 1));
          }, 50);
        }
      };
      t();
    }),
  ts = () => {
    if (!window.mapboxgl)
      throw new Error(
        "Mapbox GL JS not yet loaded. Use waitForMapbox() for async access.",
      );
    return window.mapboxgl;
  },
  Eu = () => ts(),
  vu = () => ts().Marker,
  Tu = () => ts().NavigationControl;
function Iu(e, t = "top-right") {
  const n = Tu();
  e.addControl(new n({ visualizePitch: !1, showCompass: !1 }), t);
}
function wu(e, { longitude: t, latitude: n }, { label: r, index: s }) {
  const i = r ? Ru(r, s) : mo(),
    o = vu();
  new o(i).setLngLat([t, n]).addTo(e);
}
function mo() {
  const e = document.createElement("svg");
  e.className = "marker";
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  return (
    t.setAttribute("width", "16"),
    t.setAttribute("height", "16"),
    (t.innerHTML = `
        <rect x="1" y="1" width="14" height="14" stroke="#F5B800" stroke-width="2"  fill="transparent"/>
        <rect x="4" y="4" width="8" height="8" fill="#FFC719" />
      `),
    e.appendChild(t),
    e
  );
}
function ku(e) {
  const t = document.createElement("div");
  t.className = "map-marker__label";
  const n = document.createElement("div");
  n.className = "map-marker__label-inner";
  const r = document.createElement("span");
  return (
    (r.className = "type-subtitle map-marker__label-text"),
    (r.innerText = e),
    n.appendChild(r),
    t.appendChild(n),
    t
  );
}
function Ru(e, t) {
  const n = document.createElement("div");
  ((n.className = "map-marker"),
    (n.dataset.destinationIndex = t.toString()),
    n.setAttribute("x-on:click", `handleDestinationPointClick(${t})`));
  const r = document.createElement("div");
  r.className = "map-marker__inner";
  const s = mo(),
    i = ku(e);
  return (r.appendChild(i), r.appendChild(s), n.appendChild(r), n);
}
function go(e, t = 0) {
  e.getLayer(`route-layer-${t}`) ||
    e.addLayer({
      id: `route-layer-${t}`,
      type: "line",
      source: `route-source-${t}`,
      layout: { "line-join": "round", "line-cap": "round" },
      paint: {
        "line-color": "#FFC719",
        "line-width": 2,
        "line-dasharray": [4, 3],
      },
    });
}
function _o(e, t, n = 0) {
  e.getSource(`route-source-${n}`) ||
    e.addSource(`route-source-${n}`, {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: { type: "LineString", coordinates: t },
      },
    });
}
function Cu(e, t, n = 0) {
  e.getSource(`route-source-${n}`).setData({
    type: "Feature",
    properties: {},
    geometry: { type: "LineString", coordinates: t },
  });
}
var le = 63710088e-1,
  Mu = {
    centimeters: le * 100,
    centimetres: le * 100,
    degrees: le / 111325,
    feet: le * 3.28084,
    inches: le * 39.37,
    kilometers: le / 1e3,
    kilometres: le / 1e3,
    meters: le,
    metres: le,
    miles: le / 1609.344,
    millimeters: le * 1e3,
    millimetres: le * 1e3,
    nauticalmiles: le / 1852,
    radians: 1,
    yards: le * 1.0936,
  };
function wr(e, t, n) {
  n === void 0 && (n = {});
  var r = { type: "Feature" };
  return (
    (n.id === 0 || n.id) && (r.id = n.id),
    n.bbox && (r.bbox = n.bbox),
    (r.properties = t || {}),
    (r.geometry = e),
    r
  );
}
function ns(e, t, n) {
  if ((n === void 0 && (n = {}), e.length < 2))
    throw new Error("coordinates must be an array of two or more positions");
  var r = { type: "LineString", coordinates: e };
  return wr(r, t, n);
}
function xu(e, t) {
  t === void 0 && (t = "kilometers");
  var n = Mu[t];
  if (!n) throw new Error(t + " units is invalid");
  return e * n;
}
function fn(e) {
  var t = e % 360;
  return (t * Math.PI) / 180;
}
function yo(e, t, n) {
  if (e !== null)
    for (
      var r,
        s,
        i,
        o,
        a,
        c,
        u,
        l = 0,
        d = 0,
        f,
        h = e.type,
        p = h === "FeatureCollection",
        g = h === "Feature",
        y = p ? e.features.length : 1,
        _ = 0;
      _ < y;
      _++
    ) {
      ((u = p ? e.features[_].geometry : g ? e.geometry : e),
        (f = u ? u.type === "GeometryCollection" : !1),
        (a = f ? u.geometries.length : 1));
      for (var S = 0; S < a; S++) {
        var b = 0,
          w = 0;
        if (((o = f ? u.geometries[S] : u), o !== null)) {
          c = o.coordinates;
          var T = o.type;
          switch (((l = 0), T)) {
            case null:
              break;
            case "Point":
              if (t(c, d, _, b, w) === !1) return !1;
              (d++, b++);
              break;
            case "LineString":
            case "MultiPoint":
              for (r = 0; r < c.length; r++) {
                if (t(c[r], d, _, b, w) === !1) return !1;
                (d++, T === "MultiPoint" && b++);
              }
              T === "LineString" && b++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (r = 0; r < c.length; r++) {
                for (s = 0; s < c[r].length - l; s++) {
                  if (t(c[r][s], d, _, b, w) === !1) return !1;
                  d++;
                }
                (T === "MultiLineString" && b++, T === "Polygon" && w++);
              }
              T === "Polygon" && b++;
              break;
            case "MultiPolygon":
              for (r = 0; r < c.length; r++) {
                for (w = 0, s = 0; s < c[r].length; s++) {
                  for (i = 0; i < c[r][s].length - l; i++) {
                    if (t(c[r][s][i], d, _, b, w) === !1) return !1;
                    d++;
                  }
                  w++;
                }
                b++;
              }
              break;
            case "GeometryCollection":
              for (r = 0; r < o.geometries.length; r++)
                if (yo(o.geometries[r], t) === !1) return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Ou(e, t) {
  var n,
    r,
    s,
    i,
    o,
    a,
    c,
    u,
    l,
    d,
    f = 0,
    h = 1;
  for (n = 0; n < h; n++) {
    for (
      a = e.geometry,
        u = e.properties,
        l = e.bbox,
        d = e.id,
        c = a ? a.type === "GeometryCollection" : !1,
        o = c ? a.geometries.length : 1,
        s = 0;
      s < o;
      s++
    ) {
      if (((i = c ? a.geometries[s] : a), i === null)) {
        if (t(null, f, u, l, d) === !1) return !1;
        continue;
      }
      switch (i.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(i, f, u, l, d) === !1) return !1;
          break;
        }
        case "GeometryCollection": {
          for (r = 0; r < i.geometries.length; r++)
            if (t(i.geometries[r], f, u, l, d) === !1) return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    f++;
  }
}
function Au(e, t) {
  Ou(e, function (n, r, s, i, o) {
    var a = n === null ? null : n.type;
    switch (a) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return t(wr(n, s, { bbox: i, id: o }), r, 0) === !1 ? !1 : void 0;
    }
    var c;
    switch (a) {
      case "MultiPoint":
        c = "Point";
        break;
      case "MultiLineString":
        c = "LineString";
        break;
      case "MultiPolygon":
        c = "Polygon";
        break;
    }
    for (var u = 0; u < n.coordinates.length; u++) {
      var l = n.coordinates[u],
        d = { type: c, coordinates: l };
      if (t(wr(d, s), r, u) === !1) return !1;
    }
  });
}
function Nu(e, t) {
  Au(e, function (n, r, s) {
    var i = 0;
    if (n.geometry) {
      var o = n.geometry.type;
      if (!(o === "Point" || o === "MultiPoint")) {
        var a,
          c = 0,
          u = 0,
          l = 0;
        if (
          yo(n, function (d, f, h, p, g) {
            if (a === void 0 || r > c || p > u || g > l) {
              ((a = d), (c = r), (u = p), (l = g), (i = 0));
              return;
            }
            var y = ns([a, d], n.properties);
            if (t(y, r, s, g, i) === !1) return !1;
            (i++, (a = d));
          }) === !1
        )
          return !1;
      }
    }
  });
}
function Du(e, t, n) {
  var r = n,
    s = !1;
  return (
    Nu(e, function (i, o, a, c, u) {
      (s === !1 && n === void 0 ? (r = i) : (r = t(r, i, o, a, c, u)),
        (s = !0));
    }),
    r
  );
}
function Js(e) {
  if (!e) throw new Error("coord is required");
  if (!Array.isArray(e)) {
    if (
      e.type === "Feature" &&
      e.geometry !== null &&
      e.geometry.type === "Point"
    )
      return e.geometry.coordinates;
    if (e.type === "Point") return e.coordinates;
  }
  if (
    Array.isArray(e) &&
    e.length >= 2 &&
    !Array.isArray(e[0]) &&
    !Array.isArray(e[1])
  )
    return e;
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function Lu(e) {
  return e.type === "Feature" ? e.geometry : e;
}
function rs(e, t, n) {
  n === void 0 && (n = {});
  var r = Js(e),
    s = Js(t),
    i = fn(s[1] - r[1]),
    o = fn(s[0] - r[0]),
    a = fn(r[1]),
    c = fn(s[1]),
    u =
      Math.pow(Math.sin(i / 2), 2) +
      Math.pow(Math.sin(o / 2), 2) * Math.cos(a) * Math.cos(c);
  return xu(2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)), n.units);
}
var Pu = (function () {
  function e(t) {
    ((this.points = t.points || []),
      (this.duration = t.duration || 1e4),
      (this.sharpness = t.sharpness || 0.85),
      (this.centers = []),
      (this.controls = []),
      (this.stepLength = t.stepLength || 60),
      (this.length = this.points.length),
      (this.delay = 0));
    for (var n = 0; n < this.length; n++)
      this.points[n].z = this.points[n].z || 0;
    for (var n = 0; n < this.length - 1; n++) {
      var r = this.points[n],
        s = this.points[n + 1];
      this.centers.push({
        x: (r.x + s.x) / 2,
        y: (r.y + s.y) / 2,
        z: (r.z + s.z) / 2,
      });
    }
    this.controls.push([this.points[0], this.points[0]]);
    for (var n = 0; n < this.centers.length - 1; n++) {
      var i =
          this.points[n + 1].x -
          (this.centers[n].x + this.centers[n + 1].x) / 2,
        o =
          this.points[n + 1].y -
          (this.centers[n].y + this.centers[n + 1].y) / 2,
        a =
          this.points[n + 1].z -
          (this.centers[n].y + this.centers[n + 1].z) / 2;
      this.controls.push([
        {
          x:
            (1 - this.sharpness) * this.points[n + 1].x +
            this.sharpness * (this.centers[n].x + i),
          y:
            (1 - this.sharpness) * this.points[n + 1].y +
            this.sharpness * (this.centers[n].y + o),
          z:
            (1 - this.sharpness) * this.points[n + 1].z +
            this.sharpness * (this.centers[n].z + a),
        },
        {
          x:
            (1 - this.sharpness) * this.points[n + 1].x +
            this.sharpness * (this.centers[n + 1].x + i),
          y:
            (1 - this.sharpness) * this.points[n + 1].y +
            this.sharpness * (this.centers[n + 1].y + o),
          z:
            (1 - this.sharpness) * this.points[n + 1].z +
            this.sharpness * (this.centers[n + 1].z + a),
        },
      ]);
    }
    return (
      this.controls.push([
        this.points[this.length - 1],
        this.points[this.length - 1],
      ]),
      (this.steps = this.cacheSteps(this.stepLength)),
      this
    );
  }
  return (
    (e.prototype.cacheSteps = function (t) {
      var n = [],
        r = this.pos(0);
      n.push(0);
      for (var s = 0; s < this.duration; s += 10) {
        var i = this.pos(s),
          o = Math.sqrt(
            (i.x - r.x) * (i.x - r.x) +
              (i.y - r.y) * (i.y - r.y) +
              (i.z - r.z) * (i.z - r.z),
          );
        o > t && (n.push(s), (r = i));
      }
      return n;
    }),
    (e.prototype.vector = function (t) {
      var n = this.pos(t + 10),
        r = this.pos(t - 10);
      return {
        angle: (180 * Math.atan2(n.y - r.y, n.x - r.x)) / 3.14,
        speed: Math.sqrt(
          (r.x - n.x) * (r.x - n.x) +
            (r.y - n.y) * (r.y - n.y) +
            (r.z - n.z) * (r.z - n.z),
        ),
      };
    }),
    (e.prototype.pos = function (t) {
      var n = t - this.delay;
      (n < 0 && (n = 0), n > this.duration && (n = this.duration - 1));
      var r = n / this.duration;
      if (r >= 1) return this.points[this.length - 1];
      var s = Math.floor((this.points.length - 1) * r),
        i = (this.length - 1) * r - s;
      return Fu(
        i,
        this.points[s],
        this.controls[s][1],
        this.controls[s + 1][0],
        this.points[s + 1],
      );
    }),
    e
  );
})();
function Fu(e, t, n, r, s) {
  var i = Bu(e),
    o = {
      x: s.x * i[0] + r.x * i[1] + n.x * i[2] + t.x * i[3],
      y: s.y * i[0] + r.y * i[1] + n.y * i[2] + t.y * i[3],
      z: s.z * i[0] + r.z * i[1] + n.z * i[2] + t.z * i[3],
    };
  return o;
}
function Bu(e) {
  var t = e * e,
    n = t * e;
  return [
    n,
    3 * t * (1 - e),
    3 * e * (1 - e) * (1 - e),
    (1 - e) * (1 - e) * (1 - e),
  ];
}
function $u(e, t) {
  t === void 0 && (t = {});
  for (
    var n = t.resolution || 1e4,
      r = t.sharpness || 0.85,
      s = [],
      i = Lu(e).coordinates.map(function (u) {
        return { x: u[0], y: u[1] };
      }),
      o = new Pu({ duration: n, points: i, sharpness: r }),
      a = function (u) {
        var l = o.pos(u);
        Math.floor(u / 100) % 2 === 0 && s.push([l.x, l.y]);
      },
      c = 0;
    c < o.duration;
    c += 10
  )
    a(c);
  return (a(o.duration), ns(s, t.properties));
}
function Hu(e, t) {
  return (
    t === void 0 && (t = {}),
    Du(
      e,
      function (n, r) {
        var s = r.geometry.coordinates;
        return n + rs(s[0], s[1], t);
      },
      0,
    )
  );
}
function Yt(e) {
  return e > 180 ? e - 360 : e < -180 ? e + 360 : e;
}
function Uu(e, t) {
  return (
    (e = Yt(e)),
    (t = Yt(t)),
    Math.abs(e - t) > 180 && (e > t ? (t += 360) : (e += 360)),
    (((((e + t) / 2 + 180) % 360) + 360) % 360) - 180
  );
}
function zu(e, t) {
  const n = Yt(e.longitude),
    r = Yt(t.longitude),
    s = Uu(n, r);
  return [
    { longitude: e.longitude, latitude: e.latitude },
    { longitude: s, latitude: t.latitude },
  ];
}
function ju(e) {
  const t = ns(e);
  return $u(t, { sharpness: 0, resolution: 1e5 });
}
function Wu(e) {
  return e
    .filter(
      (t) => typeof t.longitude == "number" && typeof t.latitude == "number",
    )
    .map((t) => [t.longitude, t.latitude]);
}
function So(e) {
  const t = Wu(e);
  if (!t || t.length < 2) return [];
  const n = ju(t);
  return n ? n.geometry.coordinates : [];
}
function qu(e, t, n) {
  return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function Gu(e, t) {
  return (
    (Hu(
      { properties: {}, geometry: { type: "LineString", coordinates: e } },
      { units: "kilometers" },
    ) /
      t) *
    1e3
  );
}
function Yu(e) {
  if (!e || e.length === 0)
    return [
      [0, 0],
      [0, 0],
    ];
  let t = 1 / 0,
    n = 1 / 0,
    r = -1 / 0,
    s = -1 / 0;
  return (
    e.forEach((i) => {
      const o = Yt(i.longitude);
      ((t = Math.min(t, o)),
        (n = Math.min(n, i.latitude)),
        (r = Math.max(r, o)),
        (s = Math.max(s, i.latitude)));
    }),
    r - t > 180
      ? [
          [t < 0 ? t : t - 360, n],
          [r, s],
        ]
      : [
          [t, n],
          [r, s],
        ]
  );
}
function Vu(e, t, n) {
  const r = rs([e.longitude, e.latitude], [e.longitude, t.latitude]),
    s = n ? 90 : 80,
    i = n ? 115 : 110;
  if (r > 20) return Math.min(i, Math.round(s + (r - 20) * 0.5));
  const o = r * 0.25;
  return Math.max(s, Math.round(s + o));
}
function Xu(e, t) {
  const n = Math.abs(t.longitude - e.longitude),
    r = Math.abs(t.latitude - e.latitude),
    s = Math.sqrt(n ** 2 + r ** 2);
  return [-180 * (s === 0 ? 0 : r / s), 0];
}
const Ku = (e, t) => {
  const n = rs([e.longitude, e.latitude], [t.longitude, t.latitude]);
  return n >= 60 ? 9 : n >= 30 ? 8.5 + ((60 - n) / 20) * (11.2 - 8.5) : 11.2;
};
function Ju({
  accessToken: e,
  mapStyle: t,
  containerId: n,
  camera: r,
  enableTouch: s,
  cooperativeGestures: i,
  touchZoomRotate: o,
}) {
  const a = Eu();
  return new a.Map({
    accessToken: e,
    container: n,
    style: t,
    pitch: 0,
    dragPan: s,
    dragRotate: !1,
    doubleClickZoom: !1,
    pitchWithRotate: !1,
    scrollZoom: !1,
    center: r ? [r.longitude, r.latitude] : [40, 10],
    zoom: r ? r.zoom : 5,
    attributionControl: !1,
    cooperativeGestures: i,
    touchZoomRotate: o,
  });
}
function Zu(e, t, n) {
  t.map((r, s) => {
    const i = n?.showLabels && r?.title ? r.title : "";
    return wu(
      e,
      { longitude: r.longitude, latitude: r.latitude },
      { label: i, index: s },
    );
  });
}
function Qu(e, t, n) {
  let r;
  (e.on("load", () => {
    const s = t.flat(),
      i = So(s);
    (_o(e, n ? [] : i), go(e));
    let o = null;
    const c = Gu(i, 100),
      u = (l) => {
        o || (o = l);
        const d = l - o,
          f = Math.min(d / c, 1),
          h = Math.floor(f * (i.length - 1)),
          p = (f * (i.length - 1)) % 1,
          g = i.slice(0, h + 1);
        if (f < 1) {
          const y = qu(i[h], i[h + 1] || i[h], p);
          g.push(y);
        }
        (Cu(e, g), (r = requestAnimationFrame(u)));
      };
    n && i.length > 1 && requestAnimationFrame(u);
  }),
    e.on("remove", () => {
      cancelAnimationFrame(r);
    }));
}
function el(e) {
  e.on("load", () => {
    (e.setLayoutProperty("country-label", "visibility", "none"),
      e.setLayoutProperty("state-label", "visibility", "none"));
  });
}
function tl(e, t) {
  e.on("load", () => {
    t.map((r) => So(r)).forEach((r, s) => {
      (_o(e, r, s), go(e, s));
    });
  });
}
function nl(e, t, n, r) {
  const s = document.getElementById(e);
  if (!s) return null;
  if (!window.IntersectionObserver) return (t(), null);
  const i = new IntersectionObserver((o) => {
    o.forEach((a) => {
      a.isIntersecting ? t() : n();
    });
  }, r);
  return (i.observe(s), i);
}
const bo = ({ hideMapStats: e, options: t }) => ({
    mapbox: null,
    inView: !1,
    hideMapStats: e,
    observer: null,
    options: t,
  }),
  Eo = (e) => {
    e.observer = nl(e.$el.id, e.initMapbox.bind(e), e.destroyMapbox.bind(e), {
      threshold: 0,
      rootMargin: "35%",
    });
  },
  vo = (e) => {
    (e.observer && e.observer.disconnect(), e.destroyMapbox());
  },
  To = async (
    e,
    { camera: t, destinations: n, routes: r, isInteractiveMap: s },
  ) => {
    await bu();
    const {
      accessToken: i,
      mapStyle: o,
      containerId: a,
      animateRoute: c,
      enableTouch: u,
      showControls: l,
      showMarkers: d,
      showRoute: f,
      shouldHideMapTitles: h,
      cooperativeGestures: p,
      scrollZoom: g,
      touchZoomRotate: y,
      showMarkersLabels: _,
    } = e.options;
    e.mapbox = Ju({
      accessToken: i,
      mapStyle: o,
      containerId: a,
      camera: t,
      enableTouch: u,
      ...(y && { touchZoomRotate: y }),
      ...(p && { cooperativeGestures: p }),
    });
    const S = Yu(n);
    ((e.bounds = S),
      l && Iu(e.mapbox),
      d && Zu(e.mapbox, n, { showLabels: _ }),
      h && el(e.mapbox),
      s ? tl(e.mapbox, r) : f && Qu(e.mapbox, r, c));
  },
  Io = (e) => {
    e.mapbox && e.mapbox.remove();
  },
  rl = "#FFC719",
  sl = "#6D6B70",
  il =
    (e, { destinations: t }) =>
    (n) => {
      const r = structuredClone(t),
        s = n.detail.destinationIndex;
      if (n.detail.focusOnBounds && e.bounds) {
        const c = e.bounds;
        (e.focusOnMap(
          { latitude: c[0][1], longitude: c[0][0] },
          { latitude: c[1][1], longitude: c[1][0] },
        ),
          e.setActiveRoute(-1));
        return;
      }
      e.activeDestinationIndex = s;
      const o = r[s] || null,
        a = s > 0 && r[s - 1];
      (o && e.focusOnMap(o, a || void 0), s > 0 && e.setActiveRoute(s));
    },
  ol = ({
    camera: e,
    destinations: t,
    routes: n,
    hideMapStats: r,
    isInteractiveMap: s,
    options: i,
  }) => ({
    ...bo({ hideMapStats: r, options: i }),
    activeDestinationIndex: 0,
    isInteractiveMap: s,
    totalDestinations: t.length,
    mapChangeHandler: (o) => {},
    init() {
      Eo(this);
      const o = il(this, { destinations: t });
      (window.addEventListener("map:change", o), (this.mapChangeHandler = o));
    },
    destroy() {
      (window.removeEventListener("map:change", this.mapChangeHandler),
        vo(this));
    },
    async initMapbox() {
      await To(this, {
        camera: e,
        destinations: t,
        routes: n,
        isInteractiveMap: s,
      });
      const o = this.bounds;
      o.length > 1 &&
        this.focusOnMap(
          { latitude: o[0][1], longitude: o[0][0] },
          { latitude: o[1][1], longitude: o[1][0] },
        );
    },
    destroyMapbox() {
      Io(this);
    },
    focusOnMap(o, a) {
      if (o) {
        if (!a) return this.flyToRoute(o);
        this.focusOnTwoRouteBounds(a, o);
      }
    },
    flyToRoute(o) {
      return this.mapbox?.flyTo({
        center: [o.longitude, o.latitude],
        zoom: 12,
        essential: !0,
        speed: 1.2,
        curve: 1,
        easing: function (a) {
          return a;
        },
      });
    },
    focusOnTwoRouteBounds(o, a) {
      try {
        const [c, u] = zu(o, a);
        this.mapbox?.fitBounds(
          [
            [c.longitude, c.latitude],
            [u.longitude, u.latitude],
          ],
          {
            padding: Vu(o, a, this.isMobile ?? !1),
            offset: this.isMobile ? [0, 0] : Xu(o, a),
            maxZoom: Ku(o, a),
            essential: !0,
            speed: 0.6,
            curve: 1.2,
            animate: !0,
          },
        );
      } catch (c) {
        console.log("error", c);
      }
    },
    setActiveRoute(o) {
      if (!this.mapbox) return;
      const a = (l, d) => {
          if (!this.mapbox?.getSource(`route-source-${l}`)) return;
          const f = l === d ? rl : sl;
          this.mapbox?.setPaintProperty(`route-layer-${l}`, "line-color", f);
        },
        c = o - 1;
      Array.from(Array(this.totalDestinations).keys()).forEach((l) => {
        a(l, c);
      });
    },
  }),
  al = ({
    camera: e,
    destinations: t,
    routes: n,
    isInteractiveMap: r,
    hideMapStats: s,
    options: i,
  }) => ({
    ...bo({ hideMapStats: s, options: i }),
    init() {
      Eo(this);
    },
    destroy() {
      vo(this);
    },
    async initMapbox() {
      await To(this, {
        camera: e,
        destinations: t,
        routes: n,
        isInteractiveMap: r,
      });
    },
    destroyMapbox() {
      Io(this);
    },
  }),
  cl = (e) => ({
    user: null,
    loading: !1,
    unsubscribe: null,
    async init() {
      this.loading = !0;
      const { data: t, error: n } = await Qc();
      (n && (this.user = null),
        (this.unsubscribe = eu((r, s) => {
          r === "INITIAL_SESSION"
            ? (this.user = s?.user ?? null)
            : r === "SIGNED_IN"
              ? (this.user = s?.user ?? null)
              : r === "SIGNED_OUT" &&
                ((this.user = null),
                e.store("moodboard").clearBoards(),
                this.unsubscribe?.(),
                window.location.reload());
        })),
        t?.session?.user &&
          ((this.user = t.session.user),
          e.store("moodboard").setLoggedInBoards()),
        (this.loading = !1));
    },
    async logout() {
      this.loading = !0;
      try {
        const { error: t } = await Zc();
        if (t) throw t;
        wn("moodboard_logout_success");
      } catch (t) {
        console.error("Error during logout:", t);
      } finally {
        this.loading = !1;
      }
    },
    get isLoggedIn() {
      return !!this.user;
    },
    destroy() {
      this.unsubscribe && this.unsubscribe();
    },
  }),
  ul = (e) => ({
    ready: !1,
    loading: !1,
    boards: e.$persist(fr({}, dr(hr))),
    isJoined(t) {
      return !!this.boards[t];
    },
    isSaved(t, n) {
      const r = this.boards;
      if (!r) return !1;
      for (const s in r) {
        const i = r[s];
        if (i?.items) {
          for (const o of i.items) if (o.id === t && o.context === n) return !0;
        }
      }
      return !1;
    },
    isSavedTo(t, n) {
      if (!t || !n) return !1;
      const { id: r, context: s } = t,
        i = this.boards?.[n];
      if (!i?.items?.length) return !1;
      let o = !1;
      for (const a of i.items)
        if (a.id === r && a.context === s) {
          o = !0;
          break;
        }
      return o;
    },
    get savedCount() {
      const t = this.boards;
      if (!t) return 0;
      let n = 0;
      for (const r in t) {
        const s = t[r];
        s?.items && (n += s.items.length);
      }
      return n;
    },
    get boardsCount() {
      return this.boards && this.savedCount
        ? Object.keys(this.boards).length
        : 0;
    },
    async createBoard(t, n) {
      this.loading = !0;
      try {
        const r = e.store("auth").isLoggedIn;
        if (!r) return;
        const s = dr(t, n);
        if (!s) throw new Error("Failed to build board");
        return (
          await qs(s),
          (this.boards = fr(this.boards, s)),
          wn("moodboard_board_created", {
            board_title: t,
            board_id: s.id,
            authenticated: r,
          }),
          s
        );
      } catch (r) {
        console.error("[store.moodboard.createBoard]:", r);
      } finally {
        this.loading = !1;
      }
    },
    async joinBoard(t) {
      this.loading = !0;
      try {
        (await iu(t),
          this.getAndSetDbBoards(),
          wn("moodboard_join_success", { board_id: t, authenticated: !0 }));
      } catch (n) {
        console.error("[store.moodboard.joinBoard]:", n);
      } finally {
        this.loading = !1;
      }
    },
    async getAndSetDbBoards() {
      try {
        const t = await ru();
        if (!t?.length) {
          this.clearBoards();
          return;
        }
        this.boards = su(t);
      } catch (t) {
        console.error("Error fetching board:", t);
      }
    },
    addItemToDefaultBoard(t) {
      if (!this.boards) return;
      const r = Object.values(this.boards).find((s) => s.title === hr);
      r && this.addItemToBoard(t, r.id);
    },
    async addItemToBoard(t, n) {
      this.loading = !0;
      try {
        if (!n) throw new Error("No board ID available");
        const r = e.store("auth").isLoggedIn;
        (r && (await Gs(n, t)),
          (this.boards = au(this.boards, t, n)),
          Ws("add", t, { board_id: n, authenticated: r }));
      } catch (r) {
        console.error("[store.moodboard.addItemToBoard]:", r);
      } finally {
        this.loading = !1;
      }
    },
    async removeItemFromBoard(t, n) {
      this.loading = !0;
      try {
        const r = `${t.id}::${t.context}`,
          s = e.store("auth").isLoggedIn;
        (s && (await nu(n, r)),
          (this.boards = ou(this.boards, t, n)),
          Ws("remove", t, { board_id: n, authenticated: s }));
      } catch (r) {
        console.error("[store.moodboard.removeItemFromBoard]:", r);
      } finally {
        this.loading = !1;
      }
    },
    async setLoggedInBoards() {
      if (e.store("auth").isLoggedIn)
        for (const t in this.boards) {
          const n = this.boards[t];
          try {
            await qs(n);
            for (const r of n.items) await Gs(n.id, r);
          } catch (r) {
            console.error("[store.moodboard.persistLocalBoardsOnLogin]:", r);
            break;
          } finally {
            this.getAndSetDbBoards();
          }
        }
    },
    async handleLeaveBoard(t) {
      try {
        const n = { ...this.boards };
        if (!n[t]) return;
        if ((delete n[t], (this.boards = n), e.store("auth").isLoggedIn)) {
          (await tu(t),
            this.getAndSetDbBoards(),
            wn("moodboard_board_left", { board_id: t, authenticated: !0 }));
          return;
        }
        (!this.boards || !Object.keys(this.boards)?.length) &&
          this.clearBoards();
      } catch (n) {
        console.error("[store.moodboard.handleLeaveBoard]:", n);
      }
    },
    clearBoards() {
      const t = dr(hr);
      this.boards = fr(null, t);
    },
  }),
  wo = (e) => {
    (e.plugin($c),
      e.plugin(Hc),
      e.plugin(lu),
      e.store("auth", cl(e)),
      e.store("moodboard", ul(e)),
      du(e),
      e.data("cursorWrapper", yu),
      e.data("button", Su),
      e.bind("HybridImage", fu),
      e.bind("AlpineVideo", hu),
      e.data("backgroundMedia", () => ({ isImageSrc: Xc, isVideoSrc: Vc })),
      e.data("CardYacht", _u),
      e.data("yachtCarouselDynamic", Kc),
      e.data("interactiveMap", ol),
      e.data("map", al));
  },
  ll = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: wo },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  dl = (e) => {
    "default" in ll && wo(e);
  },
  ko = Object.prototype.toString;
function Ro(e) {
  switch (ko.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return Ae(e, Error);
  }
}
function xt(e, t) {
  return ko.call(e) === `[object ${t}]`;
}
function ss(e) {
  return xt(e, "ErrorEvent");
}
function Zs(e) {
  return xt(e, "DOMError");
}
function fl(e) {
  return xt(e, "DOMException");
}
function Re(e) {
  return xt(e, "String");
}
function is(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "__sentry_template_string__" in e &&
    "__sentry_template_values__" in e
  );
}
function os(e) {
  return (
    e === null || is(e) || (typeof e != "object" && typeof e != "function")
  );
}
function vt(e) {
  return xt(e, "Object");
}
function qn(e) {
  return typeof Event < "u" && Ae(e, Event);
}
function hl(e) {
  return typeof Element < "u" && Ae(e, Element);
}
function pl(e) {
  return xt(e, "RegExp");
}
function Gn(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function ml(e) {
  return (
    vt(e) &&
    "nativeEvent" in e &&
    "preventDefault" in e &&
    "stopPropagation" in e
  );
}
function Co(e) {
  return typeof e == "number" && e !== e;
}
function Ae(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Mo(e) {
  return !!(typeof e == "object" && e !== null && (e.__isVue || e._isVue));
}
function St(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t
    ? e
    : `${e.slice(0, t)}...`;
}
function Qs(e, t) {
  if (!Array.isArray(e)) return "";
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    try {
      Mo(s) ? n.push("[VueViewModel]") : n.push(String(s));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function gl(e, t, n = !1) {
  return Re(e)
    ? pl(t)
      ? t.test(e)
      : Re(t)
        ? n
          ? e === t
          : e.includes(t)
        : !1
    : !1;
}
function Ot(e, t = [], n = !1) {
  return t.some((r) => gl(e, r, n));
}
function _l(e, t, n = 250, r, s, i, o) {
  if (
    !i.exception ||
    !i.exception.values ||
    !o ||
    !Ae(o.originalException, Error)
  )
    return;
  const a =
    i.exception.values.length > 0
      ? i.exception.values[i.exception.values.length - 1]
      : void 0;
  a &&
    (i.exception.values = yl(
      kr(e, t, s, o.originalException, r, i.exception.values, a, 0),
      n,
    ));
}
function kr(e, t, n, r, s, i, o, a) {
  if (i.length >= n + 1) return i;
  let c = [...i];
  if (Ae(r[s], Error)) {
    ei(o, a);
    const u = e(t, r[s]),
      l = c.length;
    (ti(u, s, l, a), (c = kr(e, t, n, r[s], s, [u, ...c], u, l)));
  }
  return (
    Array.isArray(r.errors) &&
      r.errors.forEach((u, l) => {
        if (Ae(u, Error)) {
          ei(o, a);
          const d = e(t, u),
            f = c.length;
          (ti(d, `errors[${l}]`, f, a),
            (c = kr(e, t, n, u, s, [d, ...c], d, f)));
        }
      }),
    c
  );
}
function ei(e, t) {
  ((e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      ...(e.type === "AggregateError" && { is_exception_group: !0 }),
      exception_id: t,
    }));
}
function ti(e, t, n, r) {
  ((e.mechanism = e.mechanism || { type: "generic", handled: !0 }),
    (e.mechanism = {
      ...e.mechanism,
      type: "chained",
      source: t,
      exception_id: n,
      parent_id: r,
    }));
}
function yl(e, t) {
  return e.map((n) => (n.value && (n.value = St(n.value, t)), n));
}
function hn(e) {
  return e && e.Math == Math ? e : void 0;
}
const D =
  (typeof globalThis == "object" && hn(globalThis)) ||
  (typeof window == "object" && hn(window)) ||
  (typeof self == "object" && hn(self)) ||
  (typeof global == "object" && hn(global)) ||
  (function () {
    return this;
  })() ||
  {};
function as() {
  return D;
}
function xo(e, t, n) {
  const r = n || D,
    s = (r.__SENTRY__ = r.__SENTRY__ || {});
  return s[e] || (s[e] = t());
}
const bt = as(),
  Sl = 80;
function qe(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let n = e;
    const r = 5,
      s = [];
    let i = 0,
      o = 0;
    const a = " > ",
      c = a.length;
    let u;
    const l = Array.isArray(t) ? t : t.keyAttrs,
      d = (!Array.isArray(t) && t.maxStringLength) || Sl;
    for (
      ;
      n &&
      i++ < r &&
      ((u = bl(n, l)),
      !(u === "html" || (i > 1 && o + s.length * c + u.length >= d)));
    )
      (s.push(u), (o += u.length), (n = n.parentNode));
    return s.reverse().join(a);
  } catch {
    return "<unknown>";
  }
}
function bl(e, t) {
  const n = e,
    r = [];
  let s, i, o, a, c;
  if (!n || !n.tagName) return "";
  if (
    bt.HTMLElement &&
    n instanceof HTMLElement &&
    n.dataset &&
    n.dataset.sentryComponent
  )
    return n.dataset.sentryComponent;
  r.push(n.tagName.toLowerCase());
  const u =
    t && t.length
      ? t.filter((d) => n.getAttribute(d)).map((d) => [d, n.getAttribute(d)])
      : null;
  if (u && u.length)
    u.forEach((d) => {
      r.push(`[${d[0]}="${d[1]}"]`);
    });
  else if ((n.id && r.push(`#${n.id}`), (s = n.className), s && Re(s)))
    for (i = s.split(/\s+/), c = 0; c < i.length; c++) r.push(`.${i[c]}`);
  const l = ["aria-label", "type", "name", "title", "alt"];
  for (c = 0; c < l.length; c++)
    ((o = l[c]), (a = n.getAttribute(o)), a && r.push(`[${o}="${a}"]`));
  return r.join("");
}
function El() {
  try {
    return bt.document.location.href;
  } catch {
    return "";
  }
}
function Oo(e) {
  return bt.document && bt.document.querySelector
    ? bt.document.querySelector(e)
    : null;
}
function Ao(e) {
  if (!bt.HTMLElement) return null;
  let t = e;
  const n = 5;
  for (let r = 0; r < n; r++) {
    if (!t) return null;
    if (t instanceof HTMLElement && t.dataset.sentryComponent)
      return t.dataset.sentryComponent;
    t = t.parentNode;
  }
  return null;
}
const At = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  vl = "Sentry Logger ",
  Rr = ["debug", "info", "warn", "error", "log", "assert", "trace"],
  Rn = {};
function tt(e) {
  if (!("console" in D)) return e();
  const t = D.console,
    n = {},
    r = Object.keys(Rn);
  r.forEach((s) => {
    const i = Rn[s];
    ((n[s] = t[s]), (t[s] = i));
  });
  try {
    return e();
  } finally {
    r.forEach((s) => {
      t[s] = n[s];
    });
  }
}
function Tl() {
  let e = !1;
  const t = {
    enable: () => {
      e = !0;
    },
    disable: () => {
      e = !1;
    },
    isEnabled: () => e,
  };
  return (
    At
      ? Rr.forEach((n) => {
          t[n] = (...r) => {
            e &&
              tt(() => {
                D.console[n](`${vl}[${n}]:`, ...r);
              });
          };
        })
      : Rr.forEach((n) => {
          t[n] = () => {};
        }),
    t
  );
}
const m = Tl(),
  Il = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function wl(e) {
  return e === "http" || e === "https";
}
function Nt(e, t = !1) {
  const {
    host: n,
    path: r,
    pass: s,
    port: i,
    projectId: o,
    protocol: a,
    publicKey: c,
  } = e;
  return `${a}://${c}${t && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r && `${r}/`}${o}`;
}
function kl(e) {
  const t = Il.exec(e);
  if (!t) {
    tt(() => {
      console.error(`Invalid Sentry Dsn: ${e}`);
    });
    return;
  }
  const [n, r, s = "", i, o = "", a] = t.slice(1);
  let c = "",
    u = a;
  const l = u.split("/");
  if ((l.length > 1 && ((c = l.slice(0, -1).join("/")), (u = l.pop())), u)) {
    const d = u.match(/^\d+/);
    d && (u = d[0]);
  }
  return No({
    host: i,
    pass: s,
    path: c,
    projectId: u,
    port: o,
    protocol: n,
    publicKey: r,
  });
}
function No(e) {
  return {
    protocol: e.protocol,
    publicKey: e.publicKey || "",
    pass: e.pass || "",
    host: e.host,
    port: e.port || "",
    path: e.path || "",
    projectId: e.projectId,
  };
}
function Rl(e) {
  if (!At) return !0;
  const { port: t, projectId: n, protocol: r } = e;
  return ["protocol", "publicKey", "host", "projectId"].find((o) =>
    e[o] ? !1 : (m.error(`Invalid Sentry Dsn: ${o} missing`), !0),
  )
    ? !1
    : n.match(/^\d+$/)
      ? wl(r)
        ? t && isNaN(parseInt(t, 10))
          ? (m.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1)
          : !0
        : (m.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1)
      : (m.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1);
}
function Cl(e) {
  const t = typeof e == "string" ? kl(e) : No(e);
  if (!(!t || !Rl(t))) return t;
}
class we extends Error {
  constructor(t, n = "warn") {
    (super(t),
      (this.message = t),
      (this.name = new.target.prototype.constructor.name),
      Object.setPrototypeOf(this, new.target.prototype),
      (this.logLevel = n));
  }
}
function ee(e, t, n) {
  if (!(t in e)) return;
  const r = e[t],
    s = n(r);
  (typeof s == "function" && Do(s, r), (e[t] = s));
}
function nt(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    At && m.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function Do(e, t) {
  try {
    const n = t.prototype || {};
    ((e.prototype = t.prototype = n), nt(e, "__sentry_original__", t));
  } catch {}
}
function cs(e) {
  return e.__sentry_original__;
}
function Ml(e) {
  return Object.keys(e)
    .map((t) => `${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`)
    .join("&");
}
function Lo(e) {
  if (Ro(e))
    return { message: e.message, name: e.name, stack: e.stack, ...ri(e) };
  if (qn(e)) {
    const t = {
      type: e.type,
      target: ni(e.target),
      currentTarget: ni(e.currentTarget),
      ...ri(e),
    };
    return (
      typeof CustomEvent < "u" && Ae(e, CustomEvent) && (t.detail = e.detail),
      t
    );
  } else return e;
}
function ni(e) {
  try {
    return hl(e) ? qe(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
}
function ri(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  } else return {};
}
function xl(e, t = 40) {
  const n = Object.keys(Lo(e));
  if ((n.sort(), !n.length)) return "[object has no keys]";
  if (n[0].length >= t) return St(n[0], t);
  for (let r = n.length; r > 0; r--) {
    const s = n.slice(0, r).join(", ");
    if (!(s.length > t)) return r === n.length ? s : St(s, t);
  }
  return "";
}
function ae(e) {
  return Cr(e, new Map());
}
function Cr(e, t) {
  if (Ol(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const r = {};
    t.set(e, r);
    for (const s of Object.keys(e)) typeof e[s] < "u" && (r[s] = Cr(e[s], t));
    return r;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const r = [];
    return (
      t.set(e, r),
      e.forEach((s) => {
        r.push(Cr(s, t));
      }),
      r
    );
  }
  return e;
}
function Ol(e) {
  if (!vt(e)) return !1;
  try {
    const t = Object.getPrototypeOf(e).constructor.name;
    return !t || t === "Object";
  } catch {
    return !0;
  }
}
const Po = 50,
  si = /\(error: (.*)\)/,
  ii = /captureMessage|captureException/;
function Fo(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0) => {
    const s = [],
      i = n.split(`
`);
    for (let o = r; o < i.length; o++) {
      const a = i[o];
      if (a.length > 1024) continue;
      const c = si.test(a) ? a.replace(si, "$1") : a;
      if (!c.match(/\S*Error: /)) {
        for (const u of t) {
          const l = u(c);
          if (l) {
            s.push(l);
            break;
          }
        }
        if (s.length >= Po) break;
      }
    }
    return Nl(s);
  };
}
function Al(e) {
  return Array.isArray(e) ? Fo(...e) : e;
}
function Nl(e) {
  if (!e.length) return [];
  const t = Array.from(e);
  return (
    /sentryWrapped/.test(t[t.length - 1].function || "") && t.pop(),
    t.reverse(),
    ii.test(t[t.length - 1].function || "") &&
      (t.pop(), ii.test(t[t.length - 1].function || "") && t.pop()),
    t
      .slice(0, Po)
      .map((n) => ({
        ...n,
        filename: n.filename || t[t.length - 1].filename,
        function: n.function || "?",
      }))
  );
}
const pr = "<anonymous>";
function Ne(e) {
  try {
    return !e || typeof e != "function" ? pr : e.name || pr;
  } catch {
    return pr;
  }
}
const kn = {},
  oi = {};
function st(e, t) {
  ((kn[e] = kn[e] || []), kn[e].push(t));
}
function it(e, t) {
  oi[e] || (t(), (oi[e] = !0));
}
function be(e, t) {
  const n = e && kn[e];
  if (n)
    for (const r of n)
      try {
        r(t);
      } catch (s) {
        At &&
          m.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Ne(r)}
Error:`,
            s,
          );
      }
}
function Dl(e) {
  const t = "console";
  (st(t, e), it(t, Ll));
}
function Ll() {
  "console" in D &&
    Rr.forEach(function (e) {
      e in D.console &&
        ee(D.console, e, function (t) {
          return (
            (Rn[e] = t),
            function (...n) {
              be("console", { args: n, level: e });
              const s = Rn[e];
              s && s.apply(D.console, n);
            }
          );
        });
    });
}
function V() {
  const e = D,
    t = e.crypto || e.msCrypto;
  let n = () => Math.random() * 16;
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t &&
      t.getRandomValues &&
      (n = () => {
        const r = new Uint8Array(1);
        return (t.getRandomValues(r), r[0]);
      });
  } catch {}
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) =>
    (r ^ ((n() & 15) >> (r / 4))).toString(16),
  );
}
function Bo(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function He(e) {
  const { message: t, event_id: n } = e;
  if (t) return t;
  const r = Bo(e);
  return r
    ? r.type && r.value
      ? `${r.type}: ${r.value}`
      : r.type || r.value || n || "<unknown>"
    : n || "<unknown>";
}
function Mr(e, t, n) {
  const r = (e.exception = e.exception || {}),
    s = (r.values = r.values || []),
    i = (s[0] = s[0] || {});
  (i.value || (i.value = t || ""), i.type || (i.type = "Error"));
}
function Vt(e, t) {
  const n = Bo(e);
  if (!n) return;
  const r = { type: "generic", handled: !0 },
    s = n.mechanism;
  if (((n.mechanism = { ...r, ...s, ...t }), t && "data" in t)) {
    const i = { ...(s && s.data), ...t.data };
    n.mechanism.data = i;
  }
}
function ai(e) {
  if (e && e.__sentry_captured__) return !0;
  try {
    nt(e, "__sentry_captured__", !0);
  } catch {}
  return !1;
}
function $o(e) {
  return Array.isArray(e) ? e : [e];
}
const dt = D,
  Pl = 1e3;
let ci, xr, Or;
function Ho(e) {
  (st("dom", e), it("dom", Fl));
}
function Fl() {
  if (!dt.document) return;
  const e = be.bind(null, "dom"),
    t = ui(e, !0);
  (dt.document.addEventListener("click", t, !1),
    dt.document.addEventListener("keypress", t, !1),
    ["EventTarget", "Node"].forEach((n) => {
      const r = dt[n] && dt[n].prototype;
      !r ||
        !r.hasOwnProperty ||
        !r.hasOwnProperty("addEventListener") ||
        (ee(r, "addEventListener", function (s) {
          return function (i, o, a) {
            if (i === "click" || i == "keypress")
              try {
                const c = this,
                  u = (c.__sentry_instrumentation_handlers__ =
                    c.__sentry_instrumentation_handlers__ || {}),
                  l = (u[i] = u[i] || { refCount: 0 });
                if (!l.handler) {
                  const d = ui(e);
                  ((l.handler = d), s.call(this, i, d, a));
                }
                l.refCount++;
              } catch {}
            return s.call(this, i, o, a);
          };
        }),
        ee(r, "removeEventListener", function (s) {
          return function (i, o, a) {
            if (i === "click" || i == "keypress")
              try {
                const c = this,
                  u = c.__sentry_instrumentation_handlers__ || {},
                  l = u[i];
                l &&
                  (l.refCount--,
                  l.refCount <= 0 &&
                    (s.call(this, i, l.handler, a),
                    (l.handler = void 0),
                    delete u[i]),
                  Object.keys(u).length === 0 &&
                    delete c.__sentry_instrumentation_handlers__);
              } catch {}
            return s.call(this, i, o, a);
          };
        }));
    }));
}
function Bl(e) {
  if (e.type !== xr) return !1;
  try {
    if (!e.target || e.target._sentryId !== Or) return !1;
  } catch {}
  return !0;
}
function $l(e, t) {
  return e !== "keypress"
    ? !1
    : !t || !t.tagName
      ? !0
      : !(
          t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable
        );
}
function ui(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const r = Hl(n);
    if ($l(n.type, r)) return;
    (nt(n, "_sentryCaptured", !0),
      r && !r._sentryId && nt(r, "_sentryId", V()));
    const s = n.type === "keypress" ? "input" : n.type;
    (Bl(n) ||
      (e({ event: n, name: s, global: t }),
      (xr = n.type),
      (Or = r ? r._sentryId : void 0)),
      clearTimeout(ci),
      (ci = dt.setTimeout(() => {
        ((Or = void 0), (xr = void 0));
      }, Pl)));
  };
}
function Hl(e) {
  try {
    return e.target;
  } catch {
    return null;
  }
}
const Ar = as();
function Uo() {
  if (!("fetch" in Ar)) return !1;
  try {
    return (
      new Headers(),
      new Request("http://www.example.com"),
      new Response(),
      !0
    );
  } catch {
    return !1;
  }
}
function Nr(e) {
  return (
    e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
  );
}
function Ul() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!Uo()) return !1;
  if (Nr(Ar.fetch)) return !0;
  let e = !1;
  const t = Ar.document;
  if (t && typeof t.createElement == "function")
    try {
      const n = t.createElement("iframe");
      ((n.hidden = !0),
        t.head.appendChild(n),
        n.contentWindow &&
          n.contentWindow.fetch &&
          (e = Nr(n.contentWindow.fetch)),
        t.head.removeChild(n));
    } catch (n) {
      At &&
        m.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n,
        );
    }
  return e;
}
function us(e) {
  const t = "fetch";
  (st(t, e), it(t, zl));
}
function zl() {
  Ul() &&
    ee(D, "fetch", function (e) {
      return function (...t) {
        const { method: n, url: r } = jl(t),
          s = {
            args: t,
            fetchData: { method: n, url: r },
            startTimestamp: Date.now(),
          };
        return (
          be("fetch", { ...s }),
          e.apply(D, t).then(
            (i) => {
              const o = { ...s, endTimestamp: Date.now(), response: i };
              return (be("fetch", o), i);
            },
            (i) => {
              const o = { ...s, endTimestamp: Date.now(), error: i };
              throw (be("fetch", o), i);
            },
          )
        );
      };
    });
}
function Dr(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function li(e) {
  return typeof e == "string"
    ? e
    : e
      ? Dr(e, "url")
        ? e.url
        : e.toString
          ? e.toString()
          : ""
      : "";
}
function jl(e) {
  if (e.length === 0) return { method: "GET", url: "" };
  if (e.length === 2) {
    const [n, r] = e;
    return {
      url: li(n),
      method: Dr(r, "method") ? String(r.method).toUpperCase() : "GET",
    };
  }
  const t = e[0];
  return {
    url: li(t),
    method: Dr(t, "method") ? String(t.method).toUpperCase() : "GET",
  };
}
let pn = null;
function zo(e) {
  const t = "error";
  (st(t, e), it(t, Wl));
}
function Wl() {
  ((pn = D.onerror),
    (D.onerror = function (e, t, n, r, s) {
      return (
        be("error", { column: r, error: s, line: n, msg: e, url: t }),
        pn && !pn.__SENTRY_LOADER__ ? pn.apply(this, arguments) : !1
      );
    }),
    (D.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
let mn = null;
function jo(e) {
  const t = "unhandledrejection";
  (st(t, e), it(t, ql));
}
function ql() {
  ((mn = D.onunhandledrejection),
    (D.onunhandledrejection = function (e) {
      return (
        be("unhandledrejection", e),
        mn && !mn.__SENTRY_LOADER__ ? mn.apply(this, arguments) : !0
      );
    }),
    (D.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
const gn = as();
function Gl() {
  const e = gn.chrome,
    t = e && e.app && e.app.runtime,
    n = "history" in gn && !!gn.history.pushState && !!gn.history.replaceState;
  return !t && n;
}
const Ft = D;
let _n;
function Qt(e) {
  const t = "history";
  (st(t, e), it(t, Yl));
}
function Yl() {
  if (!Gl()) return;
  const e = Ft.onpopstate;
  Ft.onpopstate = function (...n) {
    const r = Ft.location.href,
      s = _n;
    if (((_n = r), be("history", { from: s, to: r }), e))
      try {
        return e.apply(this, n);
      } catch {}
  };
  function t(n) {
    return function (...r) {
      const s = r.length > 2 ? r[2] : void 0;
      if (s) {
        const i = _n,
          o = String(s);
        ((_n = o), be("history", { from: i, to: o }));
      }
      return n.apply(this, r);
    };
  }
  (ee(Ft.history, "pushState", t), ee(Ft.history, "replaceState", t));
}
const Vl = D,
  Ue = "__sentry_xhr_v3__";
function ls(e) {
  (st("xhr", e), it("xhr", Xl));
}
function Xl() {
  if (!Vl.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  (ee(e, "open", function (t) {
    return function (...n) {
      const r = Date.now(),
        s = Re(n[0]) ? n[0].toUpperCase() : void 0,
        i = Kl(n[1]);
      if (!s || !i) return t.apply(this, n);
      ((this[Ue] = { method: s, url: i, request_headers: {} }),
        s === "POST" &&
          i.match(/sentry_key/) &&
          (this.__sentry_own_request__ = !0));
      const o = () => {
        const a = this[Ue];
        if (a && this.readyState === 4) {
          try {
            a.status_code = this.status;
          } catch {}
          const c = {
            args: [s, i],
            endTimestamp: Date.now(),
            startTimestamp: r,
            xhr: this,
          };
          be("xhr", c);
        }
      };
      return (
        "onreadystatechange" in this &&
        typeof this.onreadystatechange == "function"
          ? ee(this, "onreadystatechange", function (a) {
              return function (...c) {
                return (o(), a.apply(this, c));
              };
            })
          : this.addEventListener("readystatechange", o),
        ee(this, "setRequestHeader", function (a) {
          return function (...c) {
            const [u, l] = c,
              d = this[Ue];
            return (
              d && Re(u) && Re(l) && (d.request_headers[u.toLowerCase()] = l),
              a.apply(this, c)
            );
          };
        }),
        t.apply(this, n)
      );
    };
  }),
    ee(e, "send", function (t) {
      return function (...n) {
        const r = this[Ue];
        if (!r) return t.apply(this, n);
        n[0] !== void 0 && (r.body = n[0]);
        const s = {
          args: [r.method, r.url],
          startTimestamp: Date.now(),
          xhr: this,
        };
        return (be("xhr", s), t.apply(this, n));
      };
    }));
}
function Kl(e) {
  if (Re(e)) return e;
  try {
    return e.toString();
  } catch {}
}
function Jl() {
  return typeof __SENTRY_BROWSER_BUNDLE__ < "u" && !!__SENTRY_BROWSER_BUNDLE__;
}
function Zl() {
  return "npm";
}
function Ql() {
  return (
    !Jl() &&
    Object.prototype.toString.call(typeof process < "u" ? process : 0) ===
      "[object process]"
  );
}
function di() {
  return typeof window < "u" && (!Ql() || ed());
}
function ed() {
  return D.process !== void 0 && D.process.type === "renderer";
}
function td() {
  const e = typeof WeakSet == "function",
    t = e ? new WeakSet() : [];
  function n(s) {
    if (e) return t.has(s) ? !0 : (t.add(s), !1);
    for (let i = 0; i < t.length; i++) if (t[i] === s) return !0;
    return (t.push(s), !1);
  }
  function r(s) {
    if (e) t.delete(s);
    else
      for (let i = 0; i < t.length; i++)
        if (t[i] === s) {
          t.splice(i, 1);
          break;
        }
  }
  return [n, r];
}
function Te(e, t = 100, n = 1 / 0) {
  try {
    return Lr("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function Wo(e, t = 3, n = 100 * 1024) {
  const r = Te(e, t);
  return id(r) > n ? Wo(e, t - 1, n) : r;
}
function Lr(e, t, n = 1 / 0, r = 1 / 0, s = td()) {
  const [i, o] = s;
  if (
    t == null ||
    (["number", "boolean", "string"].includes(typeof t) && !Co(t))
  )
    return t;
  const a = nd(e, t);
  if (!a.startsWith("[object ")) return a;
  if (t.__sentry_skip_normalization__) return t;
  const c =
    typeof t.__sentry_override_normalization_depth__ == "number"
      ? t.__sentry_override_normalization_depth__
      : n;
  if (c === 0) return a.replace("object ", "");
  if (i(t)) return "[Circular ~]";
  const u = t;
  if (u && typeof u.toJSON == "function")
    try {
      const h = u.toJSON();
      return Lr("", h, c - 1, r, s);
    } catch {}
  const l = Array.isArray(t) ? [] : {};
  let d = 0;
  const f = Lo(t);
  for (const h in f) {
    if (!Object.prototype.hasOwnProperty.call(f, h)) continue;
    if (d >= r) {
      l[h] = "[MaxProperties ~]";
      break;
    }
    const p = f[h];
    ((l[h] = Lr(h, p, c - 1, r, s)), d++);
  }
  return (o(t), l);
}
function nd(e, t) {
  try {
    if (e === "domain" && t && typeof t == "object" && t._events)
      return "[Domain]";
    if (e === "domainEmitter") return "[DomainEmitter]";
    if (typeof global < "u" && t === global) return "[Global]";
    if (typeof window < "u" && t === window) return "[Window]";
    if (typeof document < "u" && t === document) return "[Document]";
    if (Mo(t)) return "[VueViewModel]";
    if (ml(t)) return "[SyntheticEvent]";
    if (typeof t == "number" && t !== t) return "[NaN]";
    if (typeof t == "function") return `[Function: ${Ne(t)}]`;
    if (typeof t == "symbol") return `[${String(t)}]`;
    if (typeof t == "bigint") return `[BigInt: ${String(t)}]`;
    const n = rd(t);
    return /^HTML(\w*)Element$/.test(n)
      ? `[HTMLElement: ${n}]`
      : `[object ${n}]`;
  } catch (n) {
    return `**non-serializable** (${n})`;
  }
}
function rd(e) {
  const t = Object.getPrototypeOf(e);
  return t ? t.constructor.name : "null prototype";
}
function sd(e) {
  return ~-encodeURI(e).split(/%..|./).length;
}
function id(e) {
  return sd(JSON.stringify(e));
}
var Me;
(function (e) {
  e[(e.PENDING = 0)] = "PENDING";
  const n = 1;
  e[(e.RESOLVED = n)] = "RESOLVED";
  const r = 2;
  e[(e.REJECTED = r)] = "REJECTED";
})(Me || (Me = {}));
function Tt(e) {
  return new he((t) => {
    t(e);
  });
}
function ds(e) {
  return new he((t, n) => {
    n(e);
  });
}
class he {
  constructor(t) {
    (he.prototype.__init.call(this),
      he.prototype.__init2.call(this),
      he.prototype.__init3.call(this),
      he.prototype.__init4.call(this),
      (this._state = Me.PENDING),
      (this._handlers = []));
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(t, n) {
    return new he((r, s) => {
      (this._handlers.push([
        !1,
        (i) => {
          if (!t) r(i);
          else
            try {
              r(t(i));
            } catch (o) {
              s(o);
            }
        },
        (i) => {
          if (!n) s(i);
          else
            try {
              r(n(i));
            } catch (o) {
              s(o);
            }
        },
      ]),
        this._executeHandlers());
    });
  }
  catch(t) {
    return this.then((n) => n, t);
  }
  finally(t) {
    return new he((n, r) => {
      let s, i;
      return this.then(
        (o) => {
          ((i = !1), (s = o), t && t());
        },
        (o) => {
          ((i = !0), (s = o), t && t());
        },
      ).then(() => {
        if (i) {
          r(s);
          return;
        }
        n(s);
      });
    });
  }
  __init() {
    this._resolve = (t) => {
      this._setResult(Me.RESOLVED, t);
    };
  }
  __init2() {
    this._reject = (t) => {
      this._setResult(Me.REJECTED, t);
    };
  }
  __init3() {
    this._setResult = (t, n) => {
      if (this._state === Me.PENDING) {
        if (Gn(n)) {
          n.then(this._resolve, this._reject);
          return;
        }
        ((this._state = t), (this._value = n), this._executeHandlers());
      }
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === Me.PENDING) return;
      const t = this._handlers.slice();
      ((this._handlers = []),
        t.forEach((n) => {
          n[0] ||
            (this._state === Me.RESOLVED && n[1](this._value),
            this._state === Me.REJECTED && n[2](this._value),
            (n[0] = !0));
        }));
    };
  }
}
function od(e) {
  const t = [];
  function n() {
    return e === void 0 || t.length < e;
  }
  function r(o) {
    return t.splice(t.indexOf(o), 1)[0];
  }
  function s(o) {
    if (!n())
      return ds(new we("Not adding Promise because buffer limit was reached."));
    const a = o();
    return (
      t.indexOf(a) === -1 && t.push(a),
      a.then(() => r(a)).then(null, () => r(a).then(null, () => {})),
      a
    );
  }
  function i(o) {
    return new he((a, c) => {
      let u = t.length;
      if (!u) return a(!0);
      const l = setTimeout(() => {
        o && o > 0 && a(!1);
      }, o);
      t.forEach((d) => {
        Tt(d).then(() => {
          --u || (clearTimeout(l), a(!0));
        }, c);
      });
    });
  }
  return { $: t, add: s, drain: i };
}
function et(e) {
  if (!e) return {};
  const t = e.match(
    /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
  );
  if (!t) return {};
  const n = t[6] || "",
    r = t[8] || "";
  return {
    host: t[4],
    path: t[5],
    protocol: t[2],
    search: n,
    hash: r,
    relative: t[5] + n + r,
  };
}
const ad = ["fatal", "error", "warning", "log", "info", "debug"];
function cd(e) {
  return e === "warn" ? "warning" : ad.includes(e) ? e : "log";
}
const qo = 1e3;
function en() {
  return Date.now() / qo;
}
function ud() {
  const { performance: e } = D;
  if (!e || !e.now) return en;
  const t = Date.now() - e.now(),
    n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / qo;
}
const tn = ud(),
  ce = (() => {
    const { performance: e } = D;
    if (!e || !e.now) return;
    const t = 3600 * 1e3,
      n = e.now(),
      r = Date.now(),
      s = e.timeOrigin ? Math.abs(e.timeOrigin + n - r) : t,
      i = s < t,
      o = e.timing && e.timing.navigationStart,
      c = typeof o == "number" ? Math.abs(o + n - r) : t,
      u = c < t;
    return i || u ? (s <= c ? e.timeOrigin : o) : r;
  })(),
  Pr = "baggage",
  Go = "sentry-",
  ld = /^sentry-/,
  dd = 8192;
function fd(e) {
  if (!Re(e) && !Array.isArray(e)) return;
  let t = {};
  if (Array.isArray(e))
    t = e.reduce((r, s) => {
      const i = fi(s);
      for (const o of Object.keys(i)) r[o] = i[o];
      return r;
    }, {});
  else {
    if (!e) return;
    t = fi(e);
  }
  const n = Object.entries(t).reduce((r, [s, i]) => {
    if (s.match(ld)) {
      const o = s.slice(Go.length);
      r[o] = i;
    }
    return r;
  }, {});
  if (Object.keys(n).length > 0) return n;
}
function Yo(e) {
  if (!e) return;
  const t = Object.entries(e).reduce(
    (n, [r, s]) => (s && (n[`${Go}${r}`] = s), n),
    {},
  );
  return hd(t);
}
function fi(e) {
  return e
    .split(",")
    .map((t) => t.split("=").map((n) => decodeURIComponent(n.trim())))
    .reduce((t, [n, r]) => ((t[n] = r), t), {});
}
function hd(e) {
  if (Object.keys(e).length !== 0)
    return Object.entries(e).reduce((t, [n, r], s) => {
      const i = `${encodeURIComponent(n)}=${encodeURIComponent(r)}`,
        o = s === 0 ? i : `${t},${i}`;
      return o.length > dd
        ? (At &&
            m.warn(
              `Not adding key: ${n} with val: ${r} to baggage header due to exceeding baggage size limits.`,
            ),
          t)
        : o;
    }, "");
}
const pd = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$",
);
function md(e) {
  if (!e) return;
  const t = e.match(pd);
  if (!t) return;
  let n;
  return (
    t[3] === "1" ? (n = !0) : t[3] === "0" && (n = !1),
    { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
  );
}
function Vo(e, t) {
  const n = md(e),
    r = fd(t),
    { traceId: s, parentSpanId: i, parentSampled: o } = n || {};
  return n
    ? {
        traceId: s || V(),
        parentSpanId: i || V().substring(16),
        spanId: V().substring(16),
        sampled: o,
        dsc: r || {},
      }
    : { traceId: s || V(), spanId: V().substring(16) };
}
function fs(e = V(), t = V().substring(16), n) {
  let r = "";
  return (n !== void 0 && (r = n ? "-1" : "-0"), `${e}-${t}${r}`);
}
function Ve(e, t = []) {
  return [e, t];
}
function gd(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function hi(e, t) {
  const n = e[1];
  for (const r of n) {
    const s = r[0].type;
    if (t(r, s)) return !0;
  }
  return !1;
}
function Fr(e, t) {
  return (t || new TextEncoder()).encode(e);
}
function _d(e, t) {
  const [n, r] = e;
  let s = JSON.stringify(n);
  function i(o) {
    typeof s == "string"
      ? (s = typeof o == "string" ? s + o : [Fr(s, t), o])
      : s.push(typeof o == "string" ? Fr(o, t) : o);
  }
  for (const o of r) {
    const [a, c] = o;
    if (
      (i(`
${JSON.stringify(a)}
`),
      typeof c == "string" || c instanceof Uint8Array)
    )
      i(c);
    else {
      let u;
      try {
        u = JSON.stringify(c);
      } catch {
        u = JSON.stringify(Te(c));
      }
      i(u);
    }
  }
  return typeof s == "string" ? s : yd(s);
}
function yd(e) {
  const t = e.reduce((s, i) => s + i.length, 0),
    n = new Uint8Array(t);
  let r = 0;
  for (const s of e) (n.set(s, r), (r += s.length));
  return n;
}
function Sd(e, t) {
  const n = typeof e.data == "string" ? Fr(e.data, t) : e.data;
  return [
    ae({
      type: "attachment",
      length: n.length,
      filename: e.filename,
      content_type: e.contentType,
      attachment_type: e.attachmentType,
    }),
    n,
  ];
}
const bd = {
  session: "session",
  sessions: "session",
  attachment: "attachment",
  transaction: "transaction",
  event: "error",
  client_report: "internal",
  user_report: "default",
  profile: "profile",
  replay_event: "replay",
  replay_recording: "replay",
  check_in: "monitor",
  feedback: "feedback",
  span: "span",
  statsd: "metric_bucket",
};
function pi(e) {
  return bd[e];
}
function hs(e) {
  if (!e || !e.sdk) return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function Xo(e, t, n, r) {
  const s =
    e.sdkProcessingMetadata && e.sdkProcessingMetadata.dynamicSamplingContext;
  return {
    event_id: e.event_id,
    sent_at: new Date().toISOString(),
    ...(t && { sdk: t }),
    ...(!!n && r && { dsn: Nt(r) }),
    ...(s && { trace: ae({ ...s }) }),
  };
}
function Ed(e, t, n) {
  const r = [
    { type: "client_report" },
    { timestamp: en(), discarded_events: e },
  ];
  return Ve(t ? { dsn: t } : {}, [r]);
}
const vd = 60 * 1e3;
function Td(e, t = Date.now()) {
  const n = parseInt(`${e}`, 10);
  if (!isNaN(n)) return n * 1e3;
  const r = Date.parse(`${e}`);
  return isNaN(r) ? vd : r - t;
}
function Id(e, t) {
  return e[t] || e.all || 0;
}
function Ko(e, t, n = Date.now()) {
  return Id(e, t) > n;
}
function Jo(e, { statusCode: t, headers: n }, r = Date.now()) {
  const s = { ...e },
    i = n && n["x-sentry-rate-limits"],
    o = n && n["retry-after"];
  if (i)
    for (const a of i.trim().split(",")) {
      const [c, u, , , l] = a.split(":", 5),
        d = parseInt(c, 10),
        f = (isNaN(d) ? 60 : d) * 1e3;
      if (!u) s.all = r + f;
      else
        for (const h of u.split(";"))
          h === "metric_bucket"
            ? (!l || l.split(";").includes("custom")) && (s[h] = r + f)
            : (s[h] = r + f);
    }
  else o ? (s.all = r + Td(o, r)) : t === 429 && (s.all = r + 60 * 1e3);
  return s;
}
function wd(e, t) {
  return e ?? t();
}
function mr(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length;) {
    const s = e[r],
      i = e[r + 1];
    if (
      ((r += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = i(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = i((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
const v = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  Yn = "production";
function ps() {
  return xo("globalEventProcessors", () => []);
}
function kd(e) {
  ps().push(e);
}
function Cn(e, t, n, r = 0) {
  return new he((s, i) => {
    const o = e[r];
    if (t === null || typeof o != "function") s(t);
    else {
      const a = o({ ...t }, n);
      (v &&
        o.id &&
        a === null &&
        m.log(`Event processor "${o.id}" dropped event`),
        Gn(a)
          ? a.then((c) => Cn(e, c, n, r + 1).then(s)).then(null, i)
          : Cn(e, a, n, r + 1)
              .then(s)
              .then(null, i));
    }
  });
}
function Zo(e) {
  const t = tn(),
    n = {
      sid: V(),
      init: !0,
      timestamp: t,
      started: t,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: !1,
      toJSON: () => Rd(n),
    };
  return (e && rt(n, e), n);
}
function rt(e, t = {}) {
  if (
    (t.user &&
      (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
      !e.did &&
        !t.did &&
        (e.did = t.user.id || t.user.email || t.user.username)),
    (e.timestamp = t.timestamp || tn()),
    t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
    t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
    t.sid && (e.sid = t.sid.length === 32 ? t.sid : V()),
    t.init !== void 0 && (e.init = t.init),
    !e.did && t.did && (e.did = `${t.did}`),
    typeof t.started == "number" && (e.started = t.started),
    e.ignoreDuration)
  )
    e.duration = void 0;
  else if (typeof t.duration == "number") e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  (t.release && (e.release = t.release),
    t.environment && (e.environment = t.environment),
    !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
    !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
    typeof t.errors == "number" && (e.errors = t.errors),
    t.status && (e.status = t.status));
}
function Qo(e, t) {
  let n = {};
  (e.status === "ok" && (n = { status: "exited" }), rt(e, n));
}
function Rd(e) {
  return ae({
    sid: `${e.sid}`,
    init: e.init,
    started: new Date(e.started * 1e3).toISOString(),
    timestamp: new Date(e.timestamp * 1e3).toISOString(),
    status: e.status,
    errors: e.errors,
    did:
      typeof e.did == "number" || typeof e.did == "string"
        ? `${e.did}`
        : void 0,
    duration: e.duration,
    abnormal_mechanism: e.abnormal_mechanism,
    attrs: {
      release: e.release,
      environment: e.environment,
      ip_address: e.ipAddress,
      user_agent: e.userAgent,
    },
  });
}
const Cd = 0,
  ea = 1;
function ms(e) {
  const { spanId: t, traceId: n } = e.spanContext(),
    { data: r, op: s, parent_span_id: i, status: o, tags: a, origin: c } = K(e);
  return ae({
    data: r,
    op: s,
    parent_span_id: i,
    span_id: t,
    status: o,
    tags: a,
    trace_id: n,
    origin: c,
  });
}
function Vn(e) {
  const { traceId: t, spanId: n } = e.spanContext(),
    r = gs(e);
  return fs(t, n, r);
}
function Xn(e) {
  return typeof e == "number"
    ? mi(e)
    : Array.isArray(e)
      ? e[0] + e[1] / 1e9
      : e instanceof Date
        ? mi(e.getTime())
        : tn();
}
function mi(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function K(e) {
  return Md(e)
    ? e.getSpanJSON()
    : typeof e.toJSON == "function"
      ? e.toJSON()
      : {};
}
function Md(e) {
  return typeof e.getSpanJSON == "function";
}
function gs(e) {
  const { traceFlags: t } = e.spanContext();
  return !!(t & ea);
}
function ta(e, t, n, r, s, i) {
  const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = e,
    c = {
      ...t,
      event_id: t.event_id || n.event_id || V(),
      timestamp: t.timestamp || en(),
    },
    u = n.integrations || e.integrations.map((y) => y.name);
  (xd(c, e), Nd(c, u), t.type === void 0 && Od(c, e.stackParser));
  const l = Ld(r, n.captureContext);
  n.mechanism && Vt(c, n.mechanism);
  const d = s && s.getEventProcessors ? s.getEventProcessors() : [],
    f = qd().getScopeData();
  if (i) {
    const y = i.getScopeData();
    Si(f, y);
  }
  if (l) {
    const y = l.getScopeData();
    Si(f, y);
  }
  const h = [...(n.attachments || []), ...f.attachments];
  (h.length && (n.attachments = h), ia(c, f));
  const p = [...d, ...ps(), ...f.eventProcessors];
  return Cn(p, c, n).then(
    (y) => (y && Ad(y), typeof o == "number" && o > 0 ? Dd(y, o, a) : y),
  );
}
function xd(e, t) {
  const { environment: n, release: r, dist: s, maxValueLength: i = 250 } = t;
  ("environment" in e || (e.environment = "environment" in t ? n : Yn),
    e.release === void 0 && r !== void 0 && (e.release = r),
    e.dist === void 0 && s !== void 0 && (e.dist = s),
    e.message && (e.message = St(e.message, i)));
  const o = e.exception && e.exception.values && e.exception.values[0];
  o && o.value && (o.value = St(o.value, i));
  const a = e.request;
  a && a.url && (a.url = St(a.url, i));
}
const gi = new WeakMap();
function Od(e, t) {
  const n = D._sentryDebugIds;
  if (!n) return;
  let r;
  const s = gi.get(t);
  s ? (r = s) : ((r = new Map()), gi.set(t, r));
  const i = Object.keys(n).reduce((o, a) => {
    let c;
    const u = r.get(a);
    u ? (c = u) : ((c = t(a)), r.set(a, c));
    for (let l = c.length - 1; l >= 0; l--) {
      const d = c[l];
      if (d.filename) {
        o[d.filename] = n[a];
        break;
      }
    }
    return o;
  }, {});
  try {
    e.exception.values.forEach((o) => {
      o.stacktrace.frames.forEach((a) => {
        a.filename && (a.debug_id = i[a.filename]);
      });
    });
  } catch {}
}
function Ad(e) {
  const t = {};
  try {
    e.exception.values.forEach((r) => {
      r.stacktrace.frames.forEach((s) => {
        s.debug_id &&
          (s.abs_path
            ? (t[s.abs_path] = s.debug_id)
            : s.filename && (t[s.filename] = s.debug_id),
          delete s.debug_id);
      });
    });
  } catch {}
  if (Object.keys(t).length === 0) return;
  ((e.debug_meta = e.debug_meta || {}),
    (e.debug_meta.images = e.debug_meta.images || []));
  const n = e.debug_meta.images;
  Object.keys(t).forEach((r) => {
    n.push({ type: "sourcemap", code_file: r, debug_id: t[r] });
  });
}
function Nd(e, t) {
  t.length > 0 &&
    ((e.sdk = e.sdk || {}),
    (e.sdk.integrations = [...(e.sdk.integrations || []), ...t]));
}
function Dd(e, t, n) {
  if (!e) return null;
  const r = {
    ...e,
    ...(e.breadcrumbs && {
      breadcrumbs: e.breadcrumbs.map((s) => ({
        ...s,
        ...(s.data && { data: Te(s.data, t, n) }),
      })),
    }),
    ...(e.user && { user: Te(e.user, t, n) }),
    ...(e.contexts && { contexts: Te(e.contexts, t, n) }),
    ...(e.extra && { extra: Te(e.extra, t, n) }),
  };
  return (
    e.contexts &&
      e.contexts.trace &&
      r.contexts &&
      ((r.contexts.trace = e.contexts.trace),
      e.contexts.trace.data &&
        (r.contexts.trace.data = Te(e.contexts.trace.data, t, n))),
    e.spans &&
      (r.spans = e.spans.map((s) => {
        const i = K(s).data;
        return (i && (s.data = Te(i, t, n)), s);
      })),
    r
  );
}
function Ld(e, t) {
  if (!t) return e;
  const n = e ? e.clone() : new ze();
  return (n.update(t), n);
}
function _s(e, t) {
  return re().captureException(e, void 0);
}
function na(e, t) {
  return re().captureEvent(e, t);
}
function Ge(e, t) {
  re().addBreadcrumb(e, t);
}
function Pd(e, t) {
  re().setContext(e, t);
}
function Fd(e, t) {
  re().setTag(e, t);
}
function Bd(...e) {
  const t = re();
  if (e.length === 2) {
    const [n, r] = e;
    return n
      ? t.withScope(() => ((t.getStackTop().scope = n), r(n)))
      : t.withScope(r);
  }
  return t.withScope(e[0]);
}
function B() {
  return re().getClient();
}
function de() {
  return re().getScope();
}
function _i(e) {
  const t = B(),
    n = Xe(),
    r = de(),
    { release: s, environment: i = Yn } = (t && t.getOptions()) || {},
    { userAgent: o } = D.navigator || {},
    a = Zo({
      release: s,
      environment: i,
      user: r.getUser() || n.getUser(),
      ...(o && { userAgent: o }),
      ...e,
    }),
    c = n.getSession();
  return (
    c && c.status === "ok" && rt(c, { status: "exited" }),
    ra(),
    n.setSession(a),
    r.setSession(a),
    a
  );
}
function ra() {
  const e = Xe(),
    t = de(),
    n = t.getSession() || e.getSession();
  (n && Qo(n), sa(), e.setSession(), t.setSession());
}
function sa() {
  const e = Xe(),
    t = de(),
    n = B(),
    r = t.getSession() || e.getSession();
  r && n && n.captureSession && n.captureSession(r);
}
function yi(e = !1) {
  if (e) {
    ra();
    return;
  }
  sa();
}
function Mn(e) {
  return e.transaction;
}
function Kn(e, t, n) {
  const r = t.getOptions(),
    { publicKey: s } = t.getDsn() || {},
    { segment: i } = (n && n.getUser()) || {},
    o = ae({
      environment: r.environment || Yn,
      release: r.release,
      user_segment: i,
      public_key: s,
      trace_id: e,
    });
  return (t.emit && t.emit("createDsc", o), o);
}
function It(e) {
  const t = B();
  if (!t) return {};
  const n = Kn(K(e).trace_id || "", t, de()),
    r = Mn(e);
  if (!r) return n;
  const s = r && r._frozenDynamicSamplingContext;
  if (s) return s;
  const { sampleRate: i, source: o } = r.metadata;
  i != null && (n.sample_rate = `${i}`);
  const a = K(r);
  return (
    o && o !== "url" && (n.transaction = a.description),
    (n.sampled = String(gs(r))),
    t.emit && t.emit("createDsc", n),
    n
  );
}
function ia(e, t) {
  const {
    fingerprint: n,
    span: r,
    breadcrumbs: s,
    sdkProcessingMetadata: i,
  } = t;
  ($d(e, t), r && zd(e, r), jd(e, n), Hd(e, s), Ud(e, i));
}
function Si(e, t) {
  const {
    extra: n,
    tags: r,
    user: s,
    contexts: i,
    level: o,
    sdkProcessingMetadata: a,
    breadcrumbs: c,
    fingerprint: u,
    eventProcessors: l,
    attachments: d,
    propagationContext: f,
    transactionName: h,
    span: p,
  } = t;
  (Bt(e, "extra", n),
    Bt(e, "tags", r),
    Bt(e, "user", s),
    Bt(e, "contexts", i),
    Bt(e, "sdkProcessingMetadata", a),
    o && (e.level = o),
    h && (e.transactionName = h),
    p && (e.span = p),
    c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]),
    u.length && (e.fingerprint = [...e.fingerprint, ...u]),
    l.length && (e.eventProcessors = [...e.eventProcessors, ...l]),
    d.length && (e.attachments = [...e.attachments, ...d]),
    (e.propagationContext = { ...e.propagationContext, ...f }));
}
function Bt(e, t, n) {
  if (n && Object.keys(n).length) {
    e[t] = { ...e[t] };
    for (const r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (e[t][r] = n[r]);
  }
}
function $d(e, t) {
  const {
      extra: n,
      tags: r,
      user: s,
      contexts: i,
      level: o,
      transactionName: a,
    } = t,
    c = ae(n);
  c && Object.keys(c).length && (e.extra = { ...c, ...e.extra });
  const u = ae(r);
  u && Object.keys(u).length && (e.tags = { ...u, ...e.tags });
  const l = ae(s);
  l && Object.keys(l).length && (e.user = { ...l, ...e.user });
  const d = ae(i);
  (d && Object.keys(d).length && (e.contexts = { ...d, ...e.contexts }),
    o && (e.level = o),
    a && (e.transaction = a));
}
function Hd(e, t) {
  const n = [...(e.breadcrumbs || []), ...t];
  e.breadcrumbs = n.length ? n : void 0;
}
function Ud(e, t) {
  e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata, ...t };
}
function zd(e, t) {
  e.contexts = { trace: ms(t), ...e.contexts };
  const n = Mn(t);
  if (n) {
    e.sdkProcessingMetadata = {
      dynamicSamplingContext: It(t),
      ...e.sdkProcessingMetadata,
    };
    const r = K(n).description;
    r && (e.tags = { transaction: r, ...e.tags });
  }
}
function jd(e, t) {
  ((e.fingerprint = e.fingerprint ? $o(e.fingerprint) : []),
    t && (e.fingerprint = e.fingerprint.concat(t)),
    e.fingerprint && !e.fingerprint.length && delete e.fingerprint);
}
const Wd = 100;
let gr;
class ze {
  constructor() {
    ((this._notifyingListeners = !1),
      (this._scopeListeners = []),
      (this._eventProcessors = []),
      (this._breadcrumbs = []),
      (this._attachments = []),
      (this._user = {}),
      (this._tags = {}),
      (this._extra = {}),
      (this._contexts = {}),
      (this._sdkProcessingMetadata = {}),
      (this._propagationContext = bi()));
  }
  static clone(t) {
    return t ? t.clone() : new ze();
  }
  clone() {
    const t = new ze();
    return (
      (t._breadcrumbs = [...this._breadcrumbs]),
      (t._tags = { ...this._tags }),
      (t._extra = { ...this._extra }),
      (t._contexts = { ...this._contexts }),
      (t._user = this._user),
      (t._level = this._level),
      (t._span = this._span),
      (t._session = this._session),
      (t._transactionName = this._transactionName),
      (t._fingerprint = this._fingerprint),
      (t._eventProcessors = [...this._eventProcessors]),
      (t._requestSession = this._requestSession),
      (t._attachments = [...this._attachments]),
      (t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }),
      (t._propagationContext = { ...this._propagationContext }),
      (t._client = this._client),
      t
    );
  }
  setClient(t) {
    this._client = t;
  }
  getClient() {
    return this._client;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return (this._eventProcessors.push(t), this);
  }
  setUser(t) {
    return (
      (this._user = t || {
        email: void 0,
        id: void 0,
        ip_address: void 0,
        segment: void 0,
        username: void 0,
      }),
      this._session && rt(this._session, { user: t }),
      this._notifyScopeListeners(),
      this
    );
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return ((this._requestSession = t), this);
  }
  setTags(t) {
    return (
      (this._tags = { ...this._tags, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setTag(t, n) {
    return (
      (this._tags = { ...this._tags, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtras(t) {
    return (
      (this._extra = { ...this._extra, ...t }),
      this._notifyScopeListeners(),
      this
    );
  }
  setExtra(t, n) {
    return (
      (this._extra = { ...this._extra, [t]: n }),
      this._notifyScopeListeners(),
      this
    );
  }
  setFingerprint(t) {
    return ((this._fingerprint = t), this._notifyScopeListeners(), this);
  }
  setLevel(t) {
    return ((this._level = t), this._notifyScopeListeners(), this);
  }
  setTransactionName(t) {
    return ((this._transactionName = t), this._notifyScopeListeners(), this);
  }
  setContext(t, n) {
    return (
      n === null ? delete this._contexts[t] : (this._contexts[t] = n),
      this._notifyScopeListeners(),
      this
    );
  }
  setSpan(t) {
    return ((this._span = t), this._notifyScopeListeners(), this);
  }
  getSpan() {
    return this._span;
  }
  getTransaction() {
    const t = this._span;
    return t && t.transaction;
  }
  setSession(t) {
    return (
      t ? (this._session = t) : delete this._session,
      this._notifyScopeListeners(),
      this
    );
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    const n = typeof t == "function" ? t(this) : t;
    if (n instanceof ze) {
      const r = n.getScopeData();
      ((this._tags = { ...this._tags, ...r.tags }),
        (this._extra = { ...this._extra, ...r.extra }),
        (this._contexts = { ...this._contexts, ...r.contexts }),
        r.user && Object.keys(r.user).length && (this._user = r.user),
        r.level && (this._level = r.level),
        r.fingerprint.length && (this._fingerprint = r.fingerprint),
        n.getRequestSession() && (this._requestSession = n.getRequestSession()),
        r.propagationContext &&
          (this._propagationContext = r.propagationContext));
    } else if (vt(n)) {
      const r = t;
      ((this._tags = { ...this._tags, ...r.tags }),
        (this._extra = { ...this._extra, ...r.extra }),
        (this._contexts = { ...this._contexts, ...r.contexts }),
        r.user && (this._user = r.user),
        r.level && (this._level = r.level),
        r.fingerprint && (this._fingerprint = r.fingerprint),
        r.requestSession && (this._requestSession = r.requestSession),
        r.propagationContext &&
          (this._propagationContext = r.propagationContext));
    }
    return this;
  }
  clear() {
    return (
      (this._breadcrumbs = []),
      (this._tags = {}),
      (this._extra = {}),
      (this._user = {}),
      (this._contexts = {}),
      (this._level = void 0),
      (this._transactionName = void 0),
      (this._fingerprint = void 0),
      (this._requestSession = void 0),
      (this._span = void 0),
      (this._session = void 0),
      this._notifyScopeListeners(),
      (this._attachments = []),
      (this._propagationContext = bi()),
      this
    );
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : Wd;
    if (r <= 0) return this;
    const s = { timestamp: en(), ...t },
      i = this._breadcrumbs;
    return (
      i.push(s),
      (this._breadcrumbs = i.length > r ? i.slice(-r) : i),
      this._notifyScopeListeners(),
      this
    );
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return ((this._breadcrumbs = []), this._notifyScopeListeners(), this);
  }
  addAttachment(t) {
    return (this._attachments.push(t), this);
  }
  getAttachments() {
    return this.getScopeData().attachments;
  }
  clearAttachments() {
    return ((this._attachments = []), this);
  }
  getScopeData() {
    const {
      _breadcrumbs: t,
      _attachments: n,
      _contexts: r,
      _tags: s,
      _extra: i,
      _user: o,
      _level: a,
      _fingerprint: c,
      _eventProcessors: u,
      _propagationContext: l,
      _sdkProcessingMetadata: d,
      _transactionName: f,
      _span: h,
    } = this;
    return {
      breadcrumbs: t,
      attachments: n,
      contexts: r,
      tags: s,
      extra: i,
      user: o,
      level: a,
      fingerprint: c || [],
      eventProcessors: u,
      propagationContext: l,
      sdkProcessingMetadata: d,
      transactionName: f,
      span: h,
    };
  }
  applyToEvent(t, n = {}, r = []) {
    ia(t, this.getScopeData());
    const s = [...r, ...ps(), ...this._eventProcessors];
    return Cn(s, t, n);
  }
  setSDKProcessingMetadata(t) {
    return (
      (this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata, ...t }),
      this
    );
  }
  setPropagationContext(t) {
    return ((this._propagationContext = t), this);
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, n) {
    const r = n && n.event_id ? n.event_id : V();
    if (!this._client)
      return (
        m.warn("No client configured on scope - will not capture exception!"),
        r
      );
    const s = new Error("Sentry syntheticException");
    return (
      this._client.captureException(
        t,
        { originalException: t, syntheticException: s, ...n, event_id: r },
        this,
      ),
      r
    );
  }
  captureMessage(t, n, r) {
    const s = r && r.event_id ? r.event_id : V();
    if (!this._client)
      return (
        m.warn("No client configured on scope - will not capture message!"),
        s
      );
    const i = new Error(t);
    return (
      this._client.captureMessage(
        t,
        n,
        { originalException: t, syntheticException: i, ...r, event_id: s },
        this,
      ),
      s
    );
  }
  captureEvent(t, n) {
    const r = n && n.event_id ? n.event_id : V();
    return this._client
      ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r)
      : (m.warn("No client configured on scope - will not capture event!"), r);
  }
  _notifyScopeListeners() {
    this._notifyingListeners ||
      ((this._notifyingListeners = !0),
      this._scopeListeners.forEach((t) => {
        t(this);
      }),
      (this._notifyingListeners = !1));
  }
}
function qd() {
  return (gr || (gr = new ze()), gr);
}
function bi() {
  return { traceId: V(), spanId: V().substring(16) };
}
const Br = "7.120.4",
  oa = parseFloat(Br),
  Gd = 100;
class aa {
  constructor(t, n, r, s = oa) {
    this._version = s;
    let i;
    n ? (i = n) : ((i = new ze()), i.setClient(t));
    let o;
    (r ? (o = r) : ((o = new ze()), o.setClient(t)),
      (this._stack = [{ scope: i }]),
      t && this.bindClient(t),
      (this._isolationScope = o));
  }
  isOlderThan(t) {
    return this._version < t;
  }
  bindClient(t) {
    const n = this.getStackTop();
    ((n.client = t),
      n.scope.setClient(t),
      t && t.setupIntegrations && t.setupIntegrations());
  }
  pushScope() {
    const t = this.getScope().clone();
    return (this.getStack().push({ client: this.getClient(), scope: t }), t);
  }
  popScope() {
    return this.getStack().length <= 1 ? !1 : !!this.getStack().pop();
  }
  withScope(t) {
    const n = this.pushScope();
    let r;
    try {
      r = t(n);
    } catch (s) {
      throw (this.popScope(), s);
    }
    return Gn(r)
      ? r.then(
          (s) => (this.popScope(), s),
          (s) => {
            throw (this.popScope(), s);
          },
        )
      : (this.popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStack() {
    return this._stack;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  captureException(t, n) {
    const r = (this._lastEventId = n && n.event_id ? n.event_id : V()),
      s = new Error("Sentry syntheticException");
    return (
      this.getScope().captureException(t, {
        originalException: t,
        syntheticException: s,
        ...n,
        event_id: r,
      }),
      r
    );
  }
  captureMessage(t, n, r) {
    const s = (this._lastEventId = r && r.event_id ? r.event_id : V()),
      i = new Error(t);
    return (
      this.getScope().captureMessage(t, n, {
        originalException: t,
        syntheticException: i,
        ...r,
        event_id: s,
      }),
      s
    );
  }
  captureEvent(t, n) {
    const r = n && n.event_id ? n.event_id : V();
    return (
      t.type || (this._lastEventId = r),
      this.getScope().captureEvent(t, { ...n, event_id: r }),
      r
    );
  }
  lastEventId() {
    return this._lastEventId;
  }
  addBreadcrumb(t, n) {
    const { scope: r, client: s } = this.getStackTop();
    if (!s) return;
    const { beforeBreadcrumb: i = null, maxBreadcrumbs: o = Gd } =
      (s.getOptions && s.getOptions()) || {};
    if (o <= 0) return;
    const c = { timestamp: en(), ...t },
      u = i ? tt(() => i(c, n)) : c;
    u !== null &&
      (s.emit && s.emit("beforeAddBreadcrumb", u, n), r.addBreadcrumb(u, o));
  }
  setUser(t) {
    (this.getScope().setUser(t), this.getIsolationScope().setUser(t));
  }
  setTags(t) {
    (this.getScope().setTags(t), this.getIsolationScope().setTags(t));
  }
  setExtras(t) {
    (this.getScope().setExtras(t), this.getIsolationScope().setExtras(t));
  }
  setTag(t, n) {
    (this.getScope().setTag(t, n), this.getIsolationScope().setTag(t, n));
  }
  setExtra(t, n) {
    (this.getScope().setExtra(t, n), this.getIsolationScope().setExtra(t, n));
  }
  setContext(t, n) {
    (this.getScope().setContext(t, n),
      this.getIsolationScope().setContext(t, n));
  }
  configureScope(t) {
    const { scope: n, client: r } = this.getStackTop();
    r && t(n);
  }
  run(t) {
    const n = Ei(this);
    try {
      t(this);
    } finally {
      Ei(n);
    }
  }
  getIntegration(t) {
    const n = this.getClient();
    if (!n) return null;
    try {
      return n.getIntegration(t);
    } catch {
      return (
        v && m.warn(`Cannot retrieve integration ${t.id} from the current Hub`),
        null
      );
    }
  }
  startTransaction(t, n) {
    const r = this._callExtensionMethod("startTransaction", t, n);
    return (
      v &&
        !r &&
        (this.getClient()
          ? m.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`)
          : m.warn(
              "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'",
            )),
      r
    );
  }
  traceHeaders() {
    return this._callExtensionMethod("traceHeaders");
  }
  captureSession(t = !1) {
    if (t) return this.endSession();
    this._sendSessionUpdate();
  }
  endSession() {
    const n = this.getStackTop().scope,
      r = n.getSession();
    (r && Qo(r), this._sendSessionUpdate(), n.setSession());
  }
  startSession(t) {
    const { scope: n, client: r } = this.getStackTop(),
      { release: s, environment: i = Yn } = (r && r.getOptions()) || {},
      { userAgent: o } = D.navigator || {},
      a = Zo({
        release: s,
        environment: i,
        user: n.getUser(),
        ...(o && { userAgent: o }),
        ...t,
      }),
      c = n.getSession && n.getSession();
    return (
      c && c.status === "ok" && rt(c, { status: "exited" }),
      this.endSession(),
      n.setSession(a),
      a
    );
  }
  shouldSendDefaultPii() {
    const t = this.getClient(),
      n = t && t.getOptions();
    return !!(n && n.sendDefaultPii);
  }
  _sendSessionUpdate() {
    const { scope: t, client: n } = this.getStackTop(),
      r = t.getSession();
    r && n && n.captureSession && n.captureSession(r);
  }
  _callExtensionMethod(t, ...n) {
    const s = nn().__SENTRY__;
    if (s && s.extensions && typeof s.extensions[t] == "function")
      return s.extensions[t].apply(this, n);
    v && m.warn(`Extension method ${t} couldn't be found, doing nothing.`);
  }
}
function nn() {
  return ((D.__SENTRY__ = D.__SENTRY__ || { extensions: {}, hub: void 0 }), D);
}
function Ei(e) {
  const t = nn(),
    n = $r(t);
  return (ca(t, e), n);
}
function re() {
  const e = nn();
  if (e.__SENTRY__ && e.__SENTRY__.acs) {
    const t = e.__SENTRY__.acs.getCurrentHub();
    if (t) return t;
  }
  return Yd(e);
}
function Xe() {
  return re().getIsolationScope();
}
function Yd(e = nn()) {
  return ((!Vd(e) || $r(e).isOlderThan(oa)) && ca(e, new aa()), $r(e));
}
function Vd(e) {
  return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
}
function $r(e) {
  return xo("hub", () => new aa(), e);
}
function ca(e, t) {
  if (!e) return !1;
  const n = (e.__SENTRY__ = e.__SENTRY__ || {});
  return ((n.hub = t), !0);
}
function De(e) {
  return re().getScope().getTransaction();
}
let vi = !1;
function Xd() {
  vi || ((vi = !0), zo(Hr), jo(Hr));
}
function Hr() {
  const e = De();
  if (e) {
    const t = "internal_error";
    (v && m.log(`[Tracing] Transaction: ${t} -> Global error occured`),
      e.setStatus(t));
  }
}
Hr.tag = "sentry_tracingErrorCallback";
var Ti;
(function (e) {
  e.Ok = "ok";
  const n = "deadline_exceeded";
  e.DeadlineExceeded = n;
  const r = "unauthenticated";
  e.Unauthenticated = r;
  const s = "permission_denied";
  e.PermissionDenied = s;
  const i = "not_found";
  e.NotFound = i;
  const o = "resource_exhausted";
  e.ResourceExhausted = o;
  const a = "invalid_argument";
  e.InvalidArgument = a;
  const c = "unimplemented";
  e.Unimplemented = c;
  const u = "unavailable";
  e.Unavailable = u;
  const l = "internal_error";
  e.InternalError = l;
  const d = "unknown_error";
  e.UnknownError = d;
  const f = "cancelled";
  e.Cancelled = f;
  const h = "already_exists";
  e.AlreadyExists = h;
  const p = "failed_precondition";
  e.FailedPrecondition = p;
  const g = "aborted";
  e.Aborted = g;
  const y = "out_of_range";
  e.OutOfRange = y;
  const _ = "data_loss";
  e.DataLoss = _;
})(Ti || (Ti = {}));
function Kd(e) {
  if (e < 400 && e >= 100) return "ok";
  if (e >= 400 && e < 500)
    switch (e) {
      case 401:
        return "unauthenticated";
      case 403:
        return "permission_denied";
      case 404:
        return "not_found";
      case 409:
        return "already_exists";
      case 413:
        return "failed_precondition";
      case 429:
        return "resource_exhausted";
      default:
        return "invalid_argument";
    }
  if (e >= 500 && e < 600)
    switch (e) {
      case 501:
        return "unimplemented";
      case 503:
        return "unavailable";
      case 504:
        return "deadline_exceeded";
      default:
        return "internal_error";
    }
  return "unknown_error";
}
function ys(e, t) {
  (e.setTag("http.status_code", String(t)),
    e.setData("http.response.status_code", t));
  const n = Kd(t);
  n !== "unknown_error" && e.setStatus(n);
}
function ot(e) {
  if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
  const t = B(),
    n = e || (t && t.getOptions());
  return (
    !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
  );
}
function ua(e) {
  if (!ot()) return;
  const t = Zd(e),
    n = re(),
    r = e.scope ? e.scope.getSpan() : Ss();
  if (e.onlyIfParent && !r) return;
  const o = (e.scope || de()).clone();
  return Jd(n, {
    parentSpan: r,
    spanContext: t,
    forceTransaction: e.forceTransaction,
    scope: o,
  });
}
function Ss() {
  return de().getSpan();
}
function Jd(
  e,
  { parentSpan: t, spanContext: n, forceTransaction: r, scope: s },
) {
  if (!ot()) return;
  const i = Xe();
  let o;
  if (t && !r) o = t.startChild(n);
  else if (t) {
    const a = It(t),
      { traceId: c, spanId: u } = t.spanContext(),
      l = gs(t);
    o = e.startTransaction({
      traceId: c,
      parentSpanId: u,
      parentSampled: l,
      ...n,
      metadata: { dynamicSamplingContext: a, ...n.metadata },
    });
  } else {
    const {
      traceId: a,
      dsc: c,
      parentSpanId: u,
      sampled: l,
    } = { ...i.getPropagationContext(), ...s.getPropagationContext() };
    o = e.startTransaction({
      traceId: a,
      parentSpanId: u,
      parentSampled: l,
      ...n,
      metadata: { dynamicSamplingContext: c, ...n.metadata },
    });
  }
  return (s.setSpan(o), Qd(o, s, i), o);
}
function Zd(e) {
  if (e.startTime) {
    const t = { ...e };
    return ((t.startTimestamp = Xn(e.startTime)), delete t.startTime, t);
  }
  return e;
}
const la = "_sentryScope",
  da = "_sentryIsolationScope";
function Qd(e, t, n) {
  e && (nt(e, da, n), nt(e, la, t));
}
function ef(e) {
  return { scope: e[la], isolationScope: e[da] };
}
const me = "sentry.source",
  ht = "sentry.sample_rate",
  yn = "sentry.op",
  pt = "sentry.origin",
  tf = "profile_id";
class fa {
  constructor(t = 1e3) {
    ((this._maxlen = t), (this.spans = []));
  }
  add(t) {
    this.spans.length > this._maxlen
      ? (t.spanRecorder = void 0)
      : this.spans.push(t);
  }
}
class Jn {
  constructor(t = {}) {
    ((this._traceId = t.traceId || V()),
      (this._spanId = t.spanId || V().substring(16)),
      (this._startTime = t.startTimestamp || tn()),
      (this.tags = t.tags ? { ...t.tags } : {}),
      (this.data = t.data ? { ...t.data } : {}),
      (this.instrumenter = t.instrumenter || "sentry"),
      (this._attributes = {}),
      this.setAttributes({
        [pt]: t.origin || "manual",
        [yn]: t.op,
        ...t.attributes,
      }),
      (this._name = t.name || t.description),
      t.parentSpanId && (this._parentSpanId = t.parentSpanId),
      "sampled" in t && (this._sampled = t.sampled),
      t.status && (this._status = t.status),
      t.endTimestamp && (this._endTime = t.endTimestamp),
      t.exclusiveTime !== void 0 && (this._exclusiveTime = t.exclusiveTime),
      (this._measurements = t.measurements ? { ...t.measurements } : {}));
  }
  get name() {
    return this._name || "";
  }
  set name(t) {
    this.updateName(t);
  }
  get description() {
    return this._name;
  }
  set description(t) {
    this._name = t;
  }
  get traceId() {
    return this._traceId;
  }
  set traceId(t) {
    this._traceId = t;
  }
  get spanId() {
    return this._spanId;
  }
  set spanId(t) {
    this._spanId = t;
  }
  set parentSpanId(t) {
    this._parentSpanId = t;
  }
  get parentSpanId() {
    return this._parentSpanId;
  }
  get sampled() {
    return this._sampled;
  }
  set sampled(t) {
    this._sampled = t;
  }
  get attributes() {
    return this._attributes;
  }
  set attributes(t) {
    this._attributes = t;
  }
  get startTimestamp() {
    return this._startTime;
  }
  set startTimestamp(t) {
    this._startTime = t;
  }
  get endTimestamp() {
    return this._endTime;
  }
  set endTimestamp(t) {
    this._endTime = t;
  }
  get status() {
    return this._status;
  }
  set status(t) {
    this._status = t;
  }
  get op() {
    return this._attributes[yn];
  }
  set op(t) {
    this.setAttribute(yn, t);
  }
  get origin() {
    return this._attributes[pt];
  }
  set origin(t) {
    this.setAttribute(pt, t);
  }
  spanContext() {
    const { _spanId: t, _traceId: n, _sampled: r } = this;
    return { spanId: t, traceId: n, traceFlags: r ? ea : Cd };
  }
  startChild(t) {
    const n = new Jn({
      ...t,
      parentSpanId: this._spanId,
      sampled: this._sampled,
      traceId: this._traceId,
    });
    ((n.spanRecorder = this.spanRecorder),
      n.spanRecorder && n.spanRecorder.add(n));
    const r = Mn(this);
    if (((n.transaction = r), v && r)) {
      const s = (t && t.op) || "< unknown op >",
        i = K(n).description || "< unknown name >",
        o = r.spanContext().spanId,
        a = `[Tracing] Starting '${s}' span on transaction '${i}' (${o}).`;
      (m.log(a), (this._logMessage = a));
    }
    return n;
  }
  setTag(t, n) {
    return ((this.tags = { ...this.tags, [t]: n }), this);
  }
  setData(t, n) {
    return ((this.data = { ...this.data, [t]: n }), this);
  }
  setAttribute(t, n) {
    n === void 0 ? delete this._attributes[t] : (this._attributes[t] = n);
  }
  setAttributes(t) {
    Object.keys(t).forEach((n) => this.setAttribute(n, t[n]));
  }
  setStatus(t) {
    return ((this._status = t), this);
  }
  setHttpStatus(t) {
    return (ys(this, t), this);
  }
  setName(t) {
    this.updateName(t);
  }
  updateName(t) {
    return ((this._name = t), this);
  }
  isSuccess() {
    return this._status === "ok";
  }
  finish(t) {
    return this.end(t);
  }
  end(t) {
    if (this._endTime) return;
    const n = Mn(this);
    if (v && n && n.spanContext().spanId !== this._spanId) {
      const r = this._logMessage;
      r && m.log(r.replace("Starting", "Finishing"));
    }
    this._endTime = Xn(t);
  }
  toTraceparent() {
    return Vn(this);
  }
  toContext() {
    return ae({
      data: this._getData(),
      description: this._name,
      endTimestamp: this._endTime,
      op: this.op,
      parentSpanId: this._parentSpanId,
      sampled: this._sampled,
      spanId: this._spanId,
      startTimestamp: this._startTime,
      status: this._status,
      tags: this.tags,
      traceId: this._traceId,
    });
  }
  updateWithContext(t) {
    return (
      (this.data = t.data || {}),
      (this._name = t.name || t.description),
      (this._endTime = t.endTimestamp),
      (this.op = t.op),
      (this._parentSpanId = t.parentSpanId),
      (this._sampled = t.sampled),
      (this._spanId = t.spanId || this._spanId),
      (this._startTime = t.startTimestamp || this._startTime),
      (this._status = t.status),
      (this.tags = t.tags || {}),
      (this._traceId = t.traceId || this._traceId),
      this
    );
  }
  getTraceContext() {
    return ms(this);
  }
  getSpanJSON() {
    return ae({
      data: this._getData(),
      description: this._name,
      op: this._attributes[yn],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: this._status,
      tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[pt],
      _metrics_summary: void 0,
      profile_id: this._attributes[tf],
      exclusive_time: this._exclusiveTime,
      measurements:
        Object.keys(this._measurements).length > 0
          ? this._measurements
          : void 0,
    });
  }
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  toJSON() {
    return this.getSpanJSON();
  }
  _getData() {
    const { data: t, _attributes: n } = this,
      r = Object.keys(t).length > 0,
      s = Object.keys(n).length > 0;
    if (!(!r && !s)) return r && s ? { ...t, ...n } : r ? t : n;
  }
}
class ha extends Jn {
  constructor(t, n) {
    (super(t),
      (this._contexts = {}),
      (this._hub = n || re()),
      (this._name = t.name || ""),
      (this._metadata = { ...t.metadata }),
      (this._trimEnd = t.trimEnd),
      (this.transaction = this));
    const r = this._metadata.dynamicSamplingContext;
    r && (this._frozenDynamicSamplingContext = { ...r });
  }
  get name() {
    return this._name;
  }
  set name(t) {
    this.setName(t);
  }
  get metadata() {
    return {
      source: "custom",
      spanMetadata: {},
      ...this._metadata,
      ...(this._attributes[me] && { source: this._attributes[me] }),
      ...(this._attributes[ht] && { sampleRate: this._attributes[ht] }),
    };
  }
  set metadata(t) {
    this._metadata = t;
  }
  setName(t, n = "custom") {
    ((this._name = t), this.setAttribute(me, n));
  }
  updateName(t) {
    return ((this._name = t), this);
  }
  initSpanRecorder(t = 1e3) {
    (this.spanRecorder || (this.spanRecorder = new fa(t)),
      this.spanRecorder.add(this));
  }
  setContext(t, n) {
    n === null ? delete this._contexts[t] : (this._contexts[t] = n);
  }
  setMeasurement(t, n, r = "") {
    this._measurements[t] = { value: n, unit: r };
  }
  setMetadata(t) {
    this._metadata = { ...this._metadata, ...t };
  }
  end(t) {
    const n = Xn(t),
      r = this._finishTransaction(n);
    if (r) return this._hub.captureEvent(r);
  }
  toContext() {
    const t = super.toContext();
    return ae({ ...t, name: this._name, trimEnd: this._trimEnd });
  }
  updateWithContext(t) {
    return (
      super.updateWithContext(t),
      (this._name = t.name || ""),
      (this._trimEnd = t.trimEnd),
      this
    );
  }
  getDynamicSamplingContext() {
    return It(this);
  }
  setHub(t) {
    this._hub = t;
  }
  getProfileId() {
    if (this._contexts !== void 0 && this._contexts.profile !== void 0)
      return this._contexts.profile.profile_id;
  }
  _finishTransaction(t) {
    if (this._endTime !== void 0) return;
    (this._name ||
      (v &&
        m.warn(
          "Transaction has no name, falling back to `<unlabeled transaction>`.",
        ),
      (this._name = "<unlabeled transaction>")),
      super.end(t));
    const n = this._hub.getClient();
    if (
      (n && n.emit && n.emit("finishTransaction", this), this._sampled !== !0)
    ) {
      (v &&
        m.log(
          "[Tracing] Discarding transaction because its trace was not chosen to be sampled.",
        ),
        n && n.recordDroppedEvent("sample_rate", "transaction"));
      return;
    }
    const r = this.spanRecorder
      ? this.spanRecorder.spans.filter((l) => l !== this && K(l).timestamp)
      : [];
    if (this._trimEnd && r.length > 0) {
      const l = r.map((d) => K(d).timestamp).filter(Boolean);
      this._endTime = l.reduce((d, f) => (d > f ? d : f));
    }
    const { scope: s, isolationScope: i } = ef(this),
      { metadata: o } = this,
      { source: a } = o,
      c = {
        contexts: { ...this._contexts, trace: ms(this) },
        spans: r,
        start_timestamp: this._startTime,
        tags: this.tags,
        timestamp: this._endTime,
        transaction: this._name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...o,
          capturedSpanScope: s,
          capturedSpanIsolationScope: i,
          ...ae({ dynamicSamplingContext: It(this) }),
        },
        _metrics_summary: void 0,
        ...(a && { transaction_info: { source: a } }),
      };
    return (
      Object.keys(this._measurements).length > 0 &&
        (v &&
          m.log(
            "[Measurements] Adding measurements to transaction",
            JSON.stringify(this._measurements, void 0, 2),
          ),
        (c.measurements = this._measurements)),
      v && m.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`),
      c
    );
  }
}
const Ut = { idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3 },
  nf = "finishReason",
  ut = [
    "heartbeatFailed",
    "idleTimeout",
    "documentHidden",
    "finalTimeout",
    "externalFinish",
    "cancelled",
  ];
class rf extends fa {
  constructor(t, n, r, s) {
    (super(s),
      (this._pushActivity = t),
      (this._popActivity = n),
      (this.transactionSpanId = r));
  }
  add(t) {
    if (t.spanContext().spanId !== this.transactionSpanId) {
      const n = t.end;
      ((t.end = (...r) => (
        this._popActivity(t.spanContext().spanId),
        n.apply(t, r)
      )),
        K(t).timestamp === void 0 &&
          this._pushActivity(t.spanContext().spanId));
    }
    super.add(t);
  }
}
class sf extends ha {
  constructor(
    t,
    n,
    r = Ut.idleTimeout,
    s = Ut.finalTimeout,
    i = Ut.heartbeatInterval,
    o = !1,
    a = !1,
  ) {
    (super(t, n),
      (this._idleHub = n),
      (this._idleTimeout = r),
      (this._finalTimeout = s),
      (this._heartbeatInterval = i),
      (this._onScope = o),
      (this.activities = {}),
      (this._heartbeatCounter = 0),
      (this._finished = !1),
      (this._idleTimeoutCanceledPermanently = !1),
      (this._beforeFinishCallbacks = []),
      (this._finishReason = ut[4]),
      (this._autoFinishAllowed = !a),
      o &&
        (v &&
          m.log(
            `Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`,
          ),
        n.getScope().setSpan(this)),
      a || this._restartIdleTimeout(),
      setTimeout(() => {
        this._finished ||
          (this.setStatus("deadline_exceeded"),
          (this._finishReason = ut[3]),
          this.end());
      }, this._finalTimeout));
  }
  end(t) {
    const n = Xn(t);
    if (
      ((this._finished = !0),
      (this.activities = {}),
      this.op === "ui.action.click" &&
        this.setAttribute(nf, this._finishReason),
      this.spanRecorder)
    ) {
      v &&
        m.log(
          "[Tracing] finishing IdleTransaction",
          new Date(n * 1e3).toISOString(),
          this.op,
        );
      for (const r of this._beforeFinishCallbacks) r(this, n);
      ((this.spanRecorder.spans = this.spanRecorder.spans.filter((r) => {
        if (r.spanContext().spanId === this.spanContext().spanId) return !0;
        K(r).timestamp ||
          (r.setStatus("cancelled"),
          r.end(n),
          v &&
            m.log(
              "[Tracing] cancelling span since transaction ended early",
              JSON.stringify(r, void 0, 2),
            ));
        const { start_timestamp: s, timestamp: i } = K(r),
          o = s && s < n,
          a = (this._finalTimeout + this._idleTimeout) / 1e3,
          c = i && s && i - s < a;
        if (v) {
          const u = JSON.stringify(r, void 0, 2);
          o
            ? c ||
              m.log(
                "[Tracing] discarding Span since it finished after Transaction final timeout",
                u,
              )
            : m.log(
                "[Tracing] discarding Span since it happened after Transaction was finished",
                u,
              );
        }
        return o && c;
      })),
        v && m.log("[Tracing] flushing IdleTransaction"));
    } else v && m.log("[Tracing] No active IdleTransaction");
    if (this._onScope) {
      const r = this._idleHub.getScope();
      r.getTransaction() === this && r.setSpan(void 0);
    }
    return super.end(t);
  }
  registerBeforeFinishCallback(t) {
    this._beforeFinishCallbacks.push(t);
  }
  initSpanRecorder(t) {
    if (!this.spanRecorder) {
      const n = (s) => {
          this._finished || this._pushActivity(s);
        },
        r = (s) => {
          this._finished || this._popActivity(s);
        };
      ((this.spanRecorder = new rf(n, r, this.spanContext().spanId, t)),
        v && m.log("Starting heartbeat"),
        this._pingHeartbeat());
    }
    this.spanRecorder.add(this);
  }
  cancelIdleTimeout(
    t,
    { restartOnChildSpanChange: n } = { restartOnChildSpanChange: !0 },
  ) {
    ((this._idleTimeoutCanceledPermanently = n === !1),
      this._idleTimeoutID &&
        (clearTimeout(this._idleTimeoutID),
        (this._idleTimeoutID = void 0),
        Object.keys(this.activities).length === 0 &&
          this._idleTimeoutCanceledPermanently &&
          ((this._finishReason = ut[5]), this.end(t))));
  }
  setFinishReason(t) {
    this._finishReason = t;
  }
  sendAutoFinishSignal() {
    this._autoFinishAllowed ||
      (v && m.log("[Tracing] Received finish signal for idle transaction."),
      this._restartIdleTimeout(),
      (this._autoFinishAllowed = !0));
  }
  _restartIdleTimeout(t) {
    (this.cancelIdleTimeout(),
      (this._idleTimeoutID = setTimeout(() => {
        !this._finished &&
          Object.keys(this.activities).length === 0 &&
          ((this._finishReason = ut[1]), this.end(t));
      }, this._idleTimeout)));
  }
  _pushActivity(t) {
    (this.cancelIdleTimeout(void 0, {
      restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently,
    }),
      v && m.log(`[Tracing] pushActivity: ${t}`),
      (this.activities[t] = !0),
      v &&
        m.log(
          "[Tracing] new activities count",
          Object.keys(this.activities).length,
        ));
  }
  _popActivity(t) {
    if (
      (this.activities[t] &&
        (v && m.log(`[Tracing] popActivity ${t}`),
        delete this.activities[t],
        v &&
          m.log(
            "[Tracing] new activities count",
            Object.keys(this.activities).length,
          )),
      Object.keys(this.activities).length === 0)
    ) {
      const n = tn();
      this._idleTimeoutCanceledPermanently
        ? this._autoFinishAllowed && ((this._finishReason = ut[5]), this.end(n))
        : this._restartIdleTimeout(n + this._idleTimeout / 1e3);
    }
  }
  _beat() {
    if (this._finished) return;
    const t = Object.keys(this.activities).join("");
    (t === this._prevHeartbeatString
      ? this._heartbeatCounter++
      : (this._heartbeatCounter = 1),
      (this._prevHeartbeatString = t),
      this._heartbeatCounter >= 3
        ? this._autoFinishAllowed &&
          (v &&
            m.log(
              "[Tracing] Transaction finished because of no change for 3 heart beats",
            ),
          this.setStatus("deadline_exceeded"),
          (this._finishReason = ut[0]),
          this.end())
        : this._pingHeartbeat());
  }
  _pingHeartbeat() {
    (v &&
      m.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),
      setTimeout(() => {
        this._beat();
      }, this._heartbeatInterval));
  }
}
function pa(e, t, n) {
  if (!ot(t)) return ((e.sampled = !1), e);
  if (e.sampled !== void 0) return (e.setAttribute(ht, Number(e.sampled)), e);
  let r;
  return (
    typeof t.tracesSampler == "function"
      ? ((r = t.tracesSampler(n)), e.setAttribute(ht, Number(r)))
      : n.parentSampled !== void 0
        ? (r = n.parentSampled)
        : typeof t.tracesSampleRate < "u"
          ? ((r = t.tracesSampleRate), e.setAttribute(ht, Number(r)))
          : ((r = 1), e.setAttribute(ht, r)),
    ma(r)
      ? r
        ? ((e.sampled = Math.random() < r),
          e.sampled
            ? (v &&
                m.log(
                  `[Tracing] starting ${e.op} transaction - ${K(e).description}`,
                ),
              e)
            : (v &&
                m.log(
                  `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(r)})`,
                ),
              e))
        : (v &&
            m.log(
              `[Tracing] Discarding transaction because ${typeof t.tracesSampler == "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`,
            ),
          (e.sampled = !1),
          e)
      : (v &&
          m.warn(
            "[Tracing] Discarding transaction because of invalid sample rate.",
          ),
        (e.sampled = !1),
        e)
  );
}
function ma(e) {
  return Co(e) || !(typeof e == "number" || typeof e == "boolean")
    ? (v &&
        m.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(e)} of type ${JSON.stringify(typeof e)}.`,
        ),
      !1)
    : e < 0 || e > 1
      ? (v &&
          m.warn(
            `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${e}.`,
          ),
        !1)
      : !0;
}
function of() {
  const t = this.getScope().getSpan();
  return t ? { "sentry-trace": Vn(t) } : {};
}
function af(e, t) {
  const n = this.getClient(),
    r = (n && n.getOptions()) || {},
    s = r.instrumenter || "sentry",
    i = e.instrumenter || "sentry";
  s !== i &&
    (v &&
      m.error(`A transaction was started with instrumenter=\`${i}\`, but the SDK is configured with the \`${s}\` instrumenter.
The transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`),
    (e.sampled = !1));
  let o = new ha(e, this);
  return (
    (o = pa(o, r, {
      name: e.name,
      parentSampled: e.parentSampled,
      transactionContext: e,
      attributes: { ...e.data, ...e.attributes },
      ...t,
    })),
    o.isRecording() &&
      o.initSpanRecorder(r._experiments && r._experiments.maxSpans),
    n && n.emit && n.emit("startTransaction", o),
    o
  );
}
function xn(e, t, n, r, s, i, o, a = !1) {
  const c = e.getClient(),
    u = (c && c.getOptions()) || {};
  let l = new sf(t, e, n, r, o, s, a);
  return (
    (l = pa(l, u, {
      name: t.name,
      parentSampled: t.parentSampled,
      transactionContext: t,
      attributes: { ...t.data, ...t.attributes },
      ...i,
    })),
    l.isRecording() &&
      l.initSpanRecorder(u._experiments && u._experiments.maxSpans),
    c && c.emit && c.emit("startTransaction", l),
    l
  );
}
function ga() {
  const e = nn();
  e.__SENTRY__ &&
    ((e.__SENTRY__.extensions = e.__SENTRY__.extensions || {}),
    e.__SENTRY__.extensions.startTransaction ||
      (e.__SENTRY__.extensions.startTransaction = af),
    e.__SENTRY__.extensions.traceHeaders ||
      (e.__SENTRY__.extensions.traceHeaders = of),
    Xd());
}
function cf(e, t, n) {
  const r = De();
  r && r.setMeasurement(e, t, n);
}
function uf(e, t) {
  return (
    t &&
      ((e.sdk = e.sdk || {}),
      (e.sdk.name = e.sdk.name || t.name),
      (e.sdk.version = e.sdk.version || t.version),
      (e.sdk.integrations = [
        ...(e.sdk.integrations || []),
        ...(t.integrations || []),
      ]),
      (e.sdk.packages = [...(e.sdk.packages || []), ...(t.packages || [])])),
    e
  );
}
function lf(e, t, n, r) {
  const s = hs(n),
    i = {
      sent_at: new Date().toISOString(),
      ...(s && { sdk: s }),
      ...(!!r && t && { dsn: Nt(t) }),
    },
    o =
      "aggregates" in e
        ? [{ type: "sessions" }, e]
        : [{ type: "session" }, e.toJSON()];
  return Ve(i, [o]);
}
function df(e, t, n, r) {
  const s = hs(n),
    i = e.type && e.type !== "replay_event" ? e.type : "event";
  uf(e, n && n.sdk);
  const o = Xo(e, s, r, t);
  return (delete e.sdkProcessingMetadata, Ve(o, [[{ type: i }, e]]));
}
const ff = "7";
function hf(e) {
  const t = e.protocol ? `${e.protocol}:` : "",
    n = e.port ? `:${e.port}` : "";
  return `${t}//${e.host}${n}${e.path ? `/${e.path}` : ""}/api/`;
}
function pf(e) {
  return `${hf(e)}${e.projectId}/envelope/`;
}
function mf(e, t) {
  return Ml({
    sentry_key: e.publicKey,
    sentry_version: ff,
    ...(t && { sentry_client: `${t.name}/${t.version}` }),
  });
}
function gf(e, t = {}) {
  const n = typeof t == "string" ? t : t.tunnel,
    r = typeof t == "string" || !t._metadata ? void 0 : t._metadata.sdk;
  return n || `${pf(e)}?${mf(e, r)}`;
}
const Ii = [];
function _f(e) {
  const t = {};
  return (
    e.forEach((n) => {
      const { name: r } = n,
        s = t[r];
      (s && !s.isDefaultInstance && n.isDefaultInstance) || (t[r] = n);
    }),
    Object.keys(t).map((n) => t[n])
  );
}
function yf(e) {
  const t = e.defaultIntegrations || [],
    n = e.integrations;
  t.forEach((o) => {
    o.isDefaultInstance = !0;
  });
  let r;
  Array.isArray(n)
    ? (r = [...t, ...n])
    : typeof n == "function"
      ? (r = $o(n(t)))
      : (r = t);
  const s = _f(r),
    i = bf(s, (o) => o.name === "Debug");
  if (i !== -1) {
    const [o] = s.splice(i, 1);
    s.push(o);
  }
  return s;
}
function Sf(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      r && _a(e, r, n);
    }),
    n
  );
}
function wi(e, t) {
  for (const n of t) n && n.afterAllSetup && n.afterAllSetup(e);
}
function _a(e, t, n) {
  if (n[t.name]) {
    v &&
      m.log(`Integration skipped because it was already installed: ${t.name}`);
    return;
  }
  if (
    ((n[t.name] = t),
    Ii.indexOf(t.name) === -1 && (t.setupOnce(kd, re), Ii.push(t.name)),
    t.setup && typeof t.setup == "function" && t.setup(e),
    e.on && typeof t.preprocessEvent == "function")
  ) {
    const r = t.preprocessEvent.bind(t);
    e.on("preprocessEvent", (s, i) => r(s, i, e));
  }
  if (e.addEventProcessor && typeof t.processEvent == "function") {
    const r = t.processEvent.bind(t),
      s = (i, o) => r(i, o, e);
    ((s.id = t.name), e.addEventProcessor(s));
  }
  v && m.log(`Integration installed: ${t.name}`);
}
function bf(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n]) === !0) return n;
  return -1;
}
function Ef(e) {
  let t = "";
  for (const n of e) {
    const r = Object.entries(n.tags),
      s = r.length > 0 ? `|#${r.map(([i, o]) => `${i}:${o}`).join(",")}` : "";
    t += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${s}|T${n.timestamp}
`;
  }
  return t;
}
function vf(e, t, n, r) {
  const s = { sent_at: new Date().toISOString() };
  (n && n.sdk && (s.sdk = { name: n.sdk.name, version: n.sdk.version }),
    r && t && (s.dsn = Nt(t)));
  const i = Tf(e);
  return Ve(s, [i]);
}
function Tf(e) {
  const t = Ef(e);
  return [{ type: "statsd", length: t.length }, t];
}
const ki = "Not capturing exception because it's already been captured.";
class If {
  constructor(t) {
    if (
      ((this._options = t),
      (this._integrations = {}),
      (this._integrationsInitialized = !1),
      (this._numProcessing = 0),
      (this._outcomes = {}),
      (this._hooks = {}),
      (this._eventProcessors = []),
      t.dsn
        ? (this._dsn = Cl(t.dsn))
        : v && m.warn("No DSN provided, client will not send events."),
      this._dsn)
    ) {
      const n = gf(this._dsn, t);
      this._transport = t.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: n,
      });
    }
  }
  captureException(t, n, r) {
    if (ai(t)) {
      v && m.log(ki);
      return;
    }
    let s = n && n.event_id;
    return (
      this._process(
        this.eventFromException(t, n)
          .then((i) => this._captureEvent(i, n, r))
          .then((i) => {
            s = i;
          }),
      ),
      s
    );
  }
  captureMessage(t, n, r, s) {
    let i = r && r.event_id;
    const o = is(t) ? t : String(t),
      a = os(t)
        ? this.eventFromMessage(o, n, r)
        : this.eventFromException(t, r);
    return (
      this._process(
        a
          .then((c) => this._captureEvent(c, r, s))
          .then((c) => {
            i = c;
          }),
      ),
      i
    );
  }
  captureEvent(t, n, r) {
    if (n && n.originalException && ai(n.originalException)) {
      v && m.log(ki);
      return;
    }
    let s = n && n.event_id;
    const o = (t.sdkProcessingMetadata || {}).capturedSpanScope;
    return (
      this._process(
        this._captureEvent(t, n, o || r).then((a) => {
          s = a;
        }),
      ),
      s
    );
  }
  captureSession(t) {
    typeof t.release != "string"
      ? v &&
        m.warn("Discarded session because of missing or non-string release")
      : (this.sendSession(t), rt(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const n = this._transport;
    return n
      ? (this.metricsAggregator && this.metricsAggregator.flush(),
        this._isClientDoneProcessing(t).then((r) =>
          n.flush(t).then((s) => r && s),
        ))
      : Tt(!0);
  }
  close(t) {
    return this.flush(t).then(
      (n) => (
        (this.getOptions().enabled = !1),
        this.metricsAggregator && this.metricsAggregator.close(),
        n
      ),
    );
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  setupIntegrations(t) {
    ((t && !this._integrationsInitialized) ||
      (this._isEnabled() && !this._integrationsInitialized)) &&
      this._setupIntegrations();
  }
  init() {
    this._isEnabled() && this._setupIntegrations();
  }
  getIntegrationById(t) {
    return this.getIntegrationByName(t);
  }
  getIntegrationByName(t) {
    return this._integrations[t];
  }
  getIntegration(t) {
    try {
      return this._integrations[t.id] || null;
    } catch {
      return (
        v &&
          m.warn(`Cannot retrieve integration ${t.id} from the current Client`),
        null
      );
    }
  }
  addIntegration(t) {
    const n = this._integrations[t.name];
    (_a(this, t, this._integrations), n || wi(this, [t]));
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = df(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const i of n.attachments || [])
      r = gd(
        r,
        Sd(
          i,
          this._options.transportOptions &&
            this._options.transportOptions.textEncoder,
        ),
      );
    const s = this._sendEnvelope(r);
    s && s.then((i) => this.emit("afterSendEvent", t, i), null);
  }
  sendSession(t) {
    const n = lf(t, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(n);
  }
  recordDroppedEvent(t, n, r) {
    if (this._options.sendClientReports) {
      const s = typeof r == "number" ? r : 1,
        i = `${t}:${n}`;
      (v && m.log(`Recording outcome: "${i}"${s > 1 ? ` (${s} times)` : ""}`),
        (this._outcomes[i] = (this._outcomes[i] || 0) + s));
    }
  }
  captureAggregateMetrics(t) {
    v && m.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
    const n = vf(t, this._dsn, this._options._metadata, this._options.tunnel);
    this._sendEnvelope(n);
  }
  on(t, n) {
    (this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(n));
  }
  emit(t, ...n) {
    this._hooks[t] && this._hooks[t].forEach((r) => r(...n));
  }
  _setupIntegrations() {
    const { integrations: t } = this._options;
    ((this._integrations = Sf(this, t)),
      wi(this, t),
      (this._integrationsInitialized = !0));
  }
  _updateSessionFromEvent(t, n) {
    let r = !1,
      s = !1;
    const i = n.exception && n.exception.values;
    if (i) {
      s = !0;
      for (const c of i) {
        const u = c.mechanism;
        if (u && u.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const o = t.status === "ok";
    ((o && t.errors === 0) || (o && r)) &&
      (rt(t, {
        ...(r && { status: "crashed" }),
        errors: t.errors || Number(s || r),
      }),
      this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new he((n) => {
      let r = 0;
      const s = 1,
        i = setInterval(() => {
          this._numProcessing == 0
            ? (clearInterval(i), n(!0))
            : ((r += s), t && r >= t && (clearInterval(i), n(!1)));
        }, s);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(t, n, r, s = Xe()) {
    const i = this.getOptions(),
      o = Object.keys(this._integrations);
    return (
      !n.integrations && o.length > 0 && (n.integrations = o),
      this.emit("preprocessEvent", t, n),
      ta(i, t, n, r, this, s).then((a) => {
        if (a === null) return a;
        const c = {
          ...s.getPropagationContext(),
          ...(r ? r.getPropagationContext() : void 0),
        };
        if (!(a.contexts && a.contexts.trace) && c) {
          const { traceId: l, spanId: d, parentSpanId: f, dsc: h } = c;
          a.contexts = {
            trace: { trace_id: l, span_id: d, parent_span_id: f },
            ...a.contexts,
          };
          const p = h || Kn(l, this, r);
          a.sdkProcessingMetadata = {
            dynamicSamplingContext: p,
            ...a.sdkProcessingMetadata,
          };
        }
        return a;
      })
    );
  }
  _captureEvent(t, n = {}, r) {
    return this._processEvent(t, n, r).then(
      (s) => s.event_id,
      (s) => {
        if (v) {
          const i = s;
          i.logLevel === "log" ? m.log(i.message) : m.warn(i);
        }
      },
    );
  }
  _processEvent(t, n, r) {
    const s = this.getOptions(),
      { sampleRate: i } = s,
      o = Sa(t),
      a = ya(t),
      c = t.type || "error",
      u = `before send for type \`${c}\``;
    if (a && typeof i == "number" && Math.random() > i)
      return (
        this.recordDroppedEvent("sample_rate", "error", t),
        ds(
          new we(
            `Discarding event because it's not included in the random sample (sampling rate = ${i})`,
            "log",
          ),
        )
      );
    const l = c === "replay_event" ? "replay" : c,
      f = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(t, n, r, f)
      .then((h) => {
        if (h === null)
          throw (
            this.recordDroppedEvent("event_processor", l, t),
            new we(
              "An event processor returned `null`, will not send event.",
              "log",
            )
          );
        if (n.data && n.data.__sentry__ === !0) return h;
        const g = kf(s, h, n);
        return wf(g, u);
      })
      .then((h) => {
        if (h === null) {
          if ((this.recordDroppedEvent("before_send", l, t), o)) {
            const _ = 1 + (t.spans || []).length;
            this.recordDroppedEvent("before_send", "span", _);
          }
          throw new we(`${u} returned \`null\`, will not send event.`, "log");
        }
        const p = r && r.getSession();
        if ((!o && p && this._updateSessionFromEvent(p, h), o)) {
          const y =
              (h.sdkProcessingMetadata &&
                h.sdkProcessingMetadata.spanCountBeforeProcessing) ||
              0,
            _ = h.spans ? h.spans.length : 0,
            S = y - _;
          S > 0 && this.recordDroppedEvent("before_send", "span", S);
        }
        const g = h.transaction_info;
        if (o && g && h.transaction !== t.transaction) {
          const y = "custom";
          h.transaction_info = { ...g, source: y };
        }
        return (this.sendEvent(h, n), h);
      })
      .then(null, (h) => {
        throw h instanceof we
          ? h
          : (this.captureException(h, {
              data: { __sentry__: !0 },
              originalException: h,
            }),
            new we(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${h}`));
      });
  }
  _process(t) {
    (this._numProcessing++,
      t.then(
        (n) => (this._numProcessing--, n),
        (n) => (this._numProcessing--, n),
      ));
  }
  _sendEnvelope(t) {
    if ((this.emit("beforeEnvelope", t), this._isEnabled() && this._transport))
      return this._transport.send(t).then(null, (n) => {
        v && m.error("Error while sending event:", n);
      });
    v && m.error("Transport disabled");
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return (
      (this._outcomes = {}),
      Object.keys(t).map((n) => {
        const [r, s] = n.split(":");
        return { reason: r, category: s, quantity: t[n] };
      })
    );
  }
}
function wf(e, t) {
  const n = `${t} must return \`null\` or a valid event.`;
  if (Gn(e))
    return e.then(
      (r) => {
        if (!vt(r) && r !== null) throw new we(n);
        return r;
      },
      (r) => {
        throw new we(`${t} rejected with ${r}`);
      },
    );
  if (!vt(e) && e !== null) throw new we(n);
  return e;
}
function kf(e, t, n) {
  const { beforeSend: r, beforeSendTransaction: s } = e;
  if (ya(t) && r) return r(t, n);
  if (Sa(t) && s) {
    if (t.spans) {
      const i = t.spans.length;
      t.sdkProcessingMetadata = {
        ...t.sdkProcessingMetadata,
        spanCountBeforeProcessing: i,
      };
    }
    return s(t, n);
  }
  return t;
}
function ya(e) {
  return e.type === void 0;
}
function Sa(e) {
  return e.type === "transaction";
}
function Rf(e) {
  const t = B();
  !t || !t.addEventProcessor || t.addEventProcessor(e);
}
function Cf(e, t) {
  (t.debug === !0 &&
    (v
      ? m.enable()
      : tt(() => {
          console.warn(
            "[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.",
          );
        })),
    de().update(t.initialScope));
  const r = new e(t);
  (Mf(r), xf(r));
}
function Mf(e) {
  const n = re().getStackTop();
  ((n.client = e), n.scope.setClient(e));
}
function xf(e) {
  e.init ? e.init() : e.setupIntegrations && e.setupIntegrations();
}
const Of = 30;
function ba(e, t, n = od(e.bufferSize || Of)) {
  let r = {};
  const s = (o) => n.drain(o);
  function i(o) {
    const a = [];
    if (
      (hi(o, (d, f) => {
        const h = pi(f);
        if (Ko(r, h)) {
          const p = Ri(d, f);
          e.recordDroppedEvent("ratelimit_backoff", h, p);
        } else a.push(d);
      }),
      a.length === 0)
    )
      return Tt();
    const c = Ve(o[0], a),
      u = (d) => {
        hi(c, (f, h) => {
          const p = Ri(f, h);
          e.recordDroppedEvent(d, pi(h), p);
        });
      },
      l = () =>
        t({ body: _d(c, e.textEncoder) }).then(
          (d) => (
            d.statusCode !== void 0 &&
              (d.statusCode < 200 || d.statusCode >= 300) &&
              v &&
              m.warn(
                `Sentry responded with status code ${d.statusCode} to sent event.`,
              ),
            (r = Jo(r, d)),
            d
          ),
          (d) => {
            throw (u("network_error"), d);
          },
        );
    return n.add(l).then(
      (d) => d,
      (d) => {
        if (d instanceof we)
          return (
            v && m.error("Skipped sending event because buffer is full."),
            u("queue_overflow"),
            Tt()
          );
        throw d;
      },
    );
  }
  return ((i.__sentry__baseTransport__ = !0), { send: i, flush: s });
}
function Ri(e, t) {
  if (!(t !== "event" && t !== "transaction"))
    return Array.isArray(e) ? e[1] : void 0;
}
function Af(e, t) {
  const n = { sent_at: new Date().toISOString() };
  t && (n.dsn = Nt(t));
  const r = e.map(Nf);
  return Ve(n, r);
}
function Nf(e) {
  return [{ type: "span" }, e];
}
function Df(e, t) {
  const n = t && Ff(t) ? t.getClient() : t,
    r = n && n.getDsn(),
    s = n && n.getOptions().tunnel;
  return Pf(e, r) || Lf(e, s);
}
function Lf(e, t) {
  return t ? Ci(e) === Ci(t) : !1;
}
function Pf(e, t) {
  return t ? e.includes(t.host) : !1;
}
function Ci(e) {
  return e[e.length - 1] === "/" ? e.slice(0, -1) : e;
}
function Ff(e) {
  return e.getClient !== void 0;
}
function Ea(e, t, n = [t], r = "npm") {
  const s = e._metadata || {};
  (s.sdk ||
    (s.sdk = {
      name: `sentry.javascript.${t}`,
      packages: n.map((i) => ({ name: `${r}:@sentry/${i}`, version: Br })),
      version: Br,
    }),
    (e._metadata = s));
}
const Bf = [
    /^Script error\.?$/,
    /^Javascript error: Script error\.? on line 0$/,
    /^ResizeObserver loop completed with undelivered notifications.$/,
    /^Cannot redefine property: googletag$/,
  ],
  $f = [
    /^.*\/healthcheck$/,
    /^.*\/healthy$/,
    /^.*\/live$/,
    /^.*\/ready$/,
    /^.*\/heartbeat$/,
    /^.*\/health$/,
    /^.*\/healthz$/,
  ],
  Hf = "InboundFilters",
  Uf = (e = {}) => ({
    name: Hf,
    setupOnce() {},
    processEvent(t, n, r) {
      const s = r.getOptions(),
        i = jf(e, s);
      return Wf(t, i) ? null : t;
    },
  }),
  zf = Uf;
function jf(e = {}, t = {}) {
  return {
    allowUrls: [...(e.allowUrls || []), ...(t.allowUrls || [])],
    denyUrls: [...(e.denyUrls || []), ...(t.denyUrls || [])],
    ignoreErrors: [
      ...(e.ignoreErrors || []),
      ...(t.ignoreErrors || []),
      ...(e.disableErrorDefaults ? [] : Bf),
    ],
    ignoreTransactions: [
      ...(e.ignoreTransactions || []),
      ...(t.ignoreTransactions || []),
      ...(e.disableTransactionDefaults ? [] : $f),
    ],
    ignoreInternal: e.ignoreInternal !== void 0 ? e.ignoreInternal : !0,
  };
}
function Wf(e, t) {
  return t.ignoreInternal && Kf(e)
    ? (v &&
        m.warn(`Event dropped due to being internal Sentry Error.
Event: ${He(e)}`),
      !0)
    : qf(e, t.ignoreErrors)
      ? (v &&
          m.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${He(e)}`),
        !0)
      : Gf(e, t.ignoreTransactions)
        ? (v &&
            m.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${He(e)}`),
          !0)
        : Yf(e, t.denyUrls)
          ? (v &&
              m.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${He(e)}.
Url: ${On(e)}`),
            !0)
          : Vf(e, t.allowUrls)
            ? !1
            : (v &&
                m.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${He(e)}.
Url: ${On(e)}`),
              !0);
}
function qf(e, t) {
  return e.type || !t || !t.length ? !1 : Xf(e).some((n) => Ot(n, t));
}
function Gf(e, t) {
  if (e.type !== "transaction" || !t || !t.length) return !1;
  const n = e.transaction;
  return n ? Ot(n, t) : !1;
}
function Yf(e, t) {
  if (!t || !t.length) return !1;
  const n = On(e);
  return n ? Ot(n, t) : !1;
}
function Vf(e, t) {
  if (!t || !t.length) return !0;
  const n = On(e);
  return n ? Ot(n, t) : !0;
}
function Xf(e) {
  const t = [];
  e.message && t.push(e.message);
  let n;
  try {
    n = e.exception.values[e.exception.values.length - 1];
  } catch {}
  return (
    n &&
      n.value &&
      (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`)),
    v &&
      t.length === 0 &&
      m.error(`Could not extract message for event ${He(e)}`),
    t
  );
}
function Kf(e) {
  try {
    return e.exception.values[0].type === "SentryError";
  } catch {}
  return !1;
}
function Jf(e = []) {
  for (let t = e.length - 1; t >= 0; t--) {
    const n = e[t];
    if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
      return n.filename || null;
  }
  return null;
}
function On(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {}
    return t ? Jf(t) : null;
  } catch {
    return (v && m.error(`Cannot extract url for event ${He(e)}`), null);
  }
}
let Mi;
const Zf = "FunctionToString",
  xi = new WeakMap(),
  Qf = () => ({
    name: Zf,
    setupOnce() {
      Mi = Function.prototype.toString;
      try {
        Function.prototype.toString = function (...e) {
          const t = cs(this),
            n = xi.has(B()) && t !== void 0 ? t : this;
          return Mi.apply(n, e);
        };
      } catch {}
    },
    setup(e) {
      xi.set(e, !0);
    },
  }),
  eh = Qf,
  A = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  E = D;
function va() {
  E.document
    ? E.document.addEventListener("visibilitychange", () => {
        const e = De();
        if (E.document.hidden && e) {
          const t = "cancelled",
            { op: n, status: r } = K(e);
          (A &&
            m.log(
              `[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${n}`,
            ),
            r || e.setStatus(t),
            e.setTag("visibilitychange", "document.hidden"),
            e.end());
        }
      })
    : A &&
      m.warn(
        "[Tracing] Could not set up background tab detection due to lack of global document",
      );
}
const rn = (e, t, n) => {
    let r, s;
    return (i) => {
      t.value >= 0 &&
        (i || n) &&
        ((s = t.value - (r || 0)),
        (s || r === void 0) && ((r = t.value), (t.delta = s), e(t)));
    };
  },
  th = () =>
    `v3-${Date.now()}-${Math.floor(Math.random() * (9e12 - 1)) + 1e12}`,
  nh = () => {
    const e = E.performance.timing,
      t = E.performance.navigation.type,
      n = {
        entryType: "navigation",
        startTime: 0,
        type: t == 2 ? "back_forward" : t === 1 ? "reload" : "navigate",
      };
    for (const r in e)
      r !== "navigationStart" &&
        r !== "toJSON" &&
        (n[r] = Math.max(e[r] - e.navigationStart, 0));
    return n;
  },
  Zn = () =>
    E.__WEB_VITALS_POLYFILL__
      ? E.performance &&
        ((performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0]) ||
          nh())
      : E.performance &&
        performance.getEntriesByType &&
        performance.getEntriesByType("navigation")[0],
  bs = () => {
    const e = Zn();
    return (e && e.activationStart) || 0;
  },
  sn = (e, t) => {
    const n = Zn();
    let r = "navigate";
    return (
      n &&
        ((E.document && E.document.prerendering) || bs() > 0
          ? (r = "prerender")
          : (r = n.type.replace(/_/g, "-"))),
      {
        name: e,
        value: typeof t > "u" ? -1 : t,
        rating: "good",
        delta: 0,
        entries: [],
        id: th(),
        navigationType: r,
      }
    );
  },
  Dt = (e, t, n) => {
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        const r = new PerformanceObserver((s) => {
          t(s.getEntries());
        });
        return (r.observe({ type: e, buffered: !0, ...n }), r);
      }
    } catch {}
  },
  on = (e, t) => {
    const n = (r) => {
      (r.type === "pagehide" || E.document.visibilityState === "hidden") &&
        (e(r),
        t &&
          (removeEventListener("visibilitychange", n, !0),
          removeEventListener("pagehide", n, !0)));
    };
    E.document &&
      (addEventListener("visibilitychange", n, !0),
      addEventListener("pagehide", n, !0));
  },
  rh = (e, t = {}) => {
    const n = sn("CLS", 0);
    let r,
      s = 0,
      i = [];
    const o = (c) => {
        c.forEach((u) => {
          if (!u.hadRecentInput) {
            const l = i[0],
              d = i[i.length - 1];
            (s &&
            i.length !== 0 &&
            u.startTime - d.startTime < 1e3 &&
            u.startTime - l.startTime < 5e3
              ? ((s += u.value), i.push(u))
              : ((s = u.value), (i = [u])),
              s > n.value && ((n.value = s), (n.entries = i), r && r()));
          }
        });
      },
      a = Dt("layout-shift", o);
    if (a) {
      r = rn(e, n, t.reportAllChanges);
      const c = () => {
        (o(a.takeRecords()), r(!0));
      };
      return (on(c), c);
    }
  };
let An = -1;
const sh = () => {
    E.document &&
      E.document.visibilityState &&
      (An =
        E.document.visibilityState === "hidden" && !E.document.prerendering
          ? 0
          : 1 / 0);
  },
  ih = () => {
    on(({ timeStamp: e }) => {
      An = e;
    }, !0);
  },
  Es = () => (
    An < 0 && (sh(), ih()),
    {
      get firstHiddenTime() {
        return An;
      },
    }
  ),
  oh = (e) => {
    const t = Es(),
      n = sn("FID");
    let r;
    const s = (a) => {
        a.startTime < t.firstHiddenTime &&
          ((n.value = a.processingStart - a.startTime),
          n.entries.push(a),
          r(!0));
      },
      i = (a) => {
        a.forEach(s);
      },
      o = Dt("first-input", i);
    ((r = rn(e, n)),
      o &&
        on(() => {
          (i(o.takeRecords()), o.disconnect());
        }, !0));
  };
let Ta = 0,
  _r = 1 / 0,
  Sn = 0;
const ah = (e) => {
  e.forEach((t) => {
    t.interactionId &&
      ((_r = Math.min(_r, t.interactionId)),
      (Sn = Math.max(Sn, t.interactionId)),
      (Ta = Sn ? (Sn - _r) / 7 + 1 : 0));
  });
};
let Ur;
const ch = () => (Ur ? Ta : performance.interactionCount || 0),
  uh = () => {
    "interactionCount" in performance ||
      Ur ||
      (Ur = Dt("event", ah, {
        type: "event",
        buffered: !0,
        durationThreshold: 0,
      }));
  },
  Ia = () => ch(),
  Oi = 10,
  xe = [],
  yr = {},
  Ai = (e) => {
    const t = xe[xe.length - 1],
      n = yr[e.interactionId];
    if (n || xe.length < Oi || e.duration > t.latency) {
      if (n) (n.entries.push(e), (n.latency = Math.max(n.latency, e.duration)));
      else {
        const r = { id: e.interactionId, latency: e.duration, entries: [e] };
        ((yr[r.id] = r), xe.push(r));
      }
      (xe.sort((r, s) => s.latency - r.latency),
        xe.splice(Oi).forEach((r) => {
          delete yr[r.id];
        }));
    }
  },
  lh = () => {
    const e = Math.min(xe.length - 1, Math.floor(Ia() / 50));
    return xe[e];
  },
  dh = (e, t) => {
    ((t = t || {}), uh());
    const n = sn("INP");
    let r;
    const s = (o) => {
        o.forEach((c) => {
          (c.interactionId && Ai(c),
            c.entryType === "first-input" &&
              !xe.some((l) =>
                l.entries.some(
                  (d) =>
                    c.duration === d.duration && c.startTime === d.startTime,
                ),
              ) &&
              Ai(c));
        });
        const a = lh();
        a &&
          a.latency !== n.value &&
          ((n.value = a.latency), (n.entries = a.entries), r());
      },
      i = Dt("event", s, { durationThreshold: t.durationThreshold || 40 });
    ((r = rn(e, n, t.reportAllChanges)),
      i &&
        (i.observe({ type: "first-input", buffered: !0 }),
        on(() => {
          (s(i.takeRecords()),
            n.value < 0 && Ia() > 0 && ((n.value = 0), (n.entries = [])),
            r(!0));
        })));
  },
  Ni = {},
  fh = (e) => {
    const t = Es(),
      n = sn("LCP");
    let r;
    const s = (o) => {
        const a = o[o.length - 1];
        if (a) {
          const c = Math.max(a.startTime - bs(), 0);
          c < t.firstHiddenTime && ((n.value = c), (n.entries = [a]), r());
        }
      },
      i = Dt("largest-contentful-paint", s);
    if (i) {
      r = rn(e, n);
      const o = () => {
        Ni[n.id] ||
          (s(i.takeRecords()), i.disconnect(), (Ni[n.id] = !0), r(!0));
      };
      return (
        ["keydown", "click"].forEach((a) => {
          E.document && addEventListener(a, o, { once: !0, capture: !0 });
        }),
        on(o, !0),
        o
      );
    }
  },
  zr = (e) => {
    E.document &&
      (E.document.prerendering
        ? addEventListener("prerenderingchange", () => zr(e), !0)
        : E.document.readyState !== "complete"
          ? addEventListener("load", () => zr(e), !0)
          : setTimeout(e, 0));
  },
  hh = (e, t) => {
    t = t || {};
    const n = sn("TTFB"),
      r = rn(e, n, t.reportAllChanges);
    zr(() => {
      const s = Zn();
      if (s) {
        if (
          ((n.value = Math.max(s.responseStart - bs(), 0)),
          n.value < 0 || n.value > performance.now())
        )
          return;
        ((n.entries = [s]), r(!0));
      }
    });
  },
  zt = {},
  Nn = {};
let wa, ka, Ra, Ca, Ma;
function ph(e, t = !1) {
  return an("cls", e, yh, wa, t);
}
function xa(e, t = !1) {
  return an("lcp", e, bh, Ra, t);
}
function mh(e) {
  return an("ttfb", e, Eh, Ca);
}
function gh(e) {
  return an("fid", e, Sh, ka);
}
function _h(e) {
  return an("inp", e, vh, Ma);
}
function Ye(e, t) {
  return (Oa(e, t), Nn[e] || (Th(e), (Nn[e] = !0)), Aa(e, t));
}
function Lt(e, t) {
  const n = zt[e];
  if (!(!n || !n.length))
    for (const r of n)
      try {
        r(t);
      } catch (s) {
        A &&
          m.error(
            `Error while triggering instrumentation handler.
Type: ${e}
Name: ${Ne(r)}
Error:`,
            s,
          );
      }
}
function yh() {
  return rh(
    (e) => {
      (Lt("cls", { metric: e }), (wa = e));
    },
    { reportAllChanges: !0 },
  );
}
function Sh() {
  return oh((e) => {
    (Lt("fid", { metric: e }), (ka = e));
  });
}
function bh() {
  return fh((e) => {
    (Lt("lcp", { metric: e }), (Ra = e));
  });
}
function Eh() {
  return hh((e) => {
    (Lt("ttfb", { metric: e }), (Ca = e));
  });
}
function vh() {
  return dh((e) => {
    (Lt("inp", { metric: e }), (Ma = e));
  });
}
function an(e, t, n, r, s = !1) {
  Oa(e, t);
  let i;
  return (
    Nn[e] || ((i = n()), (Nn[e] = !0)),
    r && t({ metric: r }),
    Aa(e, t, s ? i : void 0)
  );
}
function Th(e) {
  const t = {};
  (e === "event" && (t.durationThreshold = 0),
    Dt(
      e,
      (n) => {
        Lt(e, { entries: n });
      },
      t,
    ));
}
function Oa(e, t) {
  ((zt[e] = zt[e] || []), zt[e].push(t));
}
function Aa(e, t, n) {
  return () => {
    n && n();
    const r = zt[e];
    if (!r) return;
    const s = r.indexOf(t);
    s !== -1 && r.splice(s, 1);
  };
}
function Sr(e) {
  return typeof e == "number" && isFinite(e);
}
function wt(e, { startTimestamp: t, ...n }) {
  return (
    t && e.startTimestamp > t && (e.startTimestamp = t),
    e.startChild({ startTimestamp: t, ...n })
  );
}
const Ih = 2147483647;
function Q(e) {
  return e / 1e3;
}
function vs() {
  return E && E.addEventListener && E.performance;
}
let Di = 0,
  Y = {},
  ve,
  jt;
function Na() {
  const e = vs();
  if (e && ce) {
    e.mark && E.performance.mark("sentry-tracing-init");
    const t = Rh(),
      n = wh(),
      r = kh(),
      s = Ch();
    return () => {
      (t(), n(), r(), s());
    };
  }
  return () => {};
}
function Da() {
  Ye("longtask", ({ entries: e }) => {
    for (const t of e) {
      const n = De();
      if (!n) return;
      const r = Q(ce + t.startTime),
        s = Q(t.duration);
      n.startChild({
        description: "Main UI thread blocked",
        op: "ui.long-task",
        origin: "auto.ui.browser.metrics",
        startTimestamp: r,
        endTimestamp: r + s,
      });
    }
  });
}
function La() {
  Ye("event", ({ entries: e }) => {
    for (const t of e) {
      const n = De();
      if (!n) return;
      if (t.name === "click") {
        const r = Q(ce + t.startTime),
          s = Q(t.duration),
          i = {
            description: qe(t.target),
            op: `ui.interaction.${t.name}`,
            origin: "auto.ui.browser.metrics",
            startTimestamp: r,
            endTimestamp: r + s,
          },
          o = Ao(t.target);
        (o && (i.attributes = { "ui.component_name": o }), n.startChild(i));
      }
    }
  });
}
function Pa(e, t) {
  if (vs() && ce) {
    const r = Mh(e, t);
    return () => {
      r();
    };
  }
  return () => {};
}
function wh() {
  return ph(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    t &&
      (A && m.log("[Measurements] Adding CLS"),
      (Y.cls = { value: e.value, unit: "" }),
      (jt = t));
  }, !0);
}
function kh() {
  return xa(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    t &&
      (A && m.log("[Measurements] Adding LCP"),
      (Y.lcp = { value: e.value, unit: "millisecond" }),
      (ve = t));
  }, !0);
}
function Rh() {
  return gh(({ metric: e }) => {
    const t = e.entries[e.entries.length - 1];
    if (!t) return;
    const n = Q(ce),
      r = Q(t.startTime);
    (A && m.log("[Measurements] Adding FID"),
      (Y.fid = { value: e.value, unit: "millisecond" }),
      (Y["mark.fid"] = { value: n + r, unit: "second" }));
  });
}
function Ch() {
  return mh(({ metric: e }) => {
    e.entries[e.entries.length - 1] &&
      (A && m.log("[Measurements] Adding TTFB"),
      (Y.ttfb = { value: e.value, unit: "millisecond" }));
  });
}
const Li = {
  click: "click",
  pointerdown: "click",
  pointerup: "click",
  mousedown: "click",
  mouseup: "click",
  touchstart: "click",
  touchend: "click",
  mouseover: "hover",
  mouseout: "hover",
  mouseenter: "hover",
  mouseleave: "hover",
  pointerover: "hover",
  pointerout: "hover",
  pointerenter: "hover",
  pointerleave: "hover",
  dragstart: "drag",
  dragend: "drag",
  drag: "drag",
  dragenter: "drag",
  dragleave: "drag",
  dragover: "drag",
  drop: "drag",
  keydown: "press",
  keyup: "press",
  keypress: "press",
  input: "press",
};
function Mh(e, t) {
  return _h(({ metric: n }) => {
    if (n.value === void 0) return;
    const r = n.entries.find(
        (b) => b.duration === n.value && Li[b.name] !== void 0,
      ),
      s = B();
    if (!r || !s) return;
    const i = Li[r.name],
      o = s.getOptions(),
      a = Q(ce + r.startTime),
      c = Q(n.value),
      u = r.interactionId !== void 0 ? e[r.interactionId] : void 0;
    if (u === void 0) return;
    const {
        routeName: l,
        parentContext: d,
        activeTransaction: f,
        user: h,
        replayId: p,
      } = u,
      g = h !== void 0 ? h.email || h.id || h.ip_address : void 0,
      y = f !== void 0 ? f.getProfileId() : void 0,
      _ = new Jn({
        startTimestamp: a,
        endTimestamp: a + c,
        op: `ui.interaction.${i}`,
        name: qe(r.target),
        attributes: {
          release: o.release,
          environment: o.environment,
          transaction: l,
          ...(g !== void 0 && g !== "" ? { user: g } : {}),
          ...(y !== void 0 ? { profile_id: y } : {}),
          ...(p !== void 0 ? { replay_id: p } : {}),
        },
        exclusiveTime: n.value,
        measurements: { inp: { value: n.value, unit: "millisecond" } },
      }),
      S = Fh(d, o, t);
    if (S && Math.random() < S) {
      const b = _ ? Af([_], s.getDsn()) : void 0,
        w = s && s.getTransport();
      w &&
        b &&
        w.send(b).then(null, (T) => {
          A && m.error("Error while sending interaction:", T);
        });
      return;
    }
  });
}
function Fa(e) {
  const t = vs();
  if (!t || !E.performance.getEntries || !ce) return;
  A && m.log("[Tracing] Adding & adjusting spans using Performance API");
  const n = Q(ce),
    r = t.getEntries(),
    { op: s, start_timestamp: i } = K(e);
  if (
    (r.slice(Di).forEach((o) => {
      const a = Q(o.startTime),
        c = Q(o.duration);
      if (!(e.op === "navigation" && i && n + a < i))
        switch (o.entryType) {
          case "navigation": {
            Oh(e, o, n);
            break;
          }
          case "mark":
          case "paint":
          case "measure": {
            xh(e, o, a, c, n);
            const u = Es(),
              l = o.startTime < u.firstHiddenTime;
            (o.name === "first-paint" &&
              l &&
              (A && m.log("[Measurements] Adding FP"),
              (Y.fp = { value: o.startTime, unit: "millisecond" })),
              o.name === "first-contentful-paint" &&
                l &&
                (A && m.log("[Measurements] Adding FCP"),
                (Y.fcp = { value: o.startTime, unit: "millisecond" })));
            break;
          }
          case "resource": {
            Nh(e, o, o.name, a, c, n);
            break;
          }
        }
    }),
    (Di = Math.max(r.length - 1, 0)),
    Dh(e),
    s === "pageload")
  ) {
    (Ph(Y),
      ["fcp", "fp", "lcp"].forEach((a) => {
        if (!Y[a] || !i || n >= i) return;
        const c = Y[a].value,
          u = n + Q(c),
          l = Math.abs((u - i) * 1e3),
          d = l - c;
        (A && m.log(`[Measurements] Normalized ${a} from ${c} to ${l} (${d})`),
          (Y[a].value = l));
      }));
    const o = Y["mark.fid"];
    (o &&
      Y.fid &&
      (wt(e, {
        description: "first input delay",
        endTimestamp: o.value + Q(Y.fid.value),
        op: "ui.action",
        origin: "auto.ui.browser.metrics",
        startTimestamp: o.value,
      }),
      delete Y["mark.fid"]),
      "fcp" in Y || delete Y.cls,
      Object.keys(Y).forEach((a) => {
        cf(a, Y[a].value, Y[a].unit);
      }),
      Lh(e));
  }
  ((ve = void 0), (jt = void 0), (Y = {}));
}
function xh(e, t, n, r, s) {
  const i = s + n,
    o = i + r;
  return (
    wt(e, {
      description: t.name,
      endTimestamp: o,
      op: t.entryType,
      origin: "auto.resource.browser.metrics",
      startTimestamp: i,
    }),
    i
  );
}
function Oh(e, t, n) {
  ([
    "unloadEvent",
    "redirect",
    "domContentLoadedEvent",
    "loadEvent",
    "connect",
  ].forEach((r) => {
    bn(e, t, r, n);
  }),
    bn(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
    bn(e, t, "fetch", n, "cache", "domainLookupStart"),
    bn(e, t, "domainLookup", n, "DNS"),
    Ah(e, t, n));
}
function bn(e, t, n, r, s, i) {
  const o = i ? t[i] : t[`${n}End`],
    a = t[`${n}Start`];
  !a ||
    !o ||
    wt(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: s || n,
      startTimestamp: r + Q(a),
      endTimestamp: r + Q(o),
    });
}
function Ah(e, t, n) {
  t.responseEnd &&
    (wt(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "request",
      startTimestamp: n + Q(t.requestStart),
      endTimestamp: n + Q(t.responseEnd),
    }),
    wt(e, {
      op: "browser",
      origin: "auto.browser.browser.metrics",
      description: "response",
      startTimestamp: n + Q(t.responseStart),
      endTimestamp: n + Q(t.responseEnd),
    }));
}
function Nh(e, t, n, r, s, i) {
  if (t.initiatorType === "xmlhttprequest" || t.initiatorType === "fetch")
    return;
  const o = et(n),
    a = {};
  (br(a, t, "transferSize", "http.response_transfer_size"),
    br(a, t, "encodedBodySize", "http.response_content_length"),
    br(a, t, "decodedBodySize", "http.decoded_response_content_length"),
    "renderBlockingStatus" in t &&
      (a["resource.render_blocking_status"] = t.renderBlockingStatus),
    o.protocol && (a["url.scheme"] = o.protocol.split(":").pop()),
    o.host && (a["server.address"] = o.host),
    (a["url.same_origin"] = n.includes(E.location.origin)));
  const c = i + r,
    u = c + s;
  wt(e, {
    description: n.replace(E.location.origin, ""),
    endTimestamp: u,
    op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
    origin: "auto.resource.browser.metrics",
    startTimestamp: c,
    data: a,
  });
}
function Dh(e) {
  const t = E.navigator;
  if (!t) return;
  const n = t.connection;
  (n &&
    (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
    n.type && e.setTag("connectionType", n.type),
    Sr(n.rtt) && (Y["connection.rtt"] = { value: n.rtt, unit: "millisecond" })),
    Sr(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`),
    Sr(t.hardwareConcurrency) &&
      e.setTag("hardwareConcurrency", String(t.hardwareConcurrency)));
}
function Lh(e) {
  (ve &&
    (A && m.log("[Measurements] Adding LCP Data"),
    ve.element && e.setTag("lcp.element", qe(ve.element)),
    ve.id && e.setTag("lcp.id", ve.id),
    ve.url && e.setTag("lcp.url", ve.url.trim().slice(0, 200)),
    e.setTag("lcp.size", ve.size)),
    jt &&
      jt.sources &&
      (A && m.log("[Measurements] Adding CLS Data"),
      jt.sources.forEach((t, n) =>
        e.setTag(`cls.source.${n + 1}`, qe(t.node)),
      )));
}
function br(e, t, n, r) {
  const s = t[n];
  s != null && s < Ih && (e[r] = s);
}
function Ph(e) {
  const t = Zn();
  if (!t) return;
  const { responseStart: n, requestStart: r } = t;
  r <= n &&
    (A && m.log("[Measurements] Adding TTFB Request Time"),
    (e["ttfb.requestTime"] = { value: n - r, unit: "millisecond" }));
}
function Fh(e, t, n) {
  if (!ot(t)) return !1;
  let r;
  return (
    e !== void 0 && typeof t.tracesSampler == "function"
      ? (r = t.tracesSampler({
          transactionContext: e,
          name: e.name,
          parentSampled: e.parentSampled,
          attributes: { ...e.data, ...e.attributes },
          location: E.location,
        }))
      : e !== void 0 && e.sampled !== void 0
        ? (r = e.sampled)
        : typeof t.tracesSampleRate < "u"
          ? (r = t.tracesSampleRate)
          : (r = 1),
    ma(r)
      ? r === !0
        ? n
        : r === !1
          ? 0
          : r * n
      : (A &&
          m.warn(
            "[Tracing] Discarding interaction span because of invalid sample rate.",
          ),
        !1)
  );
}
function Bh(e, t, n, r, s = "auto.http.browser") {
  if (!ot() || !e.fetchData) return;
  const i = t(e.fetchData.url);
  if (e.endTimestamp && i) {
    const h = e.fetchData.__span;
    if (!h) return;
    const p = r[h];
    p && (Uh(p, e), delete r[h]);
    return;
  }
  const o = de(),
    a = B(),
    { method: c, url: u } = e.fetchData,
    l = Hh(u),
    d = l ? et(l).host : void 0,
    f = i
      ? ua({
          name: `${c} ${u}`,
          onlyIfParent: !0,
          attributes: {
            url: u,
            type: "fetch",
            "http.method": c,
            "http.url": l,
            "server.address": d,
            [pt]: s,
          },
          op: "http.client",
        })
      : void 0;
  if (
    (f &&
      ((e.fetchData.__span = f.spanContext().spanId),
      (r[f.spanContext().spanId] = f)),
    n(e.fetchData.url) && a)
  ) {
    const h = e.args[0];
    e.args[1] = e.args[1] || {};
    const p = e.args[1];
    p.headers = $h(h, a, o, p, f);
  }
  return f;
}
function $h(e, t, n, r, s) {
  const i = s || n.getSpan(),
    o = Xe(),
    {
      traceId: a,
      spanId: c,
      sampled: u,
      dsc: l,
    } = { ...o.getPropagationContext(), ...n.getPropagationContext() },
    d = i ? Vn(i) : fs(a, c, u),
    f = Yo(l || (i ? It(i) : Kn(a, t, n))),
    h =
      r.headers ||
      (typeof Request < "u" && Ae(e, Request) ? e.headers : void 0);
  if (h)
    if (typeof Headers < "u" && Ae(h, Headers)) {
      const p = new Headers(h);
      return (p.append("sentry-trace", d), f && p.append(Pr, f), p);
    } else if (Array.isArray(h)) {
      const p = [...h, ["sentry-trace", d]];
      return (f && p.push([Pr, f]), p);
    } else {
      const p = "baggage" in h ? h.baggage : void 0,
        g = [];
      return (
        Array.isArray(p) ? g.push(...p) : p && g.push(p),
        f && g.push(f),
        {
          ...h,
          "sentry-trace": d,
          baggage: g.length > 0 ? g.join(",") : void 0,
        }
      );
    }
  else return { "sentry-trace": d, baggage: f };
}
function Hh(e) {
  try {
    return new URL(e).href;
  } catch {
    return;
  }
}
function Uh(e, t) {
  if (t.response) {
    ys(e, t.response.status);
    const n =
      t.response &&
      t.response.headers &&
      t.response.headers.get("content-length");
    if (n) {
      const r = parseInt(n);
      r > 0 && e.setAttribute("http.response_content_length", r);
    }
  } else t.error && e.setStatus("internal_error");
  e.end();
}
const jr = ["localhost", /^\/(?!\/)/],
  Dn = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    tracingOrigins: jr,
    tracePropagationTargets: jr,
  };
function Ba(e) {
  const {
      traceFetch: t,
      traceXHR: n,
      tracePropagationTargets: r,
      tracingOrigins: s,
      shouldCreateSpanForRequest: i,
      enableHTTPTimings: o,
    } = { traceFetch: Dn.traceFetch, traceXHR: Dn.traceXHR, ...e },
    a = typeof i == "function" ? i : (l) => !0,
    c = (l) => qh(l, r || s),
    u = {};
  (t &&
    us((l) => {
      const d = Bh(l, a, c, u);
      if (d) {
        const f = $a(l.fetchData.url),
          h = f ? et(f).host : void 0;
        d.setAttributes({ "http.url": f, "server.address": h });
      }
      o && d && Pi(d);
    }),
    n &&
      ls((l) => {
        const d = Gh(l, a, c, u);
        o && d && Pi(d);
      }));
}
function zh(e) {
  return (
    e.entryType === "resource" &&
    "initiatorType" in e &&
    typeof e.nextHopProtocol == "string" &&
    (e.initiatorType === "fetch" || e.initiatorType === "xmlhttprequest")
  );
}
function Pi(e) {
  const { url: t } = K(e).data || {};
  if (!t || typeof t != "string") return;
  const n = Ye("resource", ({ entries: r }) => {
    r.forEach((s) => {
      zh(s) &&
        s.name.endsWith(t) &&
        (Wh(s).forEach((o) => e.setAttribute(...o)), setTimeout(n));
    });
  });
}
function jh(e) {
  let t = "unknown",
    n = "unknown",
    r = "";
  for (const s of e) {
    if (s === "/") {
      [t, n] = e.split("/");
      break;
    }
    if (!isNaN(Number(s))) {
      ((t = r === "h" ? "http" : r), (n = e.split(r)[1]));
      break;
    }
    r += s;
  }
  return (r === e && (t = r), { name: t, version: n });
}
function Ee(e = 0) {
  return ((ce || performance.timeOrigin) + e) / 1e3;
}
function Wh(e) {
  const { name: t, version: n } = jh(e.nextHopProtocol),
    r = [];
  return (
    r.push(["network.protocol.version", n], ["network.protocol.name", t]),
    ce
      ? [
          ...r,
          ["http.request.redirect_start", Ee(e.redirectStart)],
          ["http.request.fetch_start", Ee(e.fetchStart)],
          ["http.request.domain_lookup_start", Ee(e.domainLookupStart)],
          ["http.request.domain_lookup_end", Ee(e.domainLookupEnd)],
          ["http.request.connect_start", Ee(e.connectStart)],
          ["http.request.secure_connection_start", Ee(e.secureConnectionStart)],
          ["http.request.connection_end", Ee(e.connectEnd)],
          ["http.request.request_start", Ee(e.requestStart)],
          ["http.request.response_start", Ee(e.responseStart)],
          ["http.request.response_end", Ee(e.responseEnd)],
        ]
      : r
  );
}
function qh(e, t) {
  return Ot(e, t || jr);
}
function Gh(e, t, n, r) {
  const s = e.xhr,
    i = s && s[Ue];
  if (!ot() || !s || s.__sentry_own_request__ || !i) return;
  const o = t(i.url);
  if (e.endTimestamp && o) {
    const h = s.__sentry_xhr_span_id__;
    if (!h) return;
    const p = r[h];
    p &&
      i.status_code !== void 0 &&
      (ys(p, i.status_code), p.end(), delete r[h]);
    return;
  }
  const a = de(),
    c = Xe(),
    u = $a(i.url),
    l = u ? et(u).host : void 0,
    d = o
      ? ua({
          name: `${i.method} ${i.url}`,
          onlyIfParent: !0,
          attributes: {
            type: "xhr",
            "http.method": i.method,
            "http.url": u,
            url: i.url,
            "server.address": l,
            [pt]: "auto.http.browser",
          },
          op: "http.client",
        })
      : void 0;
  d &&
    ((s.__sentry_xhr_span_id__ = d.spanContext().spanId),
    (r[s.__sentry_xhr_span_id__] = d));
  const f = B();
  if (s.setRequestHeader && n(i.url) && f) {
    const {
        traceId: h,
        spanId: p,
        sampled: g,
        dsc: y,
      } = { ...c.getPropagationContext(), ...a.getPropagationContext() },
      _ = d ? Vn(d) : fs(h, p, g),
      S = Yo(y || (d ? It(d) : Kn(h, f, a)));
    Yh(s, _, S);
  }
  return d;
}
function Yh(e, t, n) {
  try {
    (e.setRequestHeader("sentry-trace", t), n && e.setRequestHeader(Pr, n));
  } catch {}
}
function $a(e) {
  try {
    return new URL(e, E.location.origin).href;
  } catch {
    return;
  }
}
function Vh(e, t = !0, n = !0) {
  if (!E || !E.location) {
    A &&
      m.warn(
        "Could not initialize routing instrumentation due to invalid location",
      );
    return;
  }
  let r = E.location.href,
    s;
  (t &&
    (s = e({
      name: E.location.pathname,
      startTimestamp: ce ? ce / 1e3 : void 0,
      op: "pageload",
      origin: "auto.pageload.browser",
      metadata: { source: "url" },
    })),
    n &&
      Qt(({ to: i, from: o }) => {
        if (o === void 0 && r && r.indexOf(i) !== -1) {
          r = void 0;
          return;
        }
        o !== i &&
          ((r = void 0),
          s &&
            (A &&
              m.log(`[Tracing] Finishing current transaction with op: ${s.op}`),
            s.end()),
          (s = e({
            name: E.location.pathname,
            op: "navigation",
            origin: "auto.navigation.browser",
            metadata: { source: "url" },
          })));
      }));
}
const Xh = "BrowserTracing",
  Kh = {
    ...Ut,
    markBackgroundTransactions: !0,
    routingInstrumentation: Vh,
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    enableInp: !1,
    interactionsSampleRate: 1,
    _experiments: {},
    ...Dn,
  },
  Fi = 10;
class Jh {
  constructor(t) {
    ((this.name = Xh),
      (this._hasSetTracePropagationTargets = !1),
      ga(),
      A &&
        (this._hasSetTracePropagationTargets = !!(
          t &&
          (t.tracePropagationTargets || t.tracingOrigins)
        )),
      (this.options = { ...Kh, ...t }),
      this.options._experiments.enableLongTask !== void 0 &&
        (this.options.enableLongTask =
          this.options._experiments.enableLongTask),
      t &&
        !t.tracePropagationTargets &&
        t.tracingOrigins &&
        (this.options.tracePropagationTargets = t.tracingOrigins),
      (this._collectWebVitals = Na()),
      (this._interactionIdToRouteNameMapping = {}),
      this.options.enableInp &&
        Pa(
          this._interactionIdToRouteNameMapping,
          this.options.interactionsSampleRate,
        ),
      this.options.enableLongTask && Da(),
      this.options._experiments.enableInteractions && La(),
      (this._latestRoute = { name: void 0, context: void 0 }));
  }
  setupOnce(t, n) {
    this._getCurrentHub = n;
    const s = n().getClient(),
      i = s && s.getOptions(),
      {
        routingInstrumentation: o,
        startTransactionOnLocationChange: a,
        startTransactionOnPageLoad: c,
        markBackgroundTransactions: u,
        traceFetch: l,
        traceXHR: d,
        shouldCreateSpanForRequest: f,
        enableHTTPTimings: h,
        _experiments: p,
      } = this.options,
      g = i && i.tracePropagationTargets,
      y = g || this.options.tracePropagationTargets;
    (A &&
      this._hasSetTracePropagationTargets &&
      g &&
      m.warn(
        "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.",
      ),
      o(
        (_) => {
          const S = this._createRouteTransaction(_);
          return (
            this.options._experiments.onStartRouteTransaction &&
              this.options._experiments.onStartRouteTransaction(S, _, n),
            S
          );
        },
        c,
        a,
      ),
      u && va(),
      p.enableInteractions && this._registerInteractionListener(),
      this.options.enableInp && this._registerInpInteractionListener(),
      Ba({
        traceFetch: l,
        traceXHR: d,
        tracePropagationTargets: y,
        shouldCreateSpanForRequest: f,
        enableHTTPTimings: h,
      }));
  }
  _createRouteTransaction(t) {
    if (!this._getCurrentHub) {
      A &&
        m.warn(
          `[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`,
        );
      return;
    }
    const n = this._getCurrentHub(),
      {
        beforeNavigate: r,
        idleTimeout: s,
        finalTimeout: i,
        heartbeatInterval: o,
      } = this.options,
      a = t.op === "pageload";
    let c;
    if (a) {
      const h = a ? Bi("sentry-trace") : "",
        p = a ? Bi("baggage") : void 0,
        { traceId: g, dsc: y, parentSpanId: _, sampled: S } = Vo(h, p);
      c = {
        traceId: g,
        parentSpanId: _,
        parentSampled: S,
        ...t,
        metadata: { ...t.metadata, dynamicSamplingContext: y },
        trimEnd: !0,
      };
    } else c = { trimEnd: !0, ...t };
    const u = typeof r == "function" ? r(c) : c,
      l = u === void 0 ? { ...c, sampled: !1 } : u;
    ((l.metadata =
      l.name !== c.name ? { ...l.metadata, source: "custom" } : l.metadata),
      (this._latestRoute.name = l.name),
      (this._latestRoute.context = l),
      l.sampled === !1 &&
        A &&
        m.log(
          `[Tracing] Will not send ${l.op} transaction because of beforeNavigate.`,
        ),
      A && m.log(`[Tracing] Starting ${l.op} transaction on scope`));
    const { location: d } = E,
      f = xn(n, l, s, i, !0, { location: d }, o, a);
    return (
      a &&
        E.document &&
        (E.document.addEventListener("readystatechange", () => {
          ["interactive", "complete"].includes(E.document.readyState) &&
            f.sendAutoFinishSignal();
        }),
        ["interactive", "complete"].includes(E.document.readyState) &&
          f.sendAutoFinishSignal()),
      f.registerBeforeFinishCallback((h) => {
        (this._collectWebVitals(), Fa(h));
      }),
      f
    );
  }
  _registerInteractionListener() {
    let t;
    const n = () => {
      const {
          idleTimeout: r,
          finalTimeout: s,
          heartbeatInterval: i,
        } = this.options,
        o = "ui.action.click",
        a = De();
      if (a && a.op && ["navigation", "pageload"].includes(a.op)) {
        A &&
          m.warn(
            `[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`,
          );
        return;
      }
      if (
        (t &&
          (t.setFinishReason("interactionInterrupted"), t.end(), (t = void 0)),
        !this._getCurrentHub)
      ) {
        A &&
          m.warn(
            `[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`,
          );
        return;
      }
      if (!this._latestRoute.name) {
        A &&
          m.warn(
            `[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`,
          );
        return;
      }
      const c = this._getCurrentHub(),
        { location: u } = E,
        l = {
          name: this._latestRoute.name,
          op: o,
          trimEnd: !0,
          data: {
            [me]: this._latestRoute.context
              ? Zh(this._latestRoute.context)
              : "url",
          },
        };
      t = xn(c, l, r, s, !0, { location: u }, i);
    };
    ["click"].forEach((r) => {
      E.document && addEventListener(r, n, { once: !1, capture: !0 });
    });
  }
  _registerInpInteractionListener() {
    const t = ({ entries: n }) => {
      const r = B(),
        s =
          r !== void 0 && r.getIntegrationByName !== void 0
            ? r.getIntegrationByName("Replay")
            : void 0,
        i = s !== void 0 ? s.getReplayId() : void 0,
        o = De(),
        a = de(),
        c = a !== void 0 ? a.getUser() : void 0;
      n.forEach((u) => {
        if (Qh(u)) {
          const l = u.interactionId;
          if (l === void 0) return;
          const d = this._interactionIdToRouteNameMapping[l],
            f = u.duration,
            h = u.startTime,
            p = Object.keys(this._interactionIdToRouteNameMapping),
            g =
              p.length > 0
                ? p.reduce((y, _) =>
                    this._interactionIdToRouteNameMapping[y].duration <
                    this._interactionIdToRouteNameMapping[_].duration
                      ? y
                      : _,
                  )
                : void 0;
          if (
            (u.entryType === "first-input" &&
              p
                .map((_) => this._interactionIdToRouteNameMapping[_])
                .some((_) => _.duration === f && _.startTime === h)) ||
            !l
          )
            return;
          if (d) d.duration = Math.max(d.duration, f);
          else if (
            p.length < Fi ||
            g === void 0 ||
            f > this._interactionIdToRouteNameMapping[g].duration
          ) {
            const y = this._latestRoute.name,
              _ = this._latestRoute.context;
            y &&
              _ &&
              (g &&
                Object.keys(this._interactionIdToRouteNameMapping).length >=
                  Fi &&
                delete this._interactionIdToRouteNameMapping[g],
              (this._interactionIdToRouteNameMapping[l] = {
                routeName: y,
                duration: f,
                parentContext: _,
                user: c,
                activeTransaction: o,
                replayId: i,
                startTime: h,
              }));
          }
        }
      });
    };
    (Ye("event", t), Ye("first-input", t));
  }
}
function Bi(e) {
  const t = Oo(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : void 0;
}
function Zh(e) {
  const t = e.attributes && e.attributes[me],
    n = e.data && e.data[me],
    r = e.metadata && e.metadata.source;
  return t || n || r;
}
function Qh(e) {
  return "duration" in e;
}
const ep = "BrowserTracing",
  tp = {
    ...Ut,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableInp: !1,
    interactionsSampleRate: 1,
    _experiments: {},
    ...Dn,
  },
  np = (e = {}) => {
    const t = A ? !!(e.tracePropagationTargets || e.tracingOrigins) : !1;
    (ga(),
      !e.tracePropagationTargets &&
        e.tracingOrigins &&
        (e.tracePropagationTargets = e.tracingOrigins));
    const n = { ...tp, ...e },
      r = Na(),
      s = {};
    (n.enableInp && Pa(s, n.interactionsSampleRate),
      n.enableLongTask && Da(),
      n._experiments.enableInteractions && La());
    const i = { name: void 0, context: void 0 };
    function o(a) {
      const c = re(),
        {
          beforeStartSpan: u,
          idleTimeout: l,
          finalTimeout: d,
          heartbeatInterval: f,
        } = n,
        h = a.op === "pageload";
      let p;
      if (h) {
        const S = h ? $i("sentry-trace") : "",
          b = h ? $i("baggage") : void 0,
          { traceId: w, dsc: T, parentSpanId: k, sampled: x } = Vo(S, b);
        p = {
          traceId: w,
          parentSpanId: k,
          parentSampled: x,
          ...a,
          metadata: { ...a.metadata, dynamicSamplingContext: T },
          trimEnd: !0,
        };
      } else p = { trimEnd: !0, ...a };
      const g = u ? u(p) : p;
      ((g.metadata =
        g.name !== p.name ? { ...g.metadata, source: "custom" } : g.metadata),
        (i.name = g.name),
        (i.context = g),
        g.sampled === !1 &&
          A &&
          m.log(
            `[Tracing] Will not send ${g.op} transaction because of beforeNavigate.`,
          ),
        A && m.log(`[Tracing] Starting ${g.op} transaction on scope`));
      const { location: y } = E,
        _ = xn(c, g, l, d, !0, { location: y }, f, h);
      return (
        h &&
          E.document &&
          (E.document.addEventListener("readystatechange", () => {
            ["interactive", "complete"].includes(E.document.readyState) &&
              _.sendAutoFinishSignal();
          }),
          ["interactive", "complete"].includes(E.document.readyState) &&
            _.sendAutoFinishSignal()),
        _.registerBeforeFinishCallback((S) => {
          (r(), Fa(S));
        }),
        _
      );
    }
    return {
      name: ep,
      setupOnce: () => {},
      afterAllSetup(a) {
        const c = a.getOptions(),
          {
            markBackgroundSpan: u,
            traceFetch: l,
            traceXHR: d,
            shouldCreateSpanForRequest: f,
            enableHTTPTimings: h,
            _experiments: p,
          } = n,
          g = c && c.tracePropagationTargets,
          y = g || n.tracePropagationTargets;
        A &&
          t &&
          g &&
          m.warn(
            "[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.",
          );
        let _,
          S = E.location && E.location.href;
        if (
          (a.on &&
            (a.on("startNavigationSpan", (b) => {
              (_ &&
                (A &&
                  m.log(
                    `[Tracing] Finishing current transaction with op: ${K(_).op}`,
                  ),
                _.end()),
                (_ = o({ op: "navigation", ...b })));
            }),
            a.on("startPageLoadSpan", (b) => {
              (_ &&
                (A &&
                  m.log(
                    `[Tracing] Finishing current transaction with op: ${K(_).op}`,
                  ),
                _.end()),
                (_ = o({ op: "pageload", ...b })));
            })),
          n.instrumentPageLoad && a.emit && E.location)
        ) {
          const b = {
            name: E.location.pathname,
            startTimestamp: ce ? ce / 1e3 : void 0,
            origin: "auto.pageload.browser",
            attributes: { [me]: "url" },
          };
          rp(a, b);
        }
        (n.instrumentNavigation &&
          a.emit &&
          E.location &&
          Qt(({ to: b, from: w }) => {
            if (w === void 0 && S && S.indexOf(b) !== -1) {
              S = void 0;
              return;
            }
            if (w !== b) {
              S = void 0;
              const T = {
                name: E.location.pathname,
                origin: "auto.navigation.browser",
                attributes: { [me]: "url" },
              };
              sp(a, T);
            }
          }),
          u && va(),
          p.enableInteractions && ip(n, i),
          n.enableInp && ap(s, i),
          Ba({
            traceFetch: l,
            traceXHR: d,
            tracePropagationTargets: y,
            shouldCreateSpanForRequest: f,
            enableHTTPTimings: h,
          }));
      },
      options: n,
    };
  };
function rp(e, t) {
  if (!e.emit) return;
  e.emit("startPageLoadSpan", t);
  const n = Ss();
  return (n && K(n).op) === "pageload" ? n : void 0;
}
function sp(e, t) {
  if (!e.emit) return;
  e.emit("startNavigationSpan", t);
  const n = Ss();
  return (n && K(n).op) === "navigation" ? n : void 0;
}
function $i(e) {
  const t = Oo(`meta[name=${e}]`);
  return t ? t.getAttribute("content") : void 0;
}
function ip(e, t) {
  let n;
  const r = () => {
    const { idleTimeout: s, finalTimeout: i, heartbeatInterval: o } = e,
      a = "ui.action.click",
      c = De();
    if (c && c.op && ["navigation", "pageload"].includes(c.op)) {
      A &&
        m.warn(
          `[Tracing] Did not create ${a} transaction because a pageload or navigation transaction is in progress.`,
        );
      return;
    }
    if (
      (n &&
        (n.setFinishReason("interactionInterrupted"), n.end(), (n = void 0)),
      !t.name)
    ) {
      A &&
        m.warn(
          `[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`,
        );
      return;
    }
    const { location: u } = E,
      l = {
        name: t.name,
        op: a,
        trimEnd: !0,
        data: { [me]: t.context ? cp(t.context) : "url" },
      };
    n = xn(re(), l, s, i, !0, { location: u }, o);
  };
  ["click"].forEach((s) => {
    E.document && addEventListener(s, r, { once: !1, capture: !0 });
  });
}
function op(e) {
  return "duration" in e;
}
const Hi = 10;
function ap(e, t) {
  const n = ({ entries: r }) => {
    const s = B(),
      i =
        s !== void 0 && s.getIntegrationByName !== void 0
          ? s.getIntegrationByName("Replay")
          : void 0,
      o = i !== void 0 ? i.getReplayId() : void 0,
      a = De(),
      c = de(),
      u = c !== void 0 ? c.getUser() : void 0;
    r.forEach((l) => {
      if (op(l)) {
        const d = l.interactionId;
        if (d === void 0) return;
        const f = e[d],
          h = l.duration,
          p = l.startTime,
          g = Object.keys(e),
          y =
            g.length > 0
              ? g.reduce((_, S) => (e[_].duration < e[S].duration ? _ : S))
              : void 0;
        if (
          (l.entryType === "first-input" &&
            g
              .map((S) => e[S])
              .some((S) => S.duration === h && S.startTime === p)) ||
          !d
        )
          return;
        if (f) f.duration = Math.max(f.duration, h);
        else if (g.length < Hi || y === void 0 || h > e[y].duration) {
          const _ = t.name,
            S = t.context;
          _ &&
            S &&
            (y && Object.keys(e).length >= Hi && delete e[y],
            (e[d] = {
              routeName: _,
              duration: h,
              parentContext: S,
              user: u,
              activeTransaction: a,
              replayId: o,
              startTime: p,
            }));
        }
      }
    });
  };
  (Ye("event", n), Ye("first-input", n));
}
function cp(e) {
  const t = e.attributes && e.attributes[me],
    n = e.data && e.data[me],
    r = e.metadata && e.metadata.source;
  return t || n || r;
}
const H = D;
let Wr = 0;
function Ha() {
  return Wr > 0;
}
function up() {
  (Wr++,
    setTimeout(() => {
      Wr--;
    }));
}
function kt(e, t = {}, n) {
  if (typeof e != "function") return e;
  try {
    const s = e.__sentry_wrapped__;
    if (s) return typeof s == "function" ? s : e;
    if (cs(e)) return e;
  } catch {
    return e;
  }
  const r = function () {
    const s = Array.prototype.slice.call(arguments);
    try {
      const i = s.map((o) => kt(o, t));
      return e.apply(this, i);
    } catch (i) {
      throw (
        up(),
        Bd((o) => {
          (o.addEventProcessor(
            (a) => (
              t.mechanism && (Mr(a, void 0), Vt(a, t.mechanism)),
              (a.extra = { ...a.extra, arguments: s }),
              a
            ),
          ),
            _s(i));
        }),
        i
      );
    }
  };
  try {
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s]);
  } catch {}
  (Do(r, e), nt(e, "__sentry_wrapped__", r));
  try {
    Object.getOwnPropertyDescriptor(r, "name").configurable &&
      Object.defineProperty(r, "name", {
        get() {
          return e.name;
        },
      });
  } catch {}
  return r;
}
const Oe = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function Ua(e, t) {
  const n = Ts(e, t),
    r = { type: t && t.name, value: hp(t) };
  return (
    n.length && (r.stacktrace = { frames: n }),
    r.type === void 0 &&
      r.value === "" &&
      (r.value = "Unrecoverable error caught"),
    r
  );
}
function lp(e, t, n, r) {
  const s = B(),
    i = s && s.getOptions().normalizeDepth,
    o = {
      exception: {
        values: [
          {
            type: qn(t)
              ? t.constructor.name
              : r
                ? "UnhandledRejection"
                : "Error",
            value: gp(t, { isUnhandledRejection: r }),
          },
        ],
      },
      extra: { __serialized__: Wo(t, i) },
    };
  if (n) {
    const a = Ts(e, n);
    a.length && (o.exception.values[0].stacktrace = { frames: a });
  }
  return o;
}
function Er(e, t) {
  return { exception: { values: [Ua(e, t)] } };
}
function Ts(e, t) {
  const n = t.stacktrace || t.stack || "",
    r = fp(t);
  try {
    return e(n, r);
  } catch {}
  return [];
}
const dp = /Minified React error #\d+;/i;
function fp(e) {
  if (e) {
    if (typeof e.framesToPop == "number") return e.framesToPop;
    if (dp.test(e.message)) return 1;
  }
  return 0;
}
function hp(e) {
  const t = e && e.message;
  return t
    ? t.error && typeof t.error.message == "string"
      ? t.error.message
      : t
    : "No error message";
}
function pp(e, t, n, r) {
  const s = (n && n.syntheticException) || void 0,
    i = Is(e, t, s, r);
  return (
    Vt(i),
    (i.level = "error"),
    n && n.event_id && (i.event_id = n.event_id),
    Tt(i)
  );
}
function mp(e, t, n = "info", r, s) {
  const i = (r && r.syntheticException) || void 0,
    o = qr(e, t, i, s);
  return ((o.level = n), r && r.event_id && (o.event_id = r.event_id), Tt(o));
}
function Is(e, t, n, r, s) {
  let i;
  if (ss(t) && t.error) return Er(e, t.error);
  if (Zs(t) || fl(t)) {
    const o = t;
    if ("stack" in t) i = Er(e, t);
    else {
      const a = o.name || (Zs(o) ? "DOMError" : "DOMException"),
        c = o.message ? `${a}: ${o.message}` : a;
      ((i = qr(e, c, n, r)), Mr(i, c));
    }
    return (
      "code" in o && (i.tags = { ...i.tags, "DOMException.code": `${o.code}` }),
      i
    );
  }
  return Ro(t)
    ? Er(e, t)
    : vt(t) || qn(t)
      ? ((i = lp(e, t, n, s)), Vt(i, { synthetic: !0 }), i)
      : ((i = qr(e, t, n, r)), Mr(i, `${t}`), Vt(i, { synthetic: !0 }), i);
}
function qr(e, t, n, r) {
  const s = {};
  if (r && n) {
    const i = Ts(e, n);
    i.length &&
      (s.exception = { values: [{ value: t, stacktrace: { frames: i } }] });
  }
  if (is(t)) {
    const { __sentry_template_string__: i, __sentry_template_values__: o } = t;
    return ((s.logentry = { message: i, params: o }), s);
  }
  return ((s.message = t), s);
}
function gp(e, { isUnhandledRejection: t }) {
  const n = xl(e),
    r = t ? "promise rejection" : "exception";
  return ss(e)
    ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\``
    : qn(e)
      ? `Event \`${_p(e)}\` (type=${e.type}) captured as ${r}`
      : `Object captured as ${r} with keys: ${n}`;
}
function _p(e) {
  try {
    const t = Object.getPrototypeOf(e);
    return t ? t.constructor.name : void 0;
  } catch {}
}
function yp(e, { metadata: t, tunnel: n, dsn: r }) {
  const s = {
      event_id: e.event_id,
      sent_at: new Date().toISOString(),
      ...(t && t.sdk && { sdk: { name: t.sdk.name, version: t.sdk.version } }),
      ...(!!n && !!r && { dsn: Nt(r) }),
    },
    i = Sp(e);
  return Ve(s, [i]);
}
function Sp(e) {
  return [{ type: "user_report" }, e];
}
class bp extends If {
  constructor(t) {
    const n = H.SENTRY_SDK_SOURCE || Zl();
    (Ea(t, "browser", ["browser"], n),
      super(t),
      t.sendClientReports &&
        H.document &&
        H.document.addEventListener("visibilitychange", () => {
          H.document.visibilityState === "hidden" && this._flushOutcomes();
        }));
  }
  eventFromException(t, n) {
    return pp(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return mp(
      this._options.stackParser,
      t,
      n,
      r,
      this._options.attachStacktrace,
    );
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      Oe && m.warn("SDK not enabled, will not capture user feedback.");
      return;
    }
    const n = yp(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel,
    });
    this._sendEnvelope(n);
  }
  _prepareEvent(t, n, r) {
    return (
      (t.platform = t.platform || "javascript"),
      super._prepareEvent(t, n, r)
    );
  }
  _flushOutcomes() {
    const t = this._clearOutcomes();
    if (t.length === 0) {
      Oe && m.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      Oe && m.log("No dsn provided, will not send outcomes");
      return;
    }
    Oe && m.log("Sending outcomes:", t);
    const n = Ed(t, this._options.tunnel && Nt(this._dsn));
    this._sendEnvelope(n);
  }
}
let Ht;
function Ep() {
  if (Ht) return Ht;
  if (Nr(H.fetch)) return (Ht = H.fetch.bind(H));
  const e = H.document;
  let t = H.fetch;
  if (e && typeof e.createElement == "function")
    try {
      const n = e.createElement("iframe");
      ((n.hidden = !0), e.head.appendChild(n));
      const r = n.contentWindow;
      (r && r.fetch && (t = r.fetch), e.head.removeChild(n));
    } catch (n) {
      Oe &&
        m.warn(
          "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
          n,
        );
    }
  return (Ht = t.bind(H));
}
function vp() {
  Ht = void 0;
}
function Tp(e, t = Ep()) {
  let n = 0,
    r = 0;
  function s(i) {
    const o = i.body.length;
    ((n += o), r++);
    const a = {
      body: i.body,
      method: "POST",
      referrerPolicy: "origin",
      headers: e.headers,
      keepalive: n <= 6e4 && r < 15,
      ...e.fetchOptions,
    };
    try {
      return t(e.url, a).then(
        (c) => (
          (n -= o),
          r--,
          {
            statusCode: c.status,
            headers: {
              "x-sentry-rate-limits": c.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": c.headers.get("Retry-After"),
            },
          }
        ),
      );
    } catch (c) {
      return (vp(), (n -= o), r--, ds(c));
    }
  }
  return ba(e, s);
}
const Ip = 4;
function wp(e) {
  function t(n) {
    return new he((r, s) => {
      const i = new XMLHttpRequest();
      ((i.onerror = s),
        (i.onreadystatechange = () => {
          i.readyState === Ip &&
            r({
              statusCode: i.status,
              headers: {
                "x-sentry-rate-limits": i.getResponseHeader(
                  "X-Sentry-Rate-Limits",
                ),
                "retry-after": i.getResponseHeader("Retry-After"),
              },
            });
        }),
        i.open("POST", e.url));
      for (const o in e.headers)
        Object.prototype.hasOwnProperty.call(e.headers, o) &&
          i.setRequestHeader(o, e.headers[o]);
      i.send(n.body);
    });
  }
  return ba(e, t);
}
const Qn = "?",
  kp = 30,
  Rp = 40,
  Cp = 50;
function ws(e, t, n, r) {
  const s = { filename: e, function: t, in_app: !0 };
  return (n !== void 0 && (s.lineno = n), r !== void 0 && (s.colno = r), s);
}
const Mp =
    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  xp = /\((\S*)(?::(\d+))(?::(\d+))\)/,
  Op = (e) => {
    const t = Mp.exec(e);
    if (t) {
      if (t[2] && t[2].indexOf("eval") === 0) {
        const i = xp.exec(t[2]);
        i && ((t[2] = i[1]), (t[3] = i[2]), (t[4] = i[3]));
      }
      const [r, s] = za(t[1] || Qn, t[2]);
      return ws(s, r, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
    }
  },
  Ap = [kp, Op],
  Np =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
  Dp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
  Lp = (e) => {
    const t = Np.exec(e);
    if (t) {
      if (t[3] && t[3].indexOf(" > eval") > -1) {
        const i = Dp.exec(t[3]);
        i &&
          ((t[1] = t[1] || "eval"), (t[3] = i[1]), (t[4] = i[2]), (t[5] = ""));
      }
      let r = t[3],
        s = t[1] || Qn;
      return (
        ([s, r] = za(s, r)),
        ws(r, s, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
      );
    }
  },
  Pp = [Cp, Lp],
  Fp =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  Bp = (e) => {
    const t = Fp.exec(e);
    return t ? ws(t[2], t[1] || Qn, +t[3], t[4] ? +t[4] : void 0) : void 0;
  },
  $p = [Rp, Bp],
  Hp = [Ap, Pp, $p],
  Up = Fo(...Hp),
  za = (e, t) => {
    const n = e.indexOf("safari-extension") !== -1,
      r = e.indexOf("safari-web-extension") !== -1;
    return n || r
      ? [
          e.indexOf("@") !== -1 ? e.split("@")[0] : Qn,
          n ? `safari-extension:${t}` : `safari-web-extension:${t}`,
        ]
      : [e, t];
  },
  En = 1024,
  zp = "Breadcrumbs",
  jp = (e = {}) => {
    const t = {
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0,
      ...e,
    };
    return {
      name: zp,
      setupOnce() {},
      setup(n) {
        (t.console && Dl(Yp(n)),
          t.dom && Ho(Gp(n, t.dom)),
          t.xhr && ls(Vp(n)),
          t.fetch && us(Xp(n)),
          t.history && Qt(Kp(n)),
          t.sentry && n.on && n.on("beforeSendEvent", qp(n)));
      },
    };
  },
  Wp = jp;
function qp(e) {
  return function (n) {
    B() === e &&
      Ge(
        {
          category: `sentry.${n.type === "transaction" ? "transaction" : "event"}`,
          event_id: n.event_id,
          level: n.level,
          message: He(n),
        },
        { event: n },
      );
  };
}
function Gp(e, t) {
  return function (r) {
    if (B() !== e) return;
    let s,
      i,
      o = typeof t == "object" ? t.serializeAttribute : void 0,
      a =
        typeof t == "object" && typeof t.maxStringLength == "number"
          ? t.maxStringLength
          : void 0;
    (a &&
      a > En &&
      (Oe &&
        m.warn(
          `\`dom.maxStringLength\` cannot exceed ${En}, but a value of ${a} was configured. Sentry will use ${En} instead.`,
        ),
      (a = En)),
      typeof o == "string" && (o = [o]));
    try {
      const u = r.event,
        l = Jp(u) ? u.target : u;
      ((s = qe(l, { keyAttrs: o, maxStringLength: a })), (i = Ao(l)));
    } catch {
      s = "<unknown>";
    }
    if (s.length === 0) return;
    const c = { category: `ui.${r.name}`, message: s };
    (i && (c.data = { "ui.component_name": i }),
      Ge(c, { event: r.event, name: r.name, global: r.global }));
  };
}
function Yp(e) {
  return function (n) {
    if (B() !== e) return;
    const r = {
      category: "console",
      data: { arguments: n.args, logger: "console" },
      level: cd(n.level),
      message: Qs(n.args, " "),
    };
    if (n.level === "assert")
      if (n.args[0] === !1)
        ((r.message = `Assertion failed: ${Qs(n.args.slice(1), " ") || "console.assert"}`),
          (r.data.arguments = n.args.slice(1)));
      else return;
    Ge(r, { input: n.args, level: n.level });
  };
}
function Vp(e) {
  return function (n) {
    if (B() !== e) return;
    const { startTimestamp: r, endTimestamp: s } = n,
      i = n.xhr[Ue];
    if (!r || !s || !i) return;
    const { method: o, url: a, status_code: c, body: u } = i,
      l = { method: o, url: a, status_code: c },
      d = { xhr: n.xhr, input: u, startTimestamp: r, endTimestamp: s };
    Ge({ category: "xhr", data: l, type: "http" }, d);
  };
}
function Xp(e) {
  return function (n) {
    if (B() !== e) return;
    const { startTimestamp: r, endTimestamp: s } = n;
    if (
      s &&
      !(n.fetchData.url.match(/sentry_key/) && n.fetchData.method === "POST")
    )
      if (n.error) {
        const i = n.fetchData,
          o = {
            data: n.error,
            input: n.args,
            startTimestamp: r,
            endTimestamp: s,
          };
        Ge({ category: "fetch", data: i, level: "error", type: "http" }, o);
      } else {
        const i = n.response,
          o = { ...n.fetchData, status_code: i && i.status },
          a = {
            input: n.args,
            response: i,
            startTimestamp: r,
            endTimestamp: s,
          };
        Ge({ category: "fetch", data: o, type: "http" }, a);
      }
  };
}
function Kp(e) {
  return function (n) {
    if (B() !== e) return;
    let r = n.from,
      s = n.to;
    const i = et(H.location.href);
    let o = r ? et(r) : void 0;
    const a = et(s);
    ((!o || !o.path) && (o = i),
      i.protocol === a.protocol && i.host === a.host && (s = a.relative),
      i.protocol === o.protocol && i.host === o.host && (r = o.relative),
      Ge({ category: "navigation", data: { from: r, to: s } }));
  };
}
function Jp(e) {
  return !!e && !!e.target;
}
const Zp = "Dedupe",
  Qp = () => {
    let e;
    return {
      name: Zp,
      setupOnce() {},
      processEvent(t) {
        if (t.type) return t;
        try {
          if (tm(t, e))
            return (
              Oe &&
                m.warn(
                  "Event dropped due to being a duplicate of previously captured event.",
                ),
              null
            );
        } catch {}
        return (e = t);
      },
    };
  },
  em = Qp;
function tm(e, t) {
  return t ? !!(nm(e, t) || rm(e, t)) : !1;
}
function nm(e, t) {
  const n = e.message,
    r = t.message;
  return !(
    (!n && !r) ||
    (n && !r) ||
    (!n && r) ||
    n !== r ||
    !Wa(e, t) ||
    !ja(e, t)
  );
}
function rm(e, t) {
  const n = Ui(t),
    r = Ui(e);
  return !(
    !n ||
    !r ||
    n.type !== r.type ||
    n.value !== r.value ||
    !Wa(e, t) ||
    !ja(e, t)
  );
}
function ja(e, t) {
  let n = zi(e),
    r = zi(t);
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r) || ((n = n), (r = r), r.length !== n.length))
    return !1;
  for (let s = 0; s < r.length; s++) {
    const i = r[s],
      o = n[s];
    if (
      i.filename !== o.filename ||
      i.lineno !== o.lineno ||
      i.colno !== o.colno ||
      i.function !== o.function
    )
      return !1;
  }
  return !0;
}
function Wa(e, t) {
  let n = e.fingerprint,
    r = t.fingerprint;
  if (!n && !r) return !0;
  if ((n && !r) || (!n && r)) return !1;
  ((n = n), (r = r));
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function Ui(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function zi(e) {
  const t = e.exception;
  if (t)
    try {
      return t.values[0].stacktrace.frames;
    } catch {
      return;
    }
}
const sm = "GlobalHandlers",
  im = (e = {}) => {
    const t = { onerror: !0, onunhandledrejection: !0, ...e };
    return {
      name: sm,
      setupOnce() {
        Error.stackTraceLimit = 50;
      },
      setup(n) {
        (t.onerror && (am(n), ji("onerror")),
          t.onunhandledrejection && (cm(n), ji("onunhandledrejection")));
      },
    };
  },
  om = im;
function am(e) {
  zo((t) => {
    const { stackParser: n, attachStacktrace: r } = Ga();
    if (B() !== e || Ha()) return;
    const { msg: s, url: i, line: o, column: a, error: c } = t,
      u =
        c === void 0 && Re(s)
          ? dm(s, i, o, a)
          : qa(Is(n, c || s, void 0, r, !1), i, o, a);
    ((u.level = "error"),
      na(u, {
        originalException: c,
        mechanism: { handled: !1, type: "onerror" },
      }));
  });
}
function cm(e) {
  jo((t) => {
    const { stackParser: n, attachStacktrace: r } = Ga();
    if (B() !== e || Ha()) return;
    const s = um(t),
      i = os(s) ? lm(s) : Is(n, s, void 0, r, !0);
    ((i.level = "error"),
      na(i, {
        originalException: s,
        mechanism: { handled: !1, type: "onunhandledrejection" },
      }));
  });
}
function um(e) {
  if (os(e)) return e;
  const t = e;
  try {
    if ("reason" in t) return t.reason;
    if ("detail" in t && "reason" in t.detail) return t.detail.reason;
  } catch {}
  return e;
}
function lm(e) {
  return {
    exception: {
      values: [
        {
          type: "UnhandledRejection",
          value: `Non-Error promise rejection captured with value: ${String(e)}`,
        },
      ],
    },
  };
}
function dm(e, t, n, r) {
  const s =
    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
  let i = ss(e) ? e.message : e,
    o = "Error";
  const a = i.match(s);
  return (
    a && ((o = a[1]), (i = a[2])),
    qa({ exception: { values: [{ type: o, value: i }] } }, t, n, r)
  );
}
function qa(e, t, n, r) {
  const s = (e.exception = e.exception || {}),
    i = (s.values = s.values || []),
    o = (i[0] = i[0] || {}),
    a = (o.stacktrace = o.stacktrace || {}),
    c = (a.frames = a.frames || []),
    u = isNaN(parseInt(r, 10)) ? void 0 : r,
    l = isNaN(parseInt(n, 10)) ? void 0 : n,
    d = Re(t) && t.length > 0 ? t : El();
  return (
    c.length === 0 &&
      c.push({ colno: u, filename: d, function: "?", in_app: !0, lineno: l }),
    e
  );
}
function ji(e) {
  Oe && m.log(`Global Handler attached: ${e}`);
}
function Ga() {
  const e = B();
  return (
    (e && e.getOptions()) || { stackParser: () => [], attachStacktrace: !1 }
  );
}
const fm = "HttpContext",
  hm = () => ({
    name: fm,
    setupOnce() {},
    preprocessEvent(e) {
      if (!H.navigator && !H.location && !H.document) return;
      const t = (e.request && e.request.url) || (H.location && H.location.href),
        { referrer: n } = H.document || {},
        { userAgent: r } = H.navigator || {},
        s = {
          ...(e.request && e.request.headers),
          ...(n && { Referer: n }),
          ...(r && { "User-Agent": r }),
        },
        i = { ...e.request, ...(t && { url: t }), headers: s };
      e.request = i;
    },
  }),
  pm = hm,
  mm = "cause",
  gm = 5,
  _m = "LinkedErrors",
  ym = (e = {}) => {
    const t = e.limit || gm,
      n = e.key || mm;
    return {
      name: _m,
      setupOnce() {},
      preprocessEvent(r, s, i) {
        const o = i.getOptions();
        _l(Ua, o.stackParser, o.maxValueLength, n, t, r, s);
      },
    };
  },
  Sm = ym,
  bm = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload",
  ],
  Em = "TryCatch",
  vm = (e = {}) => {
    const t = {
      XMLHttpRequest: !0,
      eventTarget: !0,
      requestAnimationFrame: !0,
      setInterval: !0,
      setTimeout: !0,
      ...e,
    };
    return {
      name: Em,
      setupOnce() {
        (t.setTimeout && ee(H, "setTimeout", Wi),
          t.setInterval && ee(H, "setInterval", Wi),
          t.requestAnimationFrame && ee(H, "requestAnimationFrame", Im),
          t.XMLHttpRequest &&
            "XMLHttpRequest" in H &&
            ee(XMLHttpRequest.prototype, "send", wm));
        const n = t.eventTarget;
        n && (Array.isArray(n) ? n : bm).forEach(km);
      },
    };
  },
  Tm = vm;
function Wi(e) {
  return function (...t) {
    const n = t[0];
    return (
      (t[0] = kt(n, {
        mechanism: {
          data: { function: Ne(e) },
          handled: !1,
          type: "instrument",
        },
      })),
      e.apply(this, t)
    );
  };
}
function Im(e) {
  return function (t) {
    return e.apply(this, [
      kt(t, {
        mechanism: {
          data: { function: "requestAnimationFrame", handler: Ne(e) },
          handled: !1,
          type: "instrument",
        },
      }),
    ]);
  };
}
function wm(e) {
  return function (...t) {
    const n = this;
    return (
      ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((s) => {
        s in n &&
          typeof n[s] == "function" &&
          ee(n, s, function (i) {
            const o = {
                mechanism: {
                  data: { function: s, handler: Ne(i) },
                  handled: !1,
                  type: "instrument",
                },
              },
              a = cs(i);
            return (a && (o.mechanism.data.handler = Ne(a)), kt(i, o));
          });
      }),
      e.apply(this, t)
    );
  };
}
function km(e) {
  const t = H,
    n = t[e] && t[e].prototype;
  !n ||
    !n.hasOwnProperty ||
    !n.hasOwnProperty("addEventListener") ||
    (ee(n, "addEventListener", function (r) {
      return function (s, i, o) {
        try {
          typeof i.handleEvent == "function" &&
            (i.handleEvent = kt(i.handleEvent, {
              mechanism: {
                data: { function: "handleEvent", handler: Ne(i), target: e },
                handled: !1,
                type: "instrument",
              },
            }));
        } catch {}
        return r.apply(this, [
          s,
          kt(i, {
            mechanism: {
              data: { function: "addEventListener", handler: Ne(i), target: e },
              handled: !1,
              type: "instrument",
            },
          }),
          o,
        ]);
      };
    }),
    ee(n, "removeEventListener", function (r) {
      return function (s, i, o) {
        const a = i;
        try {
          const c = a && a.__sentry_wrapped__;
          c && r.call(this, s, c, o);
        } catch {}
        return r.call(this, s, a, o);
      };
    }));
}
const Rm = [zf(), eh(), Tm(), Wp(), om(), Sm(), em(), pm()];
function Ya(e) {
  return [...Rm];
}
function Cm(e = {}) {
  (e.defaultIntegrations === void 0 && (e.defaultIntegrations = Ya()),
    e.release === void 0 &&
      (typeof __SENTRY_RELEASE__ == "string" &&
        (e.release = __SENTRY_RELEASE__),
      H.SENTRY_RELEASE &&
        H.SENTRY_RELEASE.id &&
        (e.release = H.SENTRY_RELEASE.id)),
    e.autoSessionTracking === void 0 && (e.autoSessionTracking = !0),
    e.sendClientReports === void 0 && (e.sendClientReports = !0));
  const t = {
    ...e,
    stackParser: Al(e.stackParser || Up),
    integrations: yf(e),
    transport: e.transport || (Uo() ? Tp : wp),
  };
  (Cf(bp, t), e.autoSessionTracking && Mm());
}
function Mm() {
  if (typeof H.document > "u") {
    Oe &&
      m.warn(
        "Session tracking in non-browser environment with @sentry/browser is not supported.",
      );
    return;
  }
  (_i({ ignoreDuration: !0 }),
    yi(),
    Qt(({ from: e, to: t }) => {
      e !== void 0 && e !== t && (_i({ ignoreDuration: !0 }), yi());
    }));
}
const j = D,
  ks = "sentryReplaySession",
  xm = "replay_event",
  Rs = "Unable to send Replay",
  Om = 3e5,
  Am = 9e5,
  Nm = 5e3,
  Dm = 5500,
  Lm = 6e4,
  Pm = 5e3,
  Fm = 3,
  qi = 15e4,
  vn = 5e3,
  Bm = 3e3,
  $m = 300,
  Cs = 2e7,
  Hm = 4999,
  Um = 15e3,
  Gi = 36e5;
function zm(e, t) {
  return e ?? t();
}
function Ln(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length;) {
    const s = e[r],
      i = e[r + 1];
    if (
      ((r += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = i(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = i((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
var Z;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(Z || (Z = {}));
function jm(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Wt(e) {
  const t = Ln([e, "optionalAccess", (n) => n.host]);
  return Ln([t, "optionalAccess", (n) => n.shadowRoot]) === e;
}
function qt(e) {
  return Object.prototype.toString.call(e) === "[object ShadowRoot]";
}
function Wm(e) {
  return (
    e.includes(" background-clip: text;") &&
      !e.includes(" -webkit-background-clip: text;") &&
      (e = e.replace(
        " background-clip: text;",
        " -webkit-background-clip: text; background-clip: text;",
      )),
    e
  );
}
function qm(e) {
  const { cssText: t } = e;
  if (t.split('"').length < 3) return t;
  const n = ["@import", `url(${JSON.stringify(e.href)})`];
  return (
    e.layerName === ""
      ? n.push("layer")
      : e.layerName && n.push(`layer(${e.layerName})`),
    e.supportsText && n.push(`supports(${e.supportsText})`),
    e.media.length && n.push(e.media.mediaText),
    n.join(" ") + ";"
  );
}
function Pn(e) {
  try {
    const t = e.rules || e.cssRules;
    return t ? Wm(Array.from(t, Va).join("")) : null;
  } catch {
    return null;
  }
}
function Va(e) {
  let t;
  if (Ym(e))
    try {
      t = Pn(e.styleSheet) || qm(e);
    } catch {}
  else if (Vm(e) && e.selectorText.includes(":")) return Gm(e.cssText);
  return t || e.cssText;
}
function Gm(e) {
  const t = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
  return e.replace(t, "$1\\$2");
}
function Ym(e) {
  return "styleSheet" in e;
}
function Vm(e) {
  return "selectorText" in e;
}
class Xa {
  constructor() {
    ((this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap()));
  }
  getId(t) {
    if (!t) return -1;
    const n = Ln([
      this,
      "access",
      (r) => r.getMeta,
      "call",
      (r) => r(t),
      "optionalAccess",
      (r) => r.id,
    ]);
    return zm(n, () => -1);
  }
  getNode(t) {
    return this.idNodeMap.get(t) || null;
  }
  getIds() {
    return Array.from(this.idNodeMap.keys());
  }
  getMeta(t) {
    return this.nodeMetaMap.get(t) || null;
  }
  removeNodeFromMap(t) {
    const n = this.getId(t);
    (this.idNodeMap.delete(n),
      t.childNodes && t.childNodes.forEach((r) => this.removeNodeFromMap(r)));
  }
  has(t) {
    return this.idNodeMap.has(t);
  }
  hasNode(t) {
    return this.nodeMetaMap.has(t);
  }
  add(t, n) {
    const r = n.id;
    (this.idNodeMap.set(r, t), this.nodeMetaMap.set(t, n));
  }
  replace(t, n) {
    const r = this.getNode(t);
    if (r) {
      const s = this.nodeMetaMap.get(r);
      s && this.nodeMetaMap.set(n, s);
    }
    this.idNodeMap.set(t, n);
  }
  reset() {
    ((this.idNodeMap = new Map()), (this.nodeMetaMap = new WeakMap()));
  }
}
function Xm() {
  return new Xa();
}
function er({ maskInputOptions: e, tagName: t, type: n }) {
  return (
    t === "OPTION" && (t = "SELECT"),
    !!(
      e[t.toLowerCase()] ||
      (n && e[n]) ||
      n === "password" ||
      (t === "INPUT" && !n && e.text)
    )
  );
}
function Xt({ isMasked: e, element: t, value: n, maskInputFn: r }) {
  let s = n || "";
  return e ? (r && (s = r(s, t)), "*".repeat(s.length)) : s;
}
function Rt(e) {
  return e.toLowerCase();
}
function Gr(e) {
  return e.toUpperCase();
}
const Yi = "__rrweb_original__";
function Km(e) {
  const t = e.getContext("2d");
  if (!t) return !0;
  const n = 50;
  for (let r = 0; r < e.width; r += n)
    for (let s = 0; s < e.height; s += n) {
      const i = t.getImageData,
        o = Yi in i ? i[Yi] : i;
      if (
        new Uint32Array(
          o.call(t, r, s, Math.min(n, e.width - r), Math.min(n, e.height - s))
            .data.buffer,
        ).some((c) => c !== 0)
      )
        return !1;
    }
  return !0;
}
function Ms(e) {
  const t = e.type;
  return e.hasAttribute("data-rr-is-password") ? "password" : t ? Rt(t) : null;
}
function Fn(e, t, n) {
  return t === "INPUT" && (n === "radio" || n === "checkbox")
    ? e.getAttribute("value") || ""
    : e.value;
}
let Jm = 1;
const Zm = new RegExp("[^a-z0-9-_:]"),
  Kt = -2;
function xs() {
  return Jm++;
}
function Qm(e) {
  if (e instanceof HTMLFormElement) return "form";
  const t = Rt(e.tagName);
  return Zm.test(t) ? "div" : t;
}
function eg(e) {
  let t = "";
  return (
    e.indexOf("//") > -1
      ? (t = e.split("/").slice(0, 3).join("/"))
      : (t = e.split("/")[0]),
    (t = t.split("?")[0]),
    t
  );
}
let lt, Vi;
const tg = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
  ng = /^(?:[a-z+]+:)?\/\//i,
  rg = /^www\..*/i,
  sg = /^(data:)([^,]*),(.*)/i;
function Bn(e, t) {
  return (e || "").replace(tg, (n, r, s, i, o, a) => {
    const c = s || o || a,
      u = r || i || "";
    if (!c) return n;
    if (ng.test(c) || rg.test(c)) return `url(${u}${c}${u})`;
    if (sg.test(c)) return `url(${u}${c}${u})`;
    if (c[0] === "/") return `url(${u}${eg(t) + c}${u})`;
    const l = t.split("/"),
      d = c.split("/");
    l.pop();
    for (const f of d) f !== "." && (f === ".." ? l.pop() : l.push(f));
    return `url(${u}${l.join("/")}${u})`;
  });
}
const ig = /^[^ \t\n\r\u000c]+/,
  og = /^[, \t\n\r\u000c]+/;
function ag(e, t) {
  if (t.trim() === "") return t;
  let n = 0;
  function r(i) {
    let o;
    const a = i.exec(t.substring(n));
    return a ? ((o = a[0]), (n += o.length), o) : "";
  }
  const s = [];
  for (; r(og), !(n >= t.length);) {
    let i = r(ig);
    if (i.slice(-1) === ",")
      ((i = mt(e, i.substring(0, i.length - 1))), s.push(i));
    else {
      let o = "";
      i = mt(e, i);
      let a = !1;
      for (;;) {
        const c = t.charAt(n);
        if (c === "") {
          s.push((i + o).trim());
          break;
        } else if (a) c === ")" && (a = !1);
        else if (c === ",") {
          ((n += 1), s.push((i + o).trim()));
          break;
        } else c === "(" && (a = !0);
        ((o += c), (n += 1));
      }
    }
  }
  return s.join(", ");
}
function mt(e, t) {
  if (!t || t.trim() === "") return t;
  const n = e.createElement("a");
  return ((n.href = t), n.href);
}
function cg(e) {
  return !!(e.tagName === "svg" || e.ownerSVGElement);
}
function Os() {
  const e = document.createElement("a");
  return ((e.href = ""), e.href);
}
function Ka(e, t, n, r, s, i) {
  return (
    r &&
    (n === "src" ||
    (n === "href" && !(t === "use" && r[0] === "#")) ||
    (n === "xlink:href" && r[0] !== "#") ||
    (n === "background" && (t === "table" || t === "td" || t === "th"))
      ? mt(e, r)
      : n === "srcset"
        ? ag(e, r)
        : n === "style"
          ? Bn(r, Os())
          : t === "object" && n === "data"
            ? mt(e, r)
            : typeof i == "function"
              ? i(n, r, s)
              : r)
  );
}
function Ja(e, t, n) {
  return (e === "video" || e === "audio") && t === "autoplay";
}
function ug(e, t, n, r) {
  try {
    if (r && e.matches(r)) return !1;
    if (typeof t == "string") {
      if (e.classList.contains(t)) return !0;
    } else
      for (let s = e.classList.length; s--;) {
        const i = e.classList[s];
        if (t.test(i)) return !0;
      }
    if (n) return e.matches(n);
  } catch {}
  return !1;
}
function lg(e, t) {
  for (let n = e.classList.length; n--;) {
    const r = e.classList[n];
    if (t.test(r)) return !0;
  }
  return !1;
}
function Qe(e, t, n = 1 / 0, r = 0) {
  return !e || e.nodeType !== e.ELEMENT_NODE || r > n
    ? -1
    : t(e)
      ? r
      : Qe(e.parentNode, t, n, r + 1);
}
function gt(e, t) {
  return (n) => {
    const r = n;
    if (r === null) return !1;
    try {
      if (e) {
        if (typeof e == "string") {
          if (r.matches(`.${e}`)) return !0;
        } else if (lg(r, e)) return !0;
      }
      return !!(t && r.matches(t));
    } catch {
      return !1;
    }
  };
}
function Ct(e, t, n, r, s, i) {
  try {
    const o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
    if (o === null) return !1;
    if (o.tagName === "INPUT") {
      const u = o.getAttribute("autocomplete");
      if (
        [
          "current-password",
          "new-password",
          "cc-number",
          "cc-exp",
          "cc-exp-month",
          "cc-exp-year",
          "cc-csc",
        ].includes(u)
      )
        return !0;
    }
    let a = -1,
      c = -1;
    if (i) {
      if (((c = Qe(o, gt(r, s))), c < 0)) return !0;
      a = Qe(o, gt(t, n), c >= 0 ? c : 1 / 0);
    } else {
      if (((a = Qe(o, gt(t, n))), a < 0)) return !1;
      c = Qe(o, gt(r, s), a >= 0 ? a : 1 / 0);
    }
    return a >= 0 ? (c >= 0 ? a <= c : !0) : c >= 0 ? !1 : !!i;
  } catch {}
  return !!i;
}
function dg(e, t, n) {
  const r = e.contentWindow;
  if (!r) return;
  let s = !1,
    i;
  try {
    i = r.document.readyState;
  } catch {
    return;
  }
  if (i !== "complete") {
    const a = setTimeout(() => {
      s || (t(), (s = !0));
    }, n);
    e.addEventListener("load", () => {
      (clearTimeout(a), (s = !0), t());
    });
    return;
  }
  const o = "about:blank";
  if (r.location.href !== o || e.src === o || e.src === "")
    return (setTimeout(t, 0), e.addEventListener("load", t));
  e.addEventListener("load", t);
}
function fg(e, t, n) {
  let r = !1,
    s;
  try {
    s = e.sheet;
  } catch {
    return;
  }
  if (s) return;
  const i = setTimeout(() => {
    r || (t(), (r = !0));
  }, n);
  e.addEventListener("load", () => {
    (clearTimeout(i), (r = !0), t());
  });
}
function hg(e, t) {
  const {
      doc: n,
      mirror: r,
      blockClass: s,
      blockSelector: i,
      unblockSelector: o,
      maskAllText: a,
      maskAttributeFn: c,
      maskTextClass: u,
      unmaskTextClass: l,
      maskTextSelector: d,
      unmaskTextSelector: f,
      inlineStylesheet: h,
      maskInputOptions: p = {},
      maskTextFn: g,
      maskInputFn: y,
      dataURLOptions: _ = {},
      inlineImages: S,
      recordCanvas: b,
      keepIframeSrcFn: w,
      newlyAddedElement: T = !1,
    } = t,
    k = pg(n, r);
  switch (e.nodeType) {
    case e.DOCUMENT_NODE:
      return e.compatMode !== "CSS1Compat"
        ? { type: Z.Document, childNodes: [], compatMode: e.compatMode }
        : { type: Z.Document, childNodes: [] };
    case e.DOCUMENT_TYPE_NODE:
      return {
        type: Z.DocumentType,
        name: e.name,
        publicId: e.publicId,
        systemId: e.systemId,
        rootId: k,
      };
    case e.ELEMENT_NODE:
      return gg(e, {
        doc: n,
        blockClass: s,
        blockSelector: i,
        unblockSelector: o,
        inlineStylesheet: h,
        maskAttributeFn: c,
        maskInputOptions: p,
        maskInputFn: y,
        dataURLOptions: _,
        inlineImages: S,
        recordCanvas: b,
        keepIframeSrcFn: w,
        newlyAddedElement: T,
        rootId: k,
        maskTextClass: u,
        unmaskTextClass: l,
        maskTextSelector: d,
        unmaskTextSelector: f,
      });
    case e.TEXT_NODE:
      return mg(e, {
        maskAllText: a,
        maskTextClass: u,
        unmaskTextClass: l,
        maskTextSelector: d,
        unmaskTextSelector: f,
        maskTextFn: g,
        maskInputOptions: p,
        maskInputFn: y,
        rootId: k,
      });
    case e.CDATA_SECTION_NODE:
      return { type: Z.CDATA, textContent: "", rootId: k };
    case e.COMMENT_NODE:
      return { type: Z.Comment, textContent: e.textContent || "", rootId: k };
    default:
      return !1;
  }
}
function pg(e, t) {
  if (!t.hasNode(e)) return;
  const n = t.getId(e);
  return n === 1 ? void 0 : n;
}
function mg(e, t) {
  const {
      maskAllText: n,
      maskTextClass: r,
      unmaskTextClass: s,
      maskTextSelector: i,
      unmaskTextSelector: o,
      maskTextFn: a,
      maskInputOptions: c,
      maskInputFn: u,
      rootId: l,
    } = t,
    d = e.parentNode && e.parentNode.tagName;
  let f = e.textContent;
  const h = d === "STYLE" ? !0 : void 0,
    p = d === "SCRIPT" ? !0 : void 0,
    g = d === "TEXTAREA" ? !0 : void 0;
  if (h && f) {
    try {
      e.nextSibling ||
        e.previousSibling ||
        (Ln([
          e,
          "access",
          (_) => _.parentNode,
          "access",
          (_) => _.sheet,
          "optionalAccess",
          (_) => _.cssRules,
        ]) &&
          (f = Pn(e.parentNode.sheet)));
    } catch (_) {
      console.warn(
        `Cannot get CSS styles from text's parentNode. Error: ${_}`,
        e,
      );
    }
    f = Bn(f, Os());
  }
  p && (f = "SCRIPT_PLACEHOLDER");
  const y = Ct(e, r, i, s, o, n);
  if (
    (!h &&
      !p &&
      !g &&
      f &&
      y &&
      (f = a ? a(f, e.parentElement) : f.replace(/[\S]/g, "*")),
    g &&
      f &&
      (c.textarea || y) &&
      (f = u ? u(f, e.parentNode) : f.replace(/[\S]/g, "*")),
    d === "OPTION" && f)
  ) {
    const _ = er({ type: null, tagName: d, maskInputOptions: c });
    f = Xt({
      isMasked: Ct(e, r, i, s, o, _),
      element: e,
      value: f,
      maskInputFn: u,
    });
  }
  return { type: Z.Text, textContent: f || "", isStyle: h, rootId: l };
}
function gg(e, t) {
  const {
      doc: n,
      blockClass: r,
      blockSelector: s,
      unblockSelector: i,
      inlineStylesheet: o,
      maskInputOptions: a = {},
      maskAttributeFn: c,
      maskInputFn: u,
      dataURLOptions: l = {},
      inlineImages: d,
      recordCanvas: f,
      keepIframeSrcFn: h,
      newlyAddedElement: p = !1,
      rootId: g,
      maskTextClass: y,
      unmaskTextClass: _,
      maskTextSelector: S,
      unmaskTextSelector: b,
    } = t,
    w = ug(e, r, s, i),
    T = Qm(e);
  let k = {};
  const x = e.attributes.length;
  for (let I = 0; I < x; I++) {
    const R = e.attributes[I];
    R.name &&
      !Ja(T, R.name, R.value) &&
      (k[R.name] = Ka(n, T, Rt(R.name), R.value, e, c));
  }
  if (T === "link" && o) {
    const I = Array.from(n.styleSheets).find((W) => W.href === e.href);
    let R = null;
    (I && (R = Pn(I)),
      R && (delete k.rel, delete k.href, (k._cssText = Bn(R, I.href))));
  }
  if (
    T === "style" &&
    e.sheet &&
    !(e.innerText || e.textContent || "").trim().length
  ) {
    const I = Pn(e.sheet);
    I && (k._cssText = Bn(I, Os()));
  }
  if (T === "input" || T === "textarea" || T === "select" || T === "option") {
    const I = e,
      R = Ms(I),
      W = Fn(I, Gr(T), R),
      J = I.checked;
    if (R !== "submit" && R !== "button" && W) {
      const te = Ct(
        I,
        y,
        S,
        _,
        b,
        er({ type: R, tagName: Gr(T), maskInputOptions: a }),
      );
      k.value = Xt({ isMasked: te, element: I, value: W, maskInputFn: u });
    }
    J && (k.checked = J);
  }
  if (
    (T === "option" &&
      (e.selected && !a.select ? (k.selected = !0) : delete k.selected),
    T === "canvas" && f)
  ) {
    if (e.__context === "2d")
      Km(e) || (k.rr_dataURL = e.toDataURL(l.type, l.quality));
    else if (!("__context" in e)) {
      const I = e.toDataURL(l.type, l.quality),
        R = document.createElement("canvas");
      ((R.width = e.width), (R.height = e.height));
      const W = R.toDataURL(l.type, l.quality);
      I !== W && (k.rr_dataURL = I);
    }
  }
  if (T === "img" && d) {
    lt || ((lt = n.createElement("canvas")), (Vi = lt.getContext("2d")));
    const I = e,
      R = I.crossOrigin;
    I.crossOrigin = "anonymous";
    const W = () => {
      I.removeEventListener("load", W);
      try {
        ((lt.width = I.naturalWidth),
          (lt.height = I.naturalHeight),
          Vi.drawImage(I, 0, 0),
          (k.rr_dataURL = lt.toDataURL(l.type, l.quality)));
      } catch (J) {
        console.warn(`Cannot inline img src=${I.currentSrc}! Error: ${J}`);
      }
      R ? (k.crossOrigin = R) : I.removeAttribute("crossorigin");
    };
    I.complete && I.naturalWidth !== 0 ? W() : I.addEventListener("load", W);
  }
  if (
    ((T === "audio" || T === "video") &&
      ((k.rr_mediaState = e.paused ? "paused" : "played"),
      (k.rr_mediaCurrentTime = e.currentTime)),
    p ||
      (e.scrollLeft && (k.rr_scrollLeft = e.scrollLeft),
      e.scrollTop && (k.rr_scrollTop = e.scrollTop)),
    w)
  ) {
    const { width: I, height: R } = e.getBoundingClientRect();
    k = { class: k.class, rr_width: `${I}px`, rr_height: `${R}px` };
  }
  T === "iframe" &&
    !h(k.src) &&
    (e.contentDocument || (k.rr_src = k.src), delete k.src);
  let O;
  try {
    customElements.get(T) && (O = !0);
  } catch {}
  return {
    type: Z.Element,
    tagName: T,
    attributes: k,
    childNodes: [],
    isSVG: cg(e) || void 0,
    needBlock: w,
    rootId: g,
    isCustom: O,
  };
}
function z(e) {
  return e == null ? "" : e.toLowerCase();
}
function _g(e, t) {
  if (t.comment && e.type === Z.Comment) return !0;
  if (e.type === Z.Element) {
    if (
      t.script &&
      (e.tagName === "script" ||
        (e.tagName === "link" &&
          (e.attributes.rel === "preload" ||
            e.attributes.rel === "modulepreload") &&
          e.attributes.as === "script") ||
        (e.tagName === "link" &&
          e.attributes.rel === "prefetch" &&
          typeof e.attributes.href == "string" &&
          e.attributes.href.endsWith(".js")))
    )
      return !0;
    if (
      t.headFavicon &&
      ((e.tagName === "link" && e.attributes.rel === "shortcut icon") ||
        (e.tagName === "meta" &&
          (z(e.attributes.name).match(/^msapplication-tile(image|color)$/) ||
            z(e.attributes.name) === "application-name" ||
            z(e.attributes.rel) === "icon" ||
            z(e.attributes.rel) === "apple-touch-icon" ||
            z(e.attributes.rel) === "shortcut icon")))
    )
      return !0;
    if (e.tagName === "meta") {
      if (
        t.headMetaDescKeywords &&
        z(e.attributes.name).match(/^description|keywords$/)
      )
        return !0;
      if (
        t.headMetaSocial &&
        (z(e.attributes.property).match(/^(og|twitter|fb):/) ||
          z(e.attributes.name).match(/^(og|twitter):/) ||
          z(e.attributes.name) === "pinterest")
      )
        return !0;
      if (
        t.headMetaRobots &&
        (z(e.attributes.name) === "robots" ||
          z(e.attributes.name) === "googlebot" ||
          z(e.attributes.name) === "bingbot")
      )
        return !0;
      if (t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0)
        return !0;
      if (
        t.headMetaAuthorship &&
        (z(e.attributes.name) === "author" ||
          z(e.attributes.name) === "generator" ||
          z(e.attributes.name) === "framework" ||
          z(e.attributes.name) === "publisher" ||
          z(e.attributes.name) === "progid" ||
          z(e.attributes.property).match(/^article:/) ||
          z(e.attributes.property).match(/^product:/))
      )
        return !0;
      if (
        t.headMetaVerification &&
        (z(e.attributes.name) === "google-site-verification" ||
          z(e.attributes.name) === "yandex-verification" ||
          z(e.attributes.name) === "csrf-token" ||
          z(e.attributes.name) === "p:domain_verify" ||
          z(e.attributes.name) === "verify-v1" ||
          z(e.attributes.name) === "verification" ||
          z(e.attributes.name) === "shopify-checkout-api-token")
      )
        return !0;
    }
  }
  return !1;
}
function _t(e, t) {
  const {
    doc: n,
    mirror: r,
    blockClass: s,
    blockSelector: i,
    unblockSelector: o,
    maskAllText: a,
    maskTextClass: c,
    unmaskTextClass: u,
    maskTextSelector: l,
    unmaskTextSelector: d,
    skipChild: f = !1,
    inlineStylesheet: h = !0,
    maskInputOptions: p = {},
    maskAttributeFn: g,
    maskTextFn: y,
    maskInputFn: _,
    slimDOMOptions: S,
    dataURLOptions: b = {},
    inlineImages: w = !1,
    recordCanvas: T = !1,
    onSerialize: k,
    onIframeLoad: x,
    iframeLoadTimeout: O = 5e3,
    onStylesheetLoad: I,
    stylesheetLoadTimeout: R = 5e3,
    keepIframeSrcFn: W = () => !1,
    newlyAddedElement: J = !1,
  } = t;
  let { preserveWhiteSpace: te = !0 } = t;
  const ne = hg(e, {
    doc: n,
    mirror: r,
    blockClass: s,
    blockSelector: i,
    maskAllText: a,
    unblockSelector: o,
    maskTextClass: c,
    unmaskTextClass: u,
    maskTextSelector: l,
    unmaskTextSelector: d,
    inlineStylesheet: h,
    maskInputOptions: p,
    maskAttributeFn: g,
    maskTextFn: y,
    maskInputFn: _,
    dataURLOptions: b,
    inlineImages: w,
    recordCanvas: T,
    keepIframeSrcFn: W,
    newlyAddedElement: J,
  });
  if (!ne) return (console.warn(e, "not serialized"), null);
  let fe;
  r.hasNode(e)
    ? (fe = r.getId(e))
    : _g(ne, S) ||
        (!te &&
          ne.type === Z.Text &&
          !ne.isStyle &&
          !ne.textContent.replace(/^\s+|\s+$/gm, "").length)
      ? (fe = Kt)
      : (fe = xs());
  const $ = Object.assign(ne, { id: fe });
  if ((r.add(e, $), fe === Kt)) return null;
  k && k(e);
  let pe = !f;
  if ($.type === Z.Element) {
    ((pe = pe && !$.needBlock), delete $.needBlock);
    const X = e.shadowRoot;
    X && qt(X) && ($.isShadowHost = !0);
  }
  if (($.type === Z.Document || $.type === Z.Element) && pe) {
    S.headWhitespace &&
      $.type === Z.Element &&
      $.tagName === "head" &&
      (te = !1);
    const X = {
      doc: n,
      mirror: r,
      blockClass: s,
      blockSelector: i,
      maskAllText: a,
      unblockSelector: o,
      maskTextClass: c,
      unmaskTextClass: u,
      maskTextSelector: l,
      unmaskTextSelector: d,
      skipChild: f,
      inlineStylesheet: h,
      maskInputOptions: p,
      maskAttributeFn: g,
      maskTextFn: y,
      maskInputFn: _,
      slimDOMOptions: S,
      dataURLOptions: b,
      inlineImages: w,
      recordCanvas: T,
      preserveWhiteSpace: te,
      onSerialize: k,
      onIframeLoad: x,
      iframeLoadTimeout: O,
      onStylesheetLoad: I,
      stylesheetLoadTimeout: R,
      keepIframeSrcFn: W,
    };
    for (const ue of Array.from(e.childNodes)) {
      const ge = _t(ue, X);
      ge && $.childNodes.push(ge);
    }
    if (jm(e) && e.shadowRoot)
      for (const ue of Array.from(e.shadowRoot.childNodes)) {
        const ge = _t(ue, X);
        ge && (qt(e.shadowRoot) && (ge.isShadow = !0), $.childNodes.push(ge));
      }
  }
  return (
    e.parentNode && Wt(e.parentNode) && qt(e.parentNode) && ($.isShadow = !0),
    $.type === Z.Element &&
      $.tagName === "iframe" &&
      dg(
        e,
        () => {
          const X = e.contentDocument;
          if (X && x) {
            const ue = _t(X, {
              doc: X,
              mirror: r,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: p,
              maskAttributeFn: g,
              maskTextFn: y,
              maskInputFn: _,
              slimDOMOptions: S,
              dataURLOptions: b,
              inlineImages: w,
              recordCanvas: T,
              preserveWhiteSpace: te,
              onSerialize: k,
              onIframeLoad: x,
              iframeLoadTimeout: O,
              onStylesheetLoad: I,
              stylesheetLoadTimeout: R,
              keepIframeSrcFn: W,
            });
            ue && x(e, ue);
          }
        },
        O,
      ),
    $.type === Z.Element &&
      $.tagName === "link" &&
      $.attributes.rel === "stylesheet" &&
      fg(
        e,
        () => {
          if (I) {
            const X = _t(e, {
              doc: n,
              mirror: r,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              maskAllText: a,
              maskTextClass: c,
              unmaskTextClass: u,
              maskTextSelector: l,
              unmaskTextSelector: d,
              skipChild: !1,
              inlineStylesheet: h,
              maskInputOptions: p,
              maskAttributeFn: g,
              maskTextFn: y,
              maskInputFn: _,
              slimDOMOptions: S,
              dataURLOptions: b,
              inlineImages: w,
              recordCanvas: T,
              preserveWhiteSpace: te,
              onSerialize: k,
              onIframeLoad: x,
              iframeLoadTimeout: O,
              onStylesheetLoad: I,
              stylesheetLoadTimeout: R,
              keepIframeSrcFn: W,
            });
            X && I(e, X);
          }
        },
        R,
      ),
    $
  );
}
function yg(e, t) {
  const {
    mirror: n = new Xa(),
    blockClass: r = "rr-block",
    blockSelector: s = null,
    unblockSelector: i = null,
    maskAllText: o = !1,
    maskTextClass: a = "rr-mask",
    unmaskTextClass: c = null,
    maskTextSelector: u = null,
    unmaskTextSelector: l = null,
    inlineStylesheet: d = !0,
    inlineImages: f = !1,
    recordCanvas: h = !1,
    maskAllInputs: p = !1,
    maskAttributeFn: g,
    maskTextFn: y,
    maskInputFn: _,
    slimDOM: S = !1,
    dataURLOptions: b,
    preserveWhiteSpace: w,
    onSerialize: T,
    onIframeLoad: k,
    iframeLoadTimeout: x,
    onStylesheetLoad: O,
    stylesheetLoadTimeout: I,
    keepIframeSrcFn: R = () => !1,
  } = t || {};
  return _t(e, {
    doc: e,
    mirror: n,
    blockClass: r,
    blockSelector: s,
    unblockSelector: i,
    maskAllText: o,
    maskTextClass: a,
    unmaskTextClass: c,
    maskTextSelector: u,
    unmaskTextSelector: l,
    skipChild: !1,
    inlineStylesheet: d,
    maskInputOptions:
      p === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
          }
        : p === !1
          ? {}
          : p,
    maskAttributeFn: g,
    maskTextFn: y,
    maskInputFn: _,
    slimDOMOptions:
      S === !0 || S === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaDescKeywords: S === "all",
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaAuthorship: !0,
            headMetaVerification: !0,
          }
        : S === !1
          ? {}
          : S,
    dataURLOptions: b,
    inlineImages: f,
    recordCanvas: h,
    preserveWhiteSpace: w,
    onSerialize: T,
    onIframeLoad: k,
    iframeLoadTimeout: x,
    onStylesheetLoad: O,
    stylesheetLoadTimeout: I,
    keepIframeSrcFn: R,
    newlyAddedElement: !1,
  });
}
function Pe(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length;) {
    const s = e[r],
      i = e[r + 1];
    if (
      ((r += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = i(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = i((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
function oe(e, t, n = document) {
  const r = { capture: !0, passive: !0 };
  return (n.addEventListener(e, t, r), () => n.removeEventListener(e, t, r));
}
const ft = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
let Xi = {
  map: {},
  getId() {
    return (console.error(ft), -1);
  },
  getNode() {
    return (console.error(ft), null);
  },
  removeNodeFromMap() {
    console.error(ft);
  },
  has() {
    return (console.error(ft), !1);
  },
  reset() {
    console.error(ft);
  },
};
typeof window < "u" &&
  window.Proxy &&
  window.Reflect &&
  (Xi = new Proxy(Xi, {
    get(e, t, n) {
      return (t === "map" && console.error(ft), Reflect.get(e, t, n));
    },
  }));
function Jt(e, t, n = {}) {
  let r = null,
    s = 0;
  return function (...i) {
    const o = Date.now();
    !s && n.leading === !1 && (s = o);
    const a = t - (o - s),
      c = this;
    a <= 0 || a > t
      ? (r && (wg(r), (r = null)), (s = o), e.apply(c, i))
      : !r &&
        n.trailing !== !1 &&
        (r = tr(() => {
          ((s = n.leading === !1 ? 0 : Date.now()), (r = null), e.apply(c, i));
        }, a));
  };
}
function Za(e, t, n, r, s = window) {
  const i = s.Object.getOwnPropertyDescriptor(e, t);
  return (
    s.Object.defineProperty(
      e,
      t,
      r
        ? n
        : {
            set(o) {
              (tr(() => {
                n.set.call(this, o);
              }, 0),
                i && i.set && i.set.call(this, o));
            },
          },
    ),
    () => Za(e, t, i || {}, !0)
  );
}
function As(e, t, n) {
  try {
    if (!(t in e)) return () => {};
    const r = e[t],
      s = n(r);
    return (
      typeof s == "function" &&
        ((s.prototype = s.prototype || {}),
        Object.defineProperties(s, {
          __rrweb_original__: { enumerable: !1, value: r },
        })),
      (e[t] = s),
      () => {
        e[t] = r;
      }
    );
  } catch {
    return () => {};
  }
}
let $n = Date.now;
/[1-9][0-9]{12}/.test(Date.now().toString()) ||
  ($n = () => new Date().getTime());
function Qa(e) {
  const t = e.document;
  return {
    left: t.scrollingElement
      ? t.scrollingElement.scrollLeft
      : e.pageXOffset !== void 0
        ? e.pageXOffset
        : Pe([
            t,
            "optionalAccess",
            (n) => n.documentElement,
            "access",
            (n) => n.scrollLeft,
          ]) ||
          Pe([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.parentElement,
            "optionalAccess",
            (n) => n.scrollLeft,
          ]) ||
          Pe([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.scrollLeft,
          ]) ||
          0,
    top: t.scrollingElement
      ? t.scrollingElement.scrollTop
      : e.pageYOffset !== void 0
        ? e.pageYOffset
        : Pe([
            t,
            "optionalAccess",
            (n) => n.documentElement,
            "access",
            (n) => n.scrollTop,
          ]) ||
          Pe([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.parentElement,
            "optionalAccess",
            (n) => n.scrollTop,
          ]) ||
          Pe([
            t,
            "optionalAccess",
            (n) => n.body,
            "optionalAccess",
            (n) => n.scrollTop,
          ]) ||
          0,
  };
}
function ec() {
  return (
    window.innerHeight ||
    (document.documentElement && document.documentElement.clientHeight) ||
    (document.body && document.body.clientHeight)
  );
}
function tc() {
  return (
    window.innerWidth ||
    (document.documentElement && document.documentElement.clientWidth) ||
    (document.body && document.body.clientWidth)
  );
}
function nc(e) {
  return e ? (e.nodeType === e.ELEMENT_NODE ? e : e.parentElement) : null;
}
function Se(e, t, n, r, s) {
  if (!e) return !1;
  const i = nc(e);
  if (!i) return !1;
  const o = gt(t, n);
  if (!s) {
    const u = r && i.matches(r);
    return o(i) && !u;
  }
  const a = Qe(i, o);
  let c = -1;
  return a < 0
    ? !1
    : (r && (c = Qe(i, gt(null, r))), a > -1 && c < 0 ? !0 : a < c);
}
function Sg(e, t) {
  return t.getId(e) !== -1;
}
function vr(e, t) {
  return t.getId(e) === Kt;
}
function rc(e, t) {
  if (Wt(e)) return !1;
  const n = t.getId(e);
  return t.has(n)
    ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE
      ? !1
      : e.parentNode
        ? rc(e.parentNode, t)
        : !0
    : !0;
}
function Yr(e) {
  return !!e.changedTouches;
}
function bg(e = window) {
  ("NodeList" in e &&
    !e.NodeList.prototype.forEach &&
    (e.NodeList.prototype.forEach = Array.prototype.forEach),
    "DOMTokenList" in e &&
      !e.DOMTokenList.prototype.forEach &&
      (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
    Node.prototype.contains ||
      (Node.prototype.contains = (...t) => {
        let n = t[0];
        if (!(0 in t)) throw new TypeError("1 argument is required");
        do if (this === n) return !0;
        while ((n = n && n.parentNode));
        return !1;
      }));
}
function sc(e, t) {
  return !!(e.nodeName === "IFRAME" && t.getMeta(e));
}
function ic(e, t) {
  return !!(
    e.nodeName === "LINK" &&
    e.nodeType === e.ELEMENT_NODE &&
    e.getAttribute &&
    e.getAttribute("rel") === "stylesheet" &&
    t.getMeta(e)
  );
}
function Vr(e) {
  return !!Pe([e, "optionalAccess", (t) => t.shadowRoot]);
}
class Eg {
  constructor() {
    ((this.id = 1),
      (this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()));
  }
  getId(t) {
    return wd(this.styleIDMap.get(t), () => -1);
  }
  has(t) {
    return this.styleIDMap.has(t);
  }
  add(t, n) {
    if (this.has(t)) return this.getId(t);
    let r;
    return (
      n === void 0 ? (r = this.id++) : (r = n),
      this.styleIDMap.set(t, r),
      this.idStyleMap.set(r, t),
      r
    );
  }
  getStyle(t) {
    return this.idStyleMap.get(t) || null;
  }
  reset() {
    ((this.styleIDMap = new WeakMap()),
      (this.idStyleMap = new Map()),
      (this.id = 1));
  }
  generateId() {
    return this.id++;
  }
}
function oc(e) {
  let t = null;
  return (
    Pe([
      e,
      "access",
      (n) => n.getRootNode,
      "optionalCall",
      (n) => n(),
      "optionalAccess",
      (n) => n.nodeType,
    ]) === Node.DOCUMENT_FRAGMENT_NODE &&
      e.getRootNode().host &&
      (t = e.getRootNode().host),
    t
  );
}
function vg(e) {
  let t = e,
    n;
  for (; (n = oc(t));) t = n;
  return t;
}
function Tg(e) {
  const t = e.ownerDocument;
  if (!t) return !1;
  const n = vg(e);
  return t.contains(n);
}
function ac(e) {
  const t = e.ownerDocument;
  return t ? t.contains(e) || Tg(e) : !1;
}
const Ki = {};
function Ns(e) {
  const t = Ki[e];
  if (t) return t;
  const n = window.document;
  let r = window[e];
  if (n && typeof n.createElement == "function")
    try {
      const s = n.createElement("iframe");
      ((s.hidden = !0), n.head.appendChild(s));
      const i = s.contentWindow;
      (i && i[e] && (r = i[e]), n.head.removeChild(s));
    } catch {}
  return (Ki[e] = r.bind(window));
}
function Ig(...e) {
  return Ns("requestAnimationFrame")(...e);
}
function tr(...e) {
  return Ns("setTimeout")(...e);
}
function wg(...e) {
  return Ns("clearTimeout")(...e);
}
var C = ((e) => (
    (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
    (e[(e.Load = 1)] = "Load"),
    (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
    (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (e[(e.Meta = 4)] = "Meta"),
    (e[(e.Custom = 5)] = "Custom"),
    (e[(e.Plugin = 6)] = "Plugin"),
    e
  ))(C || {}),
  M = ((e) => (
    (e[(e.Mutation = 0)] = "Mutation"),
    (e[(e.MouseMove = 1)] = "MouseMove"),
    (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
    (e[(e.Scroll = 3)] = "Scroll"),
    (e[(e.ViewportResize = 4)] = "ViewportResize"),
    (e[(e.Input = 5)] = "Input"),
    (e[(e.TouchMove = 6)] = "TouchMove"),
    (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
    (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
    (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
    (e[(e.Font = 10)] = "Font"),
    (e[(e.Log = 11)] = "Log"),
    (e[(e.Drag = 12)] = "Drag"),
    (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
    (e[(e.Selection = 14)] = "Selection"),
    (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
    (e[(e.CustomElement = 16)] = "CustomElement"),
    e
  ))(M || {}),
  se = ((e) => (
    (e[(e.MouseUp = 0)] = "MouseUp"),
    (e[(e.MouseDown = 1)] = "MouseDown"),
    (e[(e.Click = 2)] = "Click"),
    (e[(e.ContextMenu = 3)] = "ContextMenu"),
    (e[(e.DblClick = 4)] = "DblClick"),
    (e[(e.Focus = 5)] = "Focus"),
    (e[(e.Blur = 6)] = "Blur"),
    (e[(e.TouchStart = 7)] = "TouchStart"),
    (e[(e.TouchMove_Departed = 8)] = "TouchMove_Departed"),
    (e[(e.TouchEnd = 9)] = "TouchEnd"),
    (e[(e.TouchCancel = 10)] = "TouchCancel"),
    e
  ))(se || {}),
  Ce = ((e) => (
    (e[(e.Mouse = 0)] = "Mouse"),
    (e[(e.Pen = 1)] = "Pen"),
    (e[(e.Touch = 2)] = "Touch"),
    e
  ))(Ce || {});
function kg(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length;) {
    const s = e[r],
      i = e[r + 1];
    if (
      ((r += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = i(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = i((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
function Ji(e) {
  return "__ln" in e;
}
class Rg {
  constructor() {
    ((this.length = 0), (this.head = null), (this.tail = null));
  }
  get(t) {
    if (t >= this.length) throw new Error("Position outside of list range");
    let n = this.head;
    for (let r = 0; r < t; r++)
      n = kg([n, "optionalAccess", (s) => s.next]) || null;
    return n;
  }
  addNode(t) {
    const n = { value: t, previous: null, next: null };
    if (((t.__ln = n), t.previousSibling && Ji(t.previousSibling))) {
      const r = t.previousSibling.__ln.next;
      ((n.next = r),
        (n.previous = t.previousSibling.__ln),
        (t.previousSibling.__ln.next = n),
        r && (r.previous = n));
    } else if (
      t.nextSibling &&
      Ji(t.nextSibling) &&
      t.nextSibling.__ln.previous
    ) {
      const r = t.nextSibling.__ln.previous;
      ((n.previous = r),
        (n.next = t.nextSibling.__ln),
        (t.nextSibling.__ln.previous = n),
        r && (r.next = n));
    } else
      (this.head && (this.head.previous = n),
        (n.next = this.head),
        (this.head = n));
    (n.next === null && (this.tail = n), this.length++);
  }
  removeNode(t) {
    const n = t.__ln;
    this.head &&
      (n.previous
        ? ((n.previous.next = n.next),
          n.next ? (n.next.previous = n.previous) : (this.tail = n.previous))
        : ((this.head = n.next),
          this.head ? (this.head.previous = null) : (this.tail = null)),
      t.__ln && delete t.__ln,
      this.length--);
  }
}
const Zi = (e, t) => `${e}@${t}`;
class Cg {
  constructor() {
    ((this.frozen = !1),
      (this.locked = !1),
      (this.texts = []),
      (this.attributes = []),
      (this.attributeMap = new WeakMap()),
      (this.removes = []),
      (this.mapRemoves = []),
      (this.movedMap = {}),
      (this.addedSet = new Set()),
      (this.movedSet = new Set()),
      (this.droppedSet = new Set()),
      (this.processMutations = (t) => {
        (t.forEach(this.processMutation), this.emit());
      }),
      (this.emit = () => {
        if (this.frozen || this.locked) return;
        const t = [],
          n = new Set(),
          r = new Rg(),
          s = (c) => {
            let u = c,
              l = Kt;
            for (; l === Kt;)
              ((u = u && u.nextSibling), (l = u && this.mirror.getId(u)));
            return l;
          },
          i = (c) => {
            if (!c.parentNode || !ac(c)) return;
            const u = Wt(c.parentNode)
                ? this.mirror.getId(oc(c))
                : this.mirror.getId(c.parentNode),
              l = s(c);
            if (u === -1 || l === -1) return r.addNode(c);
            const d = _t(c, {
              doc: this.doc,
              mirror: this.mirror,
              blockClass: this.blockClass,
              blockSelector: this.blockSelector,
              maskAllText: this.maskAllText,
              unblockSelector: this.unblockSelector,
              maskTextClass: this.maskTextClass,
              unmaskTextClass: this.unmaskTextClass,
              maskTextSelector: this.maskTextSelector,
              unmaskTextSelector: this.unmaskTextSelector,
              skipChild: !0,
              newlyAddedElement: !0,
              inlineStylesheet: this.inlineStylesheet,
              maskInputOptions: this.maskInputOptions,
              maskAttributeFn: this.maskAttributeFn,
              maskTextFn: this.maskTextFn,
              maskInputFn: this.maskInputFn,
              slimDOMOptions: this.slimDOMOptions,
              dataURLOptions: this.dataURLOptions,
              recordCanvas: this.recordCanvas,
              inlineImages: this.inlineImages,
              onSerialize: (f) => {
                (sc(f, this.mirror) && this.iframeManager.addIframe(f),
                  ic(f, this.mirror) &&
                    this.stylesheetManager.trackLinkElement(f),
                  Vr(c) &&
                    this.shadowDomManager.addShadowRoot(
                      c.shadowRoot,
                      this.doc,
                    ));
              },
              onIframeLoad: (f, h) => {
                (this.iframeManager.attachIframe(f, h),
                  this.shadowDomManager.observeAttachShadow(f));
              },
              onStylesheetLoad: (f, h) => {
                this.stylesheetManager.attachLinkElement(f, h);
              },
            });
            d && (t.push({ parentId: u, nextId: l, node: d }), n.add(d.id));
          };
        for (; this.mapRemoves.length;)
          this.mirror.removeNodeFromMap(this.mapRemoves.shift());
        for (const c of this.movedSet)
          (Qi(this.removes, c, this.mirror) &&
            !this.movedSet.has(c.parentNode)) ||
            i(c);
        for (const c of this.addedSet)
          (!eo(this.droppedSet, c) && !Qi(this.removes, c, this.mirror)) ||
          eo(this.movedSet, c)
            ? i(c)
            : this.droppedSet.add(c);
        let o = null;
        for (; r.length;) {
          let c = null;
          if (o) {
            const u = this.mirror.getId(o.value.parentNode),
              l = s(o.value);
            u !== -1 && l !== -1 && (c = o);
          }
          if (!c) {
            let u = r.tail;
            for (; u;) {
              const l = u;
              if (((u = u.previous), l)) {
                const d = this.mirror.getId(l.value.parentNode);
                if (s(l.value) === -1) continue;
                if (d !== -1) {
                  c = l;
                  break;
                } else {
                  const h = l.value;
                  if (
                    h.parentNode &&
                    h.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                  ) {
                    const p = h.parentNode.host;
                    if (this.mirror.getId(p) !== -1) {
                      c = l;
                      break;
                    }
                  }
                }
              }
            }
          }
          if (!c) {
            for (; r.head;) r.removeNode(r.head.value);
            break;
          }
          ((o = c.previous), r.removeNode(c.value), i(c.value));
        }
        const a = {
          texts: this.texts
            .map((c) => ({ id: this.mirror.getId(c.node), value: c.value }))
            .filter((c) => !n.has(c.id))
            .filter((c) => this.mirror.has(c.id)),
          attributes: this.attributes
            .map((c) => {
              const { attributes: u } = c;
              if (typeof u.style == "string") {
                const l = JSON.stringify(c.styleDiff),
                  d = JSON.stringify(c._unchangedStyles);
                l.length < u.style.length &&
                  (l + d).split("var(").length ===
                    u.style.split("var(").length &&
                  (u.style = c.styleDiff);
              }
              return { id: this.mirror.getId(c.node), attributes: u };
            })
            .filter((c) => !n.has(c.id))
            .filter((c) => this.mirror.has(c.id)),
          removes: this.removes,
          adds: t,
        };
        (!a.texts.length &&
          !a.attributes.length &&
          !a.removes.length &&
          !a.adds.length) ||
          ((this.texts = []),
          (this.attributes = []),
          (this.attributeMap = new WeakMap()),
          (this.removes = []),
          (this.addedSet = new Set()),
          (this.movedSet = new Set()),
          (this.droppedSet = new Set()),
          (this.movedMap = {}),
          this.mutationCb(a));
      }),
      (this.processMutation = (t) => {
        if (!vr(t.target, this.mirror))
          switch (t.type) {
            case "characterData": {
              const n = t.target.textContent;
              !Se(
                t.target,
                this.blockClass,
                this.blockSelector,
                this.unblockSelector,
                !1,
              ) &&
                n !== t.oldValue &&
                this.texts.push({
                  value:
                    Ct(
                      t.target,
                      this.maskTextClass,
                      this.maskTextSelector,
                      this.unmaskTextClass,
                      this.unmaskTextSelector,
                      this.maskAllText,
                    ) && n
                      ? this.maskTextFn
                        ? this.maskTextFn(n, nc(t.target))
                        : n.replace(/[\S]/g, "*")
                      : n,
                  node: t.target,
                });
              break;
            }
            case "attributes": {
              const n = t.target;
              let r = t.attributeName,
                s = t.target.getAttribute(r);
              if (r === "value") {
                const o = Ms(n),
                  a = n.tagName;
                s = Fn(n, a, o);
                const c = er({
                    maskInputOptions: this.maskInputOptions,
                    tagName: a,
                    type: o,
                  }),
                  u = Ct(
                    t.target,
                    this.maskTextClass,
                    this.maskTextSelector,
                    this.unmaskTextClass,
                    this.unmaskTextSelector,
                    c,
                  );
                s = Xt({
                  isMasked: u,
                  element: n,
                  value: s,
                  maskInputFn: this.maskInputFn,
                });
              }
              if (
                Se(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !1,
                ) ||
                s === t.oldValue
              )
                return;
              let i = this.attributeMap.get(t.target);
              if (
                n.tagName === "IFRAME" &&
                r === "src" &&
                !this.keepIframeSrcFn(s)
              )
                if (!n.contentDocument) r = "rr_src";
                else return;
              if (
                (i ||
                  ((i = {
                    node: t.target,
                    attributes: {},
                    styleDiff: {},
                    _unchangedStyles: {},
                  }),
                  this.attributes.push(i),
                  this.attributeMap.set(t.target, i)),
                r === "type" &&
                  n.tagName === "INPUT" &&
                  (t.oldValue || "").toLowerCase() === "password" &&
                  n.setAttribute("data-rr-is-password", "true"),
                !Ja(n.tagName, r) &&
                  ((i.attributes[r] = Ka(
                    this.doc,
                    Rt(n.tagName),
                    Rt(r),
                    s,
                    n,
                    this.maskAttributeFn,
                  )),
                  r === "style"))
              ) {
                if (!this.unattachedDoc)
                  try {
                    this.unattachedDoc =
                      document.implementation.createHTMLDocument();
                  } catch {
                    this.unattachedDoc = this.doc;
                  }
                const o = this.unattachedDoc.createElement("span");
                t.oldValue && o.setAttribute("style", t.oldValue);
                for (const a of Array.from(n.style)) {
                  const c = n.style.getPropertyValue(a),
                    u = n.style.getPropertyPriority(a);
                  c !== o.style.getPropertyValue(a) ||
                  u !== o.style.getPropertyPriority(a)
                    ? u === ""
                      ? (i.styleDiff[a] = c)
                      : (i.styleDiff[a] = [c, u])
                    : (i._unchangedStyles[a] = [c, u]);
                }
                for (const a of Array.from(o.style))
                  n.style.getPropertyValue(a) === "" && (i.styleDiff[a] = !1);
              }
              break;
            }
            case "childList": {
              if (
                Se(
                  t.target,
                  this.blockClass,
                  this.blockSelector,
                  this.unblockSelector,
                  !0,
                )
              )
                return;
              (t.addedNodes.forEach((n) => this.genAdds(n, t.target)),
                t.removedNodes.forEach((n) => {
                  const r = this.mirror.getId(n),
                    s = Wt(t.target)
                      ? this.mirror.getId(t.target.host)
                      : this.mirror.getId(t.target);
                  Se(
                    t.target,
                    this.blockClass,
                    this.blockSelector,
                    this.unblockSelector,
                    !1,
                  ) ||
                    vr(n, this.mirror) ||
                    !Sg(n, this.mirror) ||
                    (this.addedSet.has(n)
                      ? (Xr(this.addedSet, n), this.droppedSet.add(n))
                      : (this.addedSet.has(t.target) && r === -1) ||
                        rc(t.target, this.mirror) ||
                        (this.movedSet.has(n) && this.movedMap[Zi(r, s)]
                          ? Xr(this.movedSet, n)
                          : this.removes.push({
                              parentId: s,
                              id: r,
                              isShadow:
                                Wt(t.target) && qt(t.target) ? !0 : void 0,
                            })),
                    this.mapRemoves.push(n));
                }));
              break;
            }
          }
      }),
      (this.genAdds = (t, n) => {
        if (
          !this.processedNodeManager.inOtherBuffer(t, this) &&
          !(this.addedSet.has(t) || this.movedSet.has(t))
        ) {
          if (this.mirror.hasNode(t)) {
            if (vr(t, this.mirror)) return;
            this.movedSet.add(t);
            let r = null;
            (n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
              r &&
                r !== -1 &&
                (this.movedMap[Zi(this.mirror.getId(t), r)] = !0));
          } else (this.addedSet.add(t), this.droppedSet.delete(t));
          Se(
            t,
            this.blockClass,
            this.blockSelector,
            this.unblockSelector,
            !1,
          ) ||
            (t.childNodes.forEach((r) => this.genAdds(r)),
            Vr(t) &&
              t.shadowRoot.childNodes.forEach((r) => {
                (this.processedNodeManager.add(r, this), this.genAdds(r, t));
              }));
        }
      }));
  }
  init(t) {
    [
      "mutationCb",
      "blockClass",
      "blockSelector",
      "unblockSelector",
      "maskAllText",
      "maskTextClass",
      "unmaskTextClass",
      "maskTextSelector",
      "unmaskTextSelector",
      "inlineStylesheet",
      "maskInputOptions",
      "maskAttributeFn",
      "maskTextFn",
      "maskInputFn",
      "keepIframeSrcFn",
      "recordCanvas",
      "inlineImages",
      "slimDOMOptions",
      "dataURLOptions",
      "doc",
      "mirror",
      "iframeManager",
      "stylesheetManager",
      "shadowDomManager",
      "canvasManager",
      "processedNodeManager",
    ].forEach((n) => {
      this[n] = t[n];
    });
  }
  freeze() {
    ((this.frozen = !0), this.canvasManager.freeze());
  }
  unfreeze() {
    ((this.frozen = !1), this.canvasManager.unfreeze(), this.emit());
  }
  isFrozen() {
    return this.frozen;
  }
  lock() {
    ((this.locked = !0), this.canvasManager.lock());
  }
  unlock() {
    ((this.locked = !1), this.canvasManager.unlock(), this.emit());
  }
  reset() {
    (this.shadowDomManager.reset(), this.canvasManager.reset());
  }
}
function Xr(e, t) {
  (e.delete(t), t.childNodes.forEach((n) => Xr(e, n)));
}
function Qi(e, t, n) {
  return e.length === 0 ? !1 : cc(e, t, n);
}
function cc(e, t, n) {
  const { parentNode: r } = t;
  if (!r) return !1;
  const s = n.getId(r);
  return e.some((i) => i.id === s) ? !0 : cc(e, r, n);
}
function eo(e, t) {
  return e.size === 0 ? !1 : uc(e, t);
}
function uc(e, t) {
  const { parentNode: n } = t;
  return n ? (e.has(n) ? !0 : uc(e, n)) : !1;
}
let Gt;
function Mg(e) {
  Gt = e;
}
function xg() {
  Gt = void 0;
}
const N = (e) =>
  Gt
    ? (...n) => {
        try {
          return e(...n);
        } catch (r) {
          if (Gt && Gt(r) === !0) return () => {};
          throw r;
        }
      }
    : e;
function Ie(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length;) {
    const s = e[r],
      i = e[r + 1];
    if (
      ((r += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = i(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = i((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
const yt = [];
function cn(e) {
  try {
    if ("composedPath" in e) {
      const t = e.composedPath();
      if (t.length) return t[0];
    } else if ("path" in e && e.path.length) return e.path[0];
  } catch {}
  return e && e.target;
}
function lc(e, t) {
  const n = new Cg();
  (yt.push(n), n.init(e));
  let r = window.MutationObserver || window.__rrMutationObserver;
  const s = Ie([
    window,
    "optionalAccess",
    (o) => o.Zone,
    "optionalAccess",
    (o) => o.__symbol__,
    "optionalCall",
    (o) => o("MutationObserver"),
  ]);
  s && window[s] && (r = window[s]);
  const i = new r(
    N((o) => {
      (e.onMutation && e.onMutation(o) === !1) || n.processMutations.bind(n)(o);
    }),
  );
  return (
    i.observe(t, {
      attributes: !0,
      attributeOldValue: !0,
      characterData: !0,
      characterDataOldValue: !0,
      childList: !0,
      subtree: !0,
    }),
    i
  );
}
function Og({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
  if (t.mousemove === !1) return () => {};
  const s = typeof t.mousemove == "number" ? t.mousemove : 50,
    i = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
  let o = [],
    a;
  const c = Jt(
      N((d) => {
        const f = Date.now() - a;
        (e(
          o.map((h) => ((h.timeOffset -= f), h)),
          d,
        ),
          (o = []),
          (a = null));
      }),
      i,
    ),
    u = N(
      Jt(
        N((d) => {
          const f = cn(d),
            { clientX: h, clientY: p } = Yr(d) ? d.changedTouches[0] : d;
          (a || (a = $n()),
            o.push({ x: h, y: p, id: r.getId(f), timeOffset: $n() - a }),
            c(
              typeof DragEvent < "u" && d instanceof DragEvent
                ? M.Drag
                : d instanceof MouseEvent
                  ? M.MouseMove
                  : M.TouchMove,
            ));
        }),
        s,
        { trailing: !1 },
      ),
    ),
    l = [oe("mousemove", u, n), oe("touchmove", u, n), oe("drag", u, n)];
  return N(() => {
    l.forEach((d) => d());
  });
}
function Ag({
  mouseInteractionCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: s,
  unblockSelector: i,
  sampling: o,
}) {
  if (o.mouseInteraction === !1) return () => {};
  const a =
      o.mouseInteraction === !0 || o.mouseInteraction === void 0
        ? {}
        : o.mouseInteraction,
    c = [];
  let u = null;
  const l = (d) => (f) => {
    const h = cn(f);
    if (Se(h, r, s, i, !0)) return;
    let p = null,
      g = d;
    if ("pointerType" in f) {
      switch (f.pointerType) {
        case "mouse":
          p = Ce.Mouse;
          break;
        case "touch":
          p = Ce.Touch;
          break;
        case "pen":
          p = Ce.Pen;
          break;
      }
      p === Ce.Touch
        ? se[d] === se.MouseDown
          ? (g = "TouchStart")
          : se[d] === se.MouseUp && (g = "TouchEnd")
        : Ce.Pen;
    } else Yr(f) && (p = Ce.Touch);
    p !== null
      ? ((u = p),
        ((g.startsWith("Touch") && p === Ce.Touch) ||
          (g.startsWith("Mouse") && p === Ce.Mouse)) &&
          (p = null))
      : se[d] === se.Click && ((p = u), (u = null));
    const y = Yr(f) ? f.changedTouches[0] : f;
    if (!y) return;
    const _ = n.getId(h),
      { clientX: S, clientY: b } = y;
    N(e)({
      type: se[g],
      id: _,
      x: S,
      y: b,
      ...(p !== null && { pointerType: p }),
    });
  };
  return (
    Object.keys(se)
      .filter(
        (d) =>
          Number.isNaN(Number(d)) && !d.endsWith("_Departed") && a[d] !== !1,
      )
      .forEach((d) => {
        let f = Rt(d);
        const h = l(d);
        if (window.PointerEvent)
          switch (se[d]) {
            case se.MouseDown:
            case se.MouseUp:
              f = f.replace("mouse", "pointer");
              break;
            case se.TouchStart:
            case se.TouchEnd:
              return;
          }
        c.push(oe(f, h, t));
      }),
    N(() => {
      c.forEach((d) => d());
    })
  );
}
function dc({
  scrollCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: s,
  unblockSelector: i,
  sampling: o,
}) {
  const a = N(
    Jt(
      N((c) => {
        const u = cn(c);
        if (!u || Se(u, r, s, i, !0)) return;
        const l = n.getId(u);
        if (u === t && t.defaultView) {
          const d = Qa(t.defaultView);
          e({ id: l, x: d.left, y: d.top });
        } else e({ id: l, x: u.scrollLeft, y: u.scrollTop });
      }),
      o.scroll || 100,
    ),
  );
  return oe("scroll", a, t);
}
function Ng({ viewportResizeCb: e }, { win: t }) {
  let n = -1,
    r = -1;
  const s = N(
    Jt(
      N(() => {
        const i = ec(),
          o = tc();
        (n !== i || r !== o) &&
          (e({ width: Number(o), height: Number(i) }), (n = i), (r = o));
      }),
      200,
    ),
  );
  return oe("resize", s, t);
}
const Dg = ["INPUT", "TEXTAREA", "SELECT"],
  to = new WeakMap();
function Lg({
  inputCb: e,
  doc: t,
  mirror: n,
  blockClass: r,
  blockSelector: s,
  unblockSelector: i,
  ignoreClass: o,
  ignoreSelector: a,
  maskInputOptions: c,
  maskInputFn: u,
  sampling: l,
  userTriggeredOnInput: d,
  maskTextClass: f,
  unmaskTextClass: h,
  maskTextSelector: p,
  unmaskTextSelector: g,
}) {
  function y(x) {
    let O = cn(x);
    const I = x.isTrusted,
      R = O && Gr(O.tagName);
    if (
      (R === "OPTION" && (O = O.parentElement),
      !O || !R || Dg.indexOf(R) < 0 || Se(O, r, s, i, !0))
    )
      return;
    const W = O;
    if (W.classList.contains(o) || (a && W.matches(a))) return;
    const J = Ms(O);
    let te = Fn(W, R, J),
      ne = !1;
    const fe = er({ maskInputOptions: c, tagName: R, type: J }),
      $ = Ct(O, f, p, h, g, fe);
    ((J === "radio" || J === "checkbox") && (ne = O.checked),
      (te = Xt({ isMasked: $, element: O, value: te, maskInputFn: u })),
      _(
        O,
        d
          ? { text: te, isChecked: ne, userTriggered: I }
          : { text: te, isChecked: ne },
      ));
    const pe = O.name;
    J === "radio" &&
      pe &&
      ne &&
      t.querySelectorAll(`input[type="radio"][name="${pe}"]`).forEach((X) => {
        if (X !== O) {
          const ue = Xt({
            isMasked: $,
            element: X,
            value: Fn(X, R, J),
            maskInputFn: u,
          });
          _(
            X,
            d
              ? { text: ue, isChecked: !ne, userTriggered: !1 }
              : { text: ue, isChecked: !ne },
          );
        }
      });
  }
  function _(x, O) {
    const I = to.get(x);
    if (!I || I.text !== O.text || I.isChecked !== O.isChecked) {
      to.set(x, O);
      const R = n.getId(x);
      N(e)({ ...O, id: R });
    }
  }
  const b = (l.input === "last" ? ["change"] : ["input", "change"]).map((x) =>
      oe(x, N(y), t),
    ),
    w = t.defaultView;
  if (!w)
    return () => {
      b.forEach((x) => x());
    };
  const T = w.Object.getOwnPropertyDescriptor(
      w.HTMLInputElement.prototype,
      "value",
    ),
    k = [
      [w.HTMLInputElement.prototype, "value"],
      [w.HTMLInputElement.prototype, "checked"],
      [w.HTMLSelectElement.prototype, "value"],
      [w.HTMLTextAreaElement.prototype, "value"],
      [w.HTMLSelectElement.prototype, "selectedIndex"],
      [w.HTMLOptionElement.prototype, "selected"],
    ];
  return (
    T &&
      T.set &&
      b.push(
        ...k.map((x) =>
          Za(
            x[0],
            x[1],
            {
              set() {
                N(y)({ target: this, isTrusted: !1 });
              },
            },
            !1,
            w,
          ),
        ),
      ),
    N(() => {
      b.forEach((x) => x());
    })
  );
}
function Hn(e) {
  const t = [];
  function n(r, s) {
    if (
      (Tn("CSSGroupingRule") && r.parentRule instanceof CSSGroupingRule) ||
      (Tn("CSSMediaRule") && r.parentRule instanceof CSSMediaRule) ||
      (Tn("CSSSupportsRule") && r.parentRule instanceof CSSSupportsRule) ||
      (Tn("CSSConditionRule") && r.parentRule instanceof CSSConditionRule)
    ) {
      const o = Array.from(r.parentRule.cssRules).indexOf(r);
      s.unshift(o);
    } else if (r.parentStyleSheet) {
      const o = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
      s.unshift(o);
    }
    return s;
  }
  return n(e, t);
}
function Fe(e, t, n) {
  let r, s;
  return e
    ? (e.ownerNode ? (r = t.getId(e.ownerNode)) : (s = n.getId(e)),
      { styleId: s, id: r })
    : {};
}
function Pg(
  { styleSheetRuleCb: e, mirror: t, stylesheetManager: n },
  { win: r },
) {
  if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {};
  const s = r.CSSStyleSheet.prototype.insertRule;
  r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
    apply: N((l, d, f) => {
      const [h, p] = f,
        { id: g, styleId: y } = Fe(d, t, n.styleMirror);
      return (
        ((g && g !== -1) || (y && y !== -1)) &&
          e({ id: g, styleId: y, adds: [{ rule: h, index: p }] }),
        l.apply(d, f)
      );
    }),
  });
  const i = r.CSSStyleSheet.prototype.deleteRule;
  r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
    apply: N((l, d, f) => {
      const [h] = f,
        { id: p, styleId: g } = Fe(d, t, n.styleMirror);
      return (
        ((p && p !== -1) || (g && g !== -1)) &&
          e({ id: p, styleId: g, removes: [{ index: h }] }),
        l.apply(d, f)
      );
    }),
  });
  let o;
  r.CSSStyleSheet.prototype.replace &&
    ((o = r.CSSStyleSheet.prototype.replace),
    (r.CSSStyleSheet.prototype.replace = new Proxy(o, {
      apply: N((l, d, f) => {
        const [h] = f,
          { id: p, styleId: g } = Fe(d, t, n.styleMirror);
        return (
          ((p && p !== -1) || (g && g !== -1)) &&
            e({ id: p, styleId: g, replace: h }),
          l.apply(d, f)
        );
      }),
    })));
  let a;
  r.CSSStyleSheet.prototype.replaceSync &&
    ((a = r.CSSStyleSheet.prototype.replaceSync),
    (r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
      apply: N((l, d, f) => {
        const [h] = f,
          { id: p, styleId: g } = Fe(d, t, n.styleMirror);
        return (
          ((p && p !== -1) || (g && g !== -1)) &&
            e({ id: p, styleId: g, replaceSync: h }),
          l.apply(d, f)
        );
      }),
    })));
  const c = {};
  In("CSSGroupingRule")
    ? (c.CSSGroupingRule = r.CSSGroupingRule)
    : (In("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule),
      In("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule),
      In("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
  const u = {};
  return (
    Object.entries(c).forEach(([l, d]) => {
      ((u[l] = {
        insertRule: d.prototype.insertRule,
        deleteRule: d.prototype.deleteRule,
      }),
        (d.prototype.insertRule = new Proxy(u[l].insertRule, {
          apply: N((f, h, p) => {
            const [g, y] = p,
              { id: _, styleId: S } = Fe(h.parentStyleSheet, t, n.styleMirror);
            return (
              ((_ && _ !== -1) || (S && S !== -1)) &&
                e({
                  id: _,
                  styleId: S,
                  adds: [{ rule: g, index: [...Hn(h), y || 0] }],
                }),
              f.apply(h, p)
            );
          }),
        })),
        (d.prototype.deleteRule = new Proxy(u[l].deleteRule, {
          apply: N((f, h, p) => {
            const [g] = p,
              { id: y, styleId: _ } = Fe(h.parentStyleSheet, t, n.styleMirror);
            return (
              ((y && y !== -1) || (_ && _ !== -1)) &&
                e({ id: y, styleId: _, removes: [{ index: [...Hn(h), g] }] }),
              f.apply(h, p)
            );
          }),
        })));
    }),
    N(() => {
      ((r.CSSStyleSheet.prototype.insertRule = s),
        (r.CSSStyleSheet.prototype.deleteRule = i),
        o && (r.CSSStyleSheet.prototype.replace = o),
        a && (r.CSSStyleSheet.prototype.replaceSync = a),
        Object.entries(c).forEach(([l, d]) => {
          ((d.prototype.insertRule = u[l].insertRule),
            (d.prototype.deleteRule = u[l].deleteRule));
        }));
    })
  );
}
function fc({ mirror: e, stylesheetManager: t }, n) {
  let r = null;
  n.nodeName === "#document" ? (r = e.getId(n)) : (r = e.getId(n.host));
  const s =
      n.nodeName === "#document"
        ? Ie([
            n,
            "access",
            (o) => o.defaultView,
            "optionalAccess",
            (o) => o.Document,
          ])
        : Ie([
            n,
            "access",
            (o) => o.ownerDocument,
            "optionalAccess",
            (o) => o.defaultView,
            "optionalAccess",
            (o) => o.ShadowRoot,
          ]),
    i = Ie([s, "optionalAccess", (o) => o.prototype])
      ? Object.getOwnPropertyDescriptor(
          Ie([s, "optionalAccess", (o) => o.prototype]),
          "adoptedStyleSheets",
        )
      : void 0;
  return r === null || r === -1 || !s || !i
    ? () => {}
    : (Object.defineProperty(n, "adoptedStyleSheets", {
        configurable: i.configurable,
        enumerable: i.enumerable,
        get() {
          return Ie([
            i,
            "access",
            (o) => o.get,
            "optionalAccess",
            (o) => o.call,
            "call",
            (o) => o(this),
          ]);
        },
        set(o) {
          const a = Ie([
            i,
            "access",
            (c) => c.set,
            "optionalAccess",
            (c) => c.call,
            "call",
            (c) => c(this, o),
          ]);
          if (r !== null && r !== -1)
            try {
              t.adoptStyleSheets(o, r);
            } catch {}
          return a;
        },
      }),
      N(() => {
        Object.defineProperty(n, "adoptedStyleSheets", {
          configurable: i.configurable,
          enumerable: i.enumerable,
          get: i.get,
          set: i.set,
        });
      }));
}
function Fg(
  {
    styleDeclarationCb: e,
    mirror: t,
    ignoreCSSAttributes: n,
    stylesheetManager: r,
  },
  { win: s },
) {
  const i = s.CSSStyleDeclaration.prototype.setProperty;
  s.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
    apply: N((a, c, u) => {
      const [l, d, f] = u;
      if (n.has(l)) return i.apply(c, [l, d, f]);
      const { id: h, styleId: p } = Fe(
        Ie([
          c,
          "access",
          (g) => g.parentRule,
          "optionalAccess",
          (g) => g.parentStyleSheet,
        ]),
        t,
        r.styleMirror,
      );
      return (
        ((h && h !== -1) || (p && p !== -1)) &&
          e({
            id: h,
            styleId: p,
            set: { property: l, value: d, priority: f },
            index: Hn(c.parentRule),
          }),
        a.apply(c, u)
      );
    }),
  });
  const o = s.CSSStyleDeclaration.prototype.removeProperty;
  return (
    (s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
      apply: N((a, c, u) => {
        const [l] = u;
        if (n.has(l)) return o.apply(c, [l]);
        const { id: d, styleId: f } = Fe(
          Ie([
            c,
            "access",
            (h) => h.parentRule,
            "optionalAccess",
            (h) => h.parentStyleSheet,
          ]),
          t,
          r.styleMirror,
        );
        return (
          ((d && d !== -1) || (f && f !== -1)) &&
            e({
              id: d,
              styleId: f,
              remove: { property: l },
              index: Hn(c.parentRule),
            }),
          a.apply(c, u)
        );
      }),
    })),
    N(() => {
      ((s.CSSStyleDeclaration.prototype.setProperty = i),
        (s.CSSStyleDeclaration.prototype.removeProperty = o));
    })
  );
}
function Bg({
  mediaInteractionCb: e,
  blockClass: t,
  blockSelector: n,
  unblockSelector: r,
  mirror: s,
  sampling: i,
  doc: o,
}) {
  const a = N((u) =>
      Jt(
        N((l) => {
          const d = cn(l);
          if (!d || Se(d, t, n, r, !0)) return;
          const { currentTime: f, volume: h, muted: p, playbackRate: g } = d;
          e({
            type: u,
            id: s.getId(d),
            currentTime: f,
            volume: h,
            muted: p,
            playbackRate: g,
          });
        }),
        i.media || 500,
      ),
    ),
    c = [
      oe("play", a(0), o),
      oe("pause", a(1), o),
      oe("seeked", a(2), o),
      oe("volumechange", a(3), o),
      oe("ratechange", a(4), o),
    ];
  return N(() => {
    c.forEach((u) => u());
  });
}
function $g({ fontCb: e, doc: t }) {
  const n = t.defaultView;
  if (!n) return () => {};
  const r = [],
    s = new WeakMap(),
    i = n.FontFace;
  n.FontFace = function (c, u, l) {
    const d = new i(c, u, l);
    return (
      s.set(d, {
        family: c,
        buffer: typeof u != "string",
        descriptors: l,
        fontSource:
          typeof u == "string"
            ? u
            : JSON.stringify(Array.from(new Uint8Array(u))),
      }),
      d
    );
  };
  const o = As(t.fonts, "add", function (a) {
    return function (c) {
      return (
        tr(
          N(() => {
            const u = s.get(c);
            u && (e(u), s.delete(c));
          }),
          0,
        ),
        a.apply(this, [c])
      );
    };
  });
  return (
    r.push(() => {
      n.FontFace = i;
    }),
    r.push(o),
    N(() => {
      r.forEach((a) => a());
    })
  );
}
function Hg(e) {
  const {
    doc: t,
    mirror: n,
    blockClass: r,
    blockSelector: s,
    unblockSelector: i,
    selectionCb: o,
  } = e;
  let a = !0;
  const c = N(() => {
    const u = t.getSelection();
    if (!u || (a && Ie([u, "optionalAccess", (f) => f.isCollapsed]))) return;
    a = u.isCollapsed || !1;
    const l = [],
      d = u.rangeCount || 0;
    for (let f = 0; f < d; f++) {
      const h = u.getRangeAt(f),
        {
          startContainer: p,
          startOffset: g,
          endContainer: y,
          endOffset: _,
        } = h;
      Se(p, r, s, i, !0) ||
        Se(y, r, s, i, !0) ||
        l.push({
          start: n.getId(p),
          startOffset: g,
          end: n.getId(y),
          endOffset: _,
        });
    }
    o({ ranges: l });
  });
  return (c(), oe("selectionchange", c));
}
function Ug({ doc: e, customElementCb: t }) {
  const n = e.defaultView;
  return !n || !n.customElements
    ? () => {}
    : As(n.customElements, "define", function (s) {
        return function (i, o, a) {
          try {
            t({ define: { name: i } });
          } catch {}
          return s.apply(this, [i, o, a]);
        };
      });
}
function zg(e, t = {}) {
  const n = e.doc.defaultView;
  if (!n) return () => {};
  const r = lc(e, e.doc),
    s = Og(e),
    i = Ag(e),
    o = dc(e),
    a = Ng(e, { win: n }),
    c = Lg(e),
    u = Bg(e),
    l = Pg(e, { win: n }),
    d = fc(e, e.doc),
    f = Fg(e, { win: n }),
    h = e.collectFonts ? $g(e) : () => {},
    p = Hg(e),
    g = Ug(e),
    y = [];
  for (const _ of e.plugins) y.push(_.observer(_.callback, n, _.options));
  return N(() => {
    (yt.forEach((_) => _.reset()),
      r.disconnect(),
      s(),
      i(),
      o(),
      a(),
      c(),
      u(),
      l(),
      d(),
      f(),
      h(),
      p(),
      g(),
      y.forEach((_) => _()));
  });
}
function Tn(e) {
  return typeof window[e] < "u";
}
function In(e) {
  return !!(
    typeof window[e] < "u" &&
    window[e].prototype &&
    "insertRule" in window[e].prototype &&
    "deleteRule" in window[e].prototype
  );
}
class Kr {
  constructor(t) {
    ((this.generateIdFn = t),
      (this.iframeIdToRemoteIdMap = new WeakMap()),
      (this.iframeRemoteIdToIdMap = new WeakMap()));
  }
  getId(t, n, r, s) {
    const i = r || this.getIdToRemoteIdMap(t),
      o = s || this.getRemoteIdToIdMap(t);
    let a = i.get(n);
    return (a || ((a = this.generateIdFn()), i.set(n, a), o.set(a, n)), a);
  }
  getIds(t, n) {
    const r = this.getIdToRemoteIdMap(t),
      s = this.getRemoteIdToIdMap(t);
    return n.map((i) => this.getId(t, i, r, s));
  }
  getRemoteId(t, n, r) {
    const s = r || this.getRemoteIdToIdMap(t);
    if (typeof n != "number") return n;
    const i = s.get(n);
    return i || -1;
  }
  getRemoteIds(t, n) {
    const r = this.getRemoteIdToIdMap(t);
    return n.map((s) => this.getRemoteId(t, s, r));
  }
  reset(t) {
    if (!t) {
      ((this.iframeIdToRemoteIdMap = new WeakMap()),
        (this.iframeRemoteIdToIdMap = new WeakMap()));
      return;
    }
    (this.iframeIdToRemoteIdMap.delete(t),
      this.iframeRemoteIdToIdMap.delete(t));
  }
  getIdToRemoteIdMap(t) {
    let n = this.iframeIdToRemoteIdMap.get(t);
    return (n || ((n = new Map()), this.iframeIdToRemoteIdMap.set(t, n)), n);
  }
  getRemoteIdToIdMap(t) {
    let n = this.iframeRemoteIdToIdMap.get(t);
    return (n || ((n = new Map()), this.iframeRemoteIdToIdMap.set(t, n)), n);
  }
}
function no(e) {
  let t,
    n = e[0],
    r = 1;
  for (; r < e.length;) {
    const s = e[r],
      i = e[r + 1];
    if (
      ((r += 2), (s === "optionalAccess" || s === "optionalCall") && n == null)
    )
      return;
    s === "access" || s === "optionalAccess"
      ? ((t = n), (n = i(n)))
      : (s === "call" || s === "optionalCall") &&
        ((n = i((...o) => n.call(t, ...o))), (t = void 0));
  }
  return n;
}
class jg {
  constructor() {
    ((this.crossOriginIframeMirror = new Kr(xs)),
      (this.crossOriginIframeRootIdMap = new WeakMap()));
  }
  addIframe() {}
  addLoadListener() {}
  attachIframe() {}
}
class Wg {
  constructor(t) {
    ((this.iframes = new WeakMap()),
      (this.crossOriginIframeMap = new WeakMap()),
      (this.crossOriginIframeMirror = new Kr(xs)),
      (this.crossOriginIframeRootIdMap = new WeakMap()),
      (this.mutationCb = t.mutationCb),
      (this.wrappedEmit = t.wrappedEmit),
      (this.stylesheetManager = t.stylesheetManager),
      (this.recordCrossOriginIframes = t.recordCrossOriginIframes),
      (this.crossOriginIframeStyleMirror = new Kr(
        this.stylesheetManager.styleMirror.generateId.bind(
          this.stylesheetManager.styleMirror,
        ),
      )),
      (this.mirror = t.mirror),
      this.recordCrossOriginIframes &&
        window.addEventListener("message", this.handleMessage.bind(this)));
  }
  addIframe(t) {
    (this.iframes.set(t, !0),
      t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t));
  }
  addLoadListener(t) {
    this.loadListener = t;
  }
  attachIframe(t, n) {
    (this.mutationCb({
      adds: [{ parentId: this.mirror.getId(t), nextId: null, node: n }],
      removes: [],
      texts: [],
      attributes: [],
      isAttachIframe: !0,
    }),
      no([this, "access", (r) => r.loadListener, "optionalCall", (r) => r(t)]),
      t.contentDocument &&
        t.contentDocument.adoptedStyleSheets &&
        t.contentDocument.adoptedStyleSheets.length > 0 &&
        this.stylesheetManager.adoptStyleSheets(
          t.contentDocument.adoptedStyleSheets,
          this.mirror.getId(t.contentDocument),
        ));
  }
  handleMessage(t) {
    const n = t;
    if (n.data.type !== "rrweb" || n.origin !== n.data.origin || !t.source)
      return;
    const s = this.crossOriginIframeMap.get(t.source);
    if (!s) return;
    const i = this.transformCrossOriginEvent(s, n.data.event);
    i && this.wrappedEmit(i, n.data.isCheckout);
  }
  transformCrossOriginEvent(t, n) {
    switch (n.type) {
      case C.FullSnapshot: {
        (this.crossOriginIframeMirror.reset(t),
          this.crossOriginIframeStyleMirror.reset(t),
          this.replaceIdOnNode(n.data.node, t));
        const r = n.data.node.id;
        return (
          this.crossOriginIframeRootIdMap.set(t, r),
          this.patchRootIdOnNode(n.data.node, r),
          {
            timestamp: n.timestamp,
            type: C.IncrementalSnapshot,
            data: {
              source: M.Mutation,
              adds: [
                {
                  parentId: this.mirror.getId(t),
                  nextId: null,
                  node: n.data.node,
                },
              ],
              removes: [],
              texts: [],
              attributes: [],
              isAttachIframe: !0,
            },
          }
        );
      }
      case C.Meta:
      case C.Load:
      case C.DomContentLoaded:
        return !1;
      case C.Plugin:
        return n;
      case C.Custom:
        return (
          this.replaceIds(n.data.payload, t, [
            "id",
            "parentId",
            "previousId",
            "nextId",
          ]),
          n
        );
      case C.IncrementalSnapshot:
        switch (n.data.source) {
          case M.Mutation:
            return (
              n.data.adds.forEach((r) => {
                (this.replaceIds(r, t, ["parentId", "nextId", "previousId"]),
                  this.replaceIdOnNode(r.node, t));
                const s = this.crossOriginIframeRootIdMap.get(t);
                s && this.patchRootIdOnNode(r.node, s);
              }),
              n.data.removes.forEach((r) => {
                this.replaceIds(r, t, ["parentId", "id"]);
              }),
              n.data.attributes.forEach((r) => {
                this.replaceIds(r, t, ["id"]);
              }),
              n.data.texts.forEach((r) => {
                this.replaceIds(r, t, ["id"]);
              }),
              n
            );
          case M.Drag:
          case M.TouchMove:
          case M.MouseMove:
            return (
              n.data.positions.forEach((r) => {
                this.replaceIds(r, t, ["id"]);
              }),
              n
            );
          case M.ViewportResize:
            return !1;
          case M.MediaInteraction:
          case M.MouseInteraction:
          case M.Scroll:
          case M.CanvasMutation:
          case M.Input:
            return (this.replaceIds(n.data, t, ["id"]), n);
          case M.StyleSheetRule:
          case M.StyleDeclaration:
            return (
              this.replaceIds(n.data, t, ["id"]),
              this.replaceStyleIds(n.data, t, ["styleId"]),
              n
            );
          case M.Font:
            return n;
          case M.Selection:
            return (
              n.data.ranges.forEach((r) => {
                this.replaceIds(r, t, ["start", "end"]);
              }),
              n
            );
          case M.AdoptedStyleSheet:
            return (
              this.replaceIds(n.data, t, ["id"]),
              this.replaceStyleIds(n.data, t, ["styleIds"]),
              no([
                n,
                "access",
                (r) => r.data,
                "access",
                (r) => r.styles,
                "optionalAccess",
                (r) => r.forEach,
                "call",
                (r) =>
                  r((s) => {
                    this.replaceStyleIds(s, t, ["styleId"]);
                  }),
              ]),
              n
            );
        }
    }
    return !1;
  }
  replace(t, n, r, s) {
    for (const i of s)
      (!Array.isArray(n[i]) && typeof n[i] != "number") ||
        (Array.isArray(n[i])
          ? (n[i] = t.getIds(r, n[i]))
          : (n[i] = t.getId(r, n[i])));
    return n;
  }
  replaceIds(t, n, r) {
    return this.replace(this.crossOriginIframeMirror, t, n, r);
  }
  replaceStyleIds(t, n, r) {
    return this.replace(this.crossOriginIframeStyleMirror, t, n, r);
  }
  replaceIdOnNode(t, n) {
    (this.replaceIds(t, n, ["id", "rootId"]),
      "childNodes" in t &&
        t.childNodes.forEach((r) => {
          this.replaceIdOnNode(r, n);
        }));
  }
  patchRootIdOnNode(t, n) {
    (t.type !== Z.Document && !t.rootId && (t.rootId = n),
      "childNodes" in t &&
        t.childNodes.forEach((r) => {
          this.patchRootIdOnNode(r, n);
        }));
  }
}
class qg {
  init() {}
  addShadowRoot() {}
  observeAttachShadow() {}
  reset() {}
}
class Gg {
  constructor(t) {
    ((this.shadowDoms = new WeakSet()),
      (this.restoreHandlers = []),
      (this.mutationCb = t.mutationCb),
      (this.scrollCb = t.scrollCb),
      (this.bypassOptions = t.bypassOptions),
      (this.mirror = t.mirror),
      this.init());
  }
  init() {
    (this.reset(), this.patchAttachShadow(Element, document));
  }
  addShadowRoot(t, n) {
    if (!qt(t) || this.shadowDoms.has(t)) return;
    this.shadowDoms.add(t);
    const r = lc(
      {
        ...this.bypassOptions,
        doc: n,
        mutationCb: this.mutationCb,
        mirror: this.mirror,
        shadowDomManager: this,
      },
      t,
    );
    (this.restoreHandlers.push(() => r.disconnect()),
      this.restoreHandlers.push(
        dc({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: t,
          mirror: this.mirror,
        }),
      ),
      tr(() => {
        (t.adoptedStyleSheets &&
          t.adoptedStyleSheets.length > 0 &&
          this.bypassOptions.stylesheetManager.adoptStyleSheets(
            t.adoptedStyleSheets,
            this.mirror.getId(t.host),
          ),
          this.restoreHandlers.push(
            fc(
              {
                mirror: this.mirror,
                stylesheetManager: this.bypassOptions.stylesheetManager,
              },
              t,
            ),
          ));
      }, 0));
  }
  observeAttachShadow(t) {
    !t.contentWindow ||
      !t.contentDocument ||
      this.patchAttachShadow(t.contentWindow.Element, t.contentDocument);
  }
  patchAttachShadow(t, n) {
    const r = this;
    this.restoreHandlers.push(
      As(t.prototype, "attachShadow", function (s) {
        return function (i) {
          const o = s.call(this, i);
          return (
            this.shadowRoot && ac(this) && r.addShadowRoot(this.shadowRoot, n),
            o
          );
        };
      }),
    );
  }
  reset() {
    (this.restoreHandlers.forEach((t) => {
      try {
        t();
      } catch {}
    }),
      (this.restoreHandlers = []),
      (this.shadowDoms = new WeakSet()));
  }
}
class ro {
  reset() {}
  freeze() {}
  unfreeze() {}
  lock() {}
  unlock() {}
  snapshot() {}
}
class Yg {
  constructor(t) {
    ((this.trackedLinkElements = new WeakSet()),
      (this.styleMirror = new Eg()),
      (this.mutationCb = t.mutationCb),
      (this.adoptedStyleSheetCb = t.adoptedStyleSheetCb));
  }
  attachLinkElement(t, n) {
    ("_cssText" in n.attributes &&
      this.mutationCb({
        adds: [],
        removes: [],
        texts: [],
        attributes: [{ id: n.id, attributes: n.attributes }],
      }),
      this.trackLinkElement(t));
  }
  trackLinkElement(t) {
    this.trackedLinkElements.has(t) ||
      (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t));
  }
  adoptStyleSheets(t, n) {
    if (t.length === 0) return;
    const r = { id: n, styleIds: [] },
      s = [];
    for (const i of t) {
      let o;
      (this.styleMirror.has(i)
        ? (o = this.styleMirror.getId(i))
        : ((o = this.styleMirror.add(i)),
          s.push({
            styleId: o,
            rules: Array.from(i.rules || CSSRule, (a, c) => ({
              rule: Va(a),
              index: c,
            })),
          })),
        r.styleIds.push(o));
    }
    (s.length > 0 && (r.styles = s), this.adoptedStyleSheetCb(r));
  }
  reset() {
    (this.styleMirror.reset(), (this.trackedLinkElements = new WeakSet()));
  }
  trackStylesheetInLinkElement(t) {}
}
class Vg {
  constructor() {
    ((this.nodeMap = new WeakMap()),
      (this.loop = !0),
      this.periodicallyClear());
  }
  periodicallyClear() {
    Ig(() => {
      (this.clear(), this.loop && this.periodicallyClear());
    });
  }
  inOtherBuffer(t, n) {
    const r = this.nodeMap.get(t);
    return r && Array.from(r).some((s) => s !== n);
  }
  add(t, n) {
    this.nodeMap.set(t, (this.nodeMap.get(t) || new Set()).add(n));
  }
  clear() {
    this.nodeMap = new WeakMap();
  }
  destroy() {
    this.loop = !1;
  }
}
let G, Un;
const ye = Xm();
function je(e = {}) {
  const {
    emit: t,
    checkoutEveryNms: n,
    checkoutEveryNth: r,
    blockClass: s = "rr-block",
    blockSelector: i = null,
    unblockSelector: o = null,
    ignoreClass: a = "rr-ignore",
    ignoreSelector: c = null,
    maskAllText: u = !1,
    maskTextClass: l = "rr-mask",
    unmaskTextClass: d = null,
    maskTextSelector: f = null,
    unmaskTextSelector: h = null,
    inlineStylesheet: p = !0,
    maskAllInputs: g,
    maskInputOptions: y,
    slimDOMOptions: _,
    maskAttributeFn: S,
    maskInputFn: b,
    maskTextFn: w,
    maxCanvasSize: T = null,
    packFn: k,
    sampling: x = {},
    dataURLOptions: O = {},
    mousemoveWait: I,
    recordCanvas: R = !1,
    recordCrossOriginIframes: W = !1,
    recordAfter: J = e.recordAfter === "DOMContentLoaded"
      ? e.recordAfter
      : "load",
    userTriggeredOnInput: te = !1,
    collectFonts: ne = !1,
    inlineImages: fe = !1,
    plugins: $,
    keepIframeSrcFn: pe = () => !1,
    ignoreCSSAttributes: X = new Set([]),
    errorHandler: ue,
    onMutation: ge,
    getCanvasManager: or,
  } = e;
  Mg(ue);
  const at = W ? window.parent === window : !0;
  let Le = !1;
  if (!at)
    try {
      window.parent.document && (Le = !1);
    } catch {
      Le = !0;
    }
  if (at && !t) throw new Error("emit function is required");
  (I !== void 0 && x.mousemove === void 0 && (x.mousemove = I), ye.reset());
  const ct =
      g === !0
        ? {
            color: !0,
            date: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
            textarea: !0,
            select: !0,
            radio: !0,
            checkbox: !0,
          }
        : y !== void 0
          ? y
          : {},
    Pt =
      _ === !0 || _ === "all"
        ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: _ === "all",
            headMetaDescKeywords: _ === "all",
          }
        : _ || {};
  bg();
  let ar,
    cr = 0;
  const Hs = (P) => {
    for (const _e of $ || []) _e.eventProcessor && (P = _e.eventProcessor(P));
    return (k && !Le && (P = k(P)), P);
  };
  G = (P, _e) => {
    const L = P;
    if (
      ((L.timestamp = $n()),
      mr([
        yt,
        "access",
        (q) => q[0],
        "optionalAccess",
        (q) => q.isFrozen,
        "call",
        (q) => q(),
      ]) &&
        L.type !== C.FullSnapshot &&
        !(L.type === C.IncrementalSnapshot && L.data.source === M.Mutation) &&
        yt.forEach((q) => q.unfreeze()),
      at)
    )
      mr([t, "optionalCall", (q) => q(Hs(L), _e)]);
    else if (Le) {
      const q = {
        type: "rrweb",
        event: Hs(L),
        origin: window.location.origin,
        isCheckout: _e,
      };
      window.parent.postMessage(q, "*");
    }
    if (L.type === C.FullSnapshot) ((ar = L), (cr = 0));
    else if (L.type === C.IncrementalSnapshot) {
      if (L.data.source === M.Mutation && L.data.isAttachIframe) return;
      cr++;
      const q = r && cr >= r,
        F = n && ar && L.timestamp - ar.timestamp > n;
      (q || F) && lr(!0);
    }
  };
  const ln = (P) => {
      G({ type: C.IncrementalSnapshot, data: { source: M.Mutation, ...P } });
    },
    Us = (P) =>
      G({ type: C.IncrementalSnapshot, data: { source: M.Scroll, ...P } }),
    Pc = (P) =>
      G({
        type: C.IncrementalSnapshot,
        data: { source: M.CanvasMutation, ...P },
      }),
    Fc = (P) =>
      G({
        type: C.IncrementalSnapshot,
        data: { source: M.AdoptedStyleSheet, ...P },
      }),
    Ke = new Yg({ mutationCb: ln, adoptedStyleSheetCb: Fc }),
    Je =
      typeof __RRWEB_EXCLUDE_IFRAME__ == "boolean" && __RRWEB_EXCLUDE_IFRAME__
        ? new jg()
        : new Wg({
            mirror: ye,
            mutationCb: ln,
            stylesheetManager: Ke,
            recordCrossOriginIframes: W,
            wrappedEmit: G,
          });
  for (const P of $ || [])
    P.getMirror &&
      P.getMirror({
        nodeMirror: ye,
        crossOriginIframeMirror: Je.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: Je.crossOriginIframeStyleMirror,
      });
  const ur = new Vg(),
    zs = Kg(or, {
      mirror: ye,
      win: window,
      mutationCb: (P) =>
        G({
          type: C.IncrementalSnapshot,
          data: { source: M.CanvasMutation, ...P },
        }),
      recordCanvas: R,
      blockClass: s,
      blockSelector: i,
      unblockSelector: o,
      maxCanvasSize: T,
      sampling: x.canvas,
      dataURLOptions: O,
      errorHandler: ue,
    }),
    dn =
      typeof __RRWEB_EXCLUDE_SHADOW_DOM__ == "boolean" &&
      __RRWEB_EXCLUDE_SHADOW_DOM__
        ? new qg()
        : new Gg({
            mutationCb: ln,
            scrollCb: Us,
            bypassOptions: {
              onMutation: ge,
              blockClass: s,
              blockSelector: i,
              unblockSelector: o,
              maskAllText: u,
              maskTextClass: l,
              unmaskTextClass: d,
              maskTextSelector: f,
              unmaskTextSelector: h,
              inlineStylesheet: p,
              maskInputOptions: ct,
              dataURLOptions: O,
              maskAttributeFn: S,
              maskTextFn: w,
              maskInputFn: b,
              recordCanvas: R,
              inlineImages: fe,
              sampling: x,
              slimDOMOptions: Pt,
              iframeManager: Je,
              stylesheetManager: Ke,
              canvasManager: zs,
              keepIframeSrcFn: pe,
              processedNodeManager: ur,
            },
            mirror: ye,
          }),
    lr = (P = !1) => {
      (G(
        {
          type: C.Meta,
          data: { href: window.location.href, width: tc(), height: ec() },
        },
        P,
      ),
        Ke.reset(),
        dn.init(),
        yt.forEach((L) => L.lock()));
      const _e = yg(document, {
        mirror: ye,
        blockClass: s,
        blockSelector: i,
        unblockSelector: o,
        maskAllText: u,
        maskTextClass: l,
        unmaskTextClass: d,
        maskTextSelector: f,
        unmaskTextSelector: h,
        inlineStylesheet: p,
        maskAllInputs: ct,
        maskAttributeFn: S,
        maskInputFn: b,
        maskTextFn: w,
        slimDOM: Pt,
        dataURLOptions: O,
        recordCanvas: R,
        inlineImages: fe,
        onSerialize: (L) => {
          (sc(L, ye) && Je.addIframe(L),
            ic(L, ye) && Ke.trackLinkElement(L),
            Vr(L) && dn.addShadowRoot(L.shadowRoot, document));
        },
        onIframeLoad: (L, q) => {
          (Je.attachIframe(L, q), dn.observeAttachShadow(L));
        },
        onStylesheetLoad: (L, q) => {
          Ke.attachLinkElement(L, q);
        },
        keepIframeSrcFn: pe,
      });
      if (!_e) return console.warn("Failed to snapshot the document");
      (G({
        type: C.FullSnapshot,
        data: { node: _e, initialOffset: Qa(window) },
      }),
        yt.forEach((L) => L.unlock()),
        document.adoptedStyleSheets &&
          document.adoptedStyleSheets.length > 0 &&
          Ke.adoptStyleSheets(document.adoptedStyleSheets, ye.getId(document)));
    };
  Un = lr;
  try {
    const P = [],
      _e = (q) =>
        N(zg)(
          {
            onMutation: ge,
            mutationCb: ln,
            mousemoveCb: (F, Ze) =>
              G({
                type: C.IncrementalSnapshot,
                data: { source: Ze, positions: F },
              }),
            mouseInteractionCb: (F) =>
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.MouseInteraction, ...F },
              }),
            scrollCb: Us,
            viewportResizeCb: (F) =>
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.ViewportResize, ...F },
              }),
            inputCb: (F) =>
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.Input, ...F },
              }),
            mediaInteractionCb: (F) =>
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.MediaInteraction, ...F },
              }),
            styleSheetRuleCb: (F) =>
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.StyleSheetRule, ...F },
              }),
            styleDeclarationCb: (F) =>
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.StyleDeclaration, ...F },
              }),
            canvasMutationCb: Pc,
            fontCb: (F) =>
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.Font, ...F },
              }),
            selectionCb: (F) => {
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.Selection, ...F },
              });
            },
            customElementCb: (F) => {
              G({
                type: C.IncrementalSnapshot,
                data: { source: M.CustomElement, ...F },
              });
            },
            blockClass: s,
            ignoreClass: a,
            ignoreSelector: c,
            maskAllText: u,
            maskTextClass: l,
            unmaskTextClass: d,
            maskTextSelector: f,
            unmaskTextSelector: h,
            maskInputOptions: ct,
            inlineStylesheet: p,
            sampling: x,
            recordCanvas: R,
            inlineImages: fe,
            userTriggeredOnInput: te,
            collectFonts: ne,
            doc: q,
            maskAttributeFn: S,
            maskInputFn: b,
            maskTextFn: w,
            keepIframeSrcFn: pe,
            blockSelector: i,
            unblockSelector: o,
            slimDOMOptions: Pt,
            dataURLOptions: O,
            mirror: ye,
            iframeManager: Je,
            stylesheetManager: Ke,
            shadowDomManager: dn,
            processedNodeManager: ur,
            canvasManager: zs,
            ignoreCSSAttributes: X,
            plugins:
              mr([
                $,
                "optionalAccess",
                (F) => F.filter,
                "call",
                (F) => F((Ze) => Ze.observer),
                "optionalAccess",
                (F) => F.map,
                "call",
                (F) =>
                  F((Ze) => ({
                    observer: Ze.observer,
                    options: Ze.options,
                    callback: (Bc) =>
                      G({
                        type: C.Plugin,
                        data: { plugin: Ze.name, payload: Bc },
                      }),
                  })),
              ]) || [],
          },
          {},
        );
    Je.addLoadListener((q) => {
      try {
        P.push(_e(q.contentDocument));
      } catch (F) {
        console.warn(F);
      }
    });
    const L = () => {
      (lr(), P.push(_e(document)));
    };
    return (
      document.readyState === "interactive" ||
      document.readyState === "complete"
        ? L()
        : (P.push(
            oe("DOMContentLoaded", () => {
              (G({ type: C.DomContentLoaded, data: {} }),
                J === "DOMContentLoaded" && L());
            }),
          ),
          P.push(
            oe(
              "load",
              () => {
                (G({ type: C.Load, data: {} }), J === "load" && L());
              },
              window,
            ),
          )),
      () => {
        (P.forEach((q) => q()), ur.destroy(), (Un = void 0), xg());
      }
    );
  } catch (P) {
    console.warn(P);
  }
}
function Xg(e) {
  if (!Un) throw new Error("please take full snapshot after start recording");
  Un(e);
}
je.mirror = ye;
je.takeFullSnapshot = Xg;
function Kg(e, t) {
  try {
    return e ? e(t) : new ro();
  } catch {
    return (console.warn("Unable to initialize CanvasManager"), new ro());
  }
}
const Jg = 3,
  Zg = 5;
function Ds(e) {
  return e > 9999999999 ? e : e * 1e3;
}
function Tr(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function un(e, t) {
  t.category !== "sentry.transaction" &&
    (["ui.click", "ui.input"].includes(t.category)
      ? e.triggerUserActivity()
      : e.checkAndHandleExpiredSession(),
    e.addUpdate(
      () => (
        e.throttledAddEvent({
          type: C.Custom,
          timestamp: (t.timestamp || 0) * 1e3,
          data: { tag: "breadcrumb", payload: Te(t, 10, 1e3) },
        }),
        t.category === "console"
      ),
    ));
}
const Qg = "button,a";
function hc(e) {
  return e.closest(Qg) || e;
}
function pc(e) {
  const t = mc(e);
  return !t || !(t instanceof Element) ? t : hc(t);
}
function mc(e) {
  return e_(e) ? e.target : e;
}
function e_(e) {
  return typeof e == "object" && !!e && "target" in e;
}
let Be;
function t_(e) {
  return (
    Be || ((Be = []), n_()),
    Be.push(e),
    () => {
      const t = Be ? Be.indexOf(e) : -1;
      t > -1 && Be.splice(t, 1);
    }
  );
}
function n_() {
  ee(j, "open", function (e) {
    return function (...t) {
      if (Be)
        try {
          Be.forEach((n) => n());
        } catch {}
      return e.apply(j, t);
    };
  });
}
function r_(e, t, n) {
  e.handleClick(t, n);
}
class s_ {
  constructor(t, n, r = un) {
    ((this._lastMutation = 0),
      (this._lastScroll = 0),
      (this._clicks = []),
      (this._timeout = n.timeout / 1e3),
      (this._threshold = n.threshold / 1e3),
      (this._scollTimeout = n.scrollTimeout / 1e3),
      (this._replay = t),
      (this._ignoreSelector = n.ignoreSelector),
      (this._addBreadcrumbEvent = r));
  }
  addListeners() {
    const t = t_(() => {
      this._lastMutation = so();
    });
    this._teardown = () => {
      (t(),
        (this._clicks = []),
        (this._lastMutation = 0),
        (this._lastScroll = 0));
    };
  }
  removeListeners() {
    (this._teardown && this._teardown(),
      this._checkClickTimeout && clearTimeout(this._checkClickTimeout));
  }
  handleClick(t, n) {
    if (o_(n, this._ignoreSelector) || !a_(t)) return;
    const r = {
      timestamp: Tr(t.timestamp),
      clickBreadcrumb: t,
      clickCount: 0,
      node: n,
    };
    this._clicks.some(
      (s) => s.node === r.node && Math.abs(s.timestamp - r.timestamp) < 1,
    ) ||
      (this._clicks.push(r),
      this._clicks.length === 1 && this._scheduleCheckClicks());
  }
  registerMutation(t = Date.now()) {
    this._lastMutation = Tr(t);
  }
  registerScroll(t = Date.now()) {
    this._lastScroll = Tr(t);
  }
  registerClick(t) {
    const n = hc(t);
    this._handleMultiClick(n);
  }
  _handleMultiClick(t) {
    this._getClicks(t).forEach((n) => {
      n.clickCount++;
    });
  }
  _getClicks(t) {
    return this._clicks.filter((n) => n.node === t);
  }
  _checkClicks() {
    const t = [],
      n = so();
    this._clicks.forEach((r) => {
      (!r.mutationAfter &&
        this._lastMutation &&
        (r.mutationAfter =
          r.timestamp <= this._lastMutation
            ? this._lastMutation - r.timestamp
            : void 0),
        !r.scrollAfter &&
          this._lastScroll &&
          (r.scrollAfter =
            r.timestamp <= this._lastScroll
              ? this._lastScroll - r.timestamp
              : void 0),
        r.timestamp + this._timeout <= n && t.push(r));
    });
    for (const r of t) {
      const s = this._clicks.indexOf(r);
      s > -1 && (this._generateBreadcrumbs(r), this._clicks.splice(s, 1));
    }
    this._clicks.length && this._scheduleCheckClicks();
  }
  _generateBreadcrumbs(t) {
    const n = this._replay,
      r = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
      s = t.mutationAfter && t.mutationAfter <= this._threshold,
      i = !r && !s,
      { clickCount: o, clickBreadcrumb: a } = t;
    if (i) {
      const c = Math.min(t.mutationAfter || this._timeout, this._timeout) * 1e3,
        u = c < this._timeout * 1e3 ? "mutation" : "timeout",
        l = {
          type: "default",
          message: a.message,
          timestamp: a.timestamp,
          category: "ui.slowClickDetected",
          data: {
            ...a.data,
            url: j.location.href,
            route: n.getCurrentRoute(),
            timeAfterClickMs: c,
            endReason: u,
            clickCount: o || 1,
          },
        };
      this._addBreadcrumbEvent(n, l);
      return;
    }
    if (o > 1) {
      const c = {
        type: "default",
        message: a.message,
        timestamp: a.timestamp,
        category: "ui.multiClick",
        data: {
          ...a.data,
          url: j.location.href,
          route: n.getCurrentRoute(),
          clickCount: o,
          metric: !0,
        },
      };
      this._addBreadcrumbEvent(n, c);
    }
  }
  _scheduleCheckClicks() {
    (this._checkClickTimeout && clearTimeout(this._checkClickTimeout),
      (this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)));
  }
}
const i_ = ["A", "BUTTON", "INPUT"];
function o_(e, t) {
  return !!(
    !i_.includes(e.tagName) ||
    (e.tagName === "INPUT" &&
      !["submit", "button"].includes(e.getAttribute("type") || "")) ||
    (e.tagName === "A" &&
      (e.hasAttribute("download") ||
        (e.hasAttribute("target") && e.getAttribute("target") !== "_self"))) ||
    (t && e.matches(t))
  );
}
function a_(e) {
  return !!(e.data && typeof e.data.nodeId == "number" && e.timestamp);
}
function so() {
  return Date.now() / 1e3;
}
function c_(e, t) {
  try {
    if (!u_(t)) return;
    const { source: n } = t.data;
    if (
      (n === M.Mutation && e.registerMutation(t.timestamp),
      n === M.Scroll && e.registerScroll(t.timestamp),
      l_(t))
    ) {
      const { type: r, id: s } = t.data,
        i = je.mirror.getNode(s);
      i instanceof HTMLElement && r === se.Click && e.registerClick(i);
    }
  } catch {}
}
function u_(e) {
  return e.type === Jg;
}
function l_(e) {
  return e.data.source === M.MouseInteraction;
}
function ke(e) {
  return { timestamp: Date.now() / 1e3, type: "default", ...e };
}
var zn;
(function (e) {
  ((e[(e.Document = 0)] = "Document"),
    (e[(e.DocumentType = 1)] = "DocumentType"),
    (e[(e.Element = 2)] = "Element"),
    (e[(e.Text = 3)] = "Text"),
    (e[(e.CDATA = 4)] = "CDATA"),
    (e[(e.Comment = 5)] = "Comment"));
})(zn || (zn = {}));
const d_ = new Set([
  "id",
  "class",
  "aria-label",
  "role",
  "name",
  "alt",
  "title",
  "data-test-id",
  "data-testid",
  "disabled",
  "aria-disabled",
  "data-sentry-component",
]);
function f_(e) {
  const t = {};
  for (const n in e)
    if (d_.has(n)) {
      let r = n;
      ((n === "data-testid" || n === "data-test-id") && (r = "testId"),
        (t[r] = e[n]));
    }
  return t;
}
const h_ = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = p_(t);
  if (!n) return;
  const r = t.name === "click",
    s = r ? t.event : void 0;
  (r &&
    e.clickDetector &&
    s &&
    s.target &&
    !s.altKey &&
    !s.metaKey &&
    !s.ctrlKey &&
    !s.shiftKey &&
    r_(e.clickDetector, n, pc(t.event)),
    un(e, n));
};
function gc(e, t) {
  const n = je.mirror.getId(e),
    r = n && je.mirror.getNode(n),
    s = r && je.mirror.getMeta(r),
    i = s && g_(s) ? s : null;
  return {
    message: t,
    data: i
      ? {
          nodeId: n,
          node: {
            id: n,
            tagName: i.tagName,
            textContent: Array.from(i.childNodes)
              .map((o) => o.type === zn.Text && o.textContent)
              .filter(Boolean)
              .map((o) => o.trim())
              .join(""),
            attributes: f_(i.attributes),
          },
        }
      : {},
  };
}
function p_(e) {
  const { target: t, message: n } = m_(e);
  return ke({ category: `ui.${e.name}`, ...gc(t, n) });
}
function m_(e) {
  const t = e.name === "click";
  let n,
    r = null;
  try {
    ((r = t ? pc(e.event) : mc(e.event)),
      (n = qe(r, { maxStringLength: 200 }) || "<unknown>"));
  } catch {
    n = "<unknown>";
  }
  return { target: r, message: n };
}
function g_(e) {
  return e.type === zn.Element;
}
function __(e, t) {
  if (!e.isEnabled()) return;
  e.updateUserActivity();
  const n = y_(t);
  n && un(e, n);
}
function y_(e) {
  const {
    metaKey: t,
    shiftKey: n,
    ctrlKey: r,
    altKey: s,
    key: i,
    target: o,
  } = e;
  if (!o || S_(o) || !i) return null;
  const a = t || r || s,
    c = i.length === 1;
  if (!a && c) return null;
  const u = qe(o, { maxStringLength: 200 }) || "<unknown>",
    l = gc(o, u);
  return ke({
    category: "ui.keyDown",
    message: u,
    data: { ...l.data, metaKey: t, shiftKey: n, ctrlKey: r, altKey: s, key: i },
  });
}
function S_(e) {
  return (
    e.tagName === "INPUT" || e.tagName === "TEXTAREA" || e.isContentEditable
  );
}
const io = { resource: I_, paint: v_, navigation: T_ };
function b_(e) {
  return e.map(E_).filter(Boolean);
}
function E_(e) {
  return io[e.entryType] ? io[e.entryType](e) : null;
}
function Mt(e) {
  return ((ce || j.performance.timeOrigin) + e) / 1e3;
}
function v_(e) {
  const { duration: t, entryType: n, name: r, startTime: s } = e,
    i = Mt(s);
  return { type: n, name: r, start: i, end: i + t, data: void 0 };
}
function T_(e) {
  const {
    entryType: t,
    name: n,
    decodedBodySize: r,
    duration: s,
    domComplete: i,
    encodedBodySize: o,
    domContentLoadedEventStart: a,
    domContentLoadedEventEnd: c,
    domInteractive: u,
    loadEventStart: l,
    loadEventEnd: d,
    redirectCount: f,
    startTime: h,
    transferSize: p,
    type: g,
  } = e;
  return s === 0
    ? null
    : {
        type: `${t}.${g}`,
        start: Mt(h),
        end: Mt(i),
        name: n,
        data: {
          size: p,
          decodedBodySize: r,
          encodedBodySize: o,
          duration: s,
          domInteractive: u,
          domContentLoadedEventStart: a,
          domContentLoadedEventEnd: c,
          loadEventStart: l,
          loadEventEnd: d,
          domComplete: i,
          redirectCount: f,
        },
      };
}
function I_(e) {
  const {
    entryType: t,
    initiatorType: n,
    name: r,
    responseEnd: s,
    startTime: i,
    decodedBodySize: o,
    encodedBodySize: a,
    responseStatus: c,
    transferSize: u,
  } = e;
  return ["fetch", "xmlhttprequest"].includes(n)
    ? null
    : {
        type: `${t}.${n}`,
        start: Mt(i),
        end: Mt(s),
        name: r,
        data: {
          size: u,
          statusCode: c,
          decodedBodySize: o,
          encodedBodySize: a,
        },
      };
}
function w_(e) {
  const t = e.entries,
    n = t[t.length - 1],
    r = n ? n.element : void 0,
    s = e.value,
    i = Mt(s);
  return {
    type: "largest-contentful-paint",
    name: "largest-contentful-paint",
    start: i,
    end: i,
    data: { value: s, size: s, nodeId: r ? je.mirror.getId(r) : void 0 },
  };
}
function k_(e) {
  function t(s) {
    e.performanceEntries.includes(s) || e.performanceEntries.push(s);
  }
  function n({ entries: s }) {
    s.forEach(t);
  }
  const r = [];
  return (
    ["navigation", "paint", "resource"].forEach((s) => {
      r.push(Ye(s, n));
    }),
    r.push(
      xa(({ metric: s }) => {
        e.replayPerformanceEntries.push(w_(s));
      }),
    ),
    () => {
      r.forEach((s) => s());
    }
  );
}
const U = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__,
  R_ =
    'var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});';
function C_() {
  const e = new Blob([R_]);
  return URL.createObjectURL(e);
}
function ie(e, t) {
  U && (m.info(e), t && _c(e));
}
function Et(e, t) {
  U &&
    (m.info(e),
    t &&
      setTimeout(() => {
        _c(e);
      }, 0));
}
function _c(e) {
  Ge(
    {
      category: "console",
      data: { logger: "replay" },
      level: "info",
      message: e,
    },
    { level: "info" },
  );
}
class Ls extends Error {
  constructor() {
    super(`Event buffer exceeded maximum size of ${Cs}.`);
  }
}
class yc {
  constructor() {
    ((this.events = []), (this._totalSize = 0), (this.hasCheckout = !1));
  }
  get hasEvents() {
    return this.events.length > 0;
  }
  get type() {
    return "sync";
  }
  destroy() {
    this.events = [];
  }
  async addEvent(t) {
    const n = JSON.stringify(t).length;
    if (((this._totalSize += n), this._totalSize > Cs)) throw new Ls();
    this.events.push(t);
  }
  finish() {
    return new Promise((t) => {
      const n = this.events;
      (this.clear(), t(JSON.stringify(n)));
    });
  }
  clear() {
    ((this.events = []), (this._totalSize = 0), (this.hasCheckout = !1));
  }
  getEarliestTimestamp() {
    const t = this.events.map((n) => n.timestamp).sort()[0];
    return t ? Ds(t) : null;
  }
}
class M_ {
  constructor(t) {
    ((this._worker = t), (this._id = 0));
  }
  ensureReady() {
    return this._ensureReadyPromise
      ? this._ensureReadyPromise
      : ((this._ensureReadyPromise = new Promise((t, n) => {
          (this._worker.addEventListener(
            "message",
            ({ data: r }) => {
              r.success ? t() : n();
            },
            { once: !0 },
          ),
            this._worker.addEventListener(
              "error",
              (r) => {
                n(r);
              },
              { once: !0 },
            ));
        })),
        this._ensureReadyPromise);
  }
  destroy() {
    (ie("[Replay] Destroying compression worker"), this._worker.terminate());
  }
  postMessage(t, n) {
    const r = this._getAndIncrementId();
    return new Promise((s, i) => {
      const o = ({ data: a }) => {
        const c = a;
        if (c.method === t && c.id === r) {
          if ((this._worker.removeEventListener("message", o), !c.success)) {
            (U && m.error("[Replay]", c.response),
              i(new Error("Error in compression worker")));
            return;
          }
          s(c.response);
        }
      };
      (this._worker.addEventListener("message", o),
        this._worker.postMessage({ id: r, method: t, arg: n }));
    });
  }
  _getAndIncrementId() {
    return this._id++;
  }
}
class x_ {
  constructor(t) {
    ((this._worker = new M_(t)),
      (this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1));
  }
  get hasEvents() {
    return !!this._earliestTimestamp;
  }
  get type() {
    return "worker";
  }
  ensureReady() {
    return this._worker.ensureReady();
  }
  destroy() {
    this._worker.destroy();
  }
  addEvent(t) {
    const n = Ds(t.timestamp);
    (!this._earliestTimestamp || n < this._earliestTimestamp) &&
      (this._earliestTimestamp = n);
    const r = JSON.stringify(t);
    return (
      (this._totalSize += r.length),
      this._totalSize > Cs
        ? Promise.reject(new Ls())
        : this._sendEventToWorker(r)
    );
  }
  finish() {
    return this._finishRequest();
  }
  clear() {
    ((this._earliestTimestamp = null),
      (this._totalSize = 0),
      (this.hasCheckout = !1),
      this._worker.postMessage("clear").then(null, (t) => {
        U && m.warn('[Replay] Sending "clear" message to worker failed', t);
      }));
  }
  getEarliestTimestamp() {
    return this._earliestTimestamp;
  }
  _sendEventToWorker(t) {
    return this._worker.postMessage("addEvent", t);
  }
  async _finishRequest() {
    const t = await this._worker.postMessage("finish");
    return ((this._earliestTimestamp = null), (this._totalSize = 0), t);
  }
}
class O_ {
  constructor(t) {
    ((this._fallback = new yc()),
      (this._compression = new x_(t)),
      (this._used = this._fallback),
      (this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()));
  }
  get type() {
    return this._used.type;
  }
  get hasEvents() {
    return this._used.hasEvents;
  }
  get hasCheckout() {
    return this._used.hasCheckout;
  }
  set hasCheckout(t) {
    this._used.hasCheckout = t;
  }
  destroy() {
    (this._fallback.destroy(), this._compression.destroy());
  }
  clear() {
    return this._used.clear();
  }
  getEarliestTimestamp() {
    return this._used.getEarliestTimestamp();
  }
  addEvent(t) {
    return this._used.addEvent(t);
  }
  async finish() {
    return (await this.ensureWorkerIsLoaded(), this._used.finish());
  }
  ensureWorkerIsLoaded() {
    return this._ensureWorkerIsLoadedPromise;
  }
  async _ensureWorkerIsLoaded() {
    try {
      await this._compression.ensureReady();
    } catch {
      ie(
        "[Replay] Failed to load the compression worker, falling back to simple buffer",
      );
      return;
    }
    await this._switchToCompressionWorker();
  }
  async _switchToCompressionWorker() {
    const { events: t, hasCheckout: n } = this._fallback,
      r = [];
    for (const s of t) r.push(this._compression.addEvent(s));
    ((this._compression.hasCheckout = n), (this._used = this._compression));
    try {
      await Promise.all(r);
    } catch (s) {
      U && m.warn("[Replay] Failed to add events when switching buffers.", s);
    }
  }
}
function A_({ useCompression: e, workerUrl: t }) {
  if (e && window.Worker) {
    const n = N_(t);
    if (n) return n;
  }
  return (ie("[Replay] Using simple buffer"), new yc());
}
function N_(e) {
  try {
    const t = e || D_();
    if (!t) return;
    ie(`[Replay] Using compression worker${e ? ` from ${e}` : ""}`);
    const n = new Worker(t);
    return new O_(n);
  } catch {
    ie("[Replay] Failed to create compression worker");
  }
}
function D_() {
  return typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ > "u" ||
    !__SENTRY_EXCLUDE_REPLAY_WORKER__
    ? C_()
    : "";
}
function Ps() {
  try {
    return "sessionStorage" in j && !!j.sessionStorage;
  } catch {
    return !1;
  }
}
function L_(e) {
  (P_(), (e.session = void 0));
}
function P_() {
  if (Ps())
    try {
      j.sessionStorage.removeItem(ks);
    } catch {}
}
function Sc(e) {
  return e === void 0 ? !1 : Math.random() < e;
}
function bc(e) {
  const t = Date.now(),
    n = e.id || V(),
    r = e.started || t,
    s = e.lastActivity || t,
    i = e.segmentId || 0,
    o = e.sampled,
    a = e.previousSessionId;
  return {
    id: n,
    started: r,
    lastActivity: s,
    segmentId: i,
    sampled: o,
    previousSessionId: a,
  };
}
function Fs(e) {
  if (Ps())
    try {
      j.sessionStorage.setItem(ks, JSON.stringify(e));
    } catch {}
}
function F_(e, t) {
  return Sc(e) ? "session" : t ? "buffer" : !1;
}
function oo(
  { sessionSampleRate: e, allowBuffering: t, stickySession: n = !1 },
  { previousSessionId: r } = {},
) {
  const s = F_(e, t),
    i = bc({ sampled: s, previousSessionId: r });
  return (n && Fs(i), i);
}
function B_(e) {
  if (!Ps()) return null;
  try {
    const t = j.sessionStorage.getItem(ks);
    if (!t) return null;
    const n = JSON.parse(t);
    return (Et("[Replay] Loading existing session", e), bc(n));
  } catch {
    return null;
  }
}
function Jr(e, t, n = +new Date()) {
  return e === null || t === void 0 || t < 0 ? !0 : t === 0 ? !1 : e + t <= n;
}
function Ec(
  e,
  { maxReplayDuration: t, sessionIdleExpire: n, targetTime: r = Date.now() },
) {
  return Jr(e.started, t, r) || Jr(e.lastActivity, n, r);
}
function vc(e, { sessionIdleExpire: t, maxReplayDuration: n }) {
  return !(
    !Ec(e, { sessionIdleExpire: t, maxReplayDuration: n }) ||
    (e.sampled === "buffer" && e.segmentId === 0)
  );
}
function Ir(
  {
    traceInternals: e,
    sessionIdleExpire: t,
    maxReplayDuration: n,
    previousSessionId: r,
  },
  s,
) {
  const i = s.stickySession && B_(e);
  return i
    ? vc(i, { sessionIdleExpire: t, maxReplayDuration: n })
      ? (Et(
          "[Replay] Session in sessionStorage is expired, creating new one...",
        ),
        oo(s, { previousSessionId: i.id }))
      : i
    : (Et("[Replay] Creating new session", e), oo(s, { previousSessionId: r }));
}
function $_(e) {
  return e.type === C.Custom;
}
function Bs(e, t, n) {
  return Ic(e, t) ? (Tc(e, t, n), !0) : !1;
}
function H_(e, t, n) {
  return Ic(e, t) ? Tc(e, t, n) : Promise.resolve(null);
}
async function Tc(e, t, n) {
  if (!e.eventBuffer) return null;
  try {
    (n && e.recordingMode === "buffer" && e.eventBuffer.clear(),
      n && (e.eventBuffer.hasCheckout = !0));
    const r = e.getOptions(),
      s = U_(t, r.beforeAddRecordingEvent);
    return s ? await e.eventBuffer.addEvent(s) : void 0;
  } catch (r) {
    const s = r && r instanceof Ls ? "addEventSizeExceeded" : "addEvent";
    (U && m.error(r), await e.stop({ reason: s }));
    const i = B();
    i && i.recordDroppedEvent("internal_sdk_error", "replay");
  }
}
function Ic(e, t) {
  if (!e.eventBuffer || e.isPaused() || !e.isEnabled()) return !1;
  const n = Ds(t.timestamp);
  return n + e.timeouts.sessionIdlePause < Date.now()
    ? !1
    : n > e.getContext().initialTimestamp + e.getOptions().maxReplayDuration
      ? (ie(
          `[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`,
          e.getOptions()._experiments.traceInternals,
        ),
        !1)
      : !0;
}
function U_(e, t) {
  try {
    if (typeof t == "function" && $_(e)) return t(e);
  } catch (n) {
    return (
      U &&
        m.error(
          "[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...",
          n,
        ),
      null
    );
  }
  return e;
}
function $s(e) {
  return !e.type;
}
function Zr(e) {
  return e.type === "transaction";
}
function z_(e) {
  return e.type === "replay_event";
}
function ao(e) {
  return e.type === "feedback";
}
function wc(e) {
  const t = q_();
  return (n, r) => {
    if (!e.isEnabled() || (!$s(n) && !Zr(n))) return;
    const s = r && r.statusCode;
    if (!(t && (!s || s < 200 || s >= 300))) {
      if (Zr(n)) {
        j_(e, n);
        return;
      }
      W_(e, n);
    }
  };
}
function j_(e, t) {
  const n = e.getContext();
  t.contexts &&
    t.contexts.trace &&
    t.contexts.trace.trace_id &&
    n.traceIds.size < 100 &&
    n.traceIds.add(t.contexts.trace.trace_id);
}
function W_(e, t) {
  const n = e.getContext();
  if (
    (t.event_id && n.errorIds.size < 100 && n.errorIds.add(t.event_id),
    e.recordingMode !== "buffer" || !t.tags || !t.tags.replayId)
  )
    return;
  const { beforeErrorSampling: r } = e.getOptions();
  (typeof r == "function" && !r(t)) ||
    setTimeout(() => {
      e.sendBufferedReplayOrFlush();
    });
}
function q_() {
  const e = B();
  if (!e) return !1;
  const t = e.getTransport();
  return (t && t.send.__sentry__baseTransport__) || !1;
}
function G_(e) {
  return (t) => {
    !e.isEnabled() || !$s(t) || Y_(e, t);
  };
}
function Y_(e, t) {
  const n = t.exception && t.exception.values && t.exception.values[0].value;
  if (
    typeof n == "string" &&
    (n.match(
      /reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/,
    ) ||
      n.match(
        /(does not match server-rendered HTML|Hydration failed because)/i,
      ))
  ) {
    const r = ke({ category: "replay.hydrate-error" });
    un(e, r);
  }
}
function V_(e, t) {
  return e.type ||
    !e.exception ||
    !e.exception.values ||
    !e.exception.values.length
    ? !1
    : !!(t.originalException && t.originalException.__rrweb__);
}
function X_(e, t) {
  (e.triggerUserActivity(),
    e.addUpdate(() =>
      t.timestamp
        ? (e.throttledAddEvent({
            type: C.Custom,
            timestamp: t.timestamp * 1e3,
            data: {
              tag: "breadcrumb",
              payload: {
                timestamp: t.timestamp,
                type: "default",
                category: "sentry.feedback",
                data: { feedbackId: t.event_id },
              },
            },
          }),
          !1)
        : !0,
    ));
}
function K_(e, t) {
  return e.recordingMode !== "buffer" ||
    t.message === Rs ||
    !t.exception ||
    t.type
    ? !1
    : Sc(e.getOptions().errorSampleRate);
}
function J_(e, t = !1) {
  const n = t ? wc(e) : void 0;
  return Object.assign(
    (r, s) =>
      e.isEnabled()
        ? z_(r)
          ? (delete r.breadcrumbs, r)
          : (!$s(r) && !Zr(r) && !ao(r)) || !e.checkAndHandleExpiredSession()
            ? r
            : ao(r)
              ? (e.flush(),
                (r.contexts.feedback.replay_id = e.getSessionId()),
                X_(e, r),
                r)
              : V_(r, s) && !e.getOptions()._experiments.captureExceptions
                ? (U &&
                    m.log("[Replay] Ignoring error from rrweb internals", r),
                  null)
                : ((K_(e, r) || e.recordingMode === "session") &&
                    (r.tags = { ...r.tags, replayId: e.getSessionId() }),
                  n && n(r, { statusCode: 200 }),
                  r)
        : r,
    { id: "Replay" },
  );
}
function nr(e, t) {
  return t.map(({ type: n, start: r, end: s, name: i, data: o }) => {
    const a = e.throttledAddEvent({
      type: C.Custom,
      timestamp: r,
      data: {
        tag: "performanceSpan",
        payload: {
          op: n,
          description: i,
          startTimestamp: r,
          endTimestamp: s,
          data: o,
        },
      },
    });
    return typeof a == "string" ? Promise.resolve(null) : a;
  });
}
function Z_(e) {
  const { from: t, to: n } = e,
    r = Date.now() / 1e3;
  return {
    type: "navigation.push",
    start: r,
    end: r,
    name: n,
    data: { previous: t },
  };
}
function Q_(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = Z_(t);
    n !== null &&
      (e.getContext().urls.push(n.name),
      e.triggerUserActivity(),
      e.addUpdate(() => (nr(e, [n]), !1)));
  };
}
function ey(e, t) {
  return U && e.getOptions()._experiments.traceInternals ? !1 : Df(t, B());
}
function rr(e, t) {
  e.isEnabled() &&
    t !== null &&
    (ey(e, t.name) || e.addUpdate(() => (nr(e, [t]), !0)));
}
function ty(e) {
  const { startTimestamp: t, endTimestamp: n, fetchData: r, response: s } = e;
  if (!n) return null;
  const { method: i, url: o } = r;
  return {
    type: "resource.fetch",
    start: t / 1e3,
    end: n / 1e3,
    name: o,
    data: { method: i, statusCode: s ? s.status : void 0 },
  };
}
function ny(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = ty(t);
    rr(e, n);
  };
}
function ry(e) {
  const { startTimestamp: t, endTimestamp: n, xhr: r } = e,
    s = r[Ue];
  if (!t || !n || !s) return null;
  const { method: i, url: o, status_code: a } = s;
  return o === void 0
    ? null
    : {
        type: "resource.xhr",
        name: o,
        start: t / 1e3,
        end: n / 1e3,
        data: { method: i, statusCode: a },
      };
}
function sy(e) {
  return (t) => {
    if (!e.isEnabled()) return;
    const n = ry(t);
    rr(e, n);
  };
}
function sr(e, t) {
  if (e)
    try {
      if (typeof e == "string") return t.encode(e).length;
      if (e instanceof URLSearchParams) return t.encode(e.toString()).length;
      if (e instanceof FormData) {
        const n = Mc(e);
        return t.encode(n).length;
      }
      if (e instanceof Blob) return e.size;
      if (e instanceof ArrayBuffer) return e.byteLength;
    } catch {}
}
function kc(e) {
  if (!e) return;
  const t = parseInt(e, 10);
  return isNaN(t) ? void 0 : t;
}
function Rc(e) {
  try {
    if (typeof e == "string") return [e];
    if (e instanceof URLSearchParams) return [e.toString()];
    if (e instanceof FormData) return [Mc(e)];
    if (!e) return [void 0];
  } catch {
    return (
      U && m.warn("[Replay] Failed to serialize body", e),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
  return (
    U && m.info("[Replay] Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
  );
}
function jn(e, t) {
  if (!e) return { headers: {}, size: void 0, _meta: { warnings: [t] } };
  const n = { ...e._meta },
    r = n.warnings || [];
  return ((n.warnings = [...r, t]), (e._meta = n), e);
}
function Cc(e, t) {
  if (!t) return null;
  const {
    startTimestamp: n,
    endTimestamp: r,
    url: s,
    method: i,
    statusCode: o,
    request: a,
    response: c,
  } = t;
  return {
    type: e,
    start: n / 1e3,
    end: r / 1e3,
    name: s,
    data: ae({ method: i, statusCode: o, request: a, response: c }),
  };
}
function Zt(e) {
  return { headers: {}, size: e, _meta: { warnings: ["URL_SKIPPED"] } };
}
function We(e, t, n) {
  if (!t && Object.keys(e).length === 0) return;
  if (!t) return { headers: e };
  if (!n) return { headers: e, size: t };
  const r = { headers: e, size: t },
    { body: s, warnings: i } = iy(n);
  return ((r.body = s), i && i.length > 0 && (r._meta = { warnings: i }), r);
}
function Qr(e, t) {
  return Object.keys(e).reduce((n, r) => {
    const s = r.toLowerCase();
    return (t.includes(s) && e[r] && (n[s] = e[r]), n);
  }, {});
}
function Mc(e) {
  return new URLSearchParams(e).toString();
}
function iy(e) {
  if (!e || typeof e != "string") return { body: e };
  const t = e.length > qi,
    n = oy(e);
  if (t) {
    const r = e.slice(0, qi);
    return n
      ? { body: r, warnings: ["MAYBE_JSON_TRUNCATED"] }
      : { body: `${r}…`, warnings: ["TEXT_TRUNCATED"] };
  }
  if (n)
    try {
      return { body: JSON.parse(e) };
    } catch {}
  return { body: e };
}
function oy(e) {
  const t = e[0],
    n = e[e.length - 1];
  return (t === "[" && n === "]") || (t === "{" && n === "}");
}
function Wn(e, t) {
  const n = ay(e);
  return Ot(n, t);
}
function ay(e, t = j.document.baseURI) {
  if (
    e.startsWith("http://") ||
    e.startsWith("https://") ||
    e.startsWith(j.location.origin)
  )
    return e;
  const n = new URL(e, t);
  if (n.origin !== new URL(t).origin) return e;
  const r = n.href;
  return !e.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r;
}
async function cy(e, t, n) {
  try {
    const r = await ly(e, t, n),
      s = Cc("resource.fetch", r);
    rr(n.replay, s);
  } catch (r) {
    U && m.error("[Replay] Failed to capture fetch breadcrumb", r);
  }
}
function uy(e, t, n) {
  const { input: r, response: s } = t,
    i = r ? xc(r) : void 0,
    o = sr(i, n.textEncoder),
    a = s ? kc(s.headers.get("content-length")) : void 0;
  (o !== void 0 && (e.data.request_body_size = o),
    a !== void 0 && (e.data.response_body_size = a));
}
async function ly(e, t, n) {
  const r = Date.now(),
    { startTimestamp: s = r, endTimestamp: i = r } = t,
    {
      url: o,
      method: a,
      status_code: c = 0,
      request_body_size: u,
      response_body_size: l,
    } = e.data,
    d = Wn(o, n.networkDetailAllowUrls) && !Wn(o, n.networkDetailDenyUrls),
    f = d ? dy(n, t.input, u) : Zt(u),
    h = await fy(d, n, t.response, l);
  return {
    startTimestamp: s,
    endTimestamp: i,
    url: o,
    method: a,
    statusCode: c,
    request: f,
    response: h,
  };
}
function dy({ networkCaptureBodies: e, networkRequestHeaders: t }, n, r) {
  const s = n ? my(n, t) : {};
  if (!e) return We(s, r, void 0);
  const i = xc(n),
    [o, a] = Rc(i),
    c = We(s, r, o);
  return a ? jn(c, a) : c;
}
async function fy(
  e,
  { networkCaptureBodies: t, textEncoder: n, networkResponseHeaders: r },
  s,
  i,
) {
  if (!e && i !== void 0) return Zt(i);
  const o = s ? Oc(s.headers, r) : {};
  if (!s || (!t && i !== void 0)) return We(o, i, void 0);
  const [a, c] = await py(s),
    u = hy(a, {
      networkCaptureBodies: t,
      textEncoder: n,
      responseBodySize: i,
      captureDetails: e,
      headers: o,
    });
  return c ? jn(u, c) : u;
}
function hy(
  e,
  {
    networkCaptureBodies: t,
    textEncoder: n,
    responseBodySize: r,
    captureDetails: s,
    headers: i,
  },
) {
  try {
    const o = e && e.length && r === void 0 ? sr(e, n) : r;
    return s ? (t ? We(i, o, e) : We(i, o, void 0)) : Zt(o);
  } catch (o) {
    return (
      U && m.warn("[Replay] Failed to serialize response body", o),
      We(i, r, void 0)
    );
  }
}
async function py(e) {
  const t = gy(e);
  if (!t) return [void 0, "BODY_PARSE_ERROR"];
  try {
    return [await _y(t)];
  } catch (n) {
    return (
      U && m.warn("[Replay] Failed to get text body from response", n),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
}
function xc(e = []) {
  if (!(e.length !== 2 || typeof e[1] != "object")) return e[1].body;
}
function Oc(e, t) {
  const n = {};
  return (
    t.forEach((r) => {
      e.get(r) && (n[r] = e.get(r));
    }),
    n
  );
}
function my(e, t) {
  return e.length === 1 && typeof e[0] != "string"
    ? co(e[0], t)
    : e.length === 2
      ? co(e[1], t)
      : {};
}
function co(e, t) {
  if (!e) return {};
  const n = e.headers;
  return n
    ? n instanceof Headers
      ? Oc(n, t)
      : Array.isArray(n)
        ? {}
        : Qr(n, t)
    : {};
}
function gy(e) {
  try {
    return e.clone();
  } catch (t) {
    U && m.warn("[Replay] Failed to clone response body", t);
  }
}
function _y(e) {
  return new Promise((t, n) => {
    const r = setTimeout(
      () => n(new Error("Timeout while trying to read response body")),
      500,
    );
    yy(e)
      .then(
        (s) => t(s),
        (s) => n(s),
      )
      .finally(() => clearTimeout(r));
  });
}
async function yy(e) {
  return await e.text();
}
async function Sy(e, t, n) {
  try {
    const r = Ey(e, t, n),
      s = Cc("resource.xhr", r);
    rr(n.replay, s);
  } catch (r) {
    U && m.error("[Replay] Failed to capture xhr breadcrumb", r);
  }
}
function by(e, t, n) {
  const { xhr: r, input: s } = t;
  if (!r) return;
  const i = sr(s, n.textEncoder),
    o = r.getResponseHeader("content-length")
      ? kc(r.getResponseHeader("content-length"))
      : wy(r.response, r.responseType, n.textEncoder);
  (i !== void 0 && (e.data.request_body_size = i),
    o !== void 0 && (e.data.response_body_size = o));
}
function Ey(e, t, n) {
  const r = Date.now(),
    { startTimestamp: s = r, endTimestamp: i = r, input: o, xhr: a } = t,
    {
      url: c,
      method: u,
      status_code: l = 0,
      request_body_size: d,
      response_body_size: f,
    } = e.data;
  if (!c) return null;
  if (
    !a ||
    !Wn(c, n.networkDetailAllowUrls) ||
    Wn(c, n.networkDetailDenyUrls)
  ) {
    const k = Zt(d),
      x = Zt(f);
    return {
      startTimestamp: s,
      endTimestamp: i,
      url: c,
      method: u,
      statusCode: l,
      request: k,
      response: x,
    };
  }
  const h = a[Ue],
    p = h ? Qr(h.request_headers, n.networkRequestHeaders) : {},
    g = Qr(vy(a), n.networkResponseHeaders),
    [y, _] = n.networkCaptureBodies ? Rc(o) : [void 0],
    [S, b] = n.networkCaptureBodies ? Ty(a) : [void 0],
    w = We(p, d, y),
    T = We(g, f, S);
  return {
    startTimestamp: s,
    endTimestamp: i,
    url: c,
    method: u,
    statusCode: l,
    request: _ ? jn(w, _) : w,
    response: b ? jn(T, b) : T,
  };
}
function vy(e) {
  const t = e.getAllResponseHeaders();
  return t
    ? t
        .split(
          `\r
`,
        )
        .reduce((n, r) => {
          const [s, i] = r.split(": ");
          return ((n[s.toLowerCase()] = i), n);
        }, {})
    : {};
}
function Ty(e) {
  const t = [];
  try {
    return [e.responseText];
  } catch (n) {
    t.push(n);
  }
  try {
    return Iy(e.response, e.responseType);
  } catch (n) {
    t.push(n);
  }
  return (
    U && m.warn("[Replay] Failed to get xhr response body", ...t),
    [void 0]
  );
}
function Iy(e, t) {
  try {
    if (typeof e == "string") return [e];
    if (e instanceof Document) return [e.body.outerHTML];
    if (t === "json" && e && typeof e == "object") return [JSON.stringify(e)];
    if (!e) return [void 0];
  } catch {
    return (
      U && m.warn("[Replay] Failed to serialize body", e),
      [void 0, "BODY_PARSE_ERROR"]
    );
  }
  return (
    U && m.info("[Replay] Skipping network body because of body type", e),
    [void 0, "UNPARSEABLE_BODY_TYPE"]
  );
}
function wy(e, t, n) {
  try {
    const r = t === "json" && e && typeof e == "object" ? JSON.stringify(e) : e;
    return sr(r, n);
  } catch {
    return;
  }
}
function ky(e) {
  const t = B();
  try {
    const n = new TextEncoder(),
      {
        networkDetailAllowUrls: r,
        networkDetailDenyUrls: s,
        networkCaptureBodies: i,
        networkRequestHeaders: o,
        networkResponseHeaders: a,
      } = e.getOptions(),
      c = {
        replay: e,
        textEncoder: n,
        networkDetailAllowUrls: r,
        networkDetailDenyUrls: s,
        networkCaptureBodies: i,
        networkRequestHeaders: o,
        networkResponseHeaders: a,
      };
    t && t.on
      ? t.on("beforeAddBreadcrumb", (u, l) => Ry(c, u, l))
      : (us(ny(e)), ls(sy(e)));
  } catch {}
}
function Ry(e, t, n) {
  if (t.data)
    try {
      (Cy(t) && xy(n) && (by(t, n, e), Sy(t, n, e)),
        My(t) && Oy(n) && (uy(t, n, e), cy(t, n, e)));
    } catch {
      U && m.warn("Error when enriching network breadcrumb");
    }
}
function Cy(e) {
  return e.category === "xhr";
}
function My(e) {
  return e.category === "fetch";
}
function xy(e) {
  return e && e.xhr;
}
function Oy(e) {
  return e && e.response;
}
let uo = null;
function Ay(e) {
  return !!e.category;
}
const Ny = (e) => (t) => {
  if (!e.isEnabled()) return;
  const n = Dy(t);
  n && un(e, n);
};
function Dy(e) {
  const t = e.getLastBreadcrumb && e.getLastBreadcrumb();
  return uo === t ||
    !t ||
    ((uo = t),
    !Ay(t) ||
      ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(
        t.category,
      ) ||
      t.category.startsWith("ui."))
    ? null
    : t.category === "console"
      ? Ly(t)
      : ke(t);
}
function Ly(e) {
  const t = e.data && e.data.arguments;
  if (!Array.isArray(t) || t.length === 0) return ke(e);
  let n = !1;
  const r = t.map((s) => {
    if (!s) return s;
    if (typeof s == "string")
      return s.length > vn ? ((n = !0), `${s.slice(0, vn)}…`) : s;
    if (typeof s == "object")
      try {
        const i = Te(s, 7);
        return JSON.stringify(i).length > vn
          ? ((n = !0), `${JSON.stringify(i, null, 2).slice(0, vn)}…`)
          : i;
      } catch {}
    return s;
  });
  return ke({
    ...e,
    data: {
      ...e.data,
      arguments: r,
      ...(n ? { _meta: { warnings: ["CONSOLE_ARG_TRUNCATED"] } } : {}),
    },
  });
}
function Py(e) {
  const t = de(),
    n = B();
  (t.addScopeListener(Ny(e)), Ho(h_(e)), Qt(Q_(e)), ky(e));
  const r = J_(e, !lo(n));
  (n && n.addEventProcessor ? n.addEventProcessor(r) : Rf(r),
    lo(n) &&
      (n.on("beforeSendEvent", G_(e)),
      n.on("afterSendEvent", wc(e)),
      n.on("createDsc", (s) => {
        const i = e.getSessionId();
        i &&
          e.isEnabled() &&
          e.recordingMode === "session" &&
          e.checkAndHandleExpiredSession() &&
          (s.replay_id = i);
      }),
      n.on("startTransaction", (s) => {
        e.lastTransaction = s;
      }),
      n.on("finishTransaction", (s) => {
        e.lastTransaction = s;
      }),
      n.on("beforeSendFeedback", (s, i) => {
        const o = e.getSessionId();
        i &&
          i.includeReplay &&
          e.isEnabled() &&
          o &&
          s.contexts &&
          s.contexts.feedback &&
          (s.contexts.feedback.replay_id = o);
      })));
}
function lo(e) {
  return !!(e && e.on);
}
async function Fy(e) {
  try {
    return Promise.all(nr(e, [By(j.performance.memory)]));
  } catch {
    return [];
  }
}
function By(e) {
  const { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r } = e,
    s = Date.now() / 1e3;
  return {
    type: "memory",
    name: "memory",
    start: s,
    end: s,
    data: {
      memory: { jsHeapSizeLimit: t, totalJSHeapSize: n, usedJSHeapSize: r },
    },
  };
}
function $y(e, t, n) {
  let r, s, i;
  const o = n && n.maxWait ? Math.max(n.maxWait, t) : 0;
  function a() {
    return (c(), (r = e()), r);
  }
  function c() {
    (s !== void 0 && clearTimeout(s),
      i !== void 0 && clearTimeout(i),
      (s = i = void 0));
  }
  function u() {
    return s !== void 0 || i !== void 0 ? a() : r;
  }
  function l() {
    return (
      s && clearTimeout(s),
      (s = setTimeout(a, t)),
      o && i === void 0 && (i = setTimeout(a, o)),
      r
    );
  }
  return ((l.cancel = c), (l.flush = u), l);
}
function Hy(e) {
  let t = !1;
  return (n, r) => {
    if (!e.checkAndHandleExpiredSession()) {
      U && m.warn("[Replay] Received replay event after session expired.");
      return;
    }
    const s = r || !t;
    ((t = !0),
      e.clickDetector && c_(e.clickDetector, n),
      e.addUpdate(() => {
        if (
          (e.recordingMode === "buffer" && s && e.setInitialState(),
          !Bs(e, n, s))
        )
          return !0;
        if (!s) return !1;
        if ((zy(e, s), e.session && e.session.previousSessionId)) return !0;
        if (e.recordingMode === "buffer" && e.session && e.eventBuffer) {
          const i = e.eventBuffer.getEarliestTimestamp();
          i &&
            (ie(
              `[Replay] Updating session start time to earliest event in buffer to ${new Date(i)}`,
              e.getOptions()._experiments.traceInternals,
            ),
            (e.session.started = i),
            e.getOptions().stickySession && Fs(e.session));
        }
        return (e.recordingMode === "session" && e.flush(), !0);
      }));
  };
}
function Uy(e) {
  const t = e.getOptions();
  return {
    type: C.Custom,
    timestamp: Date.now(),
    data: {
      tag: "options",
      payload: {
        shouldRecordCanvas: e.isRecordingCanvas(),
        sessionSampleRate: t.sessionSampleRate,
        errorSampleRate: t.errorSampleRate,
        useCompressionOption: t.useCompression,
        blockAllMedia: t.blockAllMedia,
        maskAllText: t.maskAllText,
        maskAllInputs: t.maskAllInputs,
        useCompression: e.eventBuffer ? e.eventBuffer.type === "worker" : !1,
        networkDetailHasUrls: t.networkDetailAllowUrls.length > 0,
        networkCaptureBodies: t.networkCaptureBodies,
        networkRequestHasHeaders: t.networkRequestHeaders.length > 0,
        networkResponseHasHeaders: t.networkResponseHeaders.length > 0,
      },
    },
  };
}
function zy(e, t) {
  !t || !e.session || e.session.segmentId !== 0 || Bs(e, Uy(e), !1);
}
function jy(e, t, n, r) {
  return Ve(Xo(e, hs(e), r, n), [
    [{ type: "replay_event" }, e],
    [
      {
        type: "replay_recording",
        length:
          typeof t == "string" ? new TextEncoder().encode(t).length : t.length,
      },
      t,
    ],
  ]);
}
function Wy({ recordingData: e, headers: t }) {
  let n;
  const r = `${JSON.stringify(t)}
`;
  if (typeof e == "string") n = `${r}${e}`;
  else {
    const i = new TextEncoder().encode(r);
    ((n = new Uint8Array(i.length + e.length)), n.set(i), n.set(e, i.length));
  }
  return n;
}
async function qy({ client: e, scope: t, replayId: n, event: r }) {
  const s =
      typeof e._integrations == "object" &&
      e._integrations !== null &&
      !Array.isArray(e._integrations)
        ? Object.keys(e._integrations)
        : void 0,
    i = { event_id: n, integrations: s };
  e.emit && e.emit("preprocessEvent", r, i);
  const o = await ta(e.getOptions(), r, i, t, e, Xe());
  if (!o) return null;
  o.platform = o.platform || "javascript";
  const a = e.getSdkMetadata && e.getSdkMetadata(),
    { name: c, version: u } = (a && a.sdk) || {};
  return (
    (o.sdk = {
      ...o.sdk,
      name: c || "sentry.javascript.unknown",
      version: u || "0.0.0",
    }),
    o
  );
}
async function Gy({
  recordingData: e,
  replayId: t,
  segmentId: n,
  eventContext: r,
  timestamp: s,
  session: i,
}) {
  const o = Wy({ recordingData: e, headers: { segment_id: n } }),
    { urls: a, errorIds: c, traceIds: u, initialTimestamp: l } = r,
    d = B(),
    f = de(),
    h = d && d.getTransport(),
    p = d && d.getDsn();
  if (!d || !h || !p || !i.sampled) return;
  const g = {
      type: xm,
      replay_start_timestamp: l / 1e3,
      timestamp: s / 1e3,
      error_ids: c,
      trace_ids: u,
      urls: a,
      replay_id: t,
      segment_id: n,
      replay_type: i.sampled,
    },
    y = await qy({ scope: f, client: d, replayId: t, event: g });
  if (!y) {
    (d.recordDroppedEvent("event_processor", "replay", g),
      ie("An event processor returned `null`, will not send event."));
    return;
  }
  delete y.sdkProcessingMetadata;
  const _ = jy(y, o, p, d.getOptions().tunnel);
  let S;
  try {
    S = await h.send(_);
  } catch (w) {
    const T = new Error(Rs);
    try {
      T.cause = w;
    } catch {}
    throw T;
  }
  if (!S) return S;
  if (
    typeof S.statusCode == "number" &&
    (S.statusCode < 200 || S.statusCode >= 300)
  )
    throw new Ac(S.statusCode);
  const b = Jo({}, S);
  if (Ko(b, "replay")) throw new Nc(b);
  return S;
}
class Ac extends Error {
  constructor(t) {
    super(`Transport returned status code ${t}`);
  }
}
class Nc extends Error {
  constructor(t) {
    (super("Rate limit hit"), (this.rateLimits = t));
  }
}
async function Dc(e, t = { count: 0, interval: Pm }) {
  const { recordingData: n, options: r } = e;
  if (n.length)
    try {
      return (await Gy(e), !0);
    } catch (s) {
      if (s instanceof Ac || s instanceof Nc) throw s;
      if (
        (Pd("Replays", { _retryCount: t.count }),
        U && r._experiments && r._experiments.captureExceptions && _s(s),
        t.count >= Fm)
      ) {
        const i = new Error(`${Rs} - max retries exceeded`);
        try {
          i.cause = s;
        } catch {}
        throw i;
      }
      return (
        (t.interval *= ++t.count),
        new Promise((i, o) => {
          setTimeout(async () => {
            try {
              (await Dc(e, t), i(!0));
            } catch (a) {
              o(a);
            }
          }, t.interval);
        })
      );
    }
}
const Lc = "__THROTTLED",
  Yy = "__SKIPPED";
function Vy(e, t, n) {
  const r = new Map(),
    s = (a) => {
      const c = a - n;
      r.forEach((u, l) => {
        l < c && r.delete(l);
      });
    },
    i = () => [...r.values()].reduce((a, c) => a + c, 0);
  let o = !1;
  return (...a) => {
    const c = Math.floor(Date.now() / 1e3);
    if ((s(c), i() >= t)) {
      const l = o;
      return ((o = !0), l ? Yy : Lc);
    }
    o = !1;
    const u = r.get(c) || 0;
    return (r.set(c, u + 1), e(...a));
  };
}
class $e {
  constructor({ options: t, recordingOptions: n }) {
    ($e.prototype.__init.call(this),
      $e.prototype.__init2.call(this),
      $e.prototype.__init3.call(this),
      $e.prototype.__init4.call(this),
      $e.prototype.__init5.call(this),
      $e.prototype.__init6.call(this),
      (this.eventBuffer = null),
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      (this.recordingMode = "session"),
      (this.timeouts = { sessionIdlePause: Om, sessionIdleExpire: Am }),
      (this._lastActivity = Date.now()),
      (this._isEnabled = !1),
      (this._isPaused = !1),
      (this._hasInitializedCoreListeners = !1),
      (this._context = {
        errorIds: new Set(),
        traceIds: new Set(),
        urls: [],
        initialTimestamp: Date.now(),
        initialUrl: "",
      }),
      (this._recordingOptions = n),
      (this._options = t),
      (this._debouncedFlush = $y(
        () => this._flush(),
        this._options.flushMinDelay,
        { maxWait: this._options.flushMaxDelay },
      )),
      (this._throttledAddEvent = Vy((o, a) => H_(this, o, a), 300, 5)));
    const { slowClickTimeout: r, slowClickIgnoreSelectors: s } =
        this.getOptions(),
      i = r
        ? {
            threshold: Math.min(Bm, r),
            timeout: r,
            scrollTimeout: $m,
            ignoreSelector: s ? s.join(",") : "",
          }
        : void 0;
    i && (this.clickDetector = new s_(this, i));
  }
  getContext() {
    return this._context;
  }
  isEnabled() {
    return this._isEnabled;
  }
  isPaused() {
    return this._isPaused;
  }
  isRecordingCanvas() {
    return !!this._canvas;
  }
  getOptions() {
    return this._options;
  }
  initializeSampling(t) {
    const { errorSampleRate: n, sessionSampleRate: r } = this._options;
    if (!(n <= 0 && r <= 0)) {
      if ((this._initializeSessionForSampling(t), !this.session)) {
        this._handleException(
          new Error("Unable to initialize and create session"),
        );
        return;
      }
      this.session.sampled !== !1 &&
        ((this.recordingMode =
          this.session.sampled === "buffer" && this.session.segmentId === 0
            ? "buffer"
            : "session"),
        Et(
          `[Replay] Starting replay in ${this.recordingMode} mode`,
          this._options._experiments.traceInternals,
        ),
        this._initializeRecording());
    }
  }
  start() {
    if (this._isEnabled && this.recordingMode === "session")
      throw new Error("Replay recording is already in progress");
    if (this._isEnabled && this.recordingMode === "buffer")
      throw new Error(
        "Replay buffering is in progress, call `flush()` to save the replay",
      );
    (Et(
      "[Replay] Starting replay in session mode",
      this._options._experiments.traceInternals,
    ),
      this._updateUserActivity());
    const t = Ir(
      {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        traceInternals: this._options._experiments.traceInternals,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 1,
        allowBuffering: !1,
      },
    );
    ((this.session = t), this._initializeRecording());
  }
  startBuffering() {
    if (this._isEnabled)
      throw new Error("Replay recording is already in progress");
    Et(
      "[Replay] Starting replay in buffer mode",
      this._options._experiments.traceInternals,
    );
    const t = Ir(
      {
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
        maxReplayDuration: this._options.maxReplayDuration,
        traceInternals: this._options._experiments.traceInternals,
      },
      {
        stickySession: this._options.stickySession,
        sessionSampleRate: 0,
        allowBuffering: !0,
      },
    );
    ((this.session = t),
      (this.recordingMode = "buffer"),
      this._initializeRecording());
  }
  startRecording() {
    try {
      const t = this._canvas;
      this._stopRecording = je({
        ...this._recordingOptions,
        ...(this.recordingMode === "buffer" && { checkoutEveryNms: Lm }),
        emit: Hy(this),
        onMutation: this._onMutationHandler,
        ...(t
          ? {
              recordCanvas: t.recordCanvas,
              getCanvasManager: t.getCanvasManager,
              sampling: t.sampling,
              dataURLOptions: t.dataURLOptions,
            }
          : {}),
      });
    } catch (t) {
      this._handleException(t);
    }
  }
  stopRecording() {
    try {
      return (
        this._stopRecording &&
          (this._stopRecording(), (this._stopRecording = void 0)),
        !0
      );
    } catch (t) {
      return (this._handleException(t), !1);
    }
  }
  async stop({ forceFlush: t = !1, reason: n } = {}) {
    if (this._isEnabled) {
      this._isEnabled = !1;
      try {
        (ie(
          `[Replay] Stopping Replay${n ? ` triggered by ${n}` : ""}`,
          this._options._experiments.traceInternals,
        ),
          this._removeListeners(),
          this.stopRecording(),
          this._debouncedFlush.cancel(),
          t && (await this._flush({ force: !0 })),
          this.eventBuffer && this.eventBuffer.destroy(),
          (this.eventBuffer = null),
          L_(this));
      } catch (r) {
        this._handleException(r);
      }
    }
  }
  pause() {
    this._isPaused ||
      ((this._isPaused = !0),
      this.stopRecording(),
      ie("[Replay] Pausing replay", this._options._experiments.traceInternals));
  }
  resume() {
    !this._isPaused ||
      !this._checkSession() ||
      ((this._isPaused = !1),
      this.startRecording(),
      ie(
        "[Replay] Resuming replay",
        this._options._experiments.traceInternals,
      ));
  }
  async sendBufferedReplayOrFlush({ continueRecording: t = !0 } = {}) {
    if (this.recordingMode === "session") return this.flushImmediate();
    const n = Date.now();
    (ie(
      "[Replay] Converting buffer to session",
      this._options._experiments.traceInternals,
    ),
      await this.flushImmediate());
    const r = this.stopRecording();
    !t ||
      !r ||
      (this.recordingMode !== "session" &&
        ((this.recordingMode = "session"),
        this.session &&
          (this._updateUserActivity(n),
          this._updateSessionActivity(n),
          this._maybeSaveSession()),
        this.startRecording()));
  }
  addUpdate(t) {
    const n = t();
    this.recordingMode !== "buffer" && n !== !0 && this._debouncedFlush();
  }
  triggerUserActivity() {
    if ((this._updateUserActivity(), !this._stopRecording)) {
      if (!this._checkSession()) return;
      this.resume();
      return;
    }
    (this.checkAndHandleExpiredSession(), this._updateSessionActivity());
  }
  updateUserActivity() {
    (this._updateUserActivity(), this._updateSessionActivity());
  }
  conditionalFlush() {
    return this.recordingMode === "buffer"
      ? Promise.resolve()
      : this.flushImmediate();
  }
  flush() {
    return this._debouncedFlush();
  }
  flushImmediate() {
    return (this._debouncedFlush(), this._debouncedFlush.flush());
  }
  cancelFlush() {
    this._debouncedFlush.cancel();
  }
  getSessionId() {
    return this.session && this.session.id;
  }
  checkAndHandleExpiredSession() {
    if (
      this._lastActivity &&
      Jr(this._lastActivity, this.timeouts.sessionIdlePause) &&
      this.session &&
      this.session.sampled === "session"
    ) {
      this.pause();
      return;
    }
    return !!this._checkSession();
  }
  setInitialState() {
    const t = `${j.location.pathname}${j.location.hash}${j.location.search}`,
      n = `${j.location.origin}${t}`;
    ((this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      this._clearContext(),
      (this._context.initialUrl = n),
      (this._context.initialTimestamp = Date.now()),
      this._context.urls.push(n));
  }
  throttledAddEvent(t, n) {
    const r = this._throttledAddEvent(t, n);
    if (r === Lc) {
      const s = ke({ category: "replay.throttled" });
      this.addUpdate(
        () =>
          !Bs(this, {
            type: Zg,
            timestamp: s.timestamp || 0,
            data: { tag: "breadcrumb", payload: s, metric: !0 },
          }),
      );
    }
    return r;
  }
  getCurrentRoute() {
    const t = this.lastTransaction || de().getTransaction(),
      r = ((t && K(t).data) || {})[me];
    if (!(!t || !r || !["route", "custom"].includes(r)))
      return K(t).description;
  }
  _initializeRecording() {
    (this.setInitialState(),
      this._updateSessionActivity(),
      (this.eventBuffer = A_({
        useCompression: this._options.useCompression,
        workerUrl: this._options.workerUrl,
      })),
      this._removeListeners(),
      this._addListeners(),
      (this._isEnabled = !0),
      (this._isPaused = !1),
      this.startRecording());
  }
  _handleException(t) {
    (U && m.error("[Replay]", t),
      U &&
        this._options._experiments &&
        this._options._experiments.captureExceptions &&
        _s(t));
  }
  _initializeSessionForSampling(t) {
    const n = this._options.errorSampleRate > 0,
      r = Ir(
        {
          sessionIdleExpire: this.timeouts.sessionIdleExpire,
          maxReplayDuration: this._options.maxReplayDuration,
          traceInternals: this._options._experiments.traceInternals,
          previousSessionId: t,
        },
        {
          stickySession: this._options.stickySession,
          sessionSampleRate: this._options.sessionSampleRate,
          allowBuffering: n,
        },
      );
    this.session = r;
  }
  _checkSession() {
    if (!this.session) return !1;
    const t = this.session;
    return vc(t, {
      sessionIdleExpire: this.timeouts.sessionIdleExpire,
      maxReplayDuration: this._options.maxReplayDuration,
    })
      ? (this._refreshSession(t), !1)
      : !0;
  }
  async _refreshSession(t) {
    this._isEnabled &&
      (await this.stop({ reason: "refresh session" }),
      this.initializeSampling(t.id));
  }
  _addListeners() {
    try {
      (j.document.addEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        j.addEventListener("blur", this._handleWindowBlur),
        j.addEventListener("focus", this._handleWindowFocus),
        j.addEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.addListeners(),
        this._hasInitializedCoreListeners ||
          (Py(this), (this._hasInitializedCoreListeners = !0)));
    } catch (t) {
      this._handleException(t);
    }
    this._performanceCleanupCallback = k_(this);
  }
  _removeListeners() {
    try {
      (j.document.removeEventListener(
        "visibilitychange",
        this._handleVisibilityChange,
      ),
        j.removeEventListener("blur", this._handleWindowBlur),
        j.removeEventListener("focus", this._handleWindowFocus),
        j.removeEventListener("keydown", this._handleKeyboardEvent),
        this.clickDetector && this.clickDetector.removeListeners(),
        this._performanceCleanupCallback && this._performanceCleanupCallback());
    } catch (t) {
      this._handleException(t);
    }
  }
  __init() {
    this._handleVisibilityChange = () => {
      j.document.visibilityState === "visible"
        ? this._doChangeToForegroundTasks()
        : this._doChangeToBackgroundTasks();
    };
  }
  __init2() {
    this._handleWindowBlur = () => {
      const t = ke({ category: "ui.blur" });
      this._doChangeToBackgroundTasks(t);
    };
  }
  __init3() {
    this._handleWindowFocus = () => {
      const t = ke({ category: "ui.focus" });
      this._doChangeToForegroundTasks(t);
    };
  }
  __init4() {
    this._handleKeyboardEvent = (t) => {
      __(this, t);
    };
  }
  _doChangeToBackgroundTasks(t) {
    !this.session ||
      Ec(this.session, {
        maxReplayDuration: this._options.maxReplayDuration,
        sessionIdleExpire: this.timeouts.sessionIdleExpire,
      }) ||
      (t && this._createCustomBreadcrumb(t), this.conditionalFlush());
  }
  _doChangeToForegroundTasks(t) {
    if (!this.session) return;
    if (!this.checkAndHandleExpiredSession()) {
      ie("[Replay] Document has become active, but session has expired");
      return;
    }
    t && this._createCustomBreadcrumb(t);
  }
  _updateUserActivity(t = Date.now()) {
    this._lastActivity = t;
  }
  _updateSessionActivity(t = Date.now()) {
    this.session && ((this.session.lastActivity = t), this._maybeSaveSession());
  }
  _createCustomBreadcrumb(t) {
    this.addUpdate(() => {
      this.throttledAddEvent({
        type: C.Custom,
        timestamp: t.timestamp || 0,
        data: { tag: "breadcrumb", payload: t },
      });
    });
  }
  _addPerformanceEntries() {
    const t = b_(this.performanceEntries).concat(this.replayPerformanceEntries);
    return (
      (this.performanceEntries = []),
      (this.replayPerformanceEntries = []),
      Promise.all(nr(this, t))
    );
  }
  _clearContext() {
    (this._context.errorIds.clear(),
      this._context.traceIds.clear(),
      (this._context.urls = []));
  }
  _updateInitialTimestampFromEventBuffer() {
    const { session: t, eventBuffer: n } = this;
    if (!t || !n || t.segmentId) return;
    const r = n.getEarliestTimestamp();
    r &&
      r < this._context.initialTimestamp &&
      (this._context.initialTimestamp = r);
  }
  _popEventContext() {
    const t = {
      initialTimestamp: this._context.initialTimestamp,
      initialUrl: this._context.initialUrl,
      errorIds: Array.from(this._context.errorIds),
      traceIds: Array.from(this._context.traceIds),
      urls: this._context.urls,
    };
    return (this._clearContext(), t);
  }
  async _runFlush() {
    const t = this.getSessionId();
    if (!this.session || !this.eventBuffer || !t) {
      U && m.error("[Replay] No session or eventBuffer found to flush.");
      return;
    }
    if (
      (await this._addPerformanceEntries(),
      !(!this.eventBuffer || !this.eventBuffer.hasEvents) &&
        (await Fy(this), !!this.eventBuffer && t === this.getSessionId()))
    )
      try {
        this._updateInitialTimestampFromEventBuffer();
        const n = Date.now();
        if (
          n - this._context.initialTimestamp >
          this._options.maxReplayDuration + 3e4
        )
          throw new Error("Session is too long, not sending replay");
        const r = this._popEventContext(),
          s = this.session.segmentId++;
        this._maybeSaveSession();
        const i = await this.eventBuffer.finish();
        await Dc({
          replayId: t,
          recordingData: i,
          segmentId: s,
          eventContext: r,
          session: this.session,
          options: this.getOptions(),
          timestamp: n,
        });
      } catch (n) {
        (this._handleException(n), this.stop({ reason: "sendReplay" }));
        const r = B();
        r && r.recordDroppedEvent("send_error", "replay");
      }
  }
  __init5() {
    this._flush = async ({ force: t = !1 } = {}) => {
      if (!this._isEnabled && !t) return;
      if (!this.checkAndHandleExpiredSession()) {
        U &&
          m.error(
            "[Replay] Attempting to finish replay event after session expired.",
          );
        return;
      }
      if (!this.session) return;
      const n = this.session.started,
        s = Date.now() - n;
      this._debouncedFlush.cancel();
      const i = s < this._options.minReplayDuration,
        o = s > this._options.maxReplayDuration + 5e3;
      if (i || o) {
        (ie(
          `[Replay] Session duration (${Math.floor(s / 1e3)}s) is too ${i ? "short" : "long"}, not sending replay.`,
          this._options._experiments.traceInternals,
        ),
          i && this._debouncedFlush());
        return;
      }
      const a = this.eventBuffer;
      if (
        (a &&
          this.session.segmentId === 0 &&
          !a.hasCheckout &&
          ie(
            "[Replay] Flushing initial segment without checkout.",
            this._options._experiments.traceInternals,
          ),
        !this._flushLock)
      ) {
        ((this._flushLock = this._runFlush()),
          await this._flushLock,
          (this._flushLock = void 0));
        return;
      }
      try {
        await this._flushLock;
      } catch (c) {
        U && m.error(c);
      } finally {
        this._debouncedFlush();
      }
    };
  }
  _maybeSaveSession() {
    this.session && this._options.stickySession && Fs(this.session);
  }
  __init6() {
    this._onMutationHandler = (t) => {
      const n = t.length,
        r = this._options.mutationLimit,
        s = this._options.mutationBreadcrumbLimit,
        i = r && n > r;
      if (n > s || i) {
        const o = ke({
          category: "replay.mutations",
          data: { count: n, limit: i },
        });
        this._createCustomBreadcrumb(o);
      }
      return i
        ? (this.stop({
            reason: "mutationLimit",
            forceFlush: this.recordingMode === "session",
          }),
          !1)
        : !0;
    };
  }
}
function $t(e, t, n, r) {
  const s = typeof r == "string" ? r.split(",") : [],
    i = [...e, ...s, ...t];
  return (
    typeof n < "u" &&
      (typeof n == "string" && i.push(`.${n}`),
      tt(() => {
        console.warn(
          "[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.",
        );
      })),
    i.join(",")
  );
}
function Xy({
  mask: e,
  unmask: t,
  block: n,
  unblock: r,
  ignore: s,
  blockClass: i,
  blockSelector: o,
  maskTextClass: a,
  maskTextSelector: c,
  ignoreClass: u,
}) {
  const l = ['base[href="/"]'],
    d = $t(e, [".sentry-mask", "[data-sentry-mask]"], a, c),
    f = $t(t, [".sentry-unmask", "[data-sentry-unmask]"]),
    h = {
      maskTextSelector: d,
      unmaskTextSelector: f,
      blockSelector: $t(
        n,
        [".sentry-block", "[data-sentry-block]", ...l],
        i,
        o,
      ),
      unblockSelector: $t(r, [".sentry-unblock", "[data-sentry-unblock]"]),
      ignoreSelector: $t(
        s,
        [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'],
        u,
      ),
    };
  return (
    i instanceof RegExp && (h.blockClass = i),
    a instanceof RegExp && (h.maskTextClass = a),
    h
  );
}
function Ky({
  el: e,
  key: t,
  maskAttributes: n,
  maskAllText: r,
  privacyOptions: s,
  value: i,
}) {
  return !r || (s.unmaskTextSelector && e.matches(s.unmaskTextSelector))
    ? i
    : n.includes(t) ||
        (t === "value" &&
          e.tagName === "INPUT" &&
          ["submit", "button"].includes(e.getAttribute("type") || ""))
      ? i.replace(/[\S]/g, "*")
      : i;
}
const fo =
    'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
  Jy = ["content-length", "content-type", "accept"];
let ho = !1;
class ir {
  static __initStatic() {
    this.id = "Replay";
  }
  constructor({
    flushMinDelay: t = Nm,
    flushMaxDelay: n = Dm,
    minReplayDuration: r = Hm,
    maxReplayDuration: s = Gi,
    stickySession: i = !0,
    useCompression: o = !0,
    workerUrl: a,
    _experiments: c = {},
    sessionSampleRate: u,
    errorSampleRate: l,
    maskAllText: d = !0,
    maskAllInputs: f = !0,
    blockAllMedia: h = !0,
    mutationBreadcrumbLimit: p = 750,
    mutationLimit: g = 1e4,
    slowClickTimeout: y = 7e3,
    slowClickIgnoreSelectors: _ = [],
    networkDetailAllowUrls: S = [],
    networkDetailDenyUrls: b = [],
    networkCaptureBodies: w = !0,
    networkRequestHeaders: T = [],
    networkResponseHeaders: k = [],
    mask: x = [],
    maskAttributes: O = ["title", "placeholder"],
    unmask: I = [],
    block: R = [],
    unblock: W = [],
    ignore: J = [],
    maskFn: te,
    beforeAddRecordingEvent: ne,
    beforeErrorSampling: fe,
    blockClass: $,
    blockSelector: pe,
    maskInputOptions: X,
    maskTextClass: ue,
    maskTextSelector: ge,
    ignoreClass: or,
  } = {}) {
    this.name = ir.id;
    const at = Xy({
      mask: x,
      unmask: I,
      block: R,
      unblock: W,
      ignore: J,
      blockClass: $,
      blockSelector: pe,
      maskTextClass: ue,
      maskTextSelector: ge,
      ignoreClass: or,
    });
    if (
      ((this._recordingOptions = {
        maskAllInputs: f,
        maskAllText: d,
        maskInputOptions: { ...(X || {}), password: !0 },
        maskTextFn: te,
        maskInputFn: te,
        maskAttributeFn: (Le, ct, Pt) =>
          Ky({
            maskAttributes: O,
            maskAllText: d,
            privacyOptions: at,
            key: Le,
            value: ct,
            el: Pt,
          }),
        ...at,
        slimDOMOptions: "all",
        inlineStylesheet: !0,
        inlineImages: !1,
        collectFonts: !0,
        errorHandler: (Le) => {
          try {
            Le.__rrweb__ = !0;
          } catch {}
        },
      }),
      (this._initialOptions = {
        flushMinDelay: t,
        flushMaxDelay: n,
        minReplayDuration: Math.min(r, Um),
        maxReplayDuration: Math.min(s, Gi),
        stickySession: i,
        sessionSampleRate: u,
        errorSampleRate: l,
        useCompression: o,
        workerUrl: a,
        blockAllMedia: h,
        maskAllInputs: f,
        maskAllText: d,
        mutationBreadcrumbLimit: p,
        mutationLimit: g,
        slowClickTimeout: y,
        slowClickIgnoreSelectors: _,
        networkDetailAllowUrls: S,
        networkDetailDenyUrls: b,
        networkCaptureBodies: w,
        networkRequestHeaders: po(T),
        networkResponseHeaders: po(k),
        beforeAddRecordingEvent: ne,
        beforeErrorSampling: fe,
        _experiments: c,
      }),
      typeof u == "number" &&
        (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${u} })`),
        (this._initialOptions.sessionSampleRate = u)),
      typeof l == "number" &&
        (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${l} })`),
        (this._initialOptions.errorSampleRate = l)),
      this._initialOptions.blockAllMedia &&
        (this._recordingOptions.blockSelector = this._recordingOptions
          .blockSelector
          ? `${this._recordingOptions.blockSelector},${fo}`
          : fo),
      this._isInitialized && di())
    )
      throw new Error(
        "Multiple Sentry Session Replay instances are not supported",
      );
    this._isInitialized = !0;
  }
  get _isInitialized() {
    return ho;
  }
  set _isInitialized(t) {
    ho = t;
  }
  setupOnce() {
    di() && (this._setup(), setTimeout(() => this._initialize()));
  }
  start() {
    this._replay && this._replay.start();
  }
  startBuffering() {
    this._replay && this._replay.startBuffering();
  }
  stop() {
    return this._replay
      ? this._replay.stop({
          forceFlush: this._replay.recordingMode === "session",
        })
      : Promise.resolve();
  }
  flush(t) {
    return !this._replay || !this._replay.isEnabled()
      ? Promise.resolve()
      : this._replay.sendBufferedReplayOrFlush(t);
  }
  getReplayId() {
    if (!(!this._replay || !this._replay.isEnabled()))
      return this._replay.getSessionId();
  }
  _initialize() {
    this._replay &&
      (this._maybeLoadFromReplayCanvasIntegration(),
      this._replay.initializeSampling());
  }
  _setup() {
    const t = Zy(this._initialOptions);
    this._replay = new $e({
      options: t,
      recordingOptions: this._recordingOptions,
    });
  }
  _maybeLoadFromReplayCanvasIntegration() {
    try {
      const n = B().getIntegrationByName("ReplayCanvas");
      if (!n) return;
      this._replay._canvas = n.getOptions();
    } catch {}
  }
}
ir.__initStatic();
function Zy(e) {
  const t = B(),
    n = t && t.getOptions(),
    r = { sessionSampleRate: 0, errorSampleRate: 0, ...ae(e) };
  return n
    ? (e.sessionSampleRate == null &&
        e.errorSampleRate == null &&
        n.replaysSessionSampleRate == null &&
        n.replaysOnErrorSampleRate == null &&
        tt(() => {
          console.warn(
            "Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.",
          );
        }),
      typeof n.replaysSessionSampleRate == "number" &&
        (r.sessionSampleRate = n.replaysSessionSampleRate),
      typeof n.replaysOnErrorSampleRate == "number" &&
        (r.errorSampleRate = n.replaysOnErrorSampleRate),
      r)
    : (tt(() => {
        console.warn("SDK client is not available.");
      }),
      r);
}
function po(e) {
  return [...Jy, ...e.map((t) => t.toLowerCase())];
}
function Qy(e) {
  const t = { defaultIntegrations: eS(e), ...e };
  (Ea(t, "astro", ["astro", "browser"]), Cm(t), Fd("runtime", "browser"));
}
function eS(e) {
  if ((typeof __SENTRY_TRACING__ > "u" || __SENTRY_TRACING__) && ot(e))
    return [...Ya(), np()];
}
dl(es);
window.Alpine = es;
document.addEventListener("DOMContentLoaded", () => es.start());
Qy({
  dsn: "https://e4fd873d3d10724dabb2f3f0f853b46c@o135423.ingest.us.sentry.io/4506676886831104",
  debug: !1,
  environment: "production",
  release: "yco-website@1745923895",
  tracesSampleRate: 1,
  integrations: [new Jh(), new ir()],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
});
