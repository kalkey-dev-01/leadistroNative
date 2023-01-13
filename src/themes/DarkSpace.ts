import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

// Palette
const p = {
  slate00: '#0f0f0f',
  slate10: '#0A0708',
  slate20: '#292929',
  slate30: '#333333',
  slate40: '#3d3d3d',
  slate100: '#767577',
  slate900: '#FBFBFB',
  gray10: '#212529',
  blue: '#0A66C2',

}

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: p.gray10,
    $secondary: p.slate00,
    $windowBackground: p.slate10,
    $background: p.slate10,
    $foreground: p.slate900,
    $separator: p.slate100,
    $navbarBackground: p.slate20,
    $navbarBorderBottom: p.slate00,
    $headerBarBackground: p.slate40,
    $sidebarBackground: p.slate00,
    $sidebarForeground: p.slate900,
    $sidebarSeparator: p.slate900 + '20',
    $fieldInputBackground: p.slate00,
    $fieldInputPlaceholderTextColor: p.slate100,
 
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 8
    }
  }
})

export default theme

// const p = {
//     black: '#0F0F0F',
//     jet: '#2D2E2E',
//     spaceSparkle: '#455A5E',
//     white: '#FBFBFB',
//     ashGrey: '#A1B0AB',
//     red: '#F02D3A'

// }
