import { create } from '@storybook/theming';
import logo from './assets/rbmedia_logo_payoff.svg'

export default create({
    // All theming options:

    base: 'light',

    // Colors
    colorPrimary: '#0074FF',
    colorSecondary: '#00E2FF',

    // UI
    appBg: 'white',
    appContentBg: 'white',
    // appBorderColor: '',
    // appBorderRadius: ,

    // Typography
    fontBase: '"Gotham", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    // barTextColor: '',
    barSelectedColor: '#00E2FF',
    barBg: 'white',

    // Form colors
    // inputBg: '',
    // inputBorder: '',
    // inputTextColor: '',
    // inputBorderRadius: ,

    // Brand data
    brandTitle: 'Storybook RB-Media',
    brandUrl: 'https://www.rb-media.nl',
    brandImage: logo,
});