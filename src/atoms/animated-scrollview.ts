import { Theme } from '@/themes'
import { createBox } from '@shopify/restyle'
import * as React from 'react'
import { ScrollViewProps } from 'react-native'
import Animated, { AnimateProps } from 'react-native-reanimated'

const AnimatedScrollView = createBox<Theme, AnimateProps<ScrollViewProps>>(
  Animated.ScrollView
)

export type AnimatedScrollViewProps = React.ComponentProps<typeof AnimatedScrollView>

export default AnimatedScrollView
