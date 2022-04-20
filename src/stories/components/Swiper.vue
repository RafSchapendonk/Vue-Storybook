<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="item in imgs" :key="item.url">
      <img :src="item.url" />
      <div>
        <h2>Hello</h2>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { reactive, computed } from "vue";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/css";
// import "../sass/elements/_swiper.scss";

export default {
  name: "swiper-comp",
  mounted() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = './js/swiper.js';
    document.body.appendChild(script);
  },
  data() {
    return {
      imgs: [
        { url: "https://picsum.photos/id/237/200" },
        { url: "https://picsum.photos/id/237/200" },
        { url: "https://picsum.photos/id/237/200" },
        { url: "https://picsum.photos/id/237/200" },
        { url: "https://picsum.photos/id/237/200" },
      ],
    };
  },
  props: {},
  setup(props) {
    props = reactive(props);
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      classes: computed(() => ({})),
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
