const i = "", u = "", l = "", f = "", g = "", p = "dcis5o17u", R = "",
  o = { "1/1": "1:1", "3/2": "3:2", "4/5": "4:5", "16/9": "16:9" };
function _({ f: t = "auto", q: n = "70", c: r = "fill", ...e }) {
  return Object.entries({ f: t, q: n, c: r, ...e })
    .map(([s, c]) => `${s}_${c}`)
    .join(",");
}
function h(t = "", n = "") {
  const r = "/upload/";
  if (!t?.includes(r)) return t;
  const [e = "", s = ""] = t.split(r),
    c = n ? `${n}/` : "";
  return `${e}${r}${c}${s}`;
}
function A(t, n, r = "image") {
  try {
    const { pathname: e } = new URL(t);
    if (n === "cloudflare" || n === "bunny") {
      const s = new RegExp(`/${p}/${r}`);
      return e.replace(s, "");
    }
    return e;
  } catch (e) {
    return (console.warn("Error parsing asset url", e), t);
  }
}
const d = (t) => {
    const n = o[t],
      [r, e] = n.split(":");
    return { width: r, height: e, ar: n };
  },
  y = (t) => (t ? !t.includes("https") : !1);
function I(t, n, r, e, s = "image") {
  const c = A(t, e, s),
    a = _({ ...n, w: r });
  return h(c, a);
}
const m = (t) => {
    switch (t) {
      case "cloudflare":
        return u;
      case "bunny":
        return l;
      default:
        return i;
    }
  },
  E = (t) => {
    switch (t) {
      case "cloudflare":
        return g;
      case "bunny":
        return f;
      default:
        return R;
    }
  };
function L(t) {
  return typeof t != "string"
    ? !1
    : t.includes(".jpg") ||
        t.includes(".jpeg") ||
        t.includes(".png") ||
        t.includes(".webp");
}
function U(t) {
  return typeof t != "string" ? !1 : t.includes(".mp4") || t.includes(".webm");
}
function S(t, n) {
  return `${t} ${n}w`;
}
function O(t, n, r) {
  if (y(t)) return t;
  const e = "bunny",
    s = m(e),
    c = I(t, n, r, e);
  return `${s}${c}`;
}
function $(t, n, r) {
  return r.map((e) => S(O(t, n, e), e)).join(", ");
}
function N(t, n, r) {
  let e = t,
    s = n,
    c = {};
  if (r && o[r]) {
    const a = d(r);
    ((e = a.width), (s = a.height), (c.ar = a.ar));
  }
  return { width: e, height: s, transformationParams: c };
}
export {
  I as a,
  E as b,
  h as c,
  N as d,
  $ as e,
  U as f,
  O as g,
  L as h,
  y as i,
};
