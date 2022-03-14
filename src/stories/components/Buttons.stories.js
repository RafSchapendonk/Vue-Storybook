import Buttons from './Buttons.vue';

export default {
    title: 'Components/Buttons',
    component: Buttons,
    argTypes: {
    }
}

const Template = (args) => ({
    components: { Buttons },
    setup() {
        return { args };
    },
    template: '<buttons v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
    lead: true,
    label: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
    pill: true,
    label: 'Button',
};

export const Icon = Template.bind({});
Icon.args = {
    icon: true,
    label: 'Button',
}