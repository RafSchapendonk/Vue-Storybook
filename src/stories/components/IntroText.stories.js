import IntroText from './IntroText.vue'

export default {
    title: 'Components/IntroText',
    component: IntroText,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_headers.scss',
                    code: require('!!raw-loader!../sass/elements/_headers.scss')
                },
            ]
        }
    },
}

const Template = (args) => ({
    components: { IntroText },
    setup() {
        return { args };
    },
    template: '<intro-text :v-bind="args" />',
})

export const Primary = Template.bind({})
