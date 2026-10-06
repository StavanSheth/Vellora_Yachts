import { m as A } from "./map-search-result.BQ3gJ3oA.js";
import { g as T, A as L } from "./search.QCoQtdg2.js";
import { a as y } from "./index.DauvyH52.js";
import {
  b as I,
  a as c,
  d as o,
  e as Y,
  A as E,
  f as _,
  s as C,
} from "./filtersObjToString.MdKJsBes.js";
import {
  a as N,
  b as w,
  Y as P,
} from "./SectionYachtList.constants.Bd1ViHUC.js";
import { s as l } from "./GA4Service.h0PwkgNc.js";
import { d as h, e as g } from "./analytics.DndsQryn.js";
function x(e) {
  return !e || typeof e != "string"
    ? ""
    : e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
}
const p = "YACHTS_V3",
  R = (e, t, r) => {
    const s = [];
    if (
      (s.push("isDraft:false"),
      s.push(...$(t)),
      !t.canViewGatedContent && s.push("isGated:false"),
      e.filterLength && e.filterLength.isEnabled && e.filterLength.condition)
    ) {
      const {
        operation: n,
        length: i,
        minLength: a,
        maxLength: u,
      } = e.filterLength.condition;
      n === "between"
        ? a !== void 0 &&
          u !== void 0 &&
          s.push(`lengthMetres >= ${a} AND lengthMetres <= ${u}`)
        : i !== void 0 && s.push(`lengthMetres ${n} ${i}`);
    }
    if (r) {
      const n = t.context === "charter" ? C[r.currency] : "askingPrice",
        i = [];
      if (r.dates?.length) {
        const a = I(r.dates, r.currency);
        i.push(...a);
      }
      (i.push(c(E, r.length)),
        i.push(c(_, r.year)),
        i.push(o("guests", r.guests)),
        i.push(o("totalGuestCabins", r.cabins)),
        i.push(o(n, r.minPrice)),
        i.push(Y(n, r.maxPrice)),
        s.push(i.filter(Boolean).join(" AND ")));
    }
    return s.filter(Boolean).join(" AND ");
  };
function $(e) {
  const { context: t, canViewGatedContent: r } = e;
  return t === "charter"
    ? r
      ? ["forCharter:true"]
      : ["publicForCharter:true"]
    : t === "purchase"
      ? r
        ? ["forSale:true"]
        : ["publicForSale:true"]
      : !t && r
        ? ["(forCharter:true OR forSale:true)"]
        : ["(publicForCharter:true OR publicForSale:true)"];
}
const F = (e, t = !1) => {
    if (!e.yachts || !e.yachts.length) return "";
    const r = e.yachts.map((s) => `sanityYachtId:${s}`).join(" OR ");
    return t ? r : `(${r}) AND isGated:false`;
  },
  b = (e) => {
    const t = [];
    if (e.filterTags && e.filterTags.length > 0) {
      const r = e.filterTags.map((s) => `tags:${s}`);
      t.push(r);
    }
    if (e.filterBuilders && e.filterBuilders.length > 0) {
      const r = e.filterBuilders.map((s) => `builder:${s}`);
      t.push(r);
    }
    return (
      e.filterCruiseRegions &&
        (!e.filterCruiseAreas ||
          (e.filterCruiseAreas && e.filterCruiseAreas?.length < 1)) &&
        e.filterCruiseRegions.forEach((r) => t.push(`area:${r}`)),
      e.filterCruiseAreas &&
        e.filterCruiseAreas.forEach((r) => t.push(`area:${r}`)),
      e.filterSeasons &&
        e.filterSeasons.forEach((r) => {
          const [s, n] = r.split("-");
          t.push([
            `charterPrices.seasonGrouped:${x(s)}-${n}`,
            `charterPrices.seasonGrouped:${s.toLowerCase()}-override`,
          ]);
        }),
      t
    );
  };
