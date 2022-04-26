const multiplier = {
    none: 1,
    md: 0.9,
    lg: 0.8,
    xl: 0.7,
    xxl: 0.6,
}

const font = {
    'p-fontSize': 19,
    'p-lineHeight': 31,
    'p-multiplier': multiplier.md,

    'h1-fontSize': 70,
    'h1-lineHeight': 74,
    'h1-multiplier': multiplier.xxl,

    'h2-fontSize': 48,
    'h2-lineHeight': 50,
    'h2-multiplier': multiplier.xxl,

    'h3-fontSize': 30,
    'h3-lineHeight': 40,
    'h3-multiplier': multiplier.lg,

    'h4-fontSize': 24,
    'h4-lineHeight': 32,
    'h4-multiplier': multiplier.lg,

    'h5-fontSize': 22,
    'h5-lineHeight': 31,
    'h5-multiplier': multiplier.lg,
}

module.exports = {
    content: ["./src/**/*.{scss,js,vue}"],
    theme: {
        screens: {
            // '2xl': null, 
            // Null value causes error.
            'xl': '1177px',
            'lg': { 'max': '1176px' },
            'md': { 'max': '900px' },
            'sm': { 'max': '768px' },
            'mob': { 'max': '600px' },
            'xs': { 'max': '500px' },
        },

        extend: {
            fontFamily: {
                fontText: ['Gotham', 'sans-serif'],
                fontTitle: ['Gotham bold', 'sans-serif'],
                fontAwesome: ['"Font Awesome 6 Pro"']
            },
            colors: {
                lead: '#00E2FF',
                leadDark: '#0074FF',
                secondary: '#43FF43',
                dark: '#17252D',
                hoverBlue: '#009ecc',
                placeholder: '#667380',
                error: "rgba(255, 0, 0, 0.5)",
            },
            margin: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                '30': '30px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px',
                '1-col': 'calc(100% / 12)',
                '2-col': 'calc(100% / 12 * 2)'
            },
            padding: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                '30': '30px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px',
                '1-col': 'calc(100% / 12)',
                '2-col': 'calc(100% / 12 * 2)'
            },
            inset: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px',
                '1-col': 'calc(100% / 12)',
                '2-col': 'calc(100% / 12 * 2)'
            },
            borderRadius: {
                '8': '8px',
                '24': '24px',
                '35': '35px'
            },
            zIndex: {
                "-1": "-1",
                "1": "1",
                "2": "2",
                "3": "3",
                "4": "4",
                "5": "5",
                "6": "6",
                "7": "7",
                "8": "8",
                "9": "9",
                "99": "99",
                "999": "999",
            },
            container: {
                center: true,
            },
            gap: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
            },
            height: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px'
            },
            width: {
                'xs': '6px',
                'sm': '12px',
                'mob': '18px',
                'def': '24px',
                'md': '36px',
                'lg': '48px',
                'xl': '60px',
                '2xl': '72px',
                '3xl': '96px'
            },
            fontSize: {
                'default': [
                    `clamp(${font['p-fontSize'] * font['p-multiplier']}px, calc(${font['p-fontSize'] * font['p-multiplier']}px + ((${font['p-fontSize']} - ${font['p-fontSize'] * font['p-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['p-fontSize']}px)`,
                    {
                        lineHeight: `clamp(${font['p-lineHeight'] * font['p-multiplier']}px, calc(${font['p-lineHeight'] * font['p-multiplier']}px + ((${font['p-lineHeight']} - ${font['p-lineHeight'] * font['p-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['p-lineHeight']}px)`,
                    }
                ],

                'h1': [
                    `clamp(${font['h1-fontSize'] * font['h1-multiplier']}px, calc(${font['h1-fontSize'] * font['h1-multiplier']}px + ((${font['h1-fontSize']} - ${font['h1-fontSize'] * font['h1-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h1-fontSize']}px)`,
                    {
                        lineHeight: `clamp(${font['h1-lineHeight'] * font['h1-multiplier']}px, calc(${font['h1-lineHeight'] * font['h1-multiplier']}px + ((${font['h1-lineHeight']} - ${font['h1-lineHeight'] * font['h1-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h1-lineHeight']}px)`,
                    }
                ],

                'h2': [
                    `clamp(${font['h2-fontSize'] * font['h2-multiplier']}px, calc(${font['h2-fontSize'] * font['h2-multiplier']}px + ((${font['h2-fontSize']} - ${font['h2-fontSize'] * font['h2-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h2-fontSize']}px)`,
                    {
                        lineHeight: `clamp(${font['h2-lineHeight'] * font['h2-multiplier']}px, calc(${font['h2-lineHeight'] * font['h2-multiplier']}px + ((${font['h2-lineHeight']} - ${font['h2-lineHeight'] * font['h2-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h2-lineHeight']}px)`,
                        letterSpacing: "-1.92px"
                    }
                ],

                'h3': [
                    `clamp(${font['h3-fontSize'] * font['h3-multiplier']}px, calc(${font['h3-fontSize'] * font['h3-multiplier']}px + ((${font['h3-fontSize']} - ${font['h3-fontSize'] * font['h3-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h3-fontSize']}px)`,
                    {
                        lineHeight: `clamp(${font['h3-lineHeight'] * font['h3-multiplier']}px, calc(${font['h3-lineHeight'] * font['h3-multiplier']}px + ((${font['h3-lineHeight']} - ${font['h3-lineHeight'] * font['h3-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h3-lineHeight']}px)`,
                    }
                ],

                'h4': [
                    `clamp(${font['h4-fontSize'] * font['h4-multiplier']}px, calc(${font['h4-fontSize'] * font['h4-multiplier']}px + ((${font['h4-fontSize']} - ${font['h4-fontSize'] * font['h4-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h4-fontSize']}px)`,
                    {
                        lineHeight: `clamp(${font['h4-lineHeight'] * font['h4-multiplier']}px, calc(${font['h4-lineHeight'] * font['h4-multiplier']}px + ((${font['h4-lineHeight']} - ${font['h4-lineHeight'] * font['h4-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h4-lineHeight']}px)`,
                    }
                ],

                'h5': [
                    `clamp(${font['h5-fontSize'] * font['h5-multiplier']}px, calc(${font['h5-fontSize'] * font['h5-multiplier']}px + ((${font['h5-fontSize']} - ${font['h5-fontSize'] * font['h5-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h5-fontSize']}px)`,
                    {
                        lineHeight: `clamp(${font['h5-lineHeight'] * font['h5-multiplier']}px, calc(${font['h5-lineHeight'] * font['h5-multiplier']}px + ((${font['h5-lineHeight']} - ${font['h5-lineHeight'] * font['h5-multiplier']}) * ((100vw - 360px) / (1230 - 360)))), ${font['h5-lineHeight']}px)`,
                    }
                ],
            },
        },
    },
    variants: {
        borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    },
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ],
}