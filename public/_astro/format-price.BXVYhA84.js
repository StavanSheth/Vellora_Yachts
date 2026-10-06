const t = ["EUR", "USD", "GBP", "AUD"],
  i = new Intl.NumberFormat("en-EU", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format,
  e = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format,
  m = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format,
  c = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format;
function u(n, r) {
  return r
    ? t.includes(n)
      ? { EUR: i, USD: e, GBP: m, AUD: c }[n](r)
      : (console.warn("Currency not supported"), r.toString())
    : "Please enquire";
}
export { u as f };
