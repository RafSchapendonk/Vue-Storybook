<template>
  <div class="grid-container">
    <div v-for="item in colWidth" class="grid__card" :key="item">
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
import { reactive } from "vue";

export default {
  name: "gridtest2",

  props: {
    colCount: {
      type: Number,
      validator: function () {
        return 12;
      },
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      colWidth: props.colCount,
    };
  },
};
</script>

<style lang="scss">
.grid-container {
  @apply grid grid-cols-12 gap-x-mob;
}
.grid__card {
  @apply grid text-white bg-lead justify-items-center items-center col-span-1 font-fontTitle font-bold text-h2 h-3xl;
}
</style>