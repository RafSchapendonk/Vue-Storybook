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
Primary.parameters = { controls: { include: ['listItems', 'label'] } };
Primary.args = {
    label: "Summary item with bullet",
    listItems: 5,
    icon: false,
    noBullet: false,
}

export const FontAwesome = Template.bind({});
FontAwesome.parameters = { controls: { include: ['listItems', 'label'] } };
FontAwesome.args = {
    label: "Summary item with fontawesome icon",
    listItems: 5,
    icon: true,
    noBullet: false,
}

export const NoBullets = Template.bind({});
NoBullets.parameters = { controls: { include: ['listItems', 'label'] } };
NoBullets.args = {
    label: "Summary item without bullets",
    listItems: 5,
    icon: false,
    noBullet: true,
}

export const Tabel = Template.bind({});
Tabel.parameters = { controls: { include: ['listItems', 'label', 'subLabel'] } };
Tabel.args = {
    label: "Summary item in a tabel",
    subLabel: "Sub item",
    listItems: 5,
    icon: false,
    noBullet: false,
    table: true,
}
