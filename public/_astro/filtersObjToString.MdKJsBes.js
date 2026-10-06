const P = ["Summer", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  F = ["Winter", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
  d = {
    EUR: "summerCharterPriceEUR",
    USD: "summerCharterPriceUSD",
    GBP: "summerCharterPriceGBP",
  },
  S = {
    EUR: "winterCharterPriceEUR",
    USD: "winterCharterPriceUSD",
    GBP: "winterCharterPriceGBP",
  },
  m = {
    "< 30m": "lengthMetres < 30",
    "30m — 50m": "lengthMetres >= 30 AND lengthMetres < 50",
    "50m — 70m": "lengthMetres >= 50 AND lengthMetres < 70",
    "70m >": "lengthMetres >= 70",
    "< 100ft": "lengthFeet < 100",
    "100ft — 165ft": "lengthFeet >= 100 AND lengthFeet < 165",
    "165ft — 230ft": "lengthFeet >= 165 AND lengthFeet < 230",
    "230ft >": "lengthFeet >= 230",
  },
  l = () => new Date().getFullYear(),
  D = {
    "New Build": `buildYear >= ${l()}`,
    "Up to 2 years": `buildYear >= ${l() - 2}`,
    "Up to 5 years": `buildYear >= ${l() - 5}`,
    "Up to 10 years": `buildYear >= ${l() - 10}`,
    "Over 10 years": `buildYear < ${l() - 10}`,
  },
  U = (t, e) => {
    const i = Object.keys(m),
      a = i.indexOf(t),
      n = i.indexOf(e);
    return a - n;
  },
  A = (t, e) =>
    e?.length
      ? e
          .sort(U)
          .map((i) => t[i])
          .filter(Boolean)
          .join(" OR ")
      : !1,
  u = (t, e) => (e === void 0 ? !1 : `${t} >= ${e}`),
  N = (t, e) => (e ? `${t} <= ${e}` : !1),
  O = (t, e) => {
    const i = t.filter((r) => P.includes(r)),
      a = t.filter((r) => F.includes(r)),
      n = [];
    if (i.length) {
      const r = u(d[e], 0);
      n.push(r);
    }
    if (a.length) {
      const r = u(S[e], 0);
      n.push(r);
    }
    return n;
  };
function C(t, e, i = "EUR") {
  const {
      length: a,
      guests: n,
      cabins: r,
      minPrice: c,
      maxPrice: o,
      canViewGatedContent: h = !1,
      dates: f,
      year: b,
    } = t,
    g = e === "charter" ? d[i] : "askingPrice";
  let p = e === "charter" ? "forCharter:true" : "forSale:true";
  h || (p = e === "charter" ? "publicForCharter:true" : "publicForSale:true");
  const s = [];
  if ((h || s.push("isGated:false"), f?.length)) {
    const M = O(f, i);
    s.push(...M);
  }
  return (
    s.push(p),
    s.push(A(m, a)),
    s.push(A(D, b)),
    n && s.push(u("guests", n)),
    r && s.push(u("totalGuestCabins", r)),
    c && s.push(u(g, c)),
    o && s.push(N(g, o)),
    s.filter(Boolean).join(" AND ")
  );
}
export { m as A, A as a, O as b, C as c, u as d, N as e, D as f, d as s };
