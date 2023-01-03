import * as React from 'react'
import { LayoutChangeEvent, NativeScrollEvent } from 'react-native'
import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
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
  const handleListLayout = React.useCallback((e: LayoutChangeEvent) => {
    setHeaderHeight(e.nativeEvent.layout.height)
  }, [])
  const handleEndDrag = (e: NativeScrollEvent) => {
    'worklet'
    if (ProgressYAxis.value > 0.5 || e.contentOffset.y < headerHeight) {
      translateY.value = withTiming(MaximumY)
    } else {
      translateY.value = withTiming(MinimumY)
    }
  }
  const handleScroll = useAnimatedScrollHandler(
    {
      onBeginDrag: e => {
        startY.value = e.contentOffset.y
      },
      onScroll: e => {
        const offsetY = e.contentOffset.y
        let disY = offsetY - startY.value
        if (startY.value === Start_INIT) disY = offsetY
        let val =
          offsetY <= -safeAreaInset.top
            ? MaximumY
            : Math.max(MinimumY, Math.min(MaximumY, translateY.value - disY))
        translateY.value = val
        startY.value = offsetY
        ProgressYAxis.value = interpolate(
          translateY.value,
          [MinimumY, MaximumY],
          [0, 1]
        )
      },
      onEndDrag: handleEndDrag,
      onMomentumEnd: handleEndDrag
    },
    [MinimumY, MaximumY, headerHeight]
  )
  const barStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value
      }
    ]
  }))
  return {
    handleListLayout,
    handleScroll,
    barStyle,
    headerHeight
  }
}
