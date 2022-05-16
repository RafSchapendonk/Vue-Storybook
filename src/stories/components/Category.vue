<template>
    <div class="category__wrapper">
        <div class="swiper-container" data-slider-max-width="9000" data-slider-name="vacancy-link-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a class="btn btn-text btn-solid--lead btn-text--white btn--rounded" :class="classes" href="">test</a>
                </div>
                <div v-for="item in categoryItems" :key="item"  class="swiper-slide">
                    <a class="btn btn-text btn--rounded btn-transp" :class="classes" href="">test</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, computed } from '@vue/reactivity'
import "../sass/elements/_category.scss"
import "../sass/elements/_button.scss";

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
        },
        pill: {
            type: Boolean,
            default: true,
        },
        rounded: {
            type: Boolean,
            default: true,
        },
        icon: {
            type: Boolean,
            default: false,
        },
    },

    setup(props) {
        props = reactive(props);
        return {
            classes: computed(() => ({
                "btn--pill": props.pill && !props.rounded,
                "btn--rounded": props.rounded && !props.pill,
                "btn-text--icon": props.icon,
            })),
        }
    }
}
</script>
