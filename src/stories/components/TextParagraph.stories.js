import TextParagraph from './TextParagraph.vue'

export default {
    title: 'Components/Paragraphs/Text',
    component: TextParagraph,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_paragraphs.scss',
                    code: require('!!raw-loader!../sass/elements/_paragraphs.scss')
                },
                {
                    fileName: '_default-classes.scss',
                    code: require('!!raw-loader!../sass/elements/_default-classes.scss')
                },
            ]
        }
    },

    argTypes: {
    }
}

const Template = (args) => ({
    components: { TextParagraph },
    setup() {
        return { args };
    },
    template: '<text-paragraph v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.parameters = { controls: { hideNoControlsWarning: true, include: [] }};
Primary.args = {
    primary: true,
    twocolParagraph: false
}

export const TwocolParagraphs = Template.bind({})
TwocolParagraphs.parameters = { controls: { hideNoControlsWarning: true, include: [] }};
TwocolParagraphs.args = {
    primary: false,
    twocolParagraph: true
}