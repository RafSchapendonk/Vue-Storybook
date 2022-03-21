import '../src/stories/sass/index.scss';

const screenHeight = '820px'

const customViewports = {
  xxl: {
    name: '2xl (1920px)',
    styles: {
      width: '1920px',
      height: screenHeight
    },
  },
  xl: {
    name: 'xl (1177px)',
    styles: {
      width: '1177px',
      height: screenHeight
    },
  },
  lg: {
    name: 'lg (1176px)',
    styles: {
      width: '1176px',
      height: screenHeight
    },
  },
  md: {
    name: 'md (900px)',
    styles: {
      width: '900px',
      height: screenHeight
    },
  },
  sm: {
    name: 'sm (768px)',
    styles: {
      width: '768px',
      height: screenHeight
    },
  },
  mob: {
    name: 'mob (600px)',
    styles: {
      width: '600px',
      height: screenHeight
    },
  },
  xs: {
    name: 'xs (500px)',
    styles: {
      width: '500px',
      height: screenHeight
    },
  },
  min: {
    name: 'min (360px)',
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
    expanded: true,
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
