import { b as d } from "./analytics.DndsQryn.js";
import { s as t } from "./GA4Service.h0PwkgNc.js";
const r = (s, o) => d[o]?.[s],
  b = (s, o, a = {}) => {
    const e = r(s, o.context),
      n = { name: o.name, id: o.id, ...a };
    (t(e, n), window.plausible && window.plausible(e, { props: n }));
  },
  l = (s, o = {}) => {
    (t(s, o), window.plausible && window.plausible(s, { props: o }));
  };
export { b as a, l as s };
