<template>
  <div class="stb-block__wrapper">
    <div :class="blockItemClasses" class="stb-block__item">
      <div>
        <img
          v-if="image"
          :class="imgClasses"
          src="https://picsum.photos/id/237/1920/1080"
        />
      </div>
      <div class="stb-block__inner">
        <h3>{{ titleFirstBlock }}</h3>
        <p v-if="category" class="stb-block__category">{{ categoryText }}</p>
        <div>
          <p :class="contentClasses">{{ contentFirstBlock }}</p>
        </div>

        <i v-if="icon" class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
    <div
      v-for="item in extraBlocks"
      :key="item"
      :class="blockItemClasses"
      class="stb-block__item"
    >
      <div>
        <img
          v-if="image"
          :class="imgClasses"
          src="https://picsum.photos/id/237/1920/1080"
        />
      </div>
      <div class="stb-block__inner">
        <h3>{{ title }}</h3>
        <p v-if="category" class="stb-block__category">{{ categoryText }}</p>
        <div>
          <p :class="contentClasses">{{ content }}</p>
        </div>

        <i v-if="icon" class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import "../sass/elements/_block-element.scss";
import { reactive, computed } from "vue";

export default {
  name: "blockElement",

  props: {
    title: {
      type: String,
      default: "Title",
    },
    content: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit odio urna, sed vulputate erat varius eu. Nullam ac lacus at sem feugiat consectetur ut viverra lorem. In pharetra odio est, non suscipit eros suscipit in. Nullam eu arcu non nulla convallis sollicitudin. Vivamus laoreet pellentesque consectetur.",
    },
    titleFirstBlock: {
      type: String,
      default: "Hello there",
    },
    contentFirstBlock: {
      type: String,
      default: "Lorem ipsum dolor sit amet.",
    },
    extraBlocks: {
      type: Number,
      default: 5,
    },
    image: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    category: {
      type: Boolean,
      default: false,
    },
    categoryText: {
      type: String,
      default: "Category",
    },
    imageBackground: {
      type: Boolean,
      default: false,
    },
    colSpan: {
      type: String,
      validator: function () {
        return ["col-span-3", "col-span-4", "col-span-6", "col-span-12"];
      },
      default: "col-span-4",
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    blockBorder: {
      type: String,
      validator: function () {
        return [
          "rounded-none",
          "rounded-t-2xl",
          "rounded-b-2xl",
          "rounded-2xl",
        ];
      },
      default: "rounded-none",
    },
    imgBorder: {
      type: String,
      validator: function () {
        return [
          "rounded-none",
          "rounded-t-2xl",
          "rounded-b-2xl",
          "rounded-2xl",
        ];
      },
      default: "rounded-none",
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      contentClasses: computed(() => ({
        "mb-lg": props.icon,
      })),
      blockItemClasses: computed(() => ({
        [`${props.colSpan}`]: !props.responsive,
        [`${props.blockBorder}`]: true,
        "stb-block__item--responsive": props.responsive,
        "stb-block__item--bg-image": props.imageBackground
      })),
      imgClasses: computed(() => ({
        [`${props.imgBorder}`]: true,
      })),
    };
  },
};
</script>