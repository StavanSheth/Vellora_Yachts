import { m as i } from "./module.esm.B4UCoxDo.js";
import { Y as r } from "./SectionYachtList.constants.Bd1ViHUC.js";
import { e as o } from "./SectionYachtList.utils.C1pwDW7L.js";
import "./map-search-result.BQ3gJ3oA.js";
import "./format-price.BXVYhA84.js";
import "./dayjs.min.D1pIAJdy.js";
import "./_commonjsHelpers.gnU0ypJ3.js";
import "./format-date.BD_GeHUo.js";
import "./search.QCoQtdg2.js";
import "./index.DauvyH52.js";
import "./filtersObjToString.MdKJsBes.js";
import "./GA4Service.h0PwkgNc.js";
import "./analytics.DndsQryn.js";
i.data("sort", (t) => ({
  id: t,
  selectedValue: "",
  init() {
    this.$watch("selectedValue", (e) => {
      e && this.$nextTick(() => this.$el.blur());
    });
  },
  handleChange() {
    (o({ id: t, dispatch: this.$dispatch, sort: this.selectedValue }),
      this.$el.blur());
  },
  eventHandlers: {
    [`@${t}:${r}.window`](e) {
      this.selectedValue = e.detail.sort;
    },
  },
}));
