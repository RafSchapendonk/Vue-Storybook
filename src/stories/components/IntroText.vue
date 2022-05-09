<template>
    <HeaderElement :contentFiller="false"/>
    <div class="default__header">
        <div class="default__header-image">
            <img class="img-cover" src="https://picsum.photos/id/237/2000/650" alt="">
        </div>
        <div class="default__header-inner">
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
                <h2 class="default-usp__title">
                    <p>
                        Bekijk ons 
                        <em>werk!</em>
                    </p>
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import "../sass/elements/_headers.scss"
import "../sass/elements/_default-classes.scss"
import HeaderElement from "./Header.vue"

export default {
    name: 'intro-text',
    components: {
        HeaderElement
    },
    setup(props) {
    },
}
</script>
