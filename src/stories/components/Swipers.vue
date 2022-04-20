<template>
    <div class="default-overview--overflow-hidden">
        <div class="default-overview">
            <div class="default-overview__slider swiper-container"  data-slider-max-width="9000" data-slider-name="">
                <div class="swiper-wrapper">
                    <div v-for="item in imgs" :key="item" class="swiper-slide">
                        <div class="swiper-slide__inner">
                            <img :src="item.url" alt="">
                            <div class="swiper-slide__content">
                                <h3 class="">Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                            </div>
                            <a class="block-link" href=""><!-- --></a>
                        </div>
                    </div>
                </div>
                <div v-if="scrollbar" class="swiper-scrollbar"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from "vue";
import "../sass/elements/_swiper.scss";
import "../sass/elements/_default-overview.scss";

export default {
    name: "Swiper",
    beforeCreate() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '../js/swiper.js';
        document.body.appendChild(script);
    },
    data() {
        return {
            imgs: [
                { url: "https://picsum.photos/id/237/1920/1080" },
                { url: "https://picsum.photos/id/1025/1920/1080" },
                { url: "https://picsum.photos/id/169/1920/1080" },
                { url: "https://picsum.photos/id/40/1920/1080" },
                { url: "https://picsum.photos/id/433/1920/1080" },
            ],
        };
    },
    props: {
        scrollbar: {
            type: Boolean,
            default: false,
        },
    },  
    setup(props) {
    },
}
</script>