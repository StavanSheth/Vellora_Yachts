import { M as o, G as t } from "./modal-events.XNWLJeGd.js";
import { s as n } from "./GA4Service.h0PwkgNc.js";
import { m as s } from "./module.esm.B4UCoxDo.js";
s.data("stickyEnquire", () => ({
  shouldBeVisible: !1,
  isOverRestrictedArea: !1,
  init() {
    this.initScrollListener();
  },
  destroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  initScrollListener() {
    (window.addEventListener("scroll", () => this.handleScroll()),
      this.handleScroll());
  },
  handleScroll() {
    const e = document.querySelector(".footer");
    if (e && this.isFooterInView(e)) {
      this.shouldBeVisible = !1;
      return;
    }
    this.shouldBeVisible = window.scrollY >= window.innerHeight;
  },
  isFooterInView(e) {
    const i = e.getBoundingClientRect();
    return i.top < window.innerHeight + 100 && i.bottom > 0;
  },
  onEnquire() {
    (this.$dispatch(`${o}`, { id: t, isOpen: !0 }),
      n("Mobile_sticky_enquiry_open", {
        pagePath: window.location.pathname,
        pageModule: "Mobile_sticky_enquiry_open",
      }),
      window.plausible && window.plausible("Mobile_sticky_enquiry_open"));
  },
}));
