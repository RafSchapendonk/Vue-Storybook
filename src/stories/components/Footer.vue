<template>
    <footer>
        <div class="footer">
            <div class="footer__inner">
                <div class="footer__contact">
                    <div class="footer__contact__top">
                        <a class="logo h4" href="" title="">
                            <img src="/rbmedia_logo_payoff.svg" />
                        </a>
                        <p>
                            Emerlaan 8a,<br>
                            4824 AH Breda
                        </p>
                    </div>
                    <div class="footer__contact__bottom">
                        <a class="footer__contact_link" href="tel:"><i class="fa-light fa-phone-flip fa-fw"></i> 076 785 1526</a>
                        <a class="footer__contact_link" href="mailto:"><i class="fa-light fa-envelope fa-fw"></i> support@rb-media.nl</a>
                    </div>
                </div>
                <div class="footer__wrapper">
                    <div class="footer__sitemap">
                        <div class="h4">Footer-menu 1</div>
                        <div>
                            <a class="footer__item" href="" title="">Menu-item 1</a>
                            <a class="footer__item" href="" title="">Menu-item 2</a>
                            <a class="footer__item" href="" title="">Menu-item 3</a>
                            <a class="footer__item" href="" title="">Menu-item 4</a>
                            <a class="footer__item" href="" title="">Menu-item 5</a>
                        </div>
                    </div>
                    <div class="footer__sitemap">
                        <div class="h4">Footer-menu 2</div>
                        <div>
                            <a class="footer__item" href="" title="">Menu-item 1</a>
                            <a class="footer__item" href="" title="">Menu-item 2</a>
                            <a class="footer__item" href="" title="">Menu-item 3</a>
                            <a class="footer__item" href="" title="">Menu-item 4</a>
                            <a class="footer__item" href="" title="">Menu-item 5</a>
                        </div>
                    </div>
                    <div class="footer__sitemap">
                        <div class="h4">Footer-menu 3</div>
                        <div>
                            <a class="footer__item" href="" title="">Menu-item 1</a>
                            <a class="footer__item" href="" title="">Menu-item 2</a>
                            <a class="footer__item" href="" title="">Menu-item 3</a>
                            <a class="footer__item" href="" title="">Menu-item 4</a>
                            <a class="footer__item" href="" title="">Menu-item 5</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="copyright-left">
                    <a class="footer__contact-socials" href="{$aSocial.cURL}" rel="noreferrer" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a class="footer__contact-socials" href="{$aSocial.cURL}" rel="noreferrer" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    <a class="footer__contact-socials" href="{$aSocial.cURL}" rel="noreferrer" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a class="footer__contact-socials" href="{$aSocial.cURL}" rel="noreferrer" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                    <a class="footer__contact-socials" href="{$aSocial.cURL}" rel="noreferrer" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a class="footer__contact-socials" href="{$aSocial.cURL}" rel="noreferrer" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
                    <a class="footer__contact-socials" href="{$aSocial.cURL}" rel="noreferrer" target="_blank"><i class="fa-brands fa-vimeo"></i></a>
                </div>
                <div class="copyright-center">
                    <span>
                        © RB-Media
                    </span> 
                    <a href="" class="first" title="Algemene voorwaarden">Algemene voorwaarden</a>
                    <a href="" title="Privacy statement">Privacy statement</a>
                </div>
                <div class="copyright-right">
                    <a href="rb-media.nl" target="_blank" rel="noopener">Website realisatie: RB-Media</a>
                    <a href="https://www.rb-media.nl/webdesign-breda">Webdesign Breda</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import "../sass/elements/_footer.scss"
import { reactive, computed } from '@vue/reactivity'

export default {
    name: 'footer-element',
    setup(props) {
        props = reactive(props)
        return {

        }
    }
}
</script>
