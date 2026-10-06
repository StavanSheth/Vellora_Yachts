import { m as s } from "./module.esm.B4UCoxDo.js";
import { M as n } from "./modal-events.XNWLJeGd.js";
function o() {
  const t = document.createElement("div");
  (document.body.appendChild(t), (t.style.overflow = "scroll"));
  const e = document.createElement("div");
  t.appendChild(e);
  const i = t.offsetWidth - e.offsetWidth;
  return (document.body.removeChild(t), i);
}
function d(t) {
  const e = document.documentElement,
    i = t ? o() : 0;
  e.style.paddingRight = i ? `${i}px` : "";
}
s.data("modal", (t) => ({
  id: t,
  isOpen: !1,
  theme: "brand",
  style: "generic",
  type: "",
  eventHandlers: {
    [`@${n}.window`]() {
      const e = this.$event.detail;
      e.id === this.id &&
        ((this.theme = e.theme ?? "brand"),
        (this.style = e.style ?? "generic"),
        (this.type = e.type ?? ""),
        (this.isOpen = e.isOpen),
        d(e.isOpen));
    },
  },
  triggerClose() {
    ((this.isOpen = !1),
      this.$dispatch(`${n}`, {
        id: this.id,
        isOpen: this.isOpen,
        theme: this.theme,
        style: this.style,
      }));
  },
}));
