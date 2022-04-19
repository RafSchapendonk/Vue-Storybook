import Swipers from './Swipers.vue'

export default {
    title: 'Components/Swipers',
    component: Swipers,
}

const Template = (args) => ({
    components: { Swipers },
    setup() {
        return { args };
    },
    template: '<swipers v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
}