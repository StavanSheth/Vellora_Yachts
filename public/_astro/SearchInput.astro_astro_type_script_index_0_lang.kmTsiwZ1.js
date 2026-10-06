import { m as s } from "./module.esm.B4UCoxDo.js";
import { M as n } from "./modal-events.XNWLJeGd.js";
import { e as a, i as r, g as o } from "./filters.BEW2P51h.js";
s.data("searchInput", (i) => ({
  id: "search",
  isModalOpen: !1,
  ...a(i),
  eventHandlers: {
    [`@${n}.window`]() {
      const t = this.$event.detail;
      t.id === this.id && (this.isModalOpen = t.isOpen);
    },
  },
  buttonText(t) {
    return o(t, this.activeContextFilters);
  },
  init() {
    (r(this),
      this.$watch("isModalOpen", (t) => {
        const e = document.getElementById("search-input");
        e &&
          (t
            ? this.$nextTick(() => e.focus())
            : this.$nextTick(() => e.blur()));
      }));
  },
}));
