const c = {
    TOAST_DELAY: 25e3,
    MIN_VIEWS: 3,
    MESSAGES: {
      DEFAULT:
        "Yacht comparison? Destination inspiration? Just let me know how I can help.",
      YACHTS_ONLY:
        "Would you like to compare the yachts you’ve looked at so far? Or find out more about charter destinations?",
      EXPERIENCES_ONLY:
        "Would you like more information on anything you’ve looked at? Or find yachts that are available in these destinations?",
      MIXED_MORE_YACHTS:
        "Yacht comparison? Destination inspiration? Just let me know how I can help.",
      MIXED_MORE_EXPERIENCES:
        "Yacht comparison? Destination inspiration? Just let me know how I can help.",
    },
  },
  i = ({ yachts: e, experiences: t }) => {
    const [r, o] = [e.length, t.length];
    return r === 0 && o === 0
      ? "DEFAULT"
      : r > 0 && o === 0
        ? "YACHTS_ONLY"
        : r === 0 && o > 0
          ? "EXPERIENCES_ONLY"
          : r > o
            ? "MIXED_MORE_YACHTS"
            : "MIXED_MORE_EXPERIENCES";
  },
  n = (e) => e.replace(/-/g, " ").replace(/\b\w/g, (t) => t.toUpperCase()),
  y = (e) => {
    const t = i(e),
      { yachts: r, experiences: o } = e;
    switch (t) {
      case "YACHTS_ONLY": {
        const a = r.map(n).join(", ");
        return r.length === 1
          ? `I’m here to help you with our luxury yacht charters—whether it’s finding the right Yacht, exploring Destinations, or starting an enquiry. Would you like more information about the Yacht ${a}?`
          : `I’m here to help you with our luxury yacht charters—whether it’s finding the right Yacht, exploring Destinations, or starting an enquiry. Would you like more information about the Yachts ${a}?`;
      }
      case "EXPERIENCES_ONLY":
        return `I’m here to help you with our luxury yacht charters—whether it’s finding the right Yacht, exploring Destinations, or starting an enquiry. Would you like more information about ${o.map(n).join(", ")}? Or find Yachts that are available in this destination?`;
      case "MIXED_MORE_YACHTS":
      case "MIXED_MORE_EXPERIENCES": {
        const a = r.map(n).join(", "),
          s = o.map(n).join(", ");
        return `I'm here to help you with our luxury yacht charters—whether it's finding the right Yacht, exploring Destinations, or starting an enquiry. Would you like more information about the ${r.length === 1 ? "Yacht" : "Yachts"} ${a}? Or explore ${s} further?`;
      }
      default:
        return "I’m here to help you with our luxury yacht charters—whether it’s finding the right Yacht, exploring Destinations, or starting an enquiry. How can I assist you today?";
    }
  },
  E = (e) => {
    const t = i(e);
    return c.MESSAGES[t];
  },
  h = () => ({ yachts: u(), experiences: l() }),
  u = () => {
    try {
      return JSON.parse(
        sessionStorage.getItem("yco-charter-yachts-viewed") || "[]",
      );
    } catch (e) {
      return (console.error("Charter AI: Error getting viewed yachts:", e), []);
    }
  },
  l = () => {
    try {
      return JSON.parse(
        sessionStorage.getItem("yco-charter-experiences-viewed") || "[]",
      );
    } catch (e) {
      return (
        console.error("Charter AI: Error getting viewed experiences:", e),
        []
      );
    }
  },
  p = () => {
    const { yachts: e, experiences: t } = h();
    return e.length + t.length;
  },
  d = () => {
    try {
      (sessionStorage.removeItem("yco-charter-yachts-viewed"),
        sessionStorage.removeItem("yco-charter-experiences-viewed"));
    } catch (e) {
      console.error("Charter AI: Error clearing session data:", e);
    }
  };
export { c as C, h as a, p as b, d as c, y as d, E as g };
