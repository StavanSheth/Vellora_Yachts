import { m as t } from "./module.esm.B4UCoxDo.js";
import { c as s, b as a } from "./header-events.4RNKGvwJ.js";
t.data("logo", () => ({
  isOpen: !1,
  hasScrolled: !1,
  eventHandlers: {
    [`@${a}.window`]() {
      const e = this.$event.detail;
      return (this.isOpen = e);
    },
    [`@${s}.window`]() {
      const e = this.$event.detail;
      return (this.hasScrolled = e);
    },
  },
}));
