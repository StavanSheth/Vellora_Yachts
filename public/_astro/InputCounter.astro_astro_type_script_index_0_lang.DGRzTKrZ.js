import { m as o } from "./module.esm.B4UCoxDo.js";
import { g as e } from "./generateEventName.BnmDzAnP.js";
o.data("counter", ({ fieldName: n, minCount: s = 0, maxCount: i = 100 }) => ({
  minCount: s,
  maxCount: i,
  count: 0,
  fieldName: n,
  eventHandlers: {
    [`@${e("set", "counter", n)}.window`](t) {
      this.count = t.detail;
    },
    [`@${e("reset", "counter", n)}.window`]() {
      this.count = 0;
    },
  },
  increase() {
    if (this.count === this.maxCount) return;
    const t = this.count + 1;
    this.$dispatch(e("set", "counter", this.fieldName), t);
  },
  decrease() {
    if (this.count === this.minCount) return;
    const t = this.count - 1;
    this.$dispatch(e("set", "counter", this.fieldName), t);
  },
}));
