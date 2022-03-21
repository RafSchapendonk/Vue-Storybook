import BlockElement from './BlockElement.vue'

export default {
    title: 'Components/BlockElement',
    component: BlockElement,
    argTypes: {
        colSpan: {
            control: { type: 'select' },
            options: ["col-span-3", "col-span-4", "col-span-12"]
        }
    },
    args: {
        titleFirstBlock: "Hello there",
        contentFirstBlock: "Lorem ipsum dolor sit amet.",
        title: "Howdy",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit odio urna, sed vulputate erat varius eu. Nullam ac lacus at sem feugiat consectetur ut viverra lorem. In pharetra odio est, non suscipit eros suscipit in. Nullam eu arcu non nulla convallis sollicitudin. Vivamus laoreet pellentesque consectetur.",
        extraBlocks: 2
    }
}

const Template = (args) => ({
    components: { BlockElement },
    setup() {
        return { args };
    },
    template: '<blockElement v-bind="args" />',
})

export const Primary = Template.bind({});
// Primary.args = {}

export const Responsive = Template.bind({});
