import { s as l } from "./tailwind.config.CUxizmSu.js";
const a = 500,
  f = "tiny",
  E = "viewport:resize",
  u = Object.keys(l),
  o = Object.values(l);
(!u.length || !o.length) &&
  console.error("screenSizes configuration is invalid.");
let s = null,
  c = !0,
  r = !1;
function d(e, t) {
  const n = new CustomEvent(E, { detail: { ...e, isInitial: t } });
  window.dispatchEvent(n);
}
function w() {
  const e = window.innerWidth;
  let t = { viewport: f, size: 0 };
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (e < i) break;
    t = { viewport: u[n], size: i };
  }
  return t;
}
function v(e = !1) {
  if (r) return;
  r = !0;
  const t = w();
  (d(t, e), (r = !1));
}
function z(e = !1) {
  (s !== null && clearTimeout(s),
    (s = window.setTimeout(() => {
      v(e);
    }, a)));
}
function R() {
  const e = new ResizeObserver((n) => {
      for (const i of n) i.contentRect && (z(c), (c = !1));
    }),
    t = document.body;
  e.observe(t);
}
function T() {
  R();
}
window.addEventListener("load", T, { once: !0 });
export { E as R };
