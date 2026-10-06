import { m as t } from "./module.esm.B4UCoxDo.js";
import { m as n } from "./module.esm.CR1UTuU-.js";
import { d as o, a as d } from "./charter-message.O2HqjUgi.js";
import { M as c } from "./modal-events.XNWLJeGd.js";
t.plugin(n);
t.data("charterAIModal", (a) => ({
  isOpen: !1,
  iframeLoaded: !1,
  canViewGatedContent: a,
  get iframeUrl() {
    if (!this.iframeLoaded) return "";
    const r = this.canViewGatedContent
        ? "https://interfaces.zapier.com/embed/chatbot/cmf42ig2b000lv1zruw6idcrg"
        : "https://interfaces.zapier.com/embed/chatbot/cmgxj5z12001rblh6s0r78qqk",
      i = o(d()),
      s = encodeURIComponent(i);
    return `${r}?message=${s}`;
  },
  init() {
    this.$watch("isOpen", (e) => {
      e && !this.iframeLoaded && (this.iframeLoaded = !0);
    });
  },
  eventHandlers: {
    [`@${c}.window`]() {
      const e = this.$event.detail;
      e.id === "charter-ai" && (this.isOpen = e.isOpen);
    },
  },
}));
