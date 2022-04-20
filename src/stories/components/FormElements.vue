<template>
    <div>Howdy</div>
</template>

<script>
import "../sass/elements/_form.scss";
import { reactive, computed } from "vue";

export default {
    name: "FormElements",

    setup(props) {
        props = reactive(props);
        return {};
    }
}
</script>