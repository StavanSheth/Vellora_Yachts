import { m as i } from "./module.esm.B4UCoxDo.js";
import { e as r, i as s, g as a } from "./filters.BEW2P51h.js";
i.data("searchPurchase", (t) => ({
  isMobileFilters: !0,
  ...r(t),
  buttonText(e) {
    return a(e, this.activeContextFilters, this.isMobileFilters);
  },
  init() {
    s(this);
  },
}));
