import { m as n } from "./module.esm.B4UCoxDo.js";
import { g as e } from "./generateEventName.BnmDzAnP.js";
n.data("multiCheckbox", ({ fieldName: t, fieldType: i }) => ({
  inputValue: [],
  init() {
    this.$watch("inputValue", () => {
      this.triggerChange();
    });
  },
  eventHandlers: {
    [`@${e("set", i, t)}.window`](a) {
      this.inputValue = a.detail;
    },
    [`@${e("reset", i, t)}.window`]() {
      this.inputValue = [];
    },
  },
  triggerChange() {
    this.$dispatch(e("set", i, t), this.inputValue);
  },
}));
