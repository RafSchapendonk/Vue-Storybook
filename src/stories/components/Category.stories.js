import Category from './Category.vue';

export default {
    title: 'Components/Category',
    component: Category,
    parameters: {
        
    },

    argTypes: {
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

