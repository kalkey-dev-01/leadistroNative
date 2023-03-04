import { Box, } from '@/atoms'
import AnimatedBox from '@/atoms/animated-box'
import React from 'react'
import { PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import FeatherIcon from './icon'
import { GestureResponderEvent } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// import { Theme } from '@/themes'
// import { useTheme } from '@shopify/restyle'

interface Props {
    width: number,
    height: number,
    children: React.ReactNode


}
const EmailEditor: React.FC<Props> = ({ height, width, children }) => {
    const scale = useSharedValue<number>(1)
    const focalX = useSharedValue<number>(0)
    const focalY = useSharedValue<number>(0)
    const safeAreaInsets = useSafeAreaInsets()
    const gesture = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
        // onStart: (event) => {
        //     console.log(event);
        // },
        onActive: (event) => {
            scale.value = event.scale
            focalX.value = event.focalX
            focalY.value = event.focalY
            // console.log(event);

        },
        onEnd: () => {
            scale.value = withTiming(1)
        }
    })
    const scaleStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: focalX.value },
                { translateY: focalY.value },
                { translateX: -width / 2 },
                { translateY: -height / 2 },
                { scale: scale.value },
                { translateX: -focalX.value },
                { translateY: -focalY.value },
                { translateX: width / 2 },
                { translateY: height / 2 },
            ]
        }
    })
    return (
        <PinchGestureHandler onGestureEvent={gesture} >
            <AnimatedBox style={scaleStyle} width={width} height={height} borderRadius={'10'} position={'absolute'} top={-safeAreaInsets.top + 10} bg={'$foreground'} >
                {children}
            </AnimatedBox>
        </PinchGestureHandler>
    )
}

export default EmailEditor

export const EmailEditorBar: React.FC<{ width: number, onAddDesignBlock: (event: GestureResponderEvent) => void, onPressUp: (event: GestureResponderEvent) => void }> = ({ width, onPressUp, onAddDesignBlock }) => {
    const safeAreaInsets = useSafeAreaInsets()
    // const theme = useTheme<Theme>()
    return (
        <AnimatedBox flex={1} position={'absolute'} bottom={-safeAreaInsets.bottom}>
            <Box flexDirection={'row'} width={width} my={'lg'} bg={'$headerBarBackground'}
                alignItems={'center'} justifyContent={'space-between'}
                px={'xl'} py={'lg'} borderRadius={'lg'}
            >
                <FeatherIcon size={25} name={'edit'} />
                <FeatherIcon size={25} name={'plus-square'} onPress={onAddDesignBlock} />
                <FeatherIcon size={25} name={'chevron-up'} onPress={onPressUp} />
            </Box>
        </AnimatedBox>
    )
}