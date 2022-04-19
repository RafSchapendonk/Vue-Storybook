import Grid from './Grid.vue'

export default {
    title: 'Components/Grids',
    component: Grid,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_block-element.scss',
                    code: require('!!raw-loader!../sass/elements/_grid.scss')
                },
            ]
        }
    },
    argTypes: {
        colCount: {
            name: "Column count",
            description: "The number of columns in the grid.",
            control: { type: 'select' },
            options: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
            ],
        },
        colSpan: {
            name: "Column span",
            description: "The number of columns the element spans.",
            control: { type: 'select' },
            options: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
            ],
        },
        toggleBottomRow: { 
            name: "Toggle bottom row",
            description: "Adds a second row to the grid.",
            control: { type: 'boolean' },
        },
        responsive: {
            name: "Responsive",
            description: "Adds a responsive class to the grid.",
            control: { type: 'boolean' },
        },
        xGap: {
            name: "X gap",
            description: "The gap between columns.",
            control: { type: 'select' },
            options: [
                "xs",
                "sm",
                "mob",
                "def",
                "md",
                "lg",
                "xl"
            ]
        },
        yGap: {
            name: "Y gap",
            description: "The gap between rows.",
            control: { type: 'select' },
            options: [
                "xs",
                "sm",
                "mob",
                "def",
                "md",
                "lg",
                "xl"
            ]
        },
    }
}

const Template = (args) => ({
    components: { Grid },
    setup() {
        return { args };
    },
    template: '<grid v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
    colCount: 12,
    colSpan: 1,
}

export const Responsive = Template.bind({});
Responsive.parameters = { controls: { exclude: ['colSpan', 'colCount'] } };
Responsive.args = {
    colCount: 12,
    responsive: true,
}