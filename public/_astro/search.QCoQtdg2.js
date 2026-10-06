import { a as d } from "./index.DauvyH52.js";
const o = "YACHTS_V3",
  I = "CRUSE_REGIONS_AND_AREAS_GEO",
  g = "EXPERIENCES",
  A = "DESTINATIONS",
  E = "JOURNAL",
  N = [
    "sanityYachtId",
    "askingPrice",
    "askingPriceCurrencyIsoCode",
    "builder",
    "buildYear",
    "cabins",
    "totalGuestCabins",
    "badges",
    "cardDescription",
    "cardMedia",
    "cardMediaAlt",
    "cardMediaHover",
    "cardMediaHoverAlt",
    "cardMediaGallery",
    "disableCardMediaGallery",
    "featured",
    "guests",
    "guestsSleeping",
    "image",
    "imageAltText",
    "lengthFeet",
    "lengthMetres",
    "name",
    "objectID",
    "refitDate",
    "slug",
    "charterPrices",
    "summerCharterPrice",
    "winterCharterPrice",
    "type",
    "subtitle",
  ],
  S = ({ sortBy: r, sortOrder: e, context: a }) => {
    const s = e === "asc" ? "_ASC" : "_DESC",
      t = {
        price: {
          charter: "YACHTS_V3_CHARTER_PRICE",
          purchase: "YACHTS_V3_ASKING_PRICE",
        },
        length: { default: "YACHTS_V3_LENGTH" },
      },
      n = t[r]?.[a] || t[r]?.default || "YACHTS_V3";
    return n === "YACHTS_V3" ? n : n + s;
  },
  c = async (r, e = {}, a, s) => {
    const t = [];
    ((a === "purchase" || a === "charter") &&
      ((e.filters = e.filters
        ? e.filters + " AND type:yachtPage"
        : "type:yachtPage"),
      t.push({
        indexName: s
          ? S({ sortBy: s.sortBy, sortOrder: s.sortOrder, context: a })
          : o,
        query: r,
        getRankingInfo: !0,
        ...e,
      })),
      a === "experience" &&
        t.push({ indexName: g, query: r, getRankingInfo: !0, ...e }),
      a === "destination" &&
        t.push({ indexName: A, query: r, getRankingInfo: !0, ...e }),
      a === "journal" &&
        t.push({ indexName: E, query: r, getRankingInfo: !0, ...e }));
    const n = await d.multipleQueries(t);
    return n || null;
  },
  _ = async (r = "", e = {}, a, s) => {
    try {
      if (a === "charter") {
        const l = await d.initIndex(I).search(r),
          i = [r];
        (r.length <= 3 && l.hits?.[0]?.name && i.push(l.hits?.[0]?.name),
          (e.optionalWords = i));
        const { results: u } = await c(i.join(" "), e, a, s);
        return u[0];
      }
      const { results: t } = await c(r, e, a, s);
      return t[0];
    } catch (t) {
      return (console.error(t), {});
    }
  };
export { N as A, S as g, _ as s };
