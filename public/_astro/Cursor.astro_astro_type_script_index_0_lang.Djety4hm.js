import { m as o } from "./module.esm.B4UCoxDo.js";
import { l as r, d as n } from "./cursor.DsajEiNB.js";
o.data("cursor", () => ({
  scrollEvents: { timeout: null, delay: 200 },
  cursorOptions: { text: "", size: "", isActive: !1, isClicked: !1, icon: "" },
  isScrolling: !1,
  raf: null,
  mouse: { x: 0.5, y: 0.5 },
  cursor: { x: 0.5, y: 0.5 },
  speed: 0.4,
  currentSectionColor: null,
  init() {
    (this.addCursorListener(),
      (this.scrollEvents.timeout = setTimeout(() => {
        this.addScrollListener();
      }, this.scrollEvents.delay)),
      this.addScrollEndListener(),
      this.addSectionColorListener());
  },
  updateSectionColor(e) {
    const s = e.target;
    if (!s) return;
    let t = s.closest(".section--has-theme");
    if (t) {
      const i = window.getComputedStyle(t);
      this.currentSectionColor = i
        .getPropertyValue("--section-cursor-color")
        .trim();
    } else this.currentSectionColor = null;
    this.$refs.cursor.style.setProperty(
      "--current-cursor-color",
      this.currentSectionColor || "var(--yco-surface-accent-color)",
    );
  },
  addSectionColorListener() {
    document.addEventListener("mousemove", (e) => this.updateSectionColor(e));
  },
  destroy() {
    this.scrollEvents.timeout && clearTimeout(this.scrollEvents.timeout);
  },
  setCursorOptions() {
    this.cursorOptions = this.$event.detail;
  },
  setMouseCoordinates() {
    if (
      ((this.cursor.x = r(this.cursor.x, this.mouse.x, this.speed)),
      (this.cursor.y = r(this.cursor.y, this.mouse.y, this.speed)),
      this.$refs.cursor.style.setProperty("--cursor-x", String(this.cursor.x)),
      this.$refs.cursor.style.setProperty("--cursor-y", String(this.cursor.y)),
      n(this.mouse.x, this.mouse.y, this.cursor.x, this.cursor.y) < 0.001)
    ) {
      (this.raf && cancelAnimationFrame(this.raf), (this.raf = null));
      return;
    }
    this.raf = requestAnimationFrame(() => this.setMouseCoordinates());
  },
  onMouseMove(e) {
    ((this.mouse.x = e.clientX / window.innerWidth),
      (this.mouse.y = e.clientY / window.innerHeight),
      this.raf ||
        (this.raf = requestAnimationFrame(() => this.setMouseCoordinates())));
  },
  addCursorListener() {
    (window.addEventListener("mousemove", (e) => this.onMouseMove(e)),
      (this.raf = requestAnimationFrame(() => this.setMouseCoordinates())));
  },
  removeCursorListener() {
    (window.removeEventListener("mousemove", (e) => this.onMouseMove(e)),
      this.raf && cancelAnimationFrame(this.raf));
  },
  addScrollListener() {
    window.addEventListener("scroll", () => {
      ((this.isScrolling = !0),
        this.$dispatch("cursor:scrolling", this.isScrolling));
    });
  },
  removeScrollListener() {
    window.removeEventListener("scroll", () => {
      ((this.isScrolling = !1),
        this.$dispatch("cursor:scrolling", this.isScrolling));
    });
  },
  addScrollEndListener() {
    let e;
    document.addEventListener("scroll", () => {
      (clearTimeout(e),
        (e = setTimeout(() => {
          ((this.isScrolling = !1),
            this.$dispatch("cursor:scrolling", this.isScrolling));
        }, 300)));
    });
  },
}));
