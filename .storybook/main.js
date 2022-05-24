const path = require('path');

module.exports = {
  core: {
    builder: "webpack5",
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|vue|ts|tsx)",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['vue-style-loader', 'css-loader', 'sass-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss-scss',
              syntax: 'postcss-scss',
              plugins: [
                require('autoprefixer'),
                require('tailwindcss'),
              ],
            }
          },
        },],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@pbutlewski/storybook-html",
    "@storybook/addon-a11y",
    // "storybook-color-picker",
    "storybook-code-panel/register",
    require.resolve('storybook-addon-grid/preset'),
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          // When you have splitted your css over multiple files
          // and use @import('./other-styles.css')
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
  ],
  staticDirs: ['./static',],
  "framework": "@storybook/vue3",
}