import { m as e } from "./module.esm.B4UCoxDo.js";
import { H as a } from "./header-events.4RNKGvwJ.js";
e.data("sticky", () => ({
  hasScrolledDown: !1,
  eventHandlers: {
    [`@${a}.window`]() {
      const t = this.$event.detail;
      return (this.hasScrolledDown = t);
    },
  },
}));
