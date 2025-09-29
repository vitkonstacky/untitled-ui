"use strict";

document.addEventListener("alpine:init", () => {

  /**
   * Hamburger
   */
  Alpine.data("hamburger", () => {

    return {

      open: false,

      toggle() {

        this.open = this.open === false;

        this.open === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "";

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
