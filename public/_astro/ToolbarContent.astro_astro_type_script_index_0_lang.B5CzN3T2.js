import { m as i } from "./module.esm.B4UCoxDo.js";
import { g as a } from "./filters.BEW2P51h.js";
import { c as o, e as r, f as l } from "./FilterToolbar.utils.B3thFFxO.js";
import { b as p } from "./SectionYachtList.constants.Bd1ViHUC.js";
import "./modal-events.XNWLJeGd.js";
import "./analytics.DndsQryn.js";
import "./GA4Service.h0PwkgNc.js";
import "./generateEventName.BnmDzAnP.js";
i.data("toolbarContent", (e, s) => ({
  id: e,
  filters: {},
  totalResults: s,
  openModal() {
    l({ id: e, dispatch: this.$dispatch });
  },
  setActiveFilter(t) {
    r({ id: e, dispatch: this.$dispatch, filterName: t });
  },
  generateFilterText(t) {
    return a(t, this.filters);
  },
  eventHandlers: {
    [`@${e}:${p}.window`](t) {
      this.filters = t.detail.filters;
    },
    [`@${e}:${o}.window`](t) {
      this.totalResults = t.detail.totalResults;
    },
  },
}));
