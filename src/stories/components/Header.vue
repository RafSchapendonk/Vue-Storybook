<template>
  <div>test</div>
</template>

<script>
// import "../sass/elements/_header.scss";
import { reactive, computed } from "vue";

export default {
  name: "header",

  setup(props) {
    props = reactive(props);
    return {};
  },
};
</script>