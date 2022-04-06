<template>
  <ul class="summary__ul" :class="ulClassList">
    <li v-for="item in listItems" :key="item" :class="liClassList">
      <i v-if="icon" class="fa-solid fa-check"></i>
      <h4>Howdy</h4>
    </li>
  </ul>
</template>

<script>
import "../sass/elements/_summary.scss";
import { reactive, computed } from "vue";

export default {
  name: "summary-element",

  props: {
    listItems: {
      type: Number,
    },
    icon: {
      type: Boolean,
    },
    noBullet: {
      type: Boolean,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      ulClassList: computed(() => ({
        "fa-ul": props.icon,
        "summary__ul--no-bullet": props.noBullet,
      })),
      liClassList: computed(() => ({
        "summary__li--icon": props.icon,
      })),
    };
  },
};
</script>
