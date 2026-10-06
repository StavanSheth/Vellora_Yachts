import { m as x } from "./module.esm.B4UCoxDo.js";
import { g as s } from "./generateEventName.BnmDzAnP.js";
const u = (a) => /^\d*$/.test(a);
x.data(
  "range",
  ({
    minInputName: a,
    maxInputName: r,
    min: i = 0,
    max: n = 100,
    step: m = 1,
  }) => ({
    minValue: i,
    maxValue: n,
    minInputName: a,
    maxInputName: r,
    min: i,
    max: n,
    step: m,
    showMaxInputSuffix: !0,
    eventHandlers: {
      [`@${s("set", "range", a)}.window`](t) {
        this.minValue = t.detail;
      },
      [`@${s("set", "range", r)}.window`](t) {
        this.maxValue = t.detail;
      },
      [`@${s("reset", "range", a)}.window`]() {
        this.minValue = this.min;
      },
      [`@${s("reset", "range", r)}.window`]() {
        this.maxValue = this.max;
      },
    },
    onMinInputEvent(t) {
      if (Number(t) % this.step === 0) {
        this.minTrigger(t);
        return;
      }
      const h = Math.round(Number(t) / this.step) * this.step;
      this.minTrigger(h);
    },
    onMaxInputEvent(t) {
      if (Number(t) % this.step === 0) {
        this.maxTrigger(t);
        return;
      }
      const h = Math.round(Number(t) / this.step) * this.step;
      this.maxTrigger(h);
    },
    minTrigger(t) {
      const e = Math.min(Number(t), this.maxValue - this.step);
      (this.setMinValue(e), this.validate());
    },
    maxTrigger(t) {
      const e = Math.max(Number(t), this.minValue + this.step);
      (this.setMaxValue(e), this.setMaxSuffixVisibility(e), this.validate());
    },
    validate() {
      (u(this.minValue)
        ? (this.minValue > this.max && this.setMinValue(this.max - this.step),
          this.minValue < this.min && this.setMinValue(this.step))
        : this.setMinValue(this.min),
        u(this.maxValue)
          ? (this.maxValue > this.max && this.setMaxValue(this.max),
            this.maxValue < this.min && this.setMaxValue(this.min + this.step))
          : this.setMaxValue(this.max));
    },
    get minThumb() {
      return ((this.minValue - i) * 100) / (n - i);
    },
    get maxThumb() {
      return 100 - ((this.maxValue - i) * 100) / (n - i);
    },
    getThumbText(t, e, h) {
      if (typeof t == "number")
        switch (!0) {
          case t === e:
            return h;
          case t < 1e3:
            return `${t.toFixed(0)}`;
          case t >= 1e6:
            return `${(t / 1e6).toFixed(0)}m`;
          default:
            return `${(t / 1e3).toFixed(0)}k`;
        }
    },
    setMinValue(t) {
      this.$dispatch(s("set", "range", this.minInputName), t);
    },
    setMaxValue(t) {
      this.$dispatch(s("set", "range", this.maxInputName), t);
    },
    setMaxSuffixVisibility(t) {
      this.showMaxInputSuffix = t === this.max;
    },
  }),
);
