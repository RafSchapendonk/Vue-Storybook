import BlockElement from './BlockElement.vue'

export default {
    title: 'Components/BlockElement',
    component: BlockElement,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_block-element.scss',
                    code: require('!!raw-loader!../sass/elements/_block-element.scss')
                },
            ]
        }
    },
    argTypes: {
        titleFirstBlock: {
            name: "Title first block",
            description: "Title of the first block element in the grid.",
            control: { type: 'text' },
        },
        contentFirstBlock: {
            name: "Content first block",
            description: "Content of the first block element in the grid.",
            control: { type: 'text' },
        },
        title: {
            name: "Title",
            description: "Title of every block after the first block element.",
            control: { type: 'text' },
        },
        content: {
            name: "Content",
            description: "Content of every block after the first block element.",
            control: { type: 'text' },
        },
        extraBlocks: {
            name: "Extra blocks",
            description: "The amount of block elements that are added.",
            control: { type: 'number' },
        },
        image: {
            name: "Image",
            description: "Switch that adds an image ontop of all block elements.",
            control: { type: 'boolean' }
        },
        icon: {
            name: "Icon",
            description: "Switch that adds an icon at the bottom of all block elements.",
            control: { type: 'boolean' }
        },
        category: {
            name: "Category",
            description: "Switch that adds a category inside of all block elements.",
            control: { type: 'boolean' }
        },
        categoryText: {
            name: "Category text",
            description: "Text that is inside of the category label.",
            control: { type: 'text' }
        },
        imageBackground: {
            name: "Image background",
            description: "Switch that adds a background image to the block element.",
            control: { type: 'boolean' }
        },
        responsive: {
            name: "Responsive",
            description: "Switch that gives every block element a responsive class. If set to true this switch also disables the ability to edit the 'Block span' control.",
            control: { type: 'boolean' }
        },
        colSpan: {
            name: "Block span",
            description: "Determines how many columns a block element spans.",
            control: { type: 'select' },
            options: ["col-span-3", "col-span-4", "col-span-6", "col-span-12"],
        },
        blockBorder: {
            name: "Block border radius",
            description: "Gives the block element a border-radius.",
            control: { type: 'select' },
            options: ["rounded-none", "rounded-t-2xl", "rounded-b-2xl", "rounded-2xl"]
        },
        imgBorder: {
            name: "Image border radius",
            description: "Gives the image insed the block element a border-radius.",
            control: { type: 'select' },
            options: ["rounded-none", "rounded-t-2xl", "rounded-b-2xl", "rounded-2xl"]
        },
    },
    args: {
        titleFirstBlock: "Hello there",
        contentFirstBlock: "Lorem ipsum dolor sit amet.",
        title: "Title",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit odio urna, sed vulputate erat varius eu. Nullam ac lacus at sem feugiat consectetur ut viverra lorem. In pharetra odio est, non suscipit eros suscipit in. Nullam eu arcu non nulla convallis sollicitudin. Vivamus laoreet pellentesque consectetur.",
        extraBlocks: 5
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

export const Responsive = Template.bind({});
Responsive.parameters = { controls: { exclude: ['colSpan'] } };
Responsive.args = {
    responsive: true
}

export const WithImage = Template.bind({});
WithImage.args = {
    image: true,
    responsive: true
}

export const WithBackgroundImage = Template.bind({});
WithBackgroundImage.args = {
    imageBackground: true,
    responsive: true
}

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: true,
    responsive: true
}

export const WithCategory = Template.bind({}); 
WithCategory.args = {
    category: true,
    categoryText: "Block with category",
    responsive: true
}
