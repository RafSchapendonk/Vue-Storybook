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
}

const Template = (args) => ({
    components: { Buttons },
    setup() {
        return { args };
    },
    template: '<buttons v-bind="args" />',
})

export const Primary = Template.bind({});
Primary.parameters = { controls: { include: ['label', 'icon'] } };
Primary.args = {
    lead: true,
    pill: true,
    rounded: false,
    label: 'Primary',
};

export const Ghost = Template.bind({});
Ghost.parameters = { controls: { include: ['label', 'icon'] } };
Ghost.args = {
    pill: true,
    rounded: false,
    label: 'Ghost',
};

export const Icon = Template.bind({});
Icon.parameters = { controls: { include: ['label', 'lead'] } };
Icon.args = {
    pill: true,
    rounded: false,
    icon: true,
    lead: true,
    label: 'Primary',
}

export const LoadMore = Template.bind({});
LoadMore.parameters = { controls: { include: ['label', 'icon', 'lead'] } };
LoadMore.args = {
    pill: true,
    rounded: false,
    lead: true,
    loadmore: true,
    label: 'Load more'
}

export const Rounded = Template.bind({});
Rounded.parameters = { controls: { include: ['label', 'icon', 'lead'] } };
Rounded.args = {
    lead: true,
    pill: false,
    rounded: true,
    label: 'Rounded'
}

export const Pill = Template.bind({});
Pill.parameters = { controls: { include: ['label', 'icon', 'lead'] } };
Pill.args = {
    lead: true,
    pill: true,
    rounded: false,
    label: 'Pill'
}