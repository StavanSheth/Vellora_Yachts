import { m as l } from "./module.esm.B4UCoxDo.js";
l.data("Toast", () => ({
  counter: 0,
  list: [],
  eventHandlers: {
    "@createToast.window"({ detail: t }) {
      const {
          heading: e,
          message: i,
          type: o = "info",
          time: s = null,
          cta: a,
          dismissCopy: n,
        } = t,
        d = this.list.length;
      (this.list.push({
        id: this.counter++,
        heading: e,
        message: i,
        type: o,
        visible: !0,
        time: s,
        cta: a,
        dismissCopy: n,
      }),
        s &&
          typeof s == "number" &&
          setTimeout(() => {
            this.destroyToast(d);
          }, s));
    },
  },
  destroyToast(t) {
    this.list[t].visible = !1;
  },
  handleAction({ id: t, eventId: e }) {
    (this.$dispatch(e), this.destroyToast(t));
  },
}));
