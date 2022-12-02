import { createTheme } from '@shopify/restyle'

const palette = {
  ebony: '#252525',
  red: '#B21F66',
  blue: '#05DFD7',
  yellow: '#F9F871',
  paper00: '#fffff',
  paper10: '#f5f5f4',
  paper20: '#e6e6e6',
  paper300: '#767577',
  paper900: '#202020',
  blue70: '#47B5FF',
  navy20: '#001253',
  navy900: '#b9babc'
}

const theme = createTheme({
  spacing: {
    '0': 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    '50': 50,
    '75':75,
    '100':100,
    hg: 128
  },
  breakpoints: {
    phone: 0,
    tablet: 786
  },
  colors: {
    ebony: palette.ebony,
    red: palette.red,
    blue: palette.blue,
    yellow: palette.yellow,
    $primary: palette.blue70,
    $windowBackground: '#f0f0f0',
    $background: palette.paper10,
    $foreground: palette.paper900,
    $sidebarBackground: palette.ebony,
    $sidebarForeground: palette.navy900,
    $sidebarSeperator: palette.paper00 + '20',
    $headerBarBackground: palette.paper20
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128
  },
  textVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 16
    },
    sidebar: {
      color: '$windowBackground'
    }
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg'
    }
  }
})
export default theme
export type Theme = typeof theme
