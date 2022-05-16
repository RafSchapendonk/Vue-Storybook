import TextWithMedia from './TextWithMedia.vue'

export default {
    title: 'Components/Paragraphs/TextWithMedia',
    component: TextWithMedia,
    parameters: {
        storybookCodePanel: {
            disabled: false,
            files: [
                {
                    fileName: '_paragraphs.scss',
                    code: require('!!raw-loader!../sass/elements/_paragraphs.scss')
                },
            ]
        }
    },

    argTypes: {
        imageRight: {
            name: "Image Right",
            description: "Image is on the right",
            control: { type: 'boolean' },
        },
        imageLeft: {
            name: "Image Left",
            description: "Image is on the left",
            control: { type: 'boolean' },
        },
        video: {
            name: "Video",
            description: "Places a video instead of an image",
            control: { type: 'boolean' },
        },
        overlapRight: {
            name: "Overlap Right",
            description: "Overlaps the image to the right",
            control: { type: 'boolean' },
        },
        overlapLeft: {
            name: "Overlap Left",
            description: "Overlaps the image to the left",
            control: { type: 'boolean' },
        },
    }
}

const Template = (args) => ({
    components: { TextWithMedia },
    setup() {
        return { args };
    },
    template: '<text-with-media v-bind="args" />',
})

export const ImageRight = Template.bind({})
ImageRight.parameters = { controls: { hideNoControlsWarning: true, include: [] }};
ImageRight.args = {
    imageRight: true,
    imageLeft: false,
}

export const ImageLeft = Template.bind({})
ImageLeft.parameters = { controls: { hideNoControlsWarning: true, include: ['Overlap Right'] }};
ImageLeft.args = {
    imageRight: false,
    imageLeft: true,
    overlapRight: false,
}

export const VideoRight = Template.bind({})
VideoRight.parameters = { controls: { hideNoControlsWarning: true, include: [] }};
VideoRight.args = {
    imageRight: true,
    imageLeft: false,
    video: true,
}

export const VideoLeft = Template.bind({})
VideoLeft.parameters = { controls: { hideNoControlsWarning: true, include: [] }};
VideoLeft.args = {
    imageRight: false,
    imageLeft: true,
    video: true,
}