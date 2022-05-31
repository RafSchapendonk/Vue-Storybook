<template>
    <div class="category__wrapper">
         <div v-if="categoryModal" class="category__modal-button">
            <a class="btn btn-text btn-transp" :class="classes">test</a>
        </div>
        <div class="swiper-container" data-slider-max-width="9000" data-slider-name="vacancy-link-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a class="btn btn-text btn-solid--lead btn-text--white" :class="classes" href="">category 1</a>
                </div>
                <div v-for="item in categoryItems" :key="item"  class="swiper-slide">
                    <a class="btn btn-text btn-transp" :class="classes" href="">category {{ item + 1 }}</a>
                </div>
            </div>
        </div>
    </div>
    
    <div v-if="categoryModal" id="overlay">
      <!-- -->
    </div>

    <div v-if="categoryModal" class="modal__select">
      <div class="modal__select-inner">
        <div class="modal__select-closer">
          <i class="fa-solid fa-x"></i>
        </div>
        <div class="modal__select--header">
          <h4>Categories</h4>
        </div>
        <ul>
          <li class="active">
            <a href=""> category 1 </a>
          </li>
          <li class="">
            <a href=""> category 2 </a>
          </li>
          <li class="">
            <a href=""> category 3 </a>
          </li>
          <li class="">
            <a href=""> category 4 </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { reactive, computed } from '@vue/reactivity'
import "../sass/elements/_category.scss"
import "../sass/elements/_button.scss";
import "../sass/elements/_modal.scss";

export default {
    name: "category",

    methods: {
      createScript(scriptSrc) {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = scriptSrc;
          document.body.appendChild(script);
      },
    },

    beforeMount() {
      this.createScript('../js/swiper.js')
      this.createScript('../js/rbm.handle.js')
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
      categoryModal: {
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
