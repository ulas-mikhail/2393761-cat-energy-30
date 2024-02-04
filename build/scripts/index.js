// source/scripts/index.js
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const nav = document.querySelector(".main-navigation");
    const toggleButton = document.querySelector(".button-burger");
    nav.classList.add("main-navigation--closed");
    toggleButton.classList.add("button-burger--visible");
    toggleButton.addEventListener(
      "click",
      () => {
        nav.classList.toggle("main-navigation--closed");
        nav.classList.toggle("main-navigation--open");
        toggleButton.classList.toggle("button-burger--visible");
        toggleButton.classList.toggle("button-burger--close");
      }
    );
    document.addEventListener(
      "click",
      (event) => {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnToggleButton = toggleButton.contains(event.target);
        if (!isClickInsideNav && !isClickOnToggleButton) {
          nav.classList.remove("main-navigation--open");
          nav.classList.add("main-navigation--closed");
          toggleButton.classList.remove("button-burger--close");
          toggleButton.classList.add("button-burger--visible");
        }
      }
    );
  }
);
//# sourceMappingURL=index.js.map
