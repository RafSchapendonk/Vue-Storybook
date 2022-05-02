import SummaryElement from './Summary.vue';

const iconTypes = {
    check: "fa-check",
    arrow: "fa-arrow-right",
    chevron: "fa-chevron-right",
    commit: "fa-code-commit",
    award: "fa-award",
    bullhorn: "fa-bullhorn",
    smile: "fa-face-smile",
    stroopwafel: "fa-stroopwafel",
}

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

    argTypes: {
        iconType: {
            name: "Icon type",
            description: "The type of icon to display.",
            options: Object.keys(iconTypes), // An array of serializable values
            mapping: iconTypes,
            defaultValue: iconTypes.check,
            control: { 
                type: 'select', 
                icons: {
                    check: "Check",
                    arrow: "Arrow",
                    chevron: "Chevron",
                    commit: "Commit",
                    award: "Award",
                    bullhorn: "Bullhorn",
                    smile: "Smile",
                    stroopwafel: "Stroopwafel",
                }
            },
        },
    }
}

const Template = (args) => ({
    components: { SummaryElement },
    setup() {
        return { args };
    },
    template: '<summary-element v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.parameters = { controls: { include: ['listItems', 'label', 'centered'] } };
Primary.args = {
    label: "Summary item with bullet",
    listItems: 5,
    icon: false,
    noBullet: false,
}

export const FontAwesome = Template.bind({});
FontAwesome.parameters = { controls: { include: ['listItems', 'label', 'Icon type', 'centered'] } };
FontAwesome.args = {
    label: "Summary item with fontawesome icon",
    listItems: 5,
    icon: true,
    noBullet: false,
}

export const NoBullets = Template.bind({});
NoBullets.parameters = { controls: { include: ['listItems', 'label', 'centered'] } };
NoBullets.args = {
    label: "Summary item without bullets",
    listItems: 5,
    icon: false,
    noBullet: true,
}

export const Table = Template.bind({});
Table.parameters = { controls: { include: ['listItems', 'label', 'subLabel', 'centered'] } };
Table.args = {
    label: "Summary item in a table",
    subLabel: "Sub item",
    listItems: 5,
    icon: false,
    noBullet: false,
    table: true,
}
