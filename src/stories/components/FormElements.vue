<template>
    <form id="form">
        <div class="checkBoxes">
            <Textfield 
                :divId="''" 
                :divClass="'check-option'"

                :componentTag="'input'"
                :componentType="'checkbox'"
                :componentId="'checkBox'"
                :componentName="''"
                :componentValue="''"
                :componentClass="''"
                :required="'required'" 

                labelText="Howdy"
            />
            <Textfield 
                :divId="''" 
                :divClass="'check-option'"

                :componentTag="'input'"
                :componentType="'checkbox'"
                :componentId="'checkBox2'"
                :componentName="''"
                :componentValue="''"
                :componentClass="''"
                :required="'required'" 

                labelText="Howdy"
            />
        </div>
        <div class="radioButtons">
            <Textfield 
                :divId="''" 
                :divClass="'radio-option'"

                :componentTag="'input'"
                :componentType="'radio'"
                :componentId="'radioButton'"
                :componentName="''"
                :componentValue="''"
                :componentClass="''"
                :required="'required'" 

                labelText="Howdy"
            />
            <Textfield 
                :divId="''" 
                :divClass="'radio-option'"

                :componentTag="'input'"
                :componentType="'radio'"
                :componentId="'radioButton2'"
                :componentName="''"
                :componentValue="''"
                :componentClass="''"
                :required="'required'" 

                labelText="Howdy"
            />
        </div>
        <fieldset>
            <Textfield 
                :divId="'input'" 
                :divClass="divClassesTextField"

                :componentTag="'input'"
                :componentType="'text'"
                :componentId="'inputField'"
                :componentName="'textField'"
                :componentValue="''"
                :componentClass="componentClasses"
                :placeholder="'Input field'"
                :required="'required'" 

                labelText="Howdy"
            />
            <Textfield 
                :divId="'textFieldDiv'" 
                :divClass="divClassesTextArea"

                :componentTag="'textarea'"
                :componentType="'text'"
                :componentId="'textarea'"
                :componentName="'textarea'"
                :componentValue="''"
                :componentClass="componentClasses"
                :placeholder="'Text area'"
                :required="'required'" 
                
                labelText="Howdy"
            />
            <Textfield 
                :divId="'selectDiv'" 
                :divClass="divClassesSelect"

                :componentTag="'select'"
                :componentType="'select'"
                :componentId="'select'"
                :componentName="'select'"
                :componentValue="''"
                :componentClass="componentClasses"
                :required="'required'" 

                labelText="Howdy"
            />
            <Textfield
                :divId="'fileUploadDiv'" 
                :divClass="divClassesFileUpload"

                :componentTag="'input'"
                :componentType="'file'"
                :componentId="'file'"
                :componentName="'file'"
                :componentValue="''"
                :componentClass="componentClasses"
                :labelClass="labelClassesFileUpload"
                :required="'required'" 

                :icon="icon"
                labelText="Howdy"
            />
        </fieldset>
        <div class="actioncontainer">
            <a class="btn btn--pill btn-solid btn-solid--lead" onclick=" document.getElementById('form').requestSubmit();return false;">
                Bericht versturen
            </a>
        </div>
    </form>
</template>

<script>
import { reactive, computed } from "vue";
import Textfield from "./FormTextfieldElement.vue";
import "../sass/elements/_form-element.scss";

export default {
    name: "FormElements",
    components: {
        Textfield
    },
    props: {
        icon: {
            type: Boolean,
            default: false,
        },
        rounded: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        props = reactive(props);
        return {
            divClassesTextField: computed(() => ({
                "textfield": true,
                "icon icon-user": props.icon,
            })),
            divClassesTextArea: computed(() => ({
                "textfield": true,
                "icon icon-comment": props.icon,
            })),
            divClassesSelect: computed(() => ({
                "selectbox": true,
                "icon icon-stroopwafel": props.icon,
            })),
            divClassesFileUpload: computed(() => ({
                "file-upload": true,
                "icon icon-file": props.icon,
            })),
            labelClassesFileUpload: computed(() => ({
                "file-upload__label": true,
                "icon": props.icon,
            })),
            componentClasses: computed(() => ({
                "rounded": props.rounded,
            })),
        };
    },
}
</script>