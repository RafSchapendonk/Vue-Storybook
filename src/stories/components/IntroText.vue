<template>
    <HeaderElement v-if="navigation" :contentFiller="false"/>
    <div :class="headerClasses">
        <div v-if="!twocol" :class="imageClasses" class="default__header-image">
            <img class="img-cover" src="https://picsum.photos/id/237/2000/650" alt="">
        </div>
        <template v-if="twocol">
            <div class="default__header-content">
                <div class="default__header-block"></div>
                <div class="default__header-image">
                    <img class="img-cover" src="https://picsum.photos/id/237/2000/650" alt="">
                </div>
            </div>
        </template>
        <div :class="innerClasses">
            <div class="default__header-inner--content">
                <h1>
                    <p>
                        Online succes met <em>RB-Media!</em>
                    </p>       
                </h1>
                <p>
                    <strong>Move forward, stay critical<br/></strong>
                    Online media zijn enorm in ontwikkeling. En dat zullen ze voorlopig ook wel blijven. Volop kansen voor bedrijven om zich te profileren en nieuwe verdienmodellen te ontdekken.
                </p>
                <template v-if="uspItems">
                    <h2 class="default-usp__title">
                        <p>
                            Bekijk ons 
                            <em>werk!</em>
                        </p>
                    </h2>
                </template>
            </div>
        </div>
    </div>
    <template v-if="uspItems">
        <div class="usp-wrapper">
            <BlockElement :extraBlocks="2" :responsive="true"/>
        </div>
    </template>
</template>

<script>
import "../sass/elements/_headers.scss"
import "../sass/elements/_default-classes.scss"
import HeaderElement from "./Header.vue"
import BlockElement from './BlockElement.vue'
import { reactive, computed } from '@vue/reactivity'

export default {
    name: 'intro-text',
    components: {
        HeaderElement,
        BlockElement
    },
    props: {
        gradient: {
            type: Boolean,
            default: false,
        },
        overlay: {
            type: Boolean,
            default: false,
        },
        twocol: {
            type: Boolean,
            default: false,
        },
        uspItems: {
            type: Boolean,
            default: false,
        },
        navigation: {
            type: Boolean,
            default: true,
        },
    },
    setup(props) {
        props = reactive(props);
        return {
            innerClasses: computed(() => ({
                "default__header-inner": true,
                "default__header-inner--gradient": props.gradient && !props.overlay,
                "default__header-inner--overlay": props.overlay && !props.gradient,
                "default__header-inner--twocol": props.twocol,
            })),
            imageClasses: computed(() => ({
                "default__header-image--overlay": props.overlay && !props.gradient,
            })),
            headerClasses: computed(() => ({
                "default__header": true,
                "default__header--gradient": props.gradient && props.uspItems,
            })),
        }
    },
}
</script>
