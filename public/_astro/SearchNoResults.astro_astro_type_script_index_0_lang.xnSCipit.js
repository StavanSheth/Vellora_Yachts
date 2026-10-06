import { m as i } from "./module.esm.B4UCoxDo.js";
import { M as s, G as a } from "./modal-events.XNWLJeGd.js";
i.plugin(focus);
i.data("searchNoResult", () => ({
  onEnquire() {
    (this.$dispatch(`${s}`, { id: "search", isOpen: !1 }),
      this.$dispatch(`${s}`, { id: a, isOpen: !0 }));
  },
}));
