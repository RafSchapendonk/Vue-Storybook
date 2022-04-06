import GridTest3 from './GridTest3.vue'

export default {
    title: 'Components/TestGrids/GridsTest3',
    component: GridTest3,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_block-element.scss',
                    code: require('!!raw-loader!./GridTest3.vue'),
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
    }
}

const Template = (args) => ({
    components: { GridTest3 },
    setup() {
        return { args };
    },
    template: '<GridTest3 v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
    colCount: 12
}