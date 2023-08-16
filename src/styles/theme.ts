export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
  },
  font: {
    family: {
      primary: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.6rem',
      medium: '2.4rem',
      big: '3.2rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    big: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
