import { m as e } from "./module.esm.B4UCoxDo.js";
import {
  g as i,
  C as a,
  a as o,
  c as r,
  b as l,
} from "./charter-message.O2HqjUgi.js";
import { M as n, C as t } from "./modal-events.XNWLJeGd.js";
import { s } from "./GA4Service.h0PwkgNc.js";
e.data("ToastCharterAI", () => ({
  isVisible: !1,
  toastDelay: a.TOAST_DELAY,
  minViews: a.MIN_VIEWS,
  init() {
    l() < this.minViews || setTimeout(() => this.showToast(), this.toastDelay);
  },
  showToast() {
    ((this.isVisible = !0),
      s("AI_open_toast", { pagePath: window.location.pathname }),
      window.plausible && window.plausible("AI_open_toast"));
  },
  hideToast() {
    ((this.isVisible = !1), r());
  },
  openCharterAI() {
    (this.hideToast(),
      this.$dispatch(n, { id: "charter-ai", isOpen: !0 }),
      s(t, { pagePath: window.location.pathname, pageModule: "toast" }),
      window.plausible && window.plausible(t));
  },
  getDynamicMessage: () => i(o()),
}));
