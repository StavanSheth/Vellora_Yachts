function s(n, t = {}) {
  window.gtag
    ? window.gtag("event", n, t)
    : console.error("gtag function is not defined on the window");
}
function c(n, t) {
  const e = window.location.pathname.split("/"),
    o = e[e.length - 1].replace(/-/g, " "),
    a = { [t]: o };
  s(n, a);
}
export { c as a, s };
