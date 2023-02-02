

import { Box, Container } from '@/atoms';
import AnimatedBox from '@/atoms/animated-box';
import AnimatedScrollView from '@/atoms/animated-scrollview';
import Page from '@/components/OnboardingPages';
import { BoldText } from '@/components/Typography';
import FeatherIcon from '@/components/icon';
import { Pages } from '@/fixtures/OnboardingUtils';
import { SeenOnboaringAtom, SignedOutStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAtom } from 'jotai';
import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated'

type Props = NativeStackScreenProps<SignedOutStackParamList>
const { width: PageWidth } = Dimensions.get('window');
interface DotProps {
        index: number,
        activeDotIndex?: Animated.SharedValue<number>,

}
interface DotProps {
        index: number,
        activeDotIndex?: Animated.SharedValue<number>,

}

const Dot: React.FC<DotProps> = ({ activeDotIndex, index }) => {

        const reanimatedDotStyle = useAnimatedStyle(() => {
                const isActive = activeDotIndex?.value === index;
                return {
                        backgroundColor: withTiming(isActive ? '#fff' : '#f1f0f1', {
                                duration: 150,
                        }),
                };
        })
        return <AnimatedBox width={20} height={20} mx={'xs'} borderRadius={'10'} style={reanimatedDotStyle} />
}
export default function OnboardingScreens({  }: Props) {
        const [seen, setSeen] = useAtom(SeenOnboaringAtom)
        const translateX = useSharedValue(0)
        const scrollHandler = useAnimatedScrollHandler({
                onScroll: (e) => {
                        translateX.value = e.contentOffset.x
                }
        })
        const activeIndex = useDerivedValue(() => {
                return Math.round(translateX.value / PageWidth);
        });
        const scrollRef = useAnimatedRef<ScrollView>();
        const onIconPress = React.useCallback(() => {


                if (activeIndex.value === Pages.length - 1) {
                        setSeen(!seen)
                      
                }


                scrollRef.current?.scrollTo({ x: PageWidth * (activeIndex.value + 1) });

        }, []);
        return (
                <Container>
                        <AnimatedScrollView ref={scrollRef} pagingEnabled={true}
                                showsHorizontalScrollIndicator={false} flex={1}
                                horizontal={true} onScroll={scrollHandler} scrollEventThrottle={16}
                        >
                                {Pages.map((page, index) => (
                                        <Page key={index.toString()} page={page} translateX={translateX} index={index} />
                                ))}
                        </AnimatedScrollView>
                        <Box height={50} mb='50' flexDirection={'row'}>
                                <Box flex={1} alignItems={'center'} justifyContent={'center'} flexDirection={'row'}>
                                        {Pages.map((_, index) => {
                                                return (
                                                        <Dot
                                                                key={index.toString()}
                                                                index={index}
                                                                activeDotIndex={activeIndex}
                                                        />
                                                );
                                        })}
                                </Box>
                                <Box alignItems={'center'} flex={1} justifyContent={'center'}>
                                        <BoldText fontName='Comfortaa' props={{
                                                letterSpacing: 1.75,
                                                textTransform: 'uppercase',
                                                color: '$foreground'
                                        }}>
                                                leadistro
                                        </BoldText>
                                </Box>
                                <Box flex={1} alignItems={'center'} justifyContent={'center'}>
                                        <FeatherIcon
                                                name='arrow-right'
                                                size={24}
                                                color={'$foreground'}
                                                onPress={onIconPress}
                                              
                                        />
                                </Box>

                        </Box>
                </Container>
        )
}