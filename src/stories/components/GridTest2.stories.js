import GridTest2 from './GridTest2.vue'

export default {
    title: 'Components/TestGrids/GridsTest2',
    component: GridTest2,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_block-element.scss',
                    code: require('!!raw-loader!./GridTest2.vue'),
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
    components: { GridTest2 },
    setup() {
        return { args };
    },
    template: '<GridTest2 v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
    colCount: 12
}