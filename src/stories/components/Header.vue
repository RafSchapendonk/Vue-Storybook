<template>
  <header>
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
  <div class="content-filler"></div>
</template>

<script>
import "../sass/elements/_header.scss";
import { reactive, computed } from "vue";

export default {
  name: "header-element",

  props: {},

  data() {
    return {
      botNavItems: 3,
      topNavItems: 5,
    };
  },

  setup(props) {
    props = reactive(props);
    return {};
  },
};
</script>