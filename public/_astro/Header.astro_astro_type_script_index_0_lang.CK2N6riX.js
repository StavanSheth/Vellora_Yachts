import { m as f } from "./module.esm.CR1UTuU-.js";
import { m as o } from "./module.esm.B4UCoxDo.js";
import { a, H as n, b as h, c as w, d as S } from "./header-events.4RNKGvwJ.js";
import { s as l } from "./GA4Service.h0PwkgNc.js";
import { M as d, C as c } from "./modal-events.XNWLJeGd.js";
import { a as p } from "./analytics.DndsQryn.js";
o.plugin(f);
const I = new URLSearchParams(window.location.search);
o.data(
  "headerNew",
  ({
    watchHeroSection: m,
    isCharterItineraryIntegrationPage: u,
    forceWhiteHeader: g,
  }) => ({
    isOpen: !1,
    isHidden: !1,
    isFromProposal: I.get("source") === "proposal",
    hasScrolled: !1,
    hasScrolledUp: !1,
    hasScrolledDown: !1,
    isUserButtonHovering: !1,
    prevScrollPos: 0,
    isHeroSectionVisible: !1,
    raf: null,
    isCharterItineraryIntegrationPage: u,
    charterItineraryIntegrationListener: null,
    activeItem: null,
    btsTheme: !1,
    hoverIntentTimer: null,
    throttledHandleCharterItineraryMessage: null,
    init() {
      (this.rAFHeaderScroll(),
        window.addEventListener("scroll", () => this.rAFHeaderScroll()),
        window.addEventListener(S, (e) => {
          const t = e.detail?.hidden;
          this.isHidden = t;
        }),
        m && this.watchHeroSectionVisibility(),
        this.isCharterItineraryIntegrationPage &&
          this.initCharterItineraryIntegrationListener(),
        window.addEventListener("pagehide", this.cleanup));
    },
    headerClasses() {
      return {
        "header--is-open": this.isOpen,
        "header--has-scrolled": this.hasScrolled,
        "header--has-scrolled-up": this.hasScrolledUp,
        "header--has-scrolled-down": this.hasScrolledDown,
        "header--has-active-item": this.activeItem,
        "header--bts-theme": this.btsTheme,
        "header--has-passed-hero": !this.isHeroSectionVisible,
        "header--is-hidden": this.isHidden,
      };
    },
    toggleNavigation() {
      ((this.isOpen = !this.isOpen),
        (this.activeItem = null),
        this.isOpen && (this.btsTheme = !1),
        this.$dispatch(`${h}`, this.isOpen));
    },
    handleScroll() {
      const t = window.scrollY;
      ((this.hasScrolled = t > 50),
        this.$dispatch(`${w}`, this.hasScrolled),
        this.prevScrollPos > t
          ? ((this.hasScrolledUp = t > 50), (this.hasScrolledDown = !1))
          : ((this.hasScrolledUp = !1), (this.hasScrolledDown = t > 50)),
        this.$dispatch(`${a}`, this.hasScrolledUp),
        this.$dispatch(`${n}`, this.hasScrolledDown),
        (this.prevScrollPos = t),
        (this.raf = null));
    },
    rAFHeaderScroll() {
      this.raf || (this.raf = requestAnimationFrame(() => this.handleScroll()));
    },
    setScrollUp() {
      this.hasScrolled &&
        ((this.hasScrolledUp = !0),
        (this.hasScrolledDown = !1),
        this.$dispatch(`${a}`, this.hasScrolledUp),
        this.$dispatch(`${n}`, this.hasScrolledDown));
    },
    openSearch() {
      (this.$dispatch(`${d}`, { id: "search", isOpen: !0 }),
        l(p),
        window.plausible && window.plausible(p));
    },
    openCharterAI() {
      (this.$dispatch(`${d}`, { id: "charter-ai", isOpen: !0 }),
        l(c, { pagePath: window.location.pathname, pageModule: "header" }),
        window.plausible && window.plausible(c));
    },
    handleNavigationItemClick(e, t) {
      if (!t || window.innerWidth > 1024) return;
      (e.preventDefault(), e.stopPropagation());
      const r = e.target,
        i = r.parentElement,
        s = r.parentElement?.getAttribute("data-name");
      (i.getAttribute("data-bts") === "true" && (this.btsTheme = !0),
        (this.activeItem = s));
    },
    onNavigationMouseLeave() {
      window.innerWidth < 1024 ||
        ((this.activeItem = null), (this.btsTheme = !1));
    },
    onNavigationBackClick() {
      ((this.activeItem = null), (this.btsTheme = !1));
    },
    startNavigationHoverIntentTimer(e) {
      if (window.innerWidth > 1024) {
        this.hoverIntentTimer && this.clearNavigationHoverIntentTimer();
        const t = e.currentTarget;
        if (!t) return;
        this.hoverIntentTimer = setTimeout(() => {
          (t.getAttribute("data-bts") === "true"
            ? (this.btsTheme = !0)
            : (this.btsTheme = !1),
            (this.activeItem = t.getAttribute("data-name")));
        }, 150);
      }
    },
    clearNavigationHoverIntentTimer() {
      this.hoverIntentTimer && clearTimeout(this.hoverIntentTimer);
    },
    watchHeroSectionVisibility() {
      if (g) {
        this.isHeroSectionVisible = !0;
        return;
      }
      const e = document.querySelectorAll(".hero");
      if (!e.length) return;
      const t = e[0];
      new IntersectionObserver(
        (i) => {
          i.forEach((s) => {
            s.isIntersecting
              ? (this.isHeroSectionVisible = !0)
              : (this.isHeroSectionVisible = !1);
          });
        },
        { threshold: 0.05 },
      ).observe(t);
    },
    eventHandlers: {
      [`@${h}.window`]() {
        const e = this.$event.detail;
        return (this.isOpen = e);
      },
    },
    handleCharterItineraryIntegrationMessage(e) {
      if (
        !/^https?:\/\/([a-zA-Z0-9-]+\.)?charteritinerary\.com$/.test(
          e.origin,
        ) ||
        !e.data ||
        !e.data ||
        typeof e.data != "object"
      )
        return;
      const { type: r, direction: i } = e.data;
      !r ||
        !i ||
        (r === "scrollDirection" &&
          ((this.hasScrolledUp = i === "up"),
          (this.hasScrolledDown = i === "down"),
          this.$dispatch(`${a}`, this.hasScrolledUp),
          this.$dispatch(`${n}`, this.hasScrolledDown)));
    },
    initCharterItineraryIntegrationListener() {
      ((this.throttledHandleCharterItineraryMessage = o.throttle((e) => {
        this.handleCharterItineraryIntegrationMessage(e);
      }, 500)),
        (this.charterItineraryIntegrationListener = (e) => {
          this.throttledHandleCharterItineraryMessage(e);
        }),
        window.addEventListener(
          "message",
          this.charterItineraryIntegrationListener,
        ));
    },
    cleanup() {
      (window.removeEventListener(
        "message",
        this.charterItineraryIntegrationListener,
      ),
        window.removeEventListener("pagehide", this.cleanup));
    },
  }),
);
