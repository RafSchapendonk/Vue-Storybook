<template>
    <div :id="divId" :class="divClass">
        <label v-if="componentType != 'checkbox' && componentType != 'radio'" class="form" :for="componentId">{{ labelText }}</label>
        <component
            :is="componentTag"
            :type="componentType"
            :id="componentId"
            :name="componentName"
            :value="componentValue"
            :class="componentClass"
            :placeholder="placeholder"
            :required="required"
        >
            <template v-if="componentTag === 'select'">
                <option value="" disabled selected hidden>Select box</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </template>
        </component>
        <label v-if="componentType === 'checkbox' || componentType === 'radio'" class="form" :for="componentId">{{ labelText }}</label>
        <label class="file-upload__label" v-if="componentType === 'file'" :for="componentId">
            <i v-if="icon" class="fa fa-cloud-upload"></i>
            <p> test</p>
        </label>
    </div>
</template>

<script>
export default {
    name: "FormTextfieldElement",
    props: {
        divId: {
            type: Object,
            default: ""
        },
        divClass: {
            type: Object,
            default: ""
        },
        componentType: {
            type: Object,
            default: ""
        },
        componentId: {
            type: Object,
            default: ""
        },
        componentName: {
            type: Object,
            default: ""
        },
        componentValue: {
            type: Object,
            default: ""
        },
        componentClass: {
            type: Object,
            default: ""
        },
        placeholder: {
            type: Object,
            default: ""
        },
        required: {
            type: Object,
            default: ""
        },
        componentTag: {
            type: Object,
            default: ""
        },
        labelText: {
            type: String,
            default: ""
        },
        icon: {
            type: Boolean,
            default: false
        }
    },
}
</script>