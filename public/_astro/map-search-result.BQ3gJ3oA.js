import { f } from "./format-price.BXVYhA84.js";
import { d as y } from "./dayjs.min.D1pIAJdy.js";
import { a as _ } from "./format-date.BD_GeHUo.js";
const C = new Set(["May", "Jun", "Jul", "Aug", "Sep"]),
  P = new Set(["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]),
  F = new Set(["Oct", "Nov", "Dec"]),
  m = (r, t, a) => {
    const s = C.has(t),
      n = F.has(t);
    switch (a) {
      case "Winter":
        return n || s ? r : r - 1;
      default:
        return n ? r + 1 : r;
    }
  },
  b = (r) => {
    const t = S(),
      a = t.year(),
      s = t.format("MMM");
    return r === "Winter"
      ? `Winter-${m(a, s, "Winter")}`
      : `Summer-${m(a, s, "Summer")}`;
  },
  g = (r, t, a = {}) => {
    const s = b(r),
      n = t.find((e) => {
        if (e.seasonGrouped) return e.seasonGrouped === s;
        const c = _(e.SF_Start_Date__c);
        return `${e.SF_Season__c}${c && "-" + c}` === s;
      });
    return a.returnRaw
      ? n && (n.SF_Low_Rate__c || n.SF_High_Rate__c)
        ? n
        : null
      : n && (n.SF_Low_Rate__c || n.SF_High_Rate__c)
        ? {
            lowRate: n.SF_Low_Rate__c,
            highRate: n.SF_High_Rate__c,
            currencyIso: n.SF_CurrencyIsoCode,
          }
        : null;
  },
  M = (r, t = {}) => {
    const a = g("Summer", r, t),
      s = g("Winter", r, t);
    return { summer: a, winter: s };
  },
  S = (r) => y(),
  p = () => {
    const t = S().format("MMM");
    return P.has(t) ? ["winter", "summer"] : ["summer", "winter"];
  },
  w = (r) =>
    r
      ? r.sort((t, a) => {
          const s = new Date(t._updatedAt);
          return new Date(a._updatedAt).getTime() - s.getTime();
        })
      : [];
function D({ badges: r, context: t, isCharter: a, isSale: s }) {
  if (!r) return null;
  const n = (c) => r.find((o) => o && o.context === c) || null,
    e = n("all-contexts");
  return (
    e ||
    ((!a && !s) || t === "mixed"
      ? n("no-mixed-context")
      : t === "charter"
        ? n("charter")
        : t === "purchase"
          ? n("sale")
          : null)
  );
}
function R(r, t) {
  const { slug: a, type: s, categorySlug: n } = r;
  switch (s) {
    case "experiencePage":
      return `/yacht-charter/experiences/${a}`;
    case "destinationPage":
      return `/yacht-charter/destinations/${a}`;
    case "itineraryPage":
      return `/yacht-charter/itinerary/${a}`;
    case "journalPage":
      return n ? `/beneath-the-surface/${n}/${a}` : `/beneath-the-surface/${a}`;
    case "cruiseAreaPage":
      return `/yacht-charter/cruising-area/${a}`;
    case "cruiseRegionPage":
      return `/yacht-charter/cruising-region/${a}`;
    default:
      return t ? `/yacht/${a}?purchase=${t}` : `/yacht/${a}`;
  }
}
function h(r) {
  const t = w(r.charterPrices),
    { summer: a, winter: s } = M(t);
  return p()[0] === "summer" ? a : s;
}
function A(r) {
  const a = p()[0] === "summer" ? r.summerCharterPrice : r.winterCharterPrice;
  if (!a) return null;
  const { SF_CurrencyIsoCode: s, SF_Low_Rate__c: n } = a;
  return { ...a, currencyIso: s, lowRate: n };
}
function $(r, { resultSource: t }) {
  return t === "sanity" ? h(r) : A(r);
}
function v(r) {
  return r?.targetSeason === void 0 ||
    r?.targetSeason === null ||
    r?.targetYear === void 0 ||
    r?.targetYear === null
    ? !1
    : !!["Summer", "Winter"].includes(r.targetSeason);
}
function H(r, t) {
  const { targetSeason: a } = t,
    s = ["summer", "Summer"].includes(a)
      ? r.summerCharterPrice
      : r.winterCharterPrice;
  return {
    ...s,
    currencyIso: s?.SF_CurrencyIsoCode,
    lowRate: s?.SF_Low_Rate__c,
  };
}
function B(r, { listingType: t, targetContext: a, resultSource: s }) {
  const { askingPrice: n, askingPriceCurrencyIsoCode: e } = r,
    c = a ? v(a) : !1,
    o = c ? H(r, a) : $(r, { resultSource: s }),
    { currencyIso: u, lowRate: d } = o || {},
    i = f(u ?? "EUR", d ?? void 0),
    l = f(e ?? u ?? "EUR", n ?? void 0);
  return t === "charter"
    ? { price: i, frequency: r.frequency ?? "w" }
    : t === "purchase"
      ? { price: l, frequency: "purchase" }
      : c && i === "Please enquire"
        ? { price: i }
        : i === "Please enquire"
          ? { price: l, frequency: "purchase" }
          : { price: i, frequency: r.frequency ?? "w" };
}
function Y(r, t) {
  const {
      lengthMetres: a,
      guestsSleeping: s,
      builder: n,
      buildYear: e,
      refitDate: c,
    } = r,
    o = c ? new Date(c).getFullYear() : null,
    u = [];
  return (
    a && u.push(`${a.toFixed()}M`),
    t === "charter" &&
      (s && u.push(`${s} Guests`),
      e && u.push(`Built ${e}`),
      o && u.push(`Refitted ${o}`)),
    t === "purchase" &&
      (n && u.push(n), e && u.push(`Built ${e}`), o && u.push(`Refitted ${o}`)),
    u
  );
}
function x(r) {
  return (r && r.type === "yachtPage") || !1;
}
function G(r) {
  return r
    ? r.type === "journalPage" ||
        r.type === "destinationPage" ||
        r.type === "experiencePage" ||
        r.type === "itineraryPage" ||
        r.type === "cruiseAreaPage" ||
        r.type === "cruiseRegionPage"
    : !1;
}
const W =
  (
    r,
    t,
    { resultSource: a, pageContext: s, trackEventName: n } = {
      resultSource: "algolia",
    },
  ) =>
  (e) => {
    const c = {
      heading: e.name,
      href: R(e, r),
      id: e.objectID,
      image: { url: e.image ?? null, alt: e.imageAltText ?? e.name },
      listingType: r,
      type: e.type,
    };
    if (x(e)) {
      const o = t?.targetContext,
        u = B(e, { listingType: r, targetContext: o, resultSource: a }),
        d = Y(e, r || (u.frequency !== "purchase" ? "charter" : "purchase")),
        i = D({
          badges: e.badges,
          context: s ?? "mixed",
          isCharter: s === "charter",
          isSale: s === "purchase",
        });
      return {
        ...c,
        amenities: d,
        builder: e.builder,
        builderYear: e.buildYear,
        refitYear: e.refitDate ? new Date(e.refitDate).getFullYear() : null,
        cabins: e.cabins,
        totalGuestCabins: e.totalGuestCabins,
        guests: e.guestsSleeping,
        image: {
          url: e.cardMedia ?? e.image,
          alt: e.cardMediaAlt ?? e.imageAltText ?? e.name,
        },
        isCharter: r === "charter",
        isFeatured: e.featured ?? !1,
        lengthFeet: e.lengthFeet,
        lengthMetres: e.lengthMetres,
        badges: i ? [i] : void 0,
        description: e.cardDescription,
        mediaHover: e.cardMediaHover
          ? {
              url: e.cardMediaHover,
              alt: e.cardMediaHoverAlt ?? e.imageAltText ?? e.name,
              format: e.cardMediaHover.includes("mp4") ? "mp4" : void 0,
            }
          : void 0,
        cardCarousel: e.cardMediaGallery?.map((l) => ({
          url: l?.imageUrl,
          alt: l?.imageAlt,
          format: l?.imageUrl?.includes("mp4") ? "mp4" : void 0,
        })),
        disableCardMediaGallery: e.disableCardMediaGallery,
        ...u,
        subtitle: e.subtitle,
        trackEventName: n,
        settings: {
          isGated: e.isGated,
          isDraft: e.isDraft,
          publishForSale: e.publishForSale,
          publishForCharter: e.publishForCharter,
          isHidden: e.isHidden,
          forCharter: e.forCharter,
          forSale: e.forSale,
          sfForCharter: e.sfForCharter,
          sfForSale: e.sfForSale,
          publicForSale: e.publicForSale,
          publicForCharter: e.publicForCharter,
        },
      };
    }
    if (G(e)) {
      const o = e.type !== "journalPage";
      return {
        ...c,
        heading: e?.title ?? e?.name ?? e?.seo?.metaTitle ?? "",
        subheading: e.categorySlug?.replaceAll("-", " ") ?? "",
        copy:
          e?.description ??
          e?.copy ??
          e?.seo?.metaDescription ??
          e?.metaDescription ??
          "",
        image: {
          url: c.image.url ?? e?.seo?.ogImage?.secure_url ?? "",
          alt: c.image.alt ?? "",
        },
        canSaveItem: o,
      };
    }
    return c;
  };
export { W as m };
