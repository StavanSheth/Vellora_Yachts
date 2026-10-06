import "./lz-string.BYBRaMBl.js";
const i = (e, t) => !e.some((r) => r.id === t.id && r.context === t.context),
  s = (e) =>
    !!e &&
    typeof e == "object" &&
    "settings" in e &&
    typeof e.settings == "object";
function h(e, t = []) {
  if (!e) throw new Error("Board title is required");
  const r = self.crypto.randomUUID(),
    n = e.trim();
  return { id: r, title: n, items: t };
}
function f(e = {}, t) {
  return { ...e, [t.id]: t };
}
function p(e, t, r) {
  const n = (a) => {
    i(a.items, t) && a.items.unshift(t);
  };
  return (r && e[r] && n(e[r]), e);
}
function d(e, t, r) {
  const n = e[r];
  return n
    ? {
        ...e,
        [r]: {
          ...n,
          items: n.items.filter(
            ({ id: a, context: o }) => !(a === t.id && o === t.context),
          ),
        },
      }
    : e;
}
const c = new Set([
    "yachtPage",
    "experiencePage",
    "itineraryPage",
    "destinationPage",
    "cruiseAreaPage",
    "cruiseRegionPage",
    "designerPage",
    "eventPage",
    "journalPage",
  ]),
  u = new Set(["charter", "purchase", "charterAndPurchase", "experience"]),
  g = (e) =>
    typeof e.id == "string" &&
    typeof e.type == "string" &&
    c.has(e.type) &&
    typeof e.context == "string" &&
    u.has(e.context);
function y(e) {
  if (e.type !== "yachtPage") return !0;
  if (!s(e)) return !1;
  const { settings: t } = e,
    r = !!(t?.forCharter || t?.publicForCharter || t?.publishForCharter),
    n = !!(t?.forSale || t?.publicForSale || t?.publishForSale);
  return r || n;
}
function S(e, t) {
  if (t.type !== "yachtPage" || !s(t)) return !1;
  const { settings: r } = t,
    n = !!(r?.forCharter || r?.publicForCharter || r?.publishForCharter),
    a = !!(r?.forSale || r?.publicForSale || r?.publishForSale);
  switch (e) {
    case "charter":
      return !n;
    case "purchase":
      return !a;
    case "experience":
      return !1;
    default:
      return !0;
  }
}
const P = (e) => {
  const t = e.split("/");
  return t[t.length - 1] ?? "";
};
export { g as a, h as b, f as c, d, p as e, P as g, S as h, y as i };
