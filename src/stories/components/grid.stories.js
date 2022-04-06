import Grid from './Grid.vue'

export default {
    title: 'Practice-Components/Grids',
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
        xGap: {
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