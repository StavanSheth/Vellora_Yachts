import { m as t } from "./module.esm.B4UCoxDo.js";
import { g as r } from "./format-date.BD_GeHUo.js";
import "./dayjs.min.D1pIAJdy.js";
import "./_commonjsHelpers.gnU0ypJ3.js";
const o = [
  {
    location: "MONACO",
    timezone: "Europe/Monaco",
    currentTime: "",
    timezoneAbbr: "CET",
  },
  {
    location: "LONDON",
    timezone: "Europe/London",
    currentTime: "",
    timezoneAbbr: "GMT",
  },
  {
    location: "AUCKLAND",
    timezone: "Pacific/Auckland",
    currentTime: "",
    timezoneAbbr: "NZST",
  },
  {
    location: "FORT LAUDERDALE",
    timezone: "America/New_York",
    currentTime: "",
    timezoneAbbr: "EST",
  },
];
t.data("officesTimmer", () => ({
  offices: o,
  intervalId: null,
  init() {
    (this.updateTimes(),
      this.startTimer(),
      document.addEventListener("visibilitychange", () => {
        document.hidden
          ? this.stopTimer()
          : (this.updateTimes(), this.startTimer());
      }),
      window.addEventListener("pagehide", () => {
        this.stopTimer();
      }));
  },
  startTimer() {
    this.intervalId ||
      (this.intervalId = setInterval(() => this.updateTimes(), 1e3));
  },
  stopTimer() {
    this.intervalId &&
      (clearInterval(this.intervalId), (this.intervalId = null));
  },
  destroy() {
    this.stopTimer();
  },
  updateTimes() {
    this.offices.forEach((e, i) => {
      this.offices[i].currentTime = r(e.timezone);
    });
  },
}));
