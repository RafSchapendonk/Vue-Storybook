import '../src/stories/sass/index.scss';

const screenHeight = '820px'

const customViewports = {
  xxl: {
    name: '2xl',
    styles: {
      width: '1920px',
      height: screenHeight
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1776px',
      height: screenHeight
    },
  },
  lg: {
    name: 'xl',
    styles: {
      width: '1776px',
      height: screenHeight
    },
  },
  md: {
    name: 'md',
    styles: {
      width: '900px',
      height: screenHeight
    },
  },
  sm: {
    name: 'sm',
    styles: {
      width: '768px',
      height: screenHeight
    },
  },
  mob: {
    name: 'mob',
    styles: {
      width: '600px',
      height: screenHeight
    },
  },
  xs: {
    name: 'xs',
    styles: {
      width: '500px',
      height: screenHeight
    },
  },
  min: {
    name: 'min',
    styles: {
      width: '360px',
      height: screenHeight
    },
  },
};

const palettes = {
  RBMediaPalette: {
    "Primary": {
      "RB-Blue": "#0074FF",
      "RB-BlueLight": "#00E2FF",
      "RB-Green": "#43FF43"
    },
    "Secondary": {
      " 500": "#4D4D4D",
      " 400": "#858585",
      " 300": "#AAAAAA",
      " 200": "#D3D3D3",
      " 100": "#F7F6F5",
      "white": "#FFFFFF",
      "black": "#000000"
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  grid: {
    gridOn: false,
    columns: 12,
    gap: '20px',
    gutter: '50px',
    maxWidth: '1024px',
  },
  viewport: { viewports: customViewports },
  colorPicker: {
    palettes: [
      {
        name: 'RB-Media', // string
        palette: palettes.RBMediaPalette, // Palette as an Object or an Array. See bellow.
      },
    ]
  }
}
