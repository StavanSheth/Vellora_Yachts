import { m as E } from "./module.esm.B4UCoxDo.js";
import { M as d } from "./modal-events.XNWLJeGd.js";
import {
  g as i,
  c as f,
  h as a,
  b as m,
  S as C,
  i as r,
  j as h,
  M as R,
  d as A,
  e as x,
  f as w,
  a as I,
  k as n,
  l as o,
  m as c,
  n as v,
  o as F,
} from "./purchase.FMCXoUL4.js";
import { g as e } from "./generateEventName.BnmDzAnP.js";
import { F as S, a as u, b as T } from "./FilterToolbar.utils.B3thFFxO.js";
import { b as g, c as N } from "./SectionYachtList.utils.C1pwDW7L.js";
import { g as M } from "./filters.BEW2P51h.js";
import { Y as b } from "./SectionYachtList.constants.Bd1ViHUC.js";
import "./analytics.DndsQryn.js";
import "./GA4Service.h0PwkgNc.js";
import "./map-search-result.BQ3gJ3oA.js";
import "./format-price.BXVYhA84.js";
import "./dayjs.min.D1pIAJdy.js";
import "./_commonjsHelpers.gnU0ypJ3.js";
import "./format-date.BD_GeHUo.js";
import "./search.QCoQtdg2.js";
import "./index.DauvyH52.js";
import "./filtersObjToString.MdKJsBes.js";
E.data("modalFilter", (t, _) => ({
  id: t,
  isOpen: !1,
  state: _,
  appliedFilters: {},
  init() {
    this.$watch(
      `state.${this.state.activeContext}.filters`,
      E.debounce(() => {
        this.handleSearch();
      }, 500),
    );
  },
  async handleSearch() {
    this.state.status = "loading";
    const s = await N(this.state, this.yachtCollection);
    ((this.state.nbHits = s.length), (this.state.status = "ready"));
  },
  generateFilterText(s) {
    return M(s, this.state[this.state.activeContext].filters);
  },
  closeModal(s = !1) {
    T({ id: this.id, dispatch: this.$dispatch, filterApplied: s });
  },
  applyFilters() {
    this.state.nbHits < 1 ||
      this.state.status === "loading" ||
      (g({
        id: this.id,
        dispatch: this.$dispatch,
        filters: { ...this.state.filter.filters },
      }),
      (this.appliedFilters = { ...this.state.filter.filters }),
      this.closeModal());
  },
  resetFilterGroup(s) {
    u({ id: this.id, dispatch: this.$dispatch, name: s });
  },
  setActiveFilterCategory(s) {
    this.state.activeFilter !== s && (this.state.activeFilter = s);
  },
  eventHandlers: {
    [`@${d}.window`]() {
      const s = this.$event.detail;
      s.id === `${this.id}-modal` &&
        ((this.isOpen = s.isOpen),
        this.appliedFilters &&
          ((this.state.filter.filters = { ...this.appliedFilters }),
          Object.entries({
            length: { type: "checkbox", name: n },
            cabins: { type: "counter", name: o },
            guests: { type: "counter", name: c },
            dates: { type: "checkbox", name: a },
            year: { type: "checkbox", name: i },
            minPrice: { type: "range", name: r },
            maxPrice: { type: "range", name: h },
          }).forEach(([$, p]) => {
            this.appliedFilters[$] &&
              this.$dispatch(
                e("set", p.type, `${this.id}-${p.name}`),
                this.appliedFilters[$],
              );
          })));
    },
    [`@${t}:${S}.window`](s) {
      this.setActiveFilterCategory(s.detail.filterName);
    },
    [`@${t}:${b}.window`](s) {
      const l = {
        sortBy: s.detail.sort.split("-")[0],
        sortOrder: s.detail.sort.split("-")[1],
      };
      this.state.sort = l;
    },
    [`@${e("set", "unit", `${t}-${F}`)}.window`]() {
      ((this.state.sizeUnit = this.$event.detail), this.handleSearch());
    },
    [`@${e("set", "currency", `${t}-${v}`)}.window`]() {
      ((this.state.currency = this.$event.detail), this.handleSearch());
    },
    [`@${e("set", "checkbox", `${t}-${n}`)}.window`]() {
      this.state[this.state.activeContext].filters.length = this.$event.detail;
    },
    [`@${e("set", "counter", `${t}-${o}`)}.window`]() {
      this.state[this.state.activeContext].filters.cabins = this.$event.detail;
    },
    [`@${e("set", "counter", `${t}-${c}`)}.window`]() {
      this.state[this.state.activeContext].filters.guests = this.$event.detail;
    },
    [`@${e("reset", "filter", `${t}-${I}`)}.window`]() {
      (this.$dispatch(`${e("reset", "checkbox", `${t}-${n}`)}`),
        this.$dispatch(`${e("reset", "counter", `${t}-${o}`)}`),
        this.$dispatch(`${e("reset", "counter", `${t}-${c}`)}`),
        (this.state[this.state.activeContext].filters.length = []),
        (this.state[this.state.activeContext].filters.guests = 0),
        (this.state[this.state.activeContext].filters.cabins = 0));
    },
    [`@${e("set", "range", `${t}-${r}`)}.window`]() {
      this.state[this.state.activeContext].filters.minPrice =
        this.$event.detail;
    },
    [`@${e("set", "range", `${t}-${h}`)}.window`]() {
      this.state[this.state.activeContext].filters.maxPrice =
        this.$event.detail;
    },
    [`@${e("reset", "filter", `${t}-${C}`)}.window`]() {
      (this.$dispatch(`${e("reset", "range", `${t}-${r}`)}`),
        this.$dispatch(`${e("reset", "range", `${t}-${h}`)}`),
        this.state.pageContext === "charter" &&
          ((this.state[this.state.activeContext].filters.minPrice = R),
          (this.state[this.state.activeContext].filters.maxPrice = A)),
        this.state.pageContext === "purchase" &&
          ((this.state[this.state.activeContext].filters.minPrice = x),
          (this.state[this.state.activeContext].filters.maxPrice = w)));
    },
    [`@${e("reset", "filter", `${t}-${m}`)}.window`]() {
      this.$dispatch(`${e("reset", "checkbox", `${t}-${a}`)}`);
    },
    [`@${e("set", "checkbox", `${t}-${a}`)}`](s) {
      this.state[this.state.activeContext].filters.dates = s.detail;
    },
    [`@${e("reset", "filter", `${t}-${f}`)}.window`]() {
      this.$dispatch(`${e("reset", "checkbox", `${t}-${i}`)}`);
    },
    [`@${e("set", "checkbox", `${t}-${i}`)}.window`]() {
      this.state[this.state.activeContext].filters.year = this.$event.detail;
    },
  },
}));
