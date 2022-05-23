import { create } from '@storybook/theming';
import logo from './static/rbmedia_logo_payoff.svg'

export default create({
    // All theming options:

    base: 'light',

    // Colors
    colorPrimary: '#00E2FF',
    colorSecondary: '#00E2FF',

    // UI
    appBg: '#F3FCFF',
    appContentBg: 'white',
    // appBorderColor: '',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Gotham", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: '#ff5371',
    // textMutedColor: '',

    // Toolbar default and active colors
    // barTextColor: '',
    barSelectedColor: '#00E2FF',
    barBg: 'white',

    // Form colors
    // inputBg: '',
    // inputBorder: '',
    // inputTextColor: '',
    inputBorderRadius: 4,

    // Brand data
    brandTitle: 'Storybook RB-Media',
    brandUrl: 'https://www.rb-media.nl',
    brandImage: logo,
});