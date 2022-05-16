<template>
    <div class="category__wrapper">
        <!-- <p v-for="item in categoryItems" :key="item" class="category__item">Category</p> -->
    
        <div class="swiper-container" data-slider-max-width="9000" data-slider-name="vacancy-link-slider">
            <div class="swiper-wrapper">
                <div v-for="item in categoryItems" :key="item"  class="swiper-slide">
                    <a class="btn btn-text btn-solid--lead btn-text--white btn--rounded btn-text--icon" href="">test</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import "../sass/elements/_category.scss"
import "../sass/elements/_buttons.scss"

export default {
    name: "category",
    beforeCreate() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '../js/swiper.js';
        document.body.appendChild(script);
    },

    props: {
        categoryItems: {
            type: Number,
            default: 3
        }
    },

    setup(props) {
        props = reactive(props);
        return {

        }
    }
}
</script>
