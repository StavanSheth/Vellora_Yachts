import { m as t } from "./module.esm.B4UCoxDo.js";
import { b as s } from "./header-events.4RNKGvwJ.js";
t.data("burger", () => ({
  isOpen: !1,
  eventHandlers: {
    [`@${s}.window`]() {
      const e = this.$event.detail;
      return (this.isOpen = e);
    },
  },
}));
