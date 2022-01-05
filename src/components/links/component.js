const keycode = require("keycode");

module.exports = class {
  // https://stackoverflow.com/a/55817013
  // https://markojs.com/docs/class-components/#lifecycle-events
  // https://markojs.com/docs/class-components/#attaching-dom-event-listeners
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#addeventlistener_keydown_example
  // https://www.npmjs.com/package/keycode
  // https://www.pluralsight.com/guides/event-listeners-in-react-components
  // https://markojs.com/docs/class-components/#usage
  // https://markojs.com/docs/class-components/#subscribetoemitter
  // https://github.com/marko-js/marko/issues/662 and https://github.com/marko-js/marko/issues/582
  // https://alligator.io/js/listening-to-keyboard/
  handleKey(event) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented
    // console.log(event.defaultPrevented);

    const key = keycode(event);

    switch (key) {
      case "1":
      case "w":
        document.getElementById("Website").click();
      case "2":
      case "t":
        document.getElementById("Twitter").click();
    }
  }

  onMount() {
    // document.addEventListener("keydown", this.handleKey);
    this.subscribeTo(document).on("keydown", this.handleKey);
  }
};
