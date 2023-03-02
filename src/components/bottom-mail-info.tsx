import { Dimensions } from 'react-native';
import React, { useCallback, useImperativeHandle } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,

} from 'react-native-reanimated';
import AnimatedBox from '@/atoms/animated-box';
import { Box } from '@/atoms';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

type MailDesignSheetProps = {
    children?: React.ReactNode;
};

export type MailDesignSheetRefProps = {
    scrollTo: (destination: number) => void;
    isActive: () => boolean;
};

const MailDesignSheet = React.forwardRef<MailDesignSheetRefProps, MailDesignSheetProps>(
    ({ children }, ref) => {
        const translateY = useSharedValue(0);
        const active = useSharedValue(false);

        const scrollTo = useCallback((destination: number) => {
            'worklet';
            active.value = destination !== 0;

            translateY.value = withSpring(destination, { damping: 50 });
        }, []);

        const isActive = useCallback(() => {
            return active.value;
        }, []);

        useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
            scrollTo,
            isActive,
        ]);

        const context = useSharedValue({ y: 0 });
        const gesture = Gesture.Pan()
            .onStart(() => {
                context.value = { y: translateY.value };
            })
            .onUpdate((event) => {
                translateY.value = event.translationY + context.value.y;
                translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
            })
            .onEnd(() => {
                if (translateY.value > -SCREEN_HEIGHT / 3) {
                    scrollTo(0);
                } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                    scrollTo(MAX_TRANSLATE_Y);
                }
            });

        const rMailDesignSheetStyle = useAnimatedStyle(() => {
            const borderRadius = interpolate(
                translateY.value,
                [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
                [27.5, 7.5],
                Extrapolate.CLAMP
            );

            return {
                borderRadius,
                transform: [{ translateY: translateY.value }],
            };
        });

        return (
            <GestureDetector gesture={gesture}>
                <AnimatedBox
                    position={'absolute'}
                    top={SCREEN_HEIGHT}
                    borderRadius={'20'}
                    width={'100%'}
                    bg={'$background'}
                    height={SCREEN_HEIGHT}
                    style={rMailDesignSheetStyle}>
                    <Box width={75} height={4} bg={'$foreground'} alignSelf={'center'} my={'lg'} borderRadius={'xs'} />
                    {children}
                </AnimatedBox>
            </GestureDetector>
        );
    }
);


export default MailDesignSheet;
