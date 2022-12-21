import { Dimensions } from "react-native";
import React from 'react'
import Animated, { Easing, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'

export const { width: PageWidth, height: PageHeight } =
  Dimensions.get("screen");

export const N = 12;
export const SqSize = 12;

const Loading: React.FC<{ col: any }> = ({ col }) => {
    const progress = useSharedValue(0)

    React.useEffect(() => {
        progress.value = withRepeat(withTiming(4 * Math.PI, { duration: 8000, easing: Easing.linear }), -1)
    }, [])

    return (
        <>
            {
                new Array(N).fill(0).map((_, i) => {
                    return <Sq key={i} index={i} progress={progress} color={col} />
                })
            }
        </>

    )
}
interface sq {
    index: number;
    progress: Animated.SharedValue<number>;
    color: any
}
const Sq: React.FC<sq> = ({ index, progress, color }) => {
    const offsetAngle = (2 * Math.PI) / N
    const finalAngle = offsetAngle * (N - 1 - index)
    const rotate = useDerivedValue(() => {
        if (progress?.value <= (2 * Math.PI)) {
            return (Math.min(finalAngle, progress?.value))
        }
        if (progress.value - 2 * Math.PI < finalAngle) {
            return finalAngle
        }
        return progress.value
    }, [])
    const translateY = useDerivedValue(() => {
        if (rotate.value === finalAngle) {
            return withSpring(-N * SqSize)
        }
        if (progress.value > 2 * Math.PI) {
            return withTiming((index - N) * SqSize)
        }
        return withTiming(-index * SqSize)
    })
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: `${rotate.value}rad` },
                { translateY: translateY.value }
            ]
        };
    })

    return (
        <Animated.View style={[
            {
                height: SqSize, aspectRatio: 1,
                backgroundColor: color,
                position: 'absolute'
            }, rStyle
        ]}
        />
    )
}


export default Loading