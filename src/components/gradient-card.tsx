import React from 'react'
import {
    BlurMask,
    Canvas,
    RoundedRect,
    SweepGradient,
    useSharedValueEffect,
    useValue,
    vec,
} from '@shopify/react-native-skia'


import { Dimensions, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type BackgroundGradientProps = {
    width: number;
    height: number;
    cardHeight?: number
}
interface CardProps {
    children?: React.ReactNode
}
const colors = {
    ebony: '#0A0708',
    coolGray: '#444444',
    gray: '#747474',
    lightGray: '#B1B1B1',
    white: '#FFF',
    black: '#141416',
    cyan: '#4FCFC'
  }
const { width: SCREEN_WIDTH } = Dimensions.get('window')
const HEIGHT = 256;
const WIDTH = SCREEN_WIDTH * 0.9
const CARD_HEIGHT = HEIGHT - 10;
const CARD_WIDTH = WIDTH - 10;

export const BackgroundGradient: React.FC<BackgroundGradientProps> = React.memo(({ height, width }) => {
    const canvasPadding = 40
    const rValue = useSharedValue(0)
    const skValue = useValue(0)
    React.useEffect(() => {
        rValue.value = withRepeat(withTiming(10, { duration: 2000 }), -1, true);
    }, [rValue]);
    useSharedValueEffect(() => {
        skValue.current = rValue.value;
    }, rValue);
    return (
        <Canvas style={{ width: width + canvasPadding, height: height + canvasPadding }} >
            <RoundedRect x={canvasPadding / 2} y={canvasPadding / 2} width={width} height={height} color={colors.ebony} r={25} >
                <SweepGradient c={vec((width + canvasPadding) / 2, (width + canvasPadding) / 2)}
                    colors={[colors.ebony, colors.coolGray, colors.gray, colors.ebony]}
                />
                <BlurMask blur={skValue} style={'solid'} />
            </RoundedRect>
        </Canvas>
    )
})

export const Card: React.FC<CardProps> = ({ children }) => {
    const rotate_x = useSharedValue(0)
    const rotate_y = useSharedValue(0)
    const reanimatedStyle = useAnimatedStyle(() => {
        const rxVal = `${rotate_x.value}deg`;
        const ryVal = `${rotate_y.value}deg`;
        return {
            transform: [
                { perspective: 300 },
                { rotateX: rxVal },
                { rotateY: ryVal }
            ]
        }
    })
    const gesture = Gesture.Pan().onBegin(e => {
        rotate_x.value = withTiming(interpolate(e.y, [0, CARD_WIDTH], [5, -5], Extrapolate.CLAMP));
        rotate_y.value = withTiming(interpolate(e.x, [0, CARD_HEIGHT], [-5, 5], Extrapolate.CLAMP));
    }).onUpdate(e => {
        rotate_x.value = interpolate(e.y, [0, CARD_WIDTH], [5, -5], Extrapolate.CLAMP);
        rotate_y.value = interpolate(e.x, [0, CARD_HEIGHT], [-5, 5], Extrapolate.CLAMP);
    }).onFinalize(() => {
        rotate_x.value = withTiming(0);
        rotate_y.value = withTiming(0);
    })
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: colors.lightGray }}>
            <BackgroundGradient height={HEIGHT} width={WIDTH} />
            <GestureDetector gesture={gesture}>
                <Animated.View style={[{
                    height: CARD_HEIGHT,
                    width: CARD_WIDTH,
                    position: 'absolute',
                    borderRadius: 20,
                    zIndex: 300,
                    backgroundColor: colors.white
                }, reanimatedStyle]} >
                    {children}
                </Animated.View>
            </GestureDetector>

        </View>
    )
}