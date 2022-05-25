<template>
    <div v-if="componentType != 'checkbox' && componentType != 'radio'" :id="divId" :class="divClass">
        <label v-if="topLabel" class="field__label" :for="componentId">{{ labelText }}</label>
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
        <label :class="labelClass" v-if="componentType === 'file'" :for="componentId">
            <i v-if="icon" class="fa fa-cloud-upload"></i>
            <em>Select a file...</em>
        </label>
        <span v-if="error">Dit is een verplicht veld</span>
    </div>

    <div v-if="componentType == 'checkbox' || componentType == 'radio'" :class="divClass" class="type-check">
        <ul :class="ulClasses">
            <li v-for="index in selectElements" :key="index" :class="liClasses">
                <component
                    :is="componentTag"
                    :type="componentType"
                    :id="componentId + index"
                    name="drone"
                    :value="componentValue"
                    :class="componentClass"
                    :placeholder="placeholder"
                    :required="required"
                >
                </component>
                <label class="form" :for="componentId  + index">{{ labelText }}</label>
            </li>
        </ul>
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
        divTag: {
            type: Object,
            default: "div"
        },
        componentTag: {
            type: Object,
            default: ""
        },
        labelText: {
            type: String,
            default: ""
        },
        labelClass: {
            type: String,
            default: ""
        },
        ulClasses: {
            type: String,
            default: ""
        },
        liClasses: {
            type: String,
            default: ""
        },
        selectElements: {
            type: Number,
            default: 1
        },
        icon: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        },
        topLabel: {
            type: Boolean,
            default: false
        }
    },
}
</script>