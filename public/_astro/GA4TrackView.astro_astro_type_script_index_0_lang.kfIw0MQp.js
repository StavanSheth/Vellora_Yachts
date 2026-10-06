import { a } from "./GA4Service.h0PwkgNc.js";
class n extends HTMLElement {
  connectedCallback() {
    const e = this.dataset.eventName,
      t = this.dataset.eventKey;
    a(e, t);
  }
}
customElements.define("ga4-track-view", n);
