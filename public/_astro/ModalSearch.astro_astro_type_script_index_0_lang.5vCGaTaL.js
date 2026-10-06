import { m as h } from "./module.esm.B4UCoxDo.js";
import { m as w } from "./module.esm.CR1UTuU-.js";
import { s as c, A as I } from "./search.QCoQtdg2.js";
import { M as n } from "./modal-events.XNWLJeGd.js";
import { g as t } from "./generateEventName.BnmDzAnP.js";
import {
  S as o,
  a as l,
  b as E,
  c as C,
  C as P,
  M as F,
  d as N,
  P as H,
  e as y,
  f as M,
  g as u,
  h as d,
  i as _,
  j as f,
  k as R,
  l as $,
  m as p,
  n as q,
  o as L,
} from "./purchase.FMCXoUL4.js";
import { c as T } from "./filtersObjToString.MdKJsBes.js";
import { m as b } from "./map-search-result.BQ3gJ3oA.js";
import "./index.DauvyH52.js";
import "./_commonjsHelpers.gnU0ypJ3.js";
import "./format-price.BXVYhA84.js";
import "./dayjs.min.D1pIAJdy.js";
import "./format-date.BD_GeHUo.js";
h.plugin(w);
h.data("modalSearch", (r, A) => ({
  id: "search",
  isOpen: !1,
  state: r,
  canViewGatedContent: A,
  init() {
    (this.$watch("state.query", () => {
      ((this.state.activeFilter = ""), this.createAlgoliaRequest());
    }),
      this.$watch("state.activeContext", () => this.createAlgoliaRequest()),
      this.$watch(
        `state.${this.state.activeContext}.filters`,
        h.debounce(() => {
          (this.setSearchState("loading"), this.createAlgoliaRequest());
        }, 500),
      ),
      this.state?.hits?.length > 0 &&
        this.state?.state !== "featured" &&
        this.createAlgoliaRequest(),
      this.state?.hits?.length == 0 &&
        this.createAlgoliaRequest().then(() => {
          this.setSearchState("featured");
        }));
  },
  async createAlgoliaRequest() {
    this.setSearchState("loading");
    const {
        hits: e,
        nbHits: s,
        page: v,
        hitsPerPage: x,
        nbPages: g,
      } = await c(
        this.state.query,
        this.state.activeContext === "charter" ||
          this.state.activeContext === "purchase"
          ? {
              attributesToRetrieve: I,
              filters: T(
                {
                  ...this.state[this.state.activeContext].filters,
                  canViewGatedContent: this.canViewGatedContent,
                },
                r.activeContext,
                this.state.currency,
              ),
            }
          : {},
        this.state.activeContext,
      ),
      m = e.map(b(r.activeContext));
    if (
      ((this.state.hits = m),
      (this.state.nbHits = s),
      (this.state.page = v),
      (this.state.hitsPerPage = x),
      (this.state.nbPages = g),
      this.state.nbHits === 0
        ? this.setSearchState("no results")
        : this.setSearchState("ready"),
      this.state.activeContext === "experience")
    ) {
      const { hits: S } = await c(this.state.query, {}, "destination");
      this.state.destinations = S.map((a) => {
        let i = a.slug;
        return (
          a.type === "cruiseAreaPage" &&
            (i = "/yacht-charter/cruising-area/" + i),
          a.type === "cruiseRegionPage" &&
            (i = "/yacht-charter/cruising-region/" + i),
          { title: a.title, href: i }
        );
      });
    }
  },
  get queryUrl() {
    const e = new URLSearchParams(
      this.state[this.state.activeContext].filters,
    ).toString();
    let s = this.state.activeContext;
    return (
      this.state.activeContext === "charter" && (s = "yacht-charter/search"),
      this.state.activeContext === "purchase" && (s = "yachts-for-sale/search"),
      this.state.activeContext === "journal" &&
        (s = "beneath-the-surface/search"),
      this.state.activeContext === "experience" &&
        (s = "yacht-charter/destinations/search"),
      this.state.query
        ? `${this.getBaseUrl()}/${s}/${this.state.query}?${e}`
        : `${this.getBaseUrl()}/${s}/${this.state.query}%20?${e}`
    );
  },
  setSearchState(e) {
    this.state.state = e;
  },
  getBaseUrl() {
    return (
      window.location.protocol +
      "//" +
      window.location.hostname +
      (window.location.port ? ":" + window.location.port : "")
    );
  },
  eventHandlers: {
    [`@${n}.window`]() {
      const e = this.$event.detail;
      e.id === this.id && (this.isOpen = e.isOpen);
    },
    [`@${t("set", "unit", L)}.window`]() {
      ((this.state.sizeUnit = this.$event.detail), this.createAlgoliaRequest());
    },
    [`@${t("set", "currency", q)}.window`]() {
      ((this.state.currency = this.$event.detail), this.createAlgoliaRequest());
    },
    [`@${t("set", "checkbox", R)}.window`]() {
      this.state[this.state.activeContext].filters.length = this.$event.detail;
    },
    [`@${t("set", "counter", $)}.window`]() {
      this.state[this.state.activeContext].filters.cabins = this.$event.detail;
    },
    [`@${t("set", "counter", p)}.window`]() {
      this.state[this.state.activeContext].filters.guests = this.$event.detail;
    },
    [`@${t("reset", "filter", l)}.window`]() {
      (this.$dispatch(`${t("reset", "checkbox", R)}`),
        this.$dispatch(`${t("reset", "counter", $)}`),
        this.$dispatch(`${t("reset", "counter", p)}`),
        (this.state[this.state.activeContext].filters.length = []),
        (this.state[this.state.activeContext].filters.guests = 0),
        (this.state[this.state.activeContext].filters.cabins = 0));
    },
    [`@${t("set", "range", _)}.window`]() {
      this.state[this.state.activeContext].filters.minPrice =
        this.$event.detail;
    },
    [`@${t("set", "range", f)}.window`]() {
      this.state[this.state.activeContext].filters.maxPrice =
        this.$event.detail;
    },
    [`@${t("reset", "filter", o)}.window`]() {
      (this.$dispatch(`${t("reset", "range", _)}`),
        this.$dispatch(`${t("reset", "range", f)}`),
        this.state[this.state.activeContext] === P &&
          ((this.state[this.state.activeContext].filters.minPrice = F),
          (this.state[this.state.activeContext].filters.maxPrice = N)),
        this.state[this.state.activeContext] === H &&
          ((this.state[this.state.activeContext].filters.minPrice = y),
          (this.state[this.state.activeContext].filters.maxPrice = M)));
    },
    [`@${t("reset", "filter", E)}.window`]() {
      this.$dispatch(`${t("reset", "checkbox", d)}`);
    },
    [`@${t("set", "checkbox", d)}`](e) {
      this.state[this.state.activeContext].filters.dates = e.detail;
    },
    [`@${t("set", "checkbox", u)}`](e) {
      this.state[this.state.activeContext].filters.year = e.detail;
    },
    [`@${t("reset", "filter", C)}.window`]() {
      this.$dispatch(`${t("reset", "checkbox", u)}`);
    },
  },
  setActiveContext(e) {
    ((this.state.query = ""),
      (this.state.activeContext = e),
      (this.state.activeFilter = ""),
      (this.state.hits = []),
      this.createAlgoliaRequest());
  },
  setActiveFilterCategory(e) {
    this.state.activeFilter === e
      ? (this.state.activeFilter = "")
      : (this.state.activeFilter = e);
  },
  closeModal() {
    ((this.isOpen = !1),
      this.$dispatch(`${n}`, { id: this.id, isOpen: this.isOpen }));
  },
  resetFilterGroup(e) {
    this.$dispatch(t("reset", "filter", e));
  },
  resetFilterGroups() {
    ((this.state.query = ""),
      this.resetFilterGroup(o),
      this.resetFilterGroup(l),
      this.resetFilterGroup(E),
      this.resetFilterGroup(C));
  },
}));
