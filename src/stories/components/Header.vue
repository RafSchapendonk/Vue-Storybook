<template>
  <header :class="classes">
    <div id="topNavbar">
      <div class="container">
        <nav>
          <ul>
            <li v-for="index in topNavItems" :key="index">
              <a>Nav item {{ index }}</a>
            </li>
            <template v-if="phoneNumber">
              <li class="phone-number list-item--unique">
                <a class="phone list-item--unique-inner" href="tel:">
                  <i class="fa-light fa-phone"></i>
                  <p>076 78 51 526</p>
                </a>
              </li>
            </template>
            <template v-if="languageSwitch">
              <!-- ↓↓↓ { file="inc/languages.tpl"} ↓↓↓ -->
              <li class="language--toggler list-item--unique">
                <div class="language--toggler-inner list-item--unique-inner">
                  <i class="fa-light fa-globe"></i>
                  <p>English</p>
                  <i class="fa-light fa-angle-down"></i>
                </div>
              </li>
              <!-- ↑↑↑ -->
            </template>
          </ul>
        </nav>
      </div>
    </div>

    <template v-if="primary && !center">
      <div id="bottomNavbar">
        <div class="container">
          <i class="fa-regular fa-bars" id="menu-trigger"></i>
          <a class="logo" href="" title="">
            <img src="/rbmedia_logo_payoff.svg" alt="" />
          </a>
          <nav>
            <ul>
              <li v-for="index in botNavItems" :key="index">
                <a>Nav item {{ index }}</a>
              </li>
            </ul>
          </nav>
          <a class="contact-us" href="mailto:">
            <i class="fa-light fa-envelope"></i>
          </a>
        </div>
      </div>
    </template>

    <template v-if="center && !primary">
      <div id="bottomNavbar">
        <div class="container">
          <i class="fa-regular fa-bars" id="menu-trigger"></i>
          <nav>
            <ul>
              <li v-for="index in botNavItems" :key="index">
                <a>Nav item {{ index }}</a>
              </li>
            </ul>
          </nav>
          <a class="logo" href="" title="">
            <img src="/rbmedia_logo_payoff.svg" alt="" />
          </a>
          <nav>
            <ul>
              <li v-for="index in botNavItems" :key="index">
                <a>Nav item {{ index }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </template>
  </header>

  <main>
    <div class="mobile-menu">
      <a class="logo" href="" title="">
        <img src="/rbmedia_logo_payoff.svg" alt="" />
      </a>
      <i class="fa-solid fa-xmark" id="close-menu"></i>
      <template v-if="phoneNumber">
        <div class="phone-number list-item--unique">
          <a class="phone list-item--unique-inner" href="tel:">
            <i class="fa-light fa-phone"></i>
            <p>076 78 51 526</p>
          </a>
        </div>
      </template>
      <template v-if="languageSwitch">
        <!-- ↓↓↓ { file="inc/languages.tpl"} ↓↓↓ -->
        <div class="language--toggler list-item--unique">
          <div class="language--toggler-inner list-item--unique-inner">
            <i class="fa-light fa-globe"></i>
            <p>English</p>
            <i class="fa-light fa-angle-down"></i>
          </div>
        </div>
        <!-- ↑↑↑ -->
      </template>
      <nav>
        <ul>
          <li v-for="index in botNavItems" :key="index">
            <a>Nav item {{ index }}</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li v-for="index in topNavItems" :key="index">
            <a>Nav item {{ index }}</a>
          </li>
        </ul>
      </nav>
    </div>

    <div id="overlay">
      <!-- -->
    </div>

    <div v-if="languageSwitch" class="language__select">
      <div class="language__select-inner">
        <div class="language--select--closer">
          <i class="fa-solid fa-x"></i>
        </div>
        <div class="language__select--header">
          <h4>Language</h4>
        </div>
        <ul>
          <li class="active">
            <a href=""> English </a>
          </li>
          <li class="">
            <a href=""> Nederlands </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="content-filler"></div>
  </main>
</template>

<script>
import "../sass/elements/_header.scss";
import "../sass/elements/_language.scss";
import { reactive, computed } from "vue";

export default {
  name: "header-element",

  props: {
    primary: {
      type: Boolean,
      required: true,
      default: true,
    },
    center: {
      type: Boolean,
      required: true,
      default: false,
    },
    languageSwitch: {
      type: Boolean,
      required: false,
      default: false,
    },
    phoneNumber: {
      type: Boolean,
      required: false,
      default: false,
    },
    headerScrollType: {
      type: Object,
      validator: function () {
        return {
          none: {
            name: "none",
            class: "",
          },
          headerShrink: {
            name: "headerShrink",
            class: "header--shrink",
          },
          headerTransparent: {
            name: "headerTransparent",
            class: "header--transparent",
          },
        };
      },
    },
  },

  watch: {
    headerShrink: function () {
      console.log("test");
    },
  },

  data() {
    return {
      botNavItems: 3,
      topNavItems: 5,
      lastScrollTop: window.pageYOffset || document.documentElement.scrollTop,
      scrollDirection: "down",
    };
  },

  methods: {
    fixedMenu() {
      var topNavbar = document.getElementById("topNavbar");
      var bottomNavbar = document.getElementById("bottomNavbar");
      var topNavbarOffsetHeight = topNavbar.offsetHeight;
      var bottomNavbarOffsetTop = bottomNavbar.offsetTop;

      if (
        window.pageYOffset >= bottomNavbarOffsetTop &&
        bottomNavbarOffsetTop != 0
      ) {
        document.body.classList.add("fixed-nav");
      } else if (
        window.pageYOffset - topNavbarOffsetHeight <
        bottomNavbarOffsetTop
      ) {
        document.body.classList.remove("fixed-nav");
      }
    },

    openMenuMobile() {
      var menuBtn = document.querySelectorAll("#menu-trigger");
      var menu = document.querySelectorAll(".mobile-menu");

      if (menuBtn.length > 0) {
        for (var i = 0; i < menuBtn.length; i++) {
          menuBtn[i].addEventListener("click", function (e) {
            document.querySelector("body").classList.add("mobile-open");
            e.stopPropagation();
          });
        }
      }

      if (menu.length > 0) {
        for (var i = 0; i < menu.length; i++) {
          menu[i].addEventListener("click", function (e) {
            e.stopPropagation();
          });
        }
      }
    },

    closeMenuMobile() {
      var closeBtn = document.querySelectorAll("#close-menu");
      if (closeBtn.length > 0) {
        for (var i = 0; i < closeBtn.length; i++) {
          closeBtn[i].addEventListener("click", function (e) {
            document.querySelector("body").classList.remove("mobile-open");
            e.stopPropagation();
          });
        }
      }

      document.addEventListener("click", function (e) {
        document.querySelector("body").classList.remove("mobile-open");
      });

      var mq = window.matchMedia("(min-width: 1230px)");
      if (mq.matches) {
        document.querySelector("body").classList.remove("mobile-open");
      }
    },

    multiLanguage() {
      var languageToggle = document.querySelectorAll(".language--toggler");
      const ref = this;

      if (languageToggle.length > 0) {
        for (var i = 0; i < languageToggle.length; i++) {
          languageToggle[i].addEventListener("click", function (e) {
            document
              .querySelector("body")
              .classList.add("overlay--active", "language--active");
            ref.closeItems(
              ".language__select-inner",
              ".language--select--closer",
              ["overlay--active", "language--active"]
            );
            var mq = window.matchMedia("(max-width: 1176px)");
            if (mq.matches) {
              document.querySelector("body").classList.remove("mobile-open");
            }
            e.stopPropagation();
          });
        }
      }

      this.closeItems(".language__select-inner", ".language--select--closer", [
        "overlay--active",
        "language--active",
      ]);
    },

    closeItems(subjectSelector, closeSelector, classesToRemoveFromBody) {
      if (subjectSelector.length != 0) {
        var subjectElement = document.querySelector(subjectSelector);
      }

      if (closeSelector.length != 0) {
        var closeElement = document.querySelector(closeSelector);
      }

      if (closeElement != undefined) {
        closeElement.addEventListener("click", function (e) {
          classesToRemoveFromBody.forEach((classToRemoveFromBody) => {
            document
              .querySelector("body")
              .classList.remove(classToRemoveFromBody);
          });
        });
      }

      if (subjectElement != undefined) {
        subjectElement.addEventListener("click", function (e) {
          e.stopPropagation();
        });
      }

      document.addEventListener("click", function (e) {
        classesToRemoveFromBody.forEach((classToRemoveFromBody) => {
          document
            .querySelector("body")
            .classList.remove(classToRemoveFromBody);
        });
      });
    },
  },

  mounted() {
    this.fixedMenu();
    this.openMenuMobile();
    this.closeMenuMobile();
    this.multiLanguage();
    window.addEventListener("scroll", this.fixedMenu);
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "header--primary": props.primary && !props.center,
        "header--center": props.center && !props.primary,

        [props.headerScrollType
          ? `${props.headerScrollType.class}`
          : "undefined"]: true,
      })),
    };
  },
};
</script>
