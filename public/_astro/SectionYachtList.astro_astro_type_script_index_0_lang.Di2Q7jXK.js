import { m as h } from "./module.esm.B4UCoxDo.js";
import {
  Y as p,
  a as c,
  b as d,
} from "./SectionYachtList.constants.Bd1ViHUC.js";
import {
  d as o,
  c as g,
  s as S,
  a as f,
  b as m,
} from "./SectionYachtList.utils.C1pwDW7L.js";
import { d as T } from "./FilterToolbar.utils.B3thFFxO.js";
import "./map-search-result.BQ3gJ3oA.js";
import "./format-price.BXVYhA84.js";
import "./dayjs.min.D1pIAJdy.js";
import "./_commonjsHelpers.gnU0ypJ3.js";
import "./format-date.BD_GeHUo.js";
import "./search.QCoQtdg2.js";
import "./index.DauvyH52.js";
import "./filtersObjToString.MdKJsBes.js";
import "./GA4Service.h0PwkgNc.js";
import "./analytics.DndsQryn.js";
import "./modal-events.XNWLJeGd.js";
import "./generateEventName.BnmDzAnP.js";
h.data("sectionYachtList", (i, e, r) => ({
  id: i,
  state: e,
  yachtCollection: r,
  observer: null,
  init() {
    if (!e.isFilterable) {
      (this.state.pagination.type === "scroll" && this.handleScrollPagination(),
        (this.eventHandlers = {}));
      return;
    }
    const { isInitialState: t, state: s } = f(i, e);
    (this.state.pagination.type === "scroll" && this.handleScrollPagination(),
      t ||
        ((this.state.sort = s.sort),
        (this.state.filter.filters = s.filter.filters),
        m({ id: i, dispatch: this.$dispatch, filters: s.filter.filters })));
  },
  async handleSearch() {
    o({ id: i, dispatch: this.$dispatch, status: "loading" });
    const t = await g(this.state, this.yachtCollection);
    (this.handleServerContent(),
      this.handleScrollToTop(),
      (this.state = {
        ...this.state,
        visibleHits: [...t.slice(0, 10)],
        hits: [...t],
        pagination: { ...this.state.pagination, page: 0 },
      }),
      await this.$nextTick(),
      T({ id: i, dispatch: this.$dispatch, totalResults: t.length }),
      o({ id: i, dispatch: this.$dispatch, status: "ready" }),
      S(this.id, this.state));
  },
  handleServerContent() {
    const t = this.$el.querySelectorAll(".sr-render");
    t.length > 0 &&
      t.forEach((s) => {
        s.remove();
      });
  },
  handleScrollToTop() {
    this.$el.offsetTop < window.scrollY &&
      window.scrollTo({ top: this.$el.offsetTop - 200, behavior: "smooth" });
  },
  handleNextPage() {
    this.state.pagination.page >=
      Math.ceil(this.state.hits.length / this.state.pagination.pageSize) ||
      ((this.state.pagination.page += 1),
      (this.state.visibleHits = [
        ...this.state.visibleHits,
        ...this.state.hits.slice(
          this.state.pagination.page * this.state.pagination.pageSize,
          (this.state.pagination.page + 1) * this.state.pagination.pageSize,
        ),
      ]));
  },
  handleScrollPagination() {
    const t = { root: null, rootMargin: "0px", threshold: 1 },
      s = new IntersectionObserver((n) => {
        n.forEach((l) => {
          l.isIntersecting &&
            this.state.status == "ready" &&
            this.handleNextPage();
        });
      }, t),
      a = this.$el.querySelector(".observerIdentifier");
    a && (s.observe(a), (this.observer = s));
  },
  eventHandlers: {
    [`@${i}:${d}.window`](t) {
      ((this.state.filter.filters = { ...t.detail.filters }),
        this.handleSearch());
    },
    [`@${i}:${c}.window`](t) {
      this.state.status = t.detail.status;
    },
    [`@${i}:${p}.window`](t) {
      const s = {
        sortBy: t.detail.sort.split("-")[0],
        sortOrder: t.detail.sort.split("-")[1],
      };
      ((this.state.sort = s), this.handleSearch());
    },
  },
}));
