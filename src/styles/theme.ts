export default {
  grid: {
    container: '100rem',
    gutter: '2.5rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      small: '1.5rem',
      medium: '3rem',
      large: '5rem'
    }
  },
  colors: {
    primary: '#19cdbf',
    background: '#362a46',
    white: '#FFFFFF',
    gold: '#F9C80E'
  },
  spacings: {
    small: '1.5rem',
    medium: '3rem',
    large: '5rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 1100
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
