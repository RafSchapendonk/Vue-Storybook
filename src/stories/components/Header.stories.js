import HeaderElement from './Header.vue'

export default {
    title: 'Components/Header',
    component: HeaderElement,
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
}

const Template = (args) => ({
    components: { HeaderElement },
    setup() {
        return { args };
    },
    template: '<header-element v-bind="args" />',
})

export const Primary = Template.bind({});
Primary.args = {
    primary: true
}

export const Center = Template.bind({});
Center.args = {
    primary: false,
    center: true
}