<template>
  <div
    class="swiper-container"
    data-slider-max-width="9999"
    data-slider-name="storybook-slider"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide"></div>
    </div>
    <div class="swiper__arrows--wrapper">
      <div class="swiper-button-prev">
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div class="swiper-button-next">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import "../sass/elements/_swiper.scss";

export default {
  name: "swiper",

  props: {},

  imgs: [],

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({})),
    };
  },
};
</script>
