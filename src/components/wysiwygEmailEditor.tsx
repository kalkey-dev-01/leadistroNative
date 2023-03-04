import { Box, Pressable } from '@/atoms'
import AnimatedBox from '@/atoms/animated-box'
import React from 'react'
import { PanGestureHandler, PanGestureHandlerGestureEvent, PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import FeatherIcon from './icon'
import { GestureResponderEvent } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Theme } from '@/themes'
import { useTheme } from '@shopify/restyle'

interface Props {
    width: number,
    height: number,


}

const EmailEditor: React.FC<Props> = ({ height, width }) => {
    const scale = useSharedValue<number>(1)
    const safeAreaInsets = useSafeAreaInsets()
    const gesture = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
        // onStart: (event) => {
        //     console.log(event);

        // },
        onActive: (event) => {
            scale.value = event.scale
            console.log(event);

        },
        onEnd: () => {
            scale.value = withTiming(1)
        }
    })
    const scaleStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }]
        }
    })
    return (
        <PinchGestureHandler onGestureEvent={gesture} >
            <AnimatedBox style={scaleStyle} width={width} height={height} borderRadius={'10'} position={'absolute'} top={-safeAreaInsets.top + 10} bg={'$foreground'} >

            </AnimatedBox>
        </PinchGestureHandler>
    )
}

export default EmailEditor

export const EmailEditorBar: React.FC<{ width: number, onAddDesignBlock: (event: GestureResponderEvent) => void, onPressUp: (event: GestureResponderEvent) => void }> = ({ width, onPressUp, onAddDesignBlock }) => {
    const safeAreaInsets = useSafeAreaInsets()
    const theme = useTheme<Theme>()
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