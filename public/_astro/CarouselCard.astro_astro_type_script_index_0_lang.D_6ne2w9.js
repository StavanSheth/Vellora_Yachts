import { R as o } from "./carousel-events.DcNtLTnR.js";
import { m as l } from "./module.esm.B4UCoxDo.js";
import { y as n } from "./keen-slider.es.DpJYeJpL.js";
const s = { idleTime: 2e3, activeClass: "carousel-card__slide--active" };
l.data("carousel", (r, c, a, d) => ({
  observer: null,
  hasInteracted: !1,
  carousel: null,
  direction: c === "rtl" ? 1 : -1,
  focused: !1,
  hasIntersected: !1,
  slidesTotal: Number(r),
  id: d,
  animation: { duration: 15e3 * Number(r), easing: (e) => e },
  timeout: null,
  init() {
    (this.createObserver(),
      this.initCarousel(),
      window.addEventListener(o, (e) => {
        e instanceof CustomEvent &&
          parseInt(e.detail.id) === parseInt(this.id) &&
          (this.destroy(), this.initCarousel());
      }));
  },
  destroy() {
    (console.log("Destroying carousel", this.id),
      this.observer?.disconnect(),
      this.carousel?.destroy(),
      window.removeEventListener(o, (e) => {}));
  },
  initCarousel() {
    const e = this.createOptimisedConfig(Number(r));
    ((this.carousel = new n(this.$refs.carousel, {
      selector: ".carousel-card__slide",
      ...e,
      defaultAnimation: { duration: 500, easing: (t) => 1 - (1 - t) ** 4 },
      created: (t) => {
        this.addActiveClass(t.slides, t.track.details.rel, s.activeClass);
      },
      updated: (t) => {
        a && this.playTickerSlider(t);
      },
      dragStarted: () => {
        this.setHasInteracted();
      },
      animationEnded: (t) => {
        a && this.resetTickerSlider(t);
      },
      slideChanged: (t) => {
        (this.resetActiveClass(t.slides, s.activeClass),
          this.addActiveClass(t.slides, t.track.details.rel, s.activeClass));
      },
    })),
      a &&
        (this.$watch("hasInteracted", (t) => {
          t
            ? this.pauseTickerSlider(this.carousel)
            : this.hasIntersected && this.playTickerSlider(this.carousel);
        }),
        this.$watch("hasIntersected", (t) => {
          t
            ? this.playTickerSlider(this.carousel)
            : this.pauseTickerSlider(this.carousel);
        })));
  },
  createOptimisedConfig(e) {
    const t = window.matchMedia("(max-width: 767px)").matches,
      i = { origin: "center", perView: "auto" };
    return (
      Number(e) === 2 && (i.origin = "auto"),
      {
        loop: Number(e) >= 3 || (e == 2 && t),
        drag: Number(e) >= 3 || (e == 2 && t),
        slides: i,
        centered: Number(e) === 1,
        breakpoints: {
          "(max-width: 767px)": { loop: Number(e) == 2 || Number(e) >= 3 },
          "(min-width: 768px)": { loop: Number(e) >= 3 || Number(e) == 2 },
        },
      }
    );
  },
  setHasInteracted() {
    ((this.hasInteracted = !0),
      this.isTouchDevice() &&
        (this.timeout && clearTimeout(this.timeout),
        (this.timeout = setTimeout(() => {
          this.hasInteracted = !1;
        }, s.idleTime))));
  },
  removeHasInteracted() {
    this.hasInteracted = !1;
  },
  playTickerSlider(e) {
    e?.moveToIdx(
      e.track.details.abs + this.slidesTotal * this.direction,
      !0,
      this.animation,
    );
  },
  pauseTickerSlider(e) {
    e?.animator.stop();
  },
  resetTickerSlider(e) {
    this.hasIntersected &&
      (this.hasInteracted
        ? this.pauseTickerSlider(e)
        : this.playTickerSlider(e));
  },
  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },
  goToSlide(e) {
    (this.carousel && this.carousel[e](), this.setHasInteracted());
  },
  addActiveClass(e, t, i) {
    e[t].classList.add(i);
  },
  resetActiveClass(e, t) {
    e.forEach((i) => {
      i.classList.remove(t);
    });
  },
  eventKeyboardFocus() {
    this.focused = !0;
  },
  eventKeyboardBlur() {
    this.focused = !1;
  },
  eventKeydown(e) {
    if (this.focused)
      switch (e.key) {
        case "Left":
        case "ArrowLeft":
          this.goToSlide("prev");
          break;
        case "Right":
        case "ArrowRight":
          this.goToSlide("next");
          break;
      }
  },
  createObserver() {
    let e = { root: null, rootMargin: "0px", threshold: 0 };
    ((this.observer = new IntersectionObserver((t) => {
      t.forEach(({ isIntersecting: i }) => (this.hasIntersected = i));
    }, e)),
      this.observer && this.observer.observe(this.$el));
  },
}));
