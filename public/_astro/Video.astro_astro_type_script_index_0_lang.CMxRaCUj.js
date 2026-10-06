import { b as l } from "./header-events.4RNKGvwJ.js";
import { m as i } from "./module.esm.B4UCoxDo.js";
const r = 1024;
i.data("videoComponent", (o, a, d, n) => ({
  loaded: !1,
  playRequested: !1,
  webmSrc: a,
  mp4Src: d,
  posterSrc: n,
  isPlaying: !1,
  isNavOpen: !1,
  resizeObserver: null,
  init() {
    (this.setupWatchers(), this.setupResizeObserver());
  },
  destroy() {
    this.resizeObserver && this.resizeObserver.disconnect();
  },
  setupWatchers() {
    this.$watch("activeItem", (e) => {
      const s = this.$refs.videoElement;
      e === o ? this.tryPlay(s) : this.handlePause(s);
    });
  },
  setupResizeObserver() {
    ((this.resizeObserver = new ResizeObserver(
      i.debounce(() => {
        if (this.isNavOpen && window.innerWidth >= r) {
          const e = this.$refs.videoElement;
          this.loaded || this.loadVideo(e);
        }
      }, 200),
    )),
      this.resizeObserver.observe(document.body));
  },
  handlePause(e) {
    this.isPlaying && (e.pause(), (this.isPlaying = !1));
  },
  loadVideo(e) {
    const s = e.querySelector('source[type="video/webm"]'),
      t = e.querySelector('source[type="video/mp4"]');
    (s && (s.src = this.webmSrc),
      t && (t.src = this.mp4Src),
      e.load(),
      e.addEventListener(
        "canplay",
        () => {
          this.tryPlay(e);
        },
        { once: !0 },
      ),
      e.addEventListener(
        "loadeddata",
        () => {
          this.loaded = !0;
        },
        { once: !0 },
      ));
  },
  loadPoster(e) {
    e.poster = this.posterSrc;
  },
  async tryPlay(e) {
    try {
      (await e.play(), (this.isPlaying = !0));
    } catch (s) {
      console.error("Play request failed:", s);
    }
  },
  eventHandlers: {
    [`@${l}.window`](e) {
      const s = e.detail;
      ((this.isNavOpen = s),
        s &&
          window.innerWidth >= r &&
          !this.loaded &&
          (this.loadVideo(this.$refs.videoElement),
          this.loadPoster(this.$refs.videoElement)));
    },
  },
}));
