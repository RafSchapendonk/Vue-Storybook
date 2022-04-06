<template>
  <div :class="classesGrid">
    <div v-for="item in colWidth" :class="classesCard" :key="item">
      <h2>{{ item }}</h2>
    </div>
    <div
      v-if="toggleBottomRow"
      v-for="item in colWidth"
      :class="classesCard"
      :key="item"
    >
      <h2>{{ item }}</h2>
    </div>
  </div>
</template>

<script>
import "../sass/elements/_grid.scss";
import { reactive, computed } from "vue";

export default {
  name: "grid",

  props: {
    colCount: {
      type: Number,
      validator: function () {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      },
    },
    colSpan: {
      type: Number,
      validator: function () {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      },
    },
    xGap: {
      type: String,
      validator: function () {
        return ["xs", "sm", "mob", "def", "md", "lg", "xl"];
      },
    },
    toggleBottomRow: {
      type: Boolean,
      default: false,
    },
    yGap: {
      type: String,
      validator: function () {
        return ["xs", "sm", "mob", "def", "md", "lg", "xl"];
      },
    },
    responsive: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      colWidth: props.colCount,
      classesGrid: computed(() => ({
        grids: true,
        [`grid-cols-${props.colCount || "12"}`]: true,
        [`gap-x-${props.xGap || "def"}`]: true,
        [`gap-y-${props.yGap || "def"}`]: true,
      })),
      classesCard: computed(() => ({
        card: true,
        [`col-span-${props.colSpan || "1"}`]: true,
        responsive: props.responsive,
      })),
    };
  },
};
</script>
