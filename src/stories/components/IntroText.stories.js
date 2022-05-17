import IntroText from './IntroText.vue'

export default {
    title: 'Components/Headers/Header',
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

    argTypes: {
        gradient: {
            name: "Gradient",
            description: "Adds a gradient to the the header (only works when Overlay is set to false).",
            control: { type: 'boolean' },
        },
        overlay: {
            name: "Overlay",
            description: "Adds an overlay to the header (only works when Gradient is set to false).",
            control: { type: 'boolean' },
        },
        uspItems: {
            name: "USP Items",
            description: "Adds USP items to the header.",
            control: { type: 'boolean' },
        },
        navigation: {
            name: "Navigation",
            description: "Adds navigation to the header.",
            control: { type: 'boolean' },
        },
    }
}

const Template = (args) => ({
    components: { IntroText },
    setup() {
        return { args };
    },
    template: '<intro-text v-bind="args" />',
})

export const Primary = Template.bind({})

export const Gradient = Template.bind({})
Gradient.args = {
    gradient: true,
}

export const Overlay = Template.bind({})
Overlay.args = {
    overlay: true,
    gradient: false,
}

export const USP = Template.bind({})
USP.args = {
    uspItems: true,
    gradient: true,
}
