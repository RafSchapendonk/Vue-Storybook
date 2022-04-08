import HeaderElement from './Header.vue'

const headerScrollTypes = {
    none: {
        name: "none",
        class: "",
    },
    headerShrink: {
        name: "headerShrink",
        class: "header--shrink",
    },
    headerTransparent: {
        name: "headerTransparent",
        class: "header--transparent",
    },
};

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
                {
                    fileName: '_language.scss',
                    code: require('!!raw-loader!../sass/elements/_language.scss')
                }
            ]
        }
    },

    argTypes: {
        headerScrollType: {
            options: Object.keys(headerScrollTypes), // An array of serializable values
            mapping: headerScrollTypes, // Maps serializable option values to complex arg values
            defaultValue: headerScrollTypes.none.name,
            control: {
                type: 'select', // Type 'select' is automatically inferred when 'options' is defined
                labels: {
                    // 'labels' maps option values to string labels
                    none: 'None',
                    headerShrink: 'Header shrink on scroll',
                    headerTransparent: 'Header transparent on scroll',
                },
            },
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
Primary.parameters = { controls: { exclude: ['primary', 'center'] } };
Primary.args = {
    primary: true,
    center: false,
    languageSwitch: false,
    headerScrollType: headerScrollTypes.none.name,
}

export const Center = Template.bind({});
Center.parameters = { controls: { exclude: ['primary', 'center'] } };
Center.args = {
    primary: false,
    center: true,
    languageSwitch: false,
    headerScrollType: headerScrollTypes.none.name,
}

export const ShrinkOnScroll = Template.bind({});
ShrinkOnScroll.parameters = { controls: { exclude: ['primary', 'center'] } };
ShrinkOnScroll.args = {
    primary: true,
    center: false,
    languageSwitch: false,
    headerScrollType: headerScrollTypes.headerShrink.name,
}

export const TransparentOnScroll = Template.bind({});
TransparentOnScroll.parameters = { controls: { exclude: ['primary', 'center', 'headerShrink'] } };
TransparentOnScroll.args = {
    primary: true,
    center: false,
    languageSwitch: false,
    headerScrollType: headerScrollTypes.headerTransparent.name
}