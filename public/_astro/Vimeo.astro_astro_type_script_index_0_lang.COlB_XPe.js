import { m as r } from "./module.esm.B4UCoxDo.js";
r.data("vimeo", (e) => ({
  observer: null,
  renderedContent: null,
  $el: null,
  loadContent() {
    this.renderedContent || (this.renderedContent = e);
  },
  init() {
    this.createObserver();
  },
  createObserver() {
    this.$el &&
      ((this.observer = new IntersectionObserver((t) => {
        t[0]?.isIntersecting &&
          (this.loadContent(), this.observer?.disconnect());
      })),
      this.observer.observe(this.$el));
  },
  destroy() {
    this.observer?.disconnect();
  },
}));
