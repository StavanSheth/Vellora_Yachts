function f(e) {
  const { activeContext: t } = e;
  return {
    data: e,
    activeFilter: e.activeFilter,
    activeContextFilters: e[t]?.filters,
  };
}
function u(e) {
  if (!e) return "";
  const { length: t = [], guests: n, cabins: r } = e,
    s = n ? ` ${n} ${n === 1 ? "guest" : "guests"}` : "",
    o = r ? ` ${r} ${r === 1 ? "cabin" : "cabins"}` : "",
    a = [...t, s, o].filter(Boolean);
  return a?.length > 0 ? a.join(", ") : "";
}
function i(e) {
  if (!e) return "";
  const { minPrice: t, maxPrice: n } = e,
    r = `€${t / 1e3}K - €${n / 1e3}K`;
  return t && n ? r : "";
}
function c(e) {
  return e && e.length > 0 ? e.join(", ") : "";
}
function g(e, t, n) {
  switch (e) {
    case "size":
      return n ? u(t) : u(t) || "size";
    case "price":
      return n ? i(t) : i(t) || "price";
    case "dates":
      return n ? c(t?.dates) : c(t?.dates) || "when";
    case "year":
      return n ? c(t?.year) : c(t?.year) || "year";
    default:
      return e;
  }
}
function T(e, t, n = !1) {
  return g(e, t, n);
}
function x(e) {
  e.$watch("data", (t) => {
    const { activeContext: n } = t;
    ((e.activeContextFilters = t[n]?.filters),
      (e.activeFilter = t.activeFilter));
  });
}
export { f as e, T as g, x as i };
