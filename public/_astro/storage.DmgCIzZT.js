const c = (e) => {
    !e ||
      e.length === 0 ||
      e.forEach((t) => {
        const s = r(t);
        o(t, s);
      });
  },
  o = (e, t) => sessionStorage.setItem(`yco_${e}`, t),
  g = (e) => {
    const t = sessionStorage.getItem(e) || "";
    return a(t);
  },
  r = (e) => {
    const t = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
      n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
    return n === null ? "" : decodeURIComponent(n[1].replace(/\+/g, ""));
  },
  a = (e) => {
    if (typeof e != "string" || e.length === 0) return "";
    e = e.trim();
    const t = 600;
    return (
      e.length > t && (e = e.slice(0, t)),
      e.replace(/[^a-zA-Z0-9-_]/g, "")
    );
  };
export { g, c as s };
