import FooterElement from './Footer.vue';

export default {
    title: 'Components/Footer',
    component: FooterElement,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_footer.scss',
                    code: require('!!raw-loader!../sass/elements/_footer.scss')
                },
            ]
        }
    },
}

const Template = (args) => ({
    components: { FooterElement },
    setup() {
        return { args };
    },
    template: '<footer-element v-bind="args" />',
})

export const Primary = Template.bind({})