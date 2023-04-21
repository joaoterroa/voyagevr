
  export type Colors = keyof typeof Tokens.colors
  export type FontSize = keyof typeof Tokens.fontSizes
  export type Shadows = keyof typeof Tokens.boxShadows

  export type Token = Colors | FontSize | Shadows

  export const Tokens = {
  colors: {
    blue: {
      '50': '#85bcef',
      '100': '#6aadec',
      '200': '#4f9fe8',
      '300': '#3390e5',
      '400': '#1d81dd',
      '500': '#1971c2',
      '600': '#1661a7',
      '700': '#12518c',
      '800': '#0f4271',
      '900': '#0b3256',
      base: '#1971c2',
    },
    malachite: {
      '50': '#85efa5',
      '100': '#6aec91',
      '200': '#4fe87d',
      '300': '#33e569',
      '400': '#1ddd57',
      '500': '#19c24c',
      '600': '#16a741',
      '700': '#128c37',
      '800': '#0f712c',
      '900': '#0b5622',
      base: '#19c24c',
    },
    thunderbird: {
      '50': '#ef9685',
      '100': '#ec7e6a',
      '200': '#e8674f',
      '300': '#e55033',
      '400': '#dd3b1d',
      '500': '#c23419',
      '600': '#a72d16',
      '700': '#8c2512',
      '800': '#711e0f',
      '900': '#56170b',
      base: '#c23419',
    },
    'violet-eggplant': {
      '50': '#ef85ed',
      '100': '#ec6ae9',
      '200': '#e84fe6',
      '300': '#e533e2',
      '400': '#dd1dda',
      '500': '#c219bf',
      '600': '#a716a4',
      '700': '#8c128a',
      '800': '#710f6f',
      '900': '#560b54',
      base: '#c219bf',
    },
  },
  fontSizes: {
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
  fontWeights: {
    light: '200',
    normal: '400',
    bold: '700',
  },
  lineHeights: {
    short: '1',
    normal: '1.5',
    tall: '2',
  },
  boxShadows: {
    sm: '1rem',
    md: '1.2rem',
    lg: '1.4rem',
  },
}
  