"use strict";

document.addEventListener("DOMContentLoaded", () => {

  /**
   * Header reset
   */
  let lastWidth = window.innerWidth;

  window.addEventListener("resize", () => {

    if (lastWidth < 920 && window.innerWidth >= 920) {

      const togglable = document.querySelector(".header--open");

      if (togglable !== null) {

        document.body.removeAttribute("style");

        togglable.classList.remove("header--open");

      }

    }

    lastWidth = window.innerWidth;

  });

  /**
   * Hamburger
   */
  (function () {

    const toggle = document.querySelector(".hamburger");

    if (toggle !== null) {

      toggle.addEventListener("click", event => {

        const togglable = event.target.closest(".header");

        if (togglable !== null) {

          const open = togglable.classList.contains("header--open");

          if (open) {

            document.body.removeAttribute("style");

            togglable.classList.remove("header--open");

          } else {

            document.body.style.overflow = "hidden";

            togglable.classList.add("header--open");

          }

        }

      });

    }

  })();

  /**
   * Navigation
   */
  (function () {

    const toggles = document.querySelectorAll(".navigation__anchor");

    toggles.forEach(toggle => {

      const prevent = toggle.querySelector(".navigation__symbol") !== null;

      toggle.addEventListener("click", event => {

        const togglable = event.target.closest(".navigation__item");

        if (prevent) {

          event.preventDefault();

        }

        if (togglable !== null) {

          const open = togglable.classList.contains("navigation__item--open");

          if (open) {

            togglable.classList.remove("navigation__item--open");

          } else {

            togglable.classList.add("navigation__item--open");

          }

        }

      });

    });

  })();

  /**
   * Accordion
   */
  (function () {

    const toggles = document.querySelectorAll(".accordion__header");

    toggles.forEach(toggle => {

      toggle.addEventListener("click", event => {

        const togglable = event.target.closest(".accordion");

        if (togglable !== null) {

          const open = togglable.classList.contains("accordion--open");

          if (open) {

            togglable.classList.remove("accordion--open");

          } else {

            togglable.classList.add("accordion--open");

          }

        }

      });

    });

  })();

});
