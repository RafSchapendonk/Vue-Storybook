import Swiper from './Swiper.vue'

export default {
    title: 'Practice-Components/Swipers/Primary',
    component: Swiper,
}

const Template = (args) => ({
    components: { Swiper },
    setup() {
        return { args };
    },
    template: '<swiper v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
}