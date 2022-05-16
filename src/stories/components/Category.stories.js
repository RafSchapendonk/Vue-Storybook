import Category from './Category.vue';

export default {
    title: 'Components/Category',
    component: Category,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_button.scss',
                    code: require('!!raw-loader!../sass/elements/_button.scss')
                },
                {
                    fileName: '_category.scss',
                    code: require('!!raw-loader!../sass/elements/_category.scss')
                }
            ]
        }
    },

    argTypes: {
        categoryItems: {
            name: "Category items",
            description: "Adds an item to the categories",
            control: { type: 'number' },
        },
        pill: {
            name: "Pill",
            description: "Fully rounds the edges of the category item (only works when Rounded is set to false)",
            control: { type: 'boolean' },
        },
        rounded: {
            name: "Rounded",
            description: "Partially rounds the edges of the category item (only works when Pill is set to false)",
            control: { type: 'boolean' },
        },
        icon: {
            name: "Icon",
            description: "Adds an icon to the category item",
            control: { type: 'boolean' },
        }
    },
}

const Template = (args) => ({
    components: { Category },
    setup() {
        return { args };
    },
    template: '<category v-bind="args" />',
})

export const Primary = Template.bind({})

export const Icon = Template.bind({})
Icon.parameters = { controls: { exclude: ['Icon'] } };
Icon.args = {
    pill: false,
    rounded: true,
    icon: true,
}

export const Pill = Template.bind({})
Pill.parameters = { controls: { exclude: ['Pill', 'Rounded'] } };
Pill.args = {
    pill: true,
    rounded: false,
}