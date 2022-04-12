import Buttons from './Buttons.vue'

export default {
    title: 'Components/Buttons',
    component: Buttons,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_button.scss',
                    code: require('!!raw-loader!../sass/elements/_button.scss')
                },
            ]
        }
    },
    argTypes: {
        label: {
            name: "Label",
            description: "Changes the text of the button",
            control: { type: 'text' },
        },
        pill: {
            name: "Pill",
            description: "Fully rounds the edges of the button",
            control: { type: 'boolean' },
        },
        rounded: {
            name: "Rounded",
            description: "Partially rounds the edges of the button",
            control: { type: 'boolean' },
        },
        lead: {
            name: "Lead",
            description: "Fills the button with the projects lead color",
            control: { type: 'boolean' },
        },
        solid: {
            name: "Solid",
            description: "Gives the button a solid background color",
            control: { type: 'Boolean' },
        },
        icon: {
            name: "Icon",
            description: "Adds an icon to the button",
            control: { type: 'boolean' },
        },
        loadmore: {
            name: "Loadmore",
            description: "Gives the button the necessary values for a loadmore button",
            control: { type: 'boolean' },
        },
    },
    args: {
        label: 'Button',
    }
}

const Template = (args) => ({
    components: { Buttons },
    setup() {
        return { args };
    },
    template: '<buttons v-bind="args" />',
})

export const Primary = Template.bind({});
Primary.parameters = { controls: { include: ['Label', 'Icon'] } };
Primary.args = {
    lead: true,
    pill: false,
    rounded: true,
    label: 'Primary',
};

export const Ghost = Template.bind({});
Ghost.parameters = { controls: { include: ['Label', 'Icon'] } };
Ghost.args = {
    pill: false,
    rounded: true,
    label: 'Ghost',
};

export const Icon = Template.bind({});
Icon.parameters = { controls: { include: ['Label', 'Icon'] } };
Icon.args = {
    pill: false,
    rounded: true,
    icon: true,
    lead: true,
    label: 'Primary',
}

export const LoadMore = Template.bind({});
LoadMore.parameters = { controls: { include: ['Label', 'Icon', 'Lead'] } };
LoadMore.args = {
    pill: false,
    rounded: true,
    lead: true,
    loadmore: true,
    label: 'Load more'
}

export const NotRounded = Template.bind({});
NotRounded.parameters = { controls: { include: ['Label', 'Icon', 'Lead'] } };
NotRounded.args = {
    lead: true,
    pill: false,
    rounded: false,
    label: 'Not rounded'
}

export const Rounded = Template.bind({});
Rounded.parameters = { controls: { include: ['Label', 'Icon', 'Lead'] } };
Rounded.args = {
    lead: true,
    pill: false,
    rounded: true,
    label: 'Rounded'
}

export const Pill = Template.bind({});
Pill.parameters = { controls: { include: ['Label', 'Icon', 'Lead'] } };
Pill.args = {
    lead: true,
    pill: true,
    rounded: false,
    label: 'Pill'
}