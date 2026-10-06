import { m as a } from "./module.esm.DUd3sQ38.js";
import { m as d } from "./module.esm.B4UCoxDo.js";
d.plugin(a);
d.data("accordion", (e) => ({
  expanded: !1,
  toggleAccordion() {
    ((this.expanded = !this.expanded), this.$dispatch("toggle:accordion", e));
  },
  eventHandlers: {
    "@toggle:accordion.window"() {
      const t = this.$event.detail;
      e !== t && this.expanded && (this.expanded = !1);
    },
  },
}));
