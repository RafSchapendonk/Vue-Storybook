import Swipers from './Swipers.vue'

export default {
    title: 'Components/Swipers',
    component: Swipers,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_default-overview.scss',
                    code: require('!!raw-loader!../sass/elements/_default-overview.scss')
                },
                {
                    fileName: '_swiper.scss',
                    code: require('!!raw-loader!../sass/elements/_swiper.scss')
                }
            ]
        }
    },
}

const Template = (args) => ({
    components: { Swipers },
    setup() {
        return { args };
    },
    template: '<swipers v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.parameters = {
    controls: { hideNoControlsWarning: true },
}
