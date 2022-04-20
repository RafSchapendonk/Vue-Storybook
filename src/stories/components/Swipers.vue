<template>
    <!-- <div class="swiper-container faq__swiper-container active-scrollbar" data-slider-max-width="9999" data-slider-name="faq-slider">
        <div class="swiper-wrapper">
            <div v-for="item in imgs" :key="item" class="swiper-slide faq__category">
                <img :src="item.url" alt="">
            </div>
        </div>
    </div> -->

    <div class="default-overview--overflow-hidden">
        <div class="default-overview default-overview--product">
            <div class="default-overview__slider swiper-container"  data-slider-max-width="9000" data-slider-name="products-slider">
                <div class="product-overview__inner swiper-wrapper">
                    <div v-for="item in imgs" :key="item" class="product-overview__product swiper-slide">
                        <div class="product-overview__product--inner">
                            <img :src="item.url" alt="">
                            <div class="product-overview__product--content">
                                <h3 class="">Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.</p>
                            </div>
                            <a class="block-link" href=""><!-- --></a>
                        </div>
                    </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from "vue";
import "../sass/elements/_swiper.scss";

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
    props: {},
    setup(props) {
    },
}
</script>