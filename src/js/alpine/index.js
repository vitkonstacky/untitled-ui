"use strict";

document.addEventListener("alpine:init", () => {

  /**
   * Hamburger
   */
  Alpine.data("hamburger", () => {

    return {

      lastWidth: window.innerWidth,

      open: false,

      toggle() {

        this.open = this.open === false;

        this.open === true ? document.body.style.overflow = "hidden" : document.body.removeAttribute("style");

      },

      resize() {

        if (this.lastWidth < 920 && window.innerWidth >= 920) {

          document.body.removeAttribute("style")

          this.open = false;

        }

        this.lastWidth = window.innerWidth;

      },

    };

  });

  /**
   * Navigation
   */
  Alpine.data("navigation", () => {

    return {

      open: false,

      toggle(event, element) {

        const prevent = element.querySelector(".navigation__symbol") !== null;

        if (prevent) {

          event.preventDefault();

        }

        this.open = this.open === false;

      },

    };

  });

  /**
   * Accordion
   */
  Alpine.data("accordion", () => {

    return {

      open: false,

      toggle() {

        this.open = this.open === false;

      },

    };

  });

});
