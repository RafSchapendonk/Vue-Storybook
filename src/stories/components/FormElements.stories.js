import FormElements from './FormElements.vue';

export default {
    title: 'Components/FormElements',
    component: FormElements,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_form.scss',
                    code: require('!!raw-loader!../sass/elements/_form.scss')
                }     
            ]
        }
    },
}

const Template = (args) => ({
    components: { FormElements },
    setup() {
        return { args };
    },
    template: '<form-elements v-bind="args" />'
});

export const Pimary = Template.bind({});
