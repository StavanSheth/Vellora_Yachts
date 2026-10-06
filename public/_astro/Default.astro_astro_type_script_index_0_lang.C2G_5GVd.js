import { m as e } from "./module.esm.B4UCoxDo.js";
import { G as a, M as t } from "./modal-events.XNWLJeGd.js";
import { s as d } from "./GA4Service.h0PwkgNc.js";
const s = (r, i, o = a) => {
  try {
    if (!i) throw new Error("Enquiry payload is required");
    (r(`${t}`, { id: o, isOpen: !0 }),
      d(o, { pagePath: window.location.pathname, pageModule: i }),
      window.plausible && window.plausible(o));
  } catch (n) {
    console.log(n);
  }
};
document.addEventListener("alpine:init", () => {
  e.magic("onEnquire", () => s);
});
