import { M as E } from "./modal-events.XNWLJeGd.js";
import { F as a, c as e } from "./analytics.DndsQryn.js";
import { s as o } from "./GA4Service.h0PwkgNc.js";
import { g as i } from "./generateEventName.BnmDzAnP.js";
const L = "FILTER_TOOLBAR:SET:TOTAL_RESULTS",
  O = "FILTER_TOOLBAR:SET:ACTIVE_FILTER",
  R = ({ id: s, dispatch: t }) => {
    (t(`${E}`, { id: `${s}-modal`, isOpen: !0 }),
      o(e),
      window.plausible && window.plausible(e));
  },
  d = ({ id: s, dispatch: t, filterApplied: T = !1 }) => {
    (t(`${E}`, { id: `${s}-modal`, isOpen: !1 }),
      T || (o(a), window.plausible && window.plausible(a)));
  },
  r = ({ id: s, dispatch: t, name: T }) => {
    t(`${i("reset", "filter", `${s}-${T}`)}`);
  },
  c = ({ id: s, dispatch: t, filterName: T }) => {
    t(`${s}:${O}`, { filterName: T });
  },
  m = ({ id: s, totalResults: t, dispatch: T }) => {
    T(`${s}:${L}`, { totalResults: t });
  };
export { O as F, r as a, d as b, L as c, m as d, c as e, R as f };
