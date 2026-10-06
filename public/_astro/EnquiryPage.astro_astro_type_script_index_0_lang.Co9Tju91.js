import { m as i } from "./module.esm.B4UCoxDo.js";
import { s as t } from "./GA4Service.h0PwkgNc.js";
import { P as m } from "./analytics.DndsQryn.js";
import { s as o } from "./storage.DmgCIzZT.js";
i.data("enquiry", (e) => ({
  init() {
    o(["utm_source", "utm_medium", "utm_campaign"]);
  },
  isMobile() {
    return window.innerWidth <= 768;
  },
  sendMobileEvent() {
    this.isMobile() && t(m, { tel: e });
  },
}));
