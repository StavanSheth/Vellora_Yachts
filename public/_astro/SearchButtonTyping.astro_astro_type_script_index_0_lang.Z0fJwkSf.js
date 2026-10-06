import { m as i } from "./module.esm.B4UCoxDo.js";
i.data("typing", (e) => ({
  text: "",
  textArray: e.split(","),
  textIndex: 0,
  charIndex: 0,
  pauseEnd: 1e3,
  pauseStart: 20,
  typeSpeed: 110,
  typeSpeedFast: 15,
  direction: "forward",
  typingInterval: null,
  init() {
    this.typingInterval = setInterval(() => {
      this.startTyping();
    }, this.typeSpeed);
  },
  startTyping() {
    let t = this.textArray[this.textIndex];
    (this.charIndex > t.length &&
      ((this.direction = "backward"),
      this.typingInterval && clearInterval(this.typingInterval),
      setTimeout(() => {
        this.startTyping();
      }, this.pauseEnd)),
      (this.text = t.substring(0, this.charIndex)),
      this.direction == "forward"
        ? (this.charIndex += 1)
        : (this.charIndex == 0 &&
            ((this.direction = "forward"),
            this.typingInterval && clearInterval(this.typingInterval),
            setTimeout(() => {
              ((this.textIndex += 1),
                this.textIndex >= this.textArray.length && (this.textIndex = 0),
                (this.typingInterval = setInterval(() => {
                  this.startTyping();
                }, this.typeSpeed)));
            }, this.pauseStart)),
          (this.charIndex = 0)));
  },
}));
