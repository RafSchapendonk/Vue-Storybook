<template>
    <form id="form">
        <Textfield 
            :divId="''" 
            :divClass="divClassesCheckBoxes"

            :componentTag="'input'"
            :componentType="'checkbox'"
            :componentId="'checkBox'"
            :componentName="''"
            :componentValue="''"
            :componentClass="''"

            :ulClasses="'checkBoxes'"
            :liClasses="'check-option'"

            :selectElements="selectElements"
            :error="error"
            :required="'required'" 
            
            labelText="Checkbox"
        />
        <Textfield 
            :divId="''" 
            :divClass="divClassesRadioButtons"

            :componentTag="'input'"
            :componentType="'radio'"
            :componentId="'radioButton'"
            :componentName="''"
            :componentValue="''"
            :componentClass="''"

            :ulClasses="'radioButtons'"
            :liClasses="'radio-option'"

            :selectElements="selectElements"
            :error="error"
            :required="'required'" 

            labelText="Radio button"
        />
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

                :error="error"
                :placeholder="'Input field'"
                :required="'required'" 
                
                :topLabel="topLabel"
                labelText="Input field"
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

                :error="error"
                :placeholder="'Text area'"
                :required="'required'" 
                
                :topLabel="topLabel"
                labelText="Text area"
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

                :error="error"
                :required="'required'" 

                :topLabel="topLabel"
                labelText="Select"
            />
            <Textfield
                :divId="'fileUploadDiv'" 
                :divClass="divClassesFileUpload"

                :componentTag="'input'"
                :componentType="'file'"
                :componentId="'file'"
                :componentName="'file'"
                :componentValue="''"
                :componentClass="componentClassesFileUpload"
                :labelClass="labelClassesFileUpload"

                :error="error"
                :required="'required'" 

                :icon="icon"
                :topLabel="topLabel"
                labelText="File upload"
            />
        </fieldset>
        <div class="actioncontainer">
            <a class="btn btn--pill btn-solid btn-solid--lead" onclick="document.getElementById('form').requestSubmit();return false;">
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
        error: {
            type: Boolean,
            default: false,
        },
        selectElements: {
            type: Number,
            default: 1,
        },
        topLabel: {
            type: Boolean,
            default: false,
        }
    },
    beforeCreate() {
        var scriptSrc = document.getElementById('../js/rbm.handle.js')
        if (scriptSrc) {
            scriptSrc.remove();
            console.log("scriptSrc available");
        } else{
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = '../js/rbm.handle.js';
            script.src = '../js/rbm.handle.js';
            document.body.appendChild(script);
        }
    },
    setup(props) {
        props = reactive(props);
        return {
            divClassesTextField: computed(() => ({
                "textfield": true,
                "icon icon-user": props.icon,
                "mark-error": props.error,
            })),
            divClassesTextArea: computed(() => ({
                "textfield": true,
                "icon icon-comment": props.icon,
                "mark-error": props.error,
            })),
            divClassesSelect: computed(() => ({
                "selectbox": true,
                "icon icon-stroopwafel": props.icon,
                "mark-error": props.error,
            })),
            divClassesFileUpload: computed(() => ({
                "file-upload": true,
                "icon icon-file": props.icon,
                "mark-error": props.error,
            })),
            divClassesCheckBoxes: computed(() => ({
                "check-option": true,
                "mark-error": props.error,
            })),
            divClassesRadioButtons: computed(() => ({
                "radio-option": true,
                "mark-error": props.error,
            })),
            labelClassesFileUpload: computed(() => ({
                "file-upload__label": true,
                "icon": props.icon,
            })),
            componentClassesFileUpload: computed(() => ({
                "inputfile": true,
            })),
        };
    },
}
</script>