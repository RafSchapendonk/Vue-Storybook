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
        primary: {
            name: "Primary",
            description: "Aligns the logo to the left and the navigation items to the right.",
            control: { type: 'boolean' },
        },
        center: {
            name: "Center",
            description: "Centers the logo and the navigation items.",
            control: { type: 'boolean' },
        },
        languageSwitch: {
            name: "Language switch",
            description: "Adds a language switch to the top navigation and mobile menu.",
            control: { type: 'boolean' },
        },
        phoneNumber: {
            name: "Phone number",
            description: "Adds a phone number to the top navigation and mobile menu.",
            control: { type: 'boolean' },
        },
        contentFiller: {
            name: "Content filler",
            description: "Adds a filler element to the content area.",
            control: { type: 'boolean' },
            defaultValue: true,
        },
        headerScrollType: {
            name: "Header scroll type",
            description: "Determines the scroll behaviour of the header (Note: Not available in seperate canvas).",
            options: Object.keys(headerScrollTypes), // An array of serializable values
            mapping: headerScrollTypes, // Maps serializable option values to complex arg values
            defaultValue: headerScrollTypes.none,
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
Primary.parameters = { controls: { exclude: ['Primary', 'Center', 'Content filler'] } };
Primary.args = {
    primary: true,
    center: false,
    languageSwitch: false,
    phoneNumber: false,
    headerScrollType: headerScrollTypes.none.name,
}

export const Center = Template.bind({});
Center.parameters = { controls: { exclude: ['Primary', 'Center', 'Content filler'] } };
Center.args = {
    primary: false,
    center: true,
    languageSwitch: false,
    phoneNumber: false,
    headerScrollType: headerScrollTypes.none.name,
}

export const ShrinkOnScroll = Template.bind({});
ShrinkOnScroll.parameters = { controls: { exclude: ['Primary', 'Center', 'Header scroll type', 'Content filler'] } };
ShrinkOnScroll.args = {
    primary: true,
    center: false,
    languageSwitch: false,
    phoneNumber: false,
    headerScrollType: headerScrollTypes.headerShrink.name,
}

export const TransparentOnScroll = Template.bind({});
TransparentOnScroll.parameters = { controls: { exclude: ['Primary', 'Center', 'Header scroll type', 'Content filler'] } };
TransparentOnScroll.args = {
    primary: true,
    center: false,
    languageSwitch: false,
    headerScrollType: headerScrollTypes.headerTransparent,
}