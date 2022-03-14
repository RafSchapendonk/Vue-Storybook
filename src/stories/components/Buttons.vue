<template>
  <button href="" type="button" :class="classes">
    {{ label }}
  </button>
</template>

<script>
import "../sass/elements/_button.scss";
import { reactive, computed } from "vue";

export default {
  name: "buttons",

  props: {
    label: {
      type: String,
      required: true,
    },
    pill: {
      type: Boolean,
      default: true,
    },
    lead: {
      type: Boolean,
      default: false,
    },
    solid: {
      type: Boolean,
      default: false,
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
        "btn btn-text": true,
        "btn-solid btn-text--white": props.solid,
        "btn-solid--lead btn-text--white": props.lead,
        "btn-pill": props.pill,
        "btn-transp": !props.solid && !props.lead,
        "btn-text--icon": props.icon,
      })),
    };
  },
};
</script>