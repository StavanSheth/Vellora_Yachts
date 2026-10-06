import { m as i } from "./module.esm.B4UCoxDo.js";
import { M as t } from "./modal-events.XNWLJeGd.js";
import { s as e } from "./GA4Service.h0PwkgNc.js";
import { S as s } from "./analytics.DndsQryn.js";
i.data("searchButton", () => ({
  id: "search",
  isOpen: !1,
  openModal() {
    ((this.isOpen = !0),
      this.$dispatch(`${t}`, { id: this.id, isOpen: this.isOpen }),
      e(s),
      window.plausible && window.plausible(s));
  },
}));
