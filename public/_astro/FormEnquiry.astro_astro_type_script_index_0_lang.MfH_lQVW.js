import { m as g } from "./module.esm.B4UCoxDo.js";
import { f, g as p, E as y, h as u } from "./analytics.DndsQryn.js";
import { g as l } from "./storage.DmgCIzZT.js";
import { s as _ } from "./GA4Service.h0PwkgNc.js";
const s = (e = []) => ({
    value: null,
    rules: e,
    validate() {
      const t = c(this);
      ((this.isValid = t.isValid), (this.errorMsg = t.errorMsg));
    },
    isValid: null,
    errorMsg: null,
  }),
  c = (e) => {
    const t = {
        required: "Field required.",
        email: "Invalid email address.",
        telephone: "Invalid telephone number.",
      },
      a = { required: v, email: E, telephone: q };
    for (const r of e.rules)
      if (!a[r](e.value)) return { ...e, isValid: !1, errorMsg: t[r] };
    return { ...e, isValid: !0, errorMsg: null };
  },
  v = (e) => !!e,
  E = (e) => {
    const t =
      "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
    return new RegExp(t).test(String(e).toLowerCase());
  },
  q = (e) => (e ? /^[\d\s()+-]{7,20}$/.test(String(e)) : !0),
  b = (e) => {
    const { searchParams: t, pathname: a } =
        typeof e == "string" ? new URL(e) : e,
      r = a.split("/"),
      n = r[r.indexOf("search") + 1] || "Not specified",
      i = (o, m = (h) => h) => (t.get(o) ? m(t.get(o)) : null);
    return {
      searchValue: n,
      length: i("length"),
      guests: i("guests"),
      cabins: i("cabins"),
      minPrice: i("minPrice", parseFloat),
      maxPrice: i("maxPrice", parseFloat),
      dates: i("dates"),
      gatedContent: i("vgc", (o) => o === "true"),
    };
  },
  w = (e) => {
    const t = b(e),
      r =
        [
          `Search for "${t.searchValue}"`,
          t.length && `with a length of ${t.length}`,
          t.guests && `for ${t.guests} guest(s)`,
          t.cabins && `with ${t.cabins} cabin(s)`,
          (t.minPrice || t.maxPrice) &&
            `and a price range of ${t?.minPrice?.toLocaleString() ?? ""}${t.minPrice && t.maxPrice ? " to " : ""}${t?.maxPrice?.toLocaleString() ?? ""}`,
          t.dates && `during the dates: ${t.dates}`,
        ]
          .filter(Boolean)
          .join(", ") + ".";
    return t.gatedContent
      ? `${r}

 This user has access to gated content.`
      : r;
  },
  d = () => ({
    firstName: s(["required"]),
    lastName: s(["required"]),
    email: s(["required", "email"]),
    areaCode: s([]),
    telephone: s(["telephone"]),
    enquiryType: s(["required"]),
    message: s([]),
    optIn: s([]),
    utmSource: s([]),
    utmMedium: s([]),
    utmCampaign: s([]),
    formType: s([]),
    referrer: s([]),
    moodboardURL: s([]),
  }),
  F = (e) => ((e.areaCode.value = ""), e),
  S = (e, t) => {
    const a = { purchase: "Sales", charter: "Charter" };
    return ((e.enquiryType.value = a[t] ?? "Other"), e);
  },
  T = (e, t) => ((e.formType.value = t ? "search_enquiry" : "enquiry"), e),
  P = (e) => ((e.message.value = w(new URL(window.location.href))), e),
  R = (e) => (
    (e.utmSource.value = l("yco_utm_source") || ""),
    (e.utmMedium.value = l("yco_utm_medium") || ""),
    (e.utmCampaign.value = l("yco_utm_campaign") || ""),
    e
  ),
  M = (e) => ((e.referrer.value = window.document.referrer || ""), e),
  U = (e, t) => ((e.moodboardURL.value = t), e),
  N = async (e) => {
    if (
      !(await fetch("/api/form/submit/enquiry", { method: "POST", body: e })).ok
    )
      throw new Error("Something went wrong. Please try again.");
  },
  $ = (e, t, a) => {
    let r;
    (a === "moodboard_enquiry_open" ? (r = f) : (r = t ? p : y),
      window.plausible &&
        window.plausible(
          r == "enquiry_form_submit" || r == "moodboard_enquiry_submit"
            ? "Enquiry"
            : r,
          { props: { enquiryType: e } },
        ),
      _(r));
  },
  O = (e) => (
    e.telephone.value && e.telephone.value.length > 0
      ? (e.areaCode.rules = ["required"])
      : (e.areaCode.rules = []),
    Object.entries(e).reduce((t, [a, r]) => ((t[a] = c(r)), t), {})
  ),
  V = (e) => Object.values(e).every((t) => t.isValid);
g.data(
  "enquiryForm",
  ({ purchaseType: e, shouldPrefillFields: t, event: a }) => ({
    purchaseType: e,
    shouldPrefillFields: t,
    event: a,
    fields: d(),
    loading: !1,
    serverError: null,
    moodboardURL: "https://y.co/board/test",
    init() {
      ((this.fields = S(this.fields, e)),
        (this.fields = F(this.fields)),
        (this.fields = T(this.fields, t)),
        this.event === u && (this.fields.formType.value = "moodboard_enquiry"),
        this.shouldPrefillFields && P(this.fields));
    },
    async submit(r) {
      if (
        ((this.loading = !0),
        (this.serverError = null),
        await R(this.fields),
        await M(this.fields),
        this.event === u && (await U(this.fields, this.moodboardURL)),
        (this.fields = O(this.fields)),
        !V(this.fields))
      ) {
        this.loading = !1;
        return;
      }
      const n = new FormData(r.target);
      (n.append("url", window.location.href),
        n.set(
          "Subscribed_to_Emails",
          n.get("Subscribed_to_Emails") === "on" ? "Yes" : "No",
        ));
      try {
        (await N(n),
          $(n.get("enquiryType"), this.shouldPrefillFields, this.event),
          this.$dispatch("createToast", {
            message:
              "Thank you for submitting an enquiry! We'll get back to you shortly.",
            heading: "message sent",
          }),
          this.shouldPrefillFields && this.$dispatch("update-search-callout"),
          (this.fields = d()),
          (this.loading = !1));
      } catch {
        ((this.serverError = "Something went wrong. Please try again."),
          (this.loading = !1));
        return;
      }
    },
  }),
);
