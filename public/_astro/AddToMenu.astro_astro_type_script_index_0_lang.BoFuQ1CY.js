import "./lz-string.BYBRaMBl.js";
import "./format-price.BXVYhA84.js";
import "./dayjs.min.D1pIAJdy.js";
import { g as s } from "./image.BeqL_TKl.js";
import { M as a, L as i } from "./modal-events.XNWLJeGd.js";
import { S as n } from "./ScrollSmoother.CpnRkhuN.js";
import "./_commonjsHelpers.gnU0ypJ3.js";
document.addEventListener("alpine:init", () => {
  const t = window.Alpine;
  t &&
    t.data("addToMenu", () => ({
      isOpen: !1,
      showCreateInput: !1,
      saveItem: null,
      smoother: null,
      eventListeners: {
        "@openAddToMenu.window"(e) {
          ((this.saveItem = e.detail.item),
            (this.isOpen = !0),
            (this.smoother = n.get() ?? null));
        },
      },
      closeMenu() {
        ((this.isOpen = !1),
          (this.showCreateInput = !1),
          setTimeout(() => {
            this.saveItem = null;
          }, 600));
      },
      openCreateBoard() {
        if (!t.store("auth").isLoggedIn) {
          (this.closeMenu(),
            this.$dispatch(a, { id: i, isOpen: !0, style: "subtle" }));
          return;
        }
        ((this.showCreateInput = !0),
          this.$nextTick(() => {
            document.querySelector(".create-board-input input")?.focus();
          }));
      },
      async handleCreateBoard(e) {
        e.trim() &&
          (await t.store("moodboard").createBoard(e),
          (this.showCreateInput = !1));
      },
      async addItem(e, o) {
        await t.store("moodboard").addItemToBoard(e, o);
      },
      async removeItem(e, o) {
        (await t.store("moodboard").removeItemFromBoard(e, o),
          this.closeMenu());
      },
      getBoardImageUrl(e) {
        if (!e?.items?.[0]?.source)
          return "https://cdn-image.y.co/upload/f_auto,q_70,c_fill,ar_3:2,w_120/v1705592469/placeholder-yacht_h3ehgj.jpg";
        const o = e.items.filter((r) => r?.source);
        return s(o[o.length - 1]?.source ?? "", { ar: "3:2" }, 120);
      },
    }));
});
