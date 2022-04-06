import SummaryElement from './Summary.vue';

export default {
    title: 'Components/Summary',
    component: SummaryElement,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_summary.scss',
                    code: require('!!raw-loader!../sass/elements/_summary.scss')
                },
            ]
        }
    },
}

const Template = (args) => ({
    components: { SummaryElement },
    setup() {
        return { args };
    },
    template: '<summary-element v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.parameters = { controls: { include: ['listItems'] } };
Primary.args = {
    listItems: 5,
    icon: false,
    noBullet: false,
}

export const FontAwesome = Template.bind({});
FontAwesome.parameters = { controls: { include: ['listItems'] } };
FontAwesome.args = {
    listItems: 5,
    icon: true,
    noBullet: false,
}

export const NoBullets = Template.bind({});
NoBullets.parameters = { controls: { include: ['listItems'] } };
NoBullets.args = {
    listItems: 5,
    icon: false,
    noBullet: true,
}
