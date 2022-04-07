<template>
  <header v-if="primary" class="header--primary">
    <div id="topNavbar">
      <div class="container">
        <nav>
          <ul>
            <li v-for="index in topNavItems" :key="index">
              <a>Nav item {{ index }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div id="bottomNavbar">
      <div class="container">
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
  </header>

  <header v-if="center" class="header--center">
    <div id="topNavbar">
      <div class="container">
        <nav>
          <ul>
            <li v-for="index in topNavItems" :key="index">
              <a>Nav item {{ index }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
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
  </header>

  <main>
    <div class="mobile-menu">
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
      <nav>
        <ul>
          <li v-for="index in topNavItems" :key="index">
            <a>Nav item {{ index }}</a>
          </li>
        </ul>
      </nav>
      <i class="fa-solid fa-xmark" id="close-menu"></i>
    </div>
    <div id="overlay">
      <!-- -->
    </div>
    <div class="content-filler"></div>
  </main>
</template>

<script>
import "../sass/elements/_header.scss";
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
  },

  mounted() {
    this.fixedMenu();
    this.openMenuMobile();
    this.closeMenuMobile();
    window.addEventListener("scroll", this.fixedMenu);
  },

  setup(props) {
    props = reactive(props);
    return {};
  },
};
</script>
