import { C as a } from "./analytics.DndsQryn.js";
import { y as o } from "./keen-slider.es.DpJYeJpL.js";
const c = () => ({
  observer: null,
  viewportObserver: null,
  hasInteracted: !1,
  hasInteractedToleranceTimeout: null,
  carousel: null,
  focused: !1,
  hasIntersected: !1,
  slidesTotal: 0,
  timeout: null,
  currentSlide: 0,
  trackOffset: 0,
  trackStepWidth: 0,
  imagesLoaded: !1,
  mediaHover: null,
  sliderOptions: {
    idleTime: 2e3,
    thumbWidth: 64,
    activeSlideClass: "",
    trackClass: "",
    slideClass: "",
    loadImageOnIntersection: !0,
  },
  get thumbPosition() {
    if (this.slidesTotal <= 1) return 0;
    const t = this.$el?.querySelector(`.${this.sliderOptions.trackClass}`),
      s = t?.clientWidth ? t.clientWidth : window.innerWidth || 375,
      i = Math.max(0, s - this.sliderOptions.thumbWidth),
      e = (this.currentSlide / (this.slidesTotal - 1)) * i,
      r = Math.max(0, Math.min(i, e));
    return s > 0 ? (r / s) * 100 : 0;
  },
  initializeCarousel(t) {
    const { itemsLength: s, mediaHover: i } = t;
    ((this.slidesTotal = Number(s)),
      (this.sliderOptions = { ...this.sliderOptions, ...t }),
      (this.mediaHover = i ? { ...i, format: i.format || "image" } : null),
      this.sliderOptions.loadImageOnIntersection &&
        this.createViewportObserver(),
      this.$nextTick(() => {
        this.initCarousel();
      }));
  },
  createViewportObserver() {
    this.$el &&
      ((this.viewportObserver = new IntersectionObserver(
        (t) => {
          t[0]?.isIntersecting &&
            !this.imagesLoaded &&
            ((this.imagesLoaded = !0),
            this.viewportObserver?.disconnect(),
            (this.viewportObserver = null));
        },
        { rootMargin: "100px", threshold: 0.1 },
      )),
      this.viewportObserver.observe(this.$el));
  },
  destroy() {
    (this.observer?.disconnect(),
      this.viewportObserver?.disconnect(),
      this.carousel?.destroy());
  },
  initCarousel(t = 0) {
    if (this.slidesTotal <= 1) return;
    if (t > 5) {
      console.warn("Failed to initialize carousel after 5 attempts");
      return;
    }
    const s = this.$refs.carousel;
    if (!s) {
      console.warn("Carousel element not found, retrying...");
      const e = setTimeout(
        () => (clearTimeout(e), this.initCarousel(t + 1)),
        100,
      );
      return;
    }
    if (s.querySelectorAll(`.${this.sliderOptions.slideClass}`).length === 0) {
      console.warn("No carousel slides found, retrying...");
      const e = setTimeout(
        () => (clearTimeout(e), this.initCarousel(t + 1)),
        100,
      );
      return;
    }
    try {
      this.carousel = new o(s, {
        selector: `.${this.sliderOptions.slideClass}`,
        loop: this.slidesTotal > 1,
        drag: this.slidesTotal > 1,
        slides: { origin: "center", perView: 1 },
        defaultAnimation: { duration: 500, easing: (e) => 1 - (1 - e) ** 4 },
        created: (e) => {
          e.track &&
            e.track.details &&
            (this.addActiveClass(
              e.slides,
              e.track.details.rel,
              this.sliderOptions.activeSlideClass,
            ),
            (this.currentSlide = e.track.details.rel));
        },
        dragStarted: () => {
          this.setHasInteracted();
        },
        slideChanged: (e) => {
          e.track &&
            e.track.details &&
            (this.resetActiveClass(
              e.slides,
              this.sliderOptions.activeSlideClass,
            ),
            this.addActiveClass(
              e.slides,
              e.track.details.rel,
              this.sliderOptions.activeSlideClass,
            ),
            (this.currentSlide = e.track.details.rel));
        },
      });
    } catch (e) {
      console.error("Error initializing carousel:", e);
    }
  },
  setHasInteracted() {
    ((this.hasInteracted = !0),
      this.hasInteractedToleranceTimeout &&
        (clearTimeout(this.hasInteractedToleranceTimeout),
        (this.hasInteractedToleranceTimeout = null)),
      this.isTouchDevice() &&
        (this.timeout && clearTimeout(this.timeout),
        (this.timeout = setTimeout(() => {
          this.hasInteracted = !1;
        }, this.sliderOptions.idleTime))));
  },
  removeHasInteracted() {
    ((this.hasInteracted = !1),
      (this.hasInteractedToleranceTimeout = setTimeout(() => {
        (this.hasInteractedToleranceTimeout &&
          (clearTimeout(this.hasInteractedToleranceTimeout),
          (this.hasInteractedToleranceTimeout = null)),
          this.currentSlide > 0 && this.carousel?.moveToIdx(0));
      }, 1500)));
  },
  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },
  goToSlide(t) {
    this.carousel &&
      typeof this.carousel[t] == "function" &&
      (this.carousel[t](),
      this.setHasInteracted(),
      window.plausible && window.plausible(a));
  },
  addActiveClass(t, s, i) {
    t[s]?.classList.add(i);
  },
  resetActiveClass(t, s) {
    t.forEach((i) => {
      i.classList.remove(s);
    });
  },
});
export { c as y };
