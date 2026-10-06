import "./client.C3G48Cdd.js";
import { s } from "./auth.xsl0E0Mr.js";
import { M as a, L as i } from "./modal-events.XNWLJeGd.js";
import { g as n } from "./helpers.TKXE-3NQ.js";
import "./format-price.BXVYhA84.js";
import "./dayjs.min.D1pIAJdy.js";
import { L as d, J as m } from "./constants.CX-DaRJf.js";
import { s as r } from "./event-helpers.kQt6IrIG.js";
import "./_commonjsHelpers.gnU0ypJ3.js";
import "./lz-string.BYBRaMBl.js";
import "./analytics.DndsQryn.js";
import "./GA4Service.h0PwkgNc.js";
document.addEventListener("alpine:init", () => {
  const t = window.Alpine;
  t &&
    t.data("authForm", () => ({
      email: "",
      loading: !1,
      message: "",
      state: "idle",
      modalType: "",
      configMap: { join: m, login: d },
      get config() {
        return this.configMap[this.modalType] || this.configMap.login;
      },
      handleModalToggle(e) {
        if (e.id !== i || !e.isOpen) return;
        this.modalType = e.type || "";
        const o = t.store("auth").isLoggedIn;
        r(o ? "moodboard_join_requested" : "moodboard_login_requested", {
          authenticated: o,
        });
      },
      async onJoin() {
        const e = n(window.location.pathname);
        try {
          (await t.store("moodboard").joinBoard(e),
            this.$dispatch(`${a}`, {
              id: i,
              isOpen: !1,
              style: "subtle",
              type: "join",
            }));
        } catch (o) {
          console.error("Error joining board:", o);
        }
      },
      async sendMagicLink(e) {
        ((this.loading = !0), (this.message = ""), (this.state = "idle"));
        try {
          const { error: o } = await s(e);
          if (o) throw o;
          ((this.state = "success"),
            this.$dispatch("createToast", {
              message:
                "To access the moodboard, please follow the link in your email.",
              heading: "Link sent",
              type: "success",
            }),
            r("moodboard_magiclink_sent"));
        } catch (o) {
          ((this.state = "error"),
            (this.message = `Error: ${o ?? "An unexpected error occurred."}`));
        } finally {
          this.loading = !1;
        }
      },
    }));
});
