<template>
  <header v-if="primary">
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

  <header v-if="center">
    <div id="topNavbar" class="topNavbar--center test">
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
    <div id="bottomNavbar" class="bottomNavbar--center">
      <div class="container">
        <nav>
          <ul>
            <li v-for="index in botNavItems" :key="index">
              <a>Nav item {{ index }}</a>
            </li>
          </ul>
        </nav>
        <a class="logo" href="" title="">
          <img src="/rbmedia_logo_payoff_background.svg" alt="" />
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
  <div class="content-filler"></div>
  <!-- <script type="application/javascript" src="../js/fixedmenu.js"></script> -->
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
  },

  mounted() {
    this.fixedMenu();
    window.addEventListener("scroll", this.fixedMenu);
  },

  setup(props) {
    props = reactive(props);
    return {};
  },
};
</script>