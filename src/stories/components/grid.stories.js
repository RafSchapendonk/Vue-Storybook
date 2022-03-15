import Grid from './Grid.vue'

export default {
    title: 'Components/Grid',
    component: Grid,
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
    colCount: 12
}