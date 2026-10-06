import "./dayjs.min.D1pIAJdy.js";
const a = (t) => {
    if (!t || typeof t != "string") return null;
    const e = new Date(t).getFullYear();
    return !isNaN(e) && e.toString().length === 4 ? e : null;
  },
  o = (t) =>
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: t,
      hour12: !1,
    }).format(new Date());
export { a, o as g };
