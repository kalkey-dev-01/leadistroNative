import * as React from 'react'
import { LayoutChangeEvent } from 'react-native'
import { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Start_INIT = -9999

export default function StickyHeader() {
  const safeAreaInset = useSafeAreaInsets()
  const [headerHeight, setHeaderHeight] = React.useState(70)
  const startY = useSharedValue(Start_INIT)
  const translateY = useSharedValue(0)
  const ProgressYAxis = useSharedValue(0)

  const MinimumY = -headerHeight
  const MaximumY = safeAreaInset.top
  const handleEmployeeListLayout = React.useCallback((e: LayoutChangeEvent) => {
      setHeaderHeight(e.nativeEvent.layout.height)
  }, [])
  const handleScroll = useAnimatedScrollHandler({
    onBeginDrag: event => {
      startY.value = event.contentOffset.y
    }
  },[MinimumY,MaximumY,headerHeight])
  const barStyle = useAnimatedStyle(()=>({
    transform: [{
      translateY: translateY.value
    }]
  }))
}