function B(e, t, r, s) {
  const n = t ? `${e} AND ${t}` : e;
  return [
    {
      indexName: p,
      query: "",
      ...s,
      filters: n,
      facetFilters: r.length > 0 ? r : void 0,
    },
  ];
}
function G(e, t) {
  if (e && Array.isArray(e.results)) {
    const s = (e.results[0]?.hits || []).filter(
      (n) => !n.objectID.startsWith("drafts."),
      [],
    );
    return t === p || t === void 0
      ? s.sort((n, i) => i.lengthMetres - n.lengthMetres)
      : s;
  }
  return [];
}
async function O(e, t, r, s) {
  try {
    const n = v(e),
      i = r.hitsPerPage || 10,
      a = R(e, t, s),
      u = F(e, t.canViewGatedContent),
      d = b(e),
      S = B(a, u, d, {
        ...r,
        hitsPerPage: n ? e.yachts?.length : r.hitsPerPage,
      }),
      m = await y.search(S),
      f = G(m, r?.indexName);
    return n ? D(f, e, i) : f;
  } catch {
    return [];
  }
}
const v = (e) =>
    (e.yachts?.length ?? 0) > 0 &&
    e.filterBuilders === null &&
    e.filterCruiseAreas === null &&
    e.filterCruiseRegions === null &&
    e.filterSeasons === null &&
    !e.filterLength?.isEnabled &&
    e.filterTags === null,
  D = (e, t, r) => {
    const s = t.yachts || [];
    return e
      .sort((n, i) => {
        const a = s.indexOf(n.sanityYachtId),
          u = s.indexOf(i.sanityYachtId);
        return a === -1 ? 1 : u === -1 ? -1 : a - u;
      })
      .slice(0, r);
  },
  H = (e) => e.charAt(0).toUpperCase() + e.slice(1),
  M = (e) => {
    if (
      !e ||
      !e.filterSeasons ||
      !e.filterSeasons.length ||
      e.filterSeasons.length > 1
    )
      return null;
    const t = e.filterSeasons[0],
      [r, s] = t.split("-");
    return { targetSeason: H(r), targetYear: s };
  },
  V = (e, t) => {
    const r = new Set(e.yachts || []),
      s = [];
    return (
      e.yachts?.forEach((n) => {
        const i = t.find((a) => a.sanityYachtId === n);
        i && s.push(i);
      }),
      t.forEach((n) => {
        (!n.sanityYachtId || !r.has(n.sanityYachtId)) && s.push(n);
      }),
      s
    );
  },
  Q = (e, t, { order: r } = { order: "relevance" }) =>
    r === "manualFirst" && e?.yachts?.length ? V(e, t) : t,
  Z = async (e, t) => {
    const r = T({
        sortBy: e.sort.sortBy,
        sortOrder: e.sort.sortOrder,
        context: e.pageContext,
      }),
      s = await O(
        t,
        { canViewGatedContent: e.gated, context: e.pageContext },
        {
          hitsPerPage: e.pagination.maxItems,
          attributesToRetrieve: L,
          indexName: r,
        },
        { ...e.filter.filters, currency: e.currency },
      ),
      n = Q(t, s, { order: "manualFirst" }),
      i = M(t),
      a = n.map(A(e.pageContext, { ...(i && { targetContext: i }) }));
    return e.sort.sortBy == "price" && e.sort.sortOrder == "asc" ? j(a) : a;
  },
  ee = (e, t) => {
    const r = U(e);
    return r
      ? { state: { ...t, ...r }, isInitialState: !1 }
      : { state: t, isInitialState: r === null };
  },
  U = (e) => {
    const t = window.sessionStorage.getItem(e);
    return t ? JSON.parse(t) : null;
  },
  re = (e, t) => {
    const r = {
      filter: {
        filterCategories: t.filter.filterCategories,
        filters: t.filter.filters,
        indexName: t.filter.indexName,
      },
      sort: t.sort,
      sizeUnit: t.sizeUnit,
      currency: t.currency,
    };
    window.sessionStorage.setItem(e, JSON.stringify(r));
  };
function j(e) {
  const t = (r) => parseFloat(r?.replace(/[^0-9.]/g, ""));
  return e.sort((r, s) => {
    const n = t(r.price),
      i = t(s.price);
    return isNaN(n) ? 1 : isNaN(i) ? -1 : n - i;
  });
}
const te = ({ id: e, dispatch: t, status: r }) => {
    t(`${e}:${N}`, { status: r });
  },
  se = ({ id: e, dispatch: t, sort: r }) => {
    (t(`${e}:${P}`, { sort: r }),
      l(g, { sort: r }),
      window.plausible && window.plausible(g, { props: { sortBy: r } }));
  },
  ne = ({ id: e, dispatch: t, filters: r }) => {
    (t(`${e}:${w}`, { filters: r }),
      l(h, { filters: r }),
      window.plausible &&
        window.plausible(h, { props: { filters: JSON.stringify(r) } }));
  };
export { ee as a, ne as b, Z as c, te as d, se as e, re as s };
