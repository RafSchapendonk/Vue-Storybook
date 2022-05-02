<template>
  <ul v-if="!table" class="summary__ul" :class="ulClassList">
    <li v-for="item in listItems" :key="item" :class="liClassList">
      <i v-if="icon" :class="iconClassList"></i>
      <p>{{ label }}</p>
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
    iconType: {
      type: String,
      validator: function () {
        return ["fa-check", "fa-arrow-right", "fa-chevron-right", "fa-code-commit", "fa-award", "fa-bullhorn", "fa-face-smile", "fa-stroopwafel"];
      },
      default: "fa-check",
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
        "summary__li": true,
        "summary__li--icon": props.icon,
      })),
      iconClassList: computed(() => ({
        "fa-regular": true,
        [`${props.iconType}`]: props.icon,
      })),
    };
  },
};
</script>
