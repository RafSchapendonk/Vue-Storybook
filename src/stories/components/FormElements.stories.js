import FormElements from './FormElements.vue'

export default {
    title: 'Components/FormElements',
    component: FormElements,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_form-element.scss',
                    code: require('!!raw-loader!../sass/elements/_form-element.scss')
                },
            ]
        }
    },
    argTypes: {
        icon: {
            name: "Icon",
            description: "Adds an icon to the input field",
            control: { type: 'boolean' },
        },
        rounded: {
            name: "Rounded",
            description: "Fully rounds off the border of the input field",
            control: { type: 'boolean' },
        },
        topLabel: {
            name: "Top Label",
            description: "Adds a label above the input field",
            control: { type: 'boolean' },
        },
    }
}

const Template = (args) => ({
    components: { FormElements },
    setup() {
        return { args };
    },
    template: '<formElements v-bind="args" />',
});

export const Primary = Template.bind({});
