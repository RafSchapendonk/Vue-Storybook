<template>
  <ul v-if="!table" class="summary__ul" :class="ulClassList">
    <li v-for="item in listItems" :key="item" :class="liClassList">
      <i v-if="icon" class="fa-solid fa-check"></i>
      <h4>{{ label }}</h4>
    </li>
  </ul>

  <dl v-if="table">
    <template v-for="item in listItems" :key="item">
      <dt>{{ label }}</dt>
      <dd>{{ subLabel }}</dd>
    </template>
  </dl>
</template>

<script>
import "../sass/elements/_summary.scss";
import { reactive, computed } from "vue";

export default {
  name: "summary-element",

  props: {
    label: {
      type: String,
    },
    subLabel: {
      type: String,
    },
    listItems: {
      type: Number,
    },
    icon: {
      type: Boolean,
    },
    noBullet: {
      type: Boolean,
    },
    table: {
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
