<template>
  <div class="stb-block__wrapper">
    <div :class="blockItemClasses" class="stb-block__item">
      <div>
        <img v-if="image" src="https://picsum.photos/id/237/1920/1080" />
      </div>
      <div class="stb-block__inner">
        <h3>{{ titleFirstBlock }}</h3>
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
        <img v-if="image" src="https://picsum.photos/id/237/1920/1080" />
      </div>
      <div class="stb-block__inner">
        <h3>{{ title }}</h3>
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
    },
    content: {
      type: String,
    },
    titleFirstBlock: {
      type: String,
    },
    contentFirstBlock: {
      type: String,
    },
    extraBlocks: {
      type: Number,
      default: 0,
    },
    image: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    colSpan: {
      type: String,
      validator: function () {
        return ["col-span-3", "col-span-4", "col-span-12"];
      },
      default: "col-span-4",
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      contentClasses: computed(() => ({
        "pb-lg": props.icon,
      })),
      blockItemClasses: computed(() => ({
        [`${props.colSpan}`]: true,
      })),
    };
  },
};
</script>