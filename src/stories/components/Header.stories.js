import Header from './Header.vue'

export default {
    title: 'Components/Header',
    component: Header,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_header.scss',
                    code: require('!!raw-loader!../sass/elements/_header.scss')
                },
            ]
        }
    },
    argTypes: {

    },
    args: {

    },
}

const Template = (args) => ({
    components: { Header },
    setup() {
        return { args };
    },
    template: '<header v-bind="args" />',
})

export const Primary = Template.bind({});