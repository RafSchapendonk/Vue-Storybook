<template>
    <div class="container">
        <div class="paragraph__grid paragraph__set--half">
            <div :class="imageWrapperClass">
                <img v-if="!video" class="img-full-w" src="https://picsum.photos/id/237/1920/1080">  
                <div v-if="video" class="paragraphs__video">
                    <div class="asp-16x9">
                        <div class="content">
                            <picture>
                                <source srcset="https://picsum.photos/id/237/1920/1080" type="image/webp" />
                                <img class="remove-on-play img-cover"  src="https://picsum.photos/id/237/1920/1080" alt="" />
                            </picture>
                            <div class="playbtn">
                                <i class="fa-light fa-play"></i>
                            </div>
                            <span class="play-video" data-src="https://www.youtube.com/embed/TVtjd7-jYDk?rel=0&showinfo=0&autoplay=1&loop=1&playlist=TVtjd7-jYDk"></span>
                        </div>
                    </div>
                </div>
            </div> 
            <div :class="contentWrapperClass" class="paragraph__content--half paragraph__content--left"> 
                <div> 
                    <h2 class="paragraph__title">Lorem ipsum dolor sit amet, </h2> 
                    <p class="paragraph__text">consectetur adipiscing elit. Nunc pharetra orci ut pulvinar fringilla. Sed imperdiet sodales est. Phasellus venenatis turpis leo, vitae rhoncus tellus finibus et. Donec ornare justo nec bibendum ornare. Maecenas quis blandit enim. Aenean lacus dolor, facilisis sed mauris non, auctor euismod eros.</p> 
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import "../sass/elements/_paragraphs.scss"
import "../sass/elements/_default-classes.scss"
import "../sass/elements/_aspects.scss"
import { reactive, computed } from '@vue/reactivity'

export default {
    name: 'text-with-media',
    props: {
        imageRight: {
            type: Boolean,
            default: true,
        },
        imageLeft: {
            type: Boolean,
            default: false,
        },
        video: {
            type: Boolean,
            default: false,
        },
        overlapRight: {
            type: Boolean,
            default: false,
        },
        overlapLeft: {
            type: Boolean,
            default: false,
        },
    },
    beforeCreate() {
        var scriptSrc = document.getElementById('../js/rbm.handle.js')
        var storybookFrame = document.getElementsByClassName('sb-main-fullscreen')[0]
        if (scriptSrc) {
            scriptSrc.remove();
            console.log("scriptSrc available");
        } else{
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = '../js/rbm.handle.js';
            script.src = '../js/rbm.handle.js';
            storybookFrame.appendChild(script);
        }
    },
    setup(props) {
        props = reactive(props)
        return {
            imageWrapperClass: computed(() => ({
                "paragraph__content--half": true,
                "paragraph__image--right": props.imageRight && !props.imageLeft,
                "paragraph__image--right-overlap": props.overlapRight && !props.overlapLeft,
                "paragraph__image--left": props.imageLeft && !props.imageRight,
                "paragraph__image--left-overlap": props.overlapLeft && !props.overlapRight,
            })),
            contentWrapperClass: computed(() => ({
                "paragraph__content--half": true,
                "paragraph__content--right": props.imageLeft && !props.imageRight,
                "paragraph__content--right-overlap": props.overlapRight && !props.overlapLeft,
                "paragraph__content--left": props.imageRight && !props.imageLeft,
                "paragraph__content--left-overlap": props.overlapLeft && !props.overlapRight,
            })),
        }
    },
}
</script>
