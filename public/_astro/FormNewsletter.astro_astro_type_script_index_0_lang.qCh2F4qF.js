import { m as n } from "./module.esm.B4UCoxDo.js";
import { s as d } from "./GA4Service.h0PwkgNc.js";
import { N as o } from "./analytics.DndsQryn.js";
const u = (e, i = []) => {
  const s = { required: "Field required.", email: "Invalid email address." },
    a = {
      required: (t) => !!t,
      email: (t) => {
        const r =
          "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
        return new RegExp(r).test(String(t).toLowerCase());
      },
    },
    l = i.reduce((t, r) => (a[r] && (a[r](e) || t.push(s[r])), t), []);
  return { valid: l.length === 0, error: l.length > 0 ? l[0] : null };
};
n.data("formNewsletter", () => ({
  fields: {},
  loading: !1,
  serverError: null,
  init() {
    this.setFields();
  },
  validationCallback(e) {
    const { value: i, rules: s } = e;
    return u(i, s);
  },
  createField(e) {
    return {
      value: null,
      rules: Array.isArray(e) ? e : [e],
      validate(i) {
        const { valid: s, error: a } = i(this);
        ((this.isValid = s), (this.errorMsg = a));
      },
      isValid: null,
      errorMsg: null,
    };
  },
  setFields() {
    this.fields = {
      email: this.createField(["required", "email"]),
      optIn: this.createField(["required"]),
    };
  },
  validateForm() {
    Object.values(this.fields).map((e) => e.validate(this.validationCallback));
  },
  isFormValid() {
    return Object.values(this.fields).every((e) => e.isValid);
  },
  async submit(e) {
    if (
      ((this.loading = !0),
      (this.serverError = null),
      this.validateForm(),
      !this.isFormValid())
    ) {
      this.loading = !1;
      return;
    }
    const i = new FormData(e.target);
    if (
      (i.set(
        "Subscribed_to_Emails",
        i.get("Subscribed_to_Emails") === "on" ? "Yes" : "No",
      ),
      !(await fetch("/api/form/submit/newsletter", { method: "POST", body: i }))
        .ok)
    ) {
      ((this.serverError = "Something went wrong. Please try again."),
        (this.loading = !1));
      return;
    }
    (window.plausible && window.plausible(o),
      d(o, { email: this.fields.email.value, optIn: this.fields.optIn.value }),
      this.$dispatch("createToast", {
        heading: "Signed Up!",
        message:
          "You are now part of Velora. Check your inbox for new-to-the-market yachts and exclusive opportunities.",
        time: 4e3,
      }),
      this.resetState());
  },
  resetState() {
    ((this.loading = !1), this.setFields());
  },
}));
