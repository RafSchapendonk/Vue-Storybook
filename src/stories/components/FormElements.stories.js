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
        topLabel: {
            name: "Top Label",
            description: "Adds a label above the input field",
            control: { type: 'boolean' },
        },
        error: {
            name: "Error",
            description: "Adds an error message below the input field",
            control: { type: 'boolean' },
        },
        selectElements: {
            name: "Select elements",
            description: "The number of select elements in the form",
            control: { type: 'select' },
            options: [
                1,
                2,
                3,
                4,
                5,
            ],
        },
        scalable: {
            name: "Scalable",
            description: "Makes the textarea scale with the text inside (requires page reload)",
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

export const LabelTop = Template.bind({});
LabelTop.args = {
    topLabel: true,
};

export const Icons = Template.bind({});
Icons.args = {
    icon: true,
};

export const Scalable = Template.bind({});
Scalable.args = {
    scalable: true,
};

export const Error = Template.bind({});
Error.args = {
    error: true
}
