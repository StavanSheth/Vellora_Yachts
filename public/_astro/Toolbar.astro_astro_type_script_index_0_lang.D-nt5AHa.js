import { m as c } from "./module.esm.B4UCoxDo.js";
c.data("toolbar", ({ id: s, isElevated: r, parentContainerClass: n }) => ({
  id: s,
  parentContainerClass: n,
  parentContainer: null,
  intersectionObserver: null,
  scrollObserver: null,
  isElevated: r,
  isVisible: !1,
  isAtBottom: !1,
  init() {
    r &&
      ((this.parentContainer = this.getParentContainer()),
      this.parentContainer &&
        (this.createIntersectionObserver(), this.createScrollObserver()));
  },
  destroy() {
    (this.intersectionObserver && this.intersectionObserver.disconnect(),
      this.scrollObserver &&
        window.removeEventListener("scroll", this.scrollObserver));
  },
  createIntersectionObserver() {
    this.intersectionObserver = new IntersectionObserver(
      (e) => {
        e.forEach((i) => {
          ((this.isAtBottom = !i.isIntersecting), this.updateVisibility());
        });
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" },
    );
    const t = this.$el
      .closest(`.${this.parentContainerClass}`)
      ?.querySelector(".toolbar:not(.toolbar--sticky)");
    t && this.intersectionObserver?.observe(t);
  },
  createScrollObserver() {
    const t = () => {
      if (!this.parentContainer) return;
      const e = this.parentContainer.getBoundingClientRect(),
        i = window.scrollY + window.innerHeight,
        o = window.scrollY + e.bottom - i,
        l = 50;
      ((this.isVisible = !(o < l)), this.updateVisibility());
    };
    (t(),
      (this.scrollObserver = t),
      window.addEventListener("scroll", this.scrollObserver));
  },
  getParentContainer() {
    return this.$el.closest(`.${this.parentContainerClass}`);
  },
  updateVisibility() {
    this.isVisible = this.isAtBottom && this.isVisible;
  },
}));
