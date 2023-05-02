// import { Box, } from '@/atoms'
import AnimatedBox from '@/atoms/animated-box'
import React from 'react'
import { PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
// import FeatherIcon from './icon'
// import { GestureResponderEvent } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RichToolbar } from '@/atoms/rich-text'
import type { actions } from 'react-native-pell-rich-editor'

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
            <AnimatedBox flex={1} style={scaleStyle} width={width} height={height} position={'absolute'} top={-safeAreaInsets.top + 10} borderColor={'$foreground'} borderWidth={1} px={'xs'} py={'xs'}>
                {children}
            </AnimatedBox>
        </PinchGestureHandler>
    )
}

export default EmailEditor

export const EmailEditorBar: React.FC<{ width: number, editor: unknown, actions: actions[] }> = ({ width, editor, actions }) => {
    const safeAreaInsets = useSafeAreaInsets()
    // const theme = useTheme<Theme>()
    return (
        <AnimatedBox flex={1} position={'absolute'} bottom={-safeAreaInsets.bottom}>
            <RichToolbar width={width} actions={actions} borderTopLeftRadius={'20'} borderTopEndRadius={'20'} editor={editor} bg={'$background'}  height={50} onPressAddImage={() => {
                console.log('Add Image')
            }}
                onInsertLink={() => {
                    console.log('Add Link')
                }}
            
            iconTint='#fff' />
        </AnimatedBox>
    )
}