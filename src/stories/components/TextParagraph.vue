<template>
    <div v-if="primary && !twocolParagraph" class="paragraph__overview paragraph__overview--default">
        <div class="container">
            <div class="paragraph__grid">
                <div class="paragraph__content--full">
                    <h4>Lorem ipsum dolor sit amet,</h4>
                    <p>consectetur adipiscing elit. Vestibulum tincidunt, sem eu bibendum pretium, felis lorem molestie est, eu porttitor ligula velit vitae dolor. Maecenas mauris sapien, suscipit eget urna vel, rhoncus accumsan sapien. Sed id ullamcorper elit. Praesent consectetur, nisl posuere suscipit euismod, sem diam consequat ipsum, aliquet pellentesque lectus arcu non lacus. Fusce justo ex, viverra id tortor quis, euismod interdum felis. Suspendisse in risus mollis, tincidunt ex et, luctus mi. Nam varius augue non gravida malesuada. In ultrices bibendum vulputate. Aenean iaculis fringilla magna a faucibus. Mauris ut convallis leo, a tristique metus.</p>
                </div>
            </div>
        </div>
    </div>

    <div v-if="twocolParagraph && !primary"  class="paragraph-item__twocol"> 
        <div class="paragraph-item__content">
            <div class="paragraph-item__paragraphs">
                <div class="paragraph-item__paragraphs--row">
                    <h4 class="paragraph-item__title">Lorem ipsum dolor sit amet,</h4>
                    <p>consectetur adipiscing elit. Vestibulum tincidunt, sem eu bibendum pretium, felis lorem molestie est, eu porttitor ligula velit vitae dolor. Maecenas mauris sapien, suscipit eget urna vel, rhoncus accumsan sapien. Sed id ullamcorper elit. Praesent consectetur, nisl posuere suscipit euismod, sem diam consequat ipsum, aliquet pellentesque lectus arcu non lacus. Fusce justo ex, viverra id tortor quis, euismod interdum felis. Suspendisse in risus mollis, tincidunt ex et, luctus mi. Nam varius augue non gravida malesuada. In ultrices bibendum vulputate. Aenean iaculis fringilla magna a faucibus. Mauris ut convallis leo, a tristique metus.</p>
                </div>
                <div class="paragraph-item__paragraphs--row">
                    <h4 class="paragraph-item__title">Lorem ipsum dolor sit amet,</h4>
                    <p>consectetur adipiscing elit. Vestibulum tincidunt, sem eu bibendum pretium, felis lorem molestie est, eu porttitor ligula velit vitae dolor. Maecenas mauris sapien, suscipit eget urna vel, rhoncus accumsan sapien. Sed id ullamcorper elit. Praesent consectetur, nisl posuere suscipit euismod, sem diam consequat ipsum, aliquet pellentesque lectus arcu non lacus. Fusce justo ex, viverra id tortor quis, euismod interdum felis. Suspendisse in risus mollis, tincidunt ex et, luctus mi. Nam varius augue non gravida malesuada. In ultrices bibendum vulputate. Aenean iaculis fringilla magna a faucibus. Mauris ut convallis leo, a tristique metus.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../sass/elements/_paragraphs.scss"
import "../sass/elements/_default-classes.scss"
import { reactive, computed } from '@vue/reactivity'

export default {
    name: 'text-paragraph',
    props: {
        primary: {
            type: Boolean,
            default: false
        },
        twocolParagraph: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        props = reactive(props)
        return {

        }
    },
}
</script>
