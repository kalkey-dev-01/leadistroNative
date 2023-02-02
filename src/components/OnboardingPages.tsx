import { Box, Container } from '@/atoms';
import AnimatedBox from '@/atoms/animated-box';
import AnimatedImage from '@/atoms/animated-image';
import { PageInterface } from '@/fixtures/OnboardingUtils';
import * as React from 'react';
import { Dimensions } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle,} from 'react-native-reanimated';
import { BoldText, SemiBoldText } from './Typography';


interface Props {
    page: PageInterface
    translateX: Animated.SharedValue<number>
    index: number
}
const { width: PageWidth, height: PageHeight } = Dimensions.get('window');


const CircleWidth = PageWidth * 0.7


const Page: React.FC<Props> = ({ page, translateX, index }) => {
    const inputRange = [
        (index - 1) * PageWidth,
        index * PageWidth,
        (index + 1) * PageWidth,
    ]
    const reanimatedCircleStyle = useAnimatedStyle(() => {

        const scale = interpolate(translateX.value, inputRange, [0.35, 1.25, 0.35], Extrapolate.CLAMP)

        return {
            transform: [{ scale: scale }]
        }
    });
    const reanimatedImageStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateX.value,
            inputRange,
            [0.25, 1, 0.25],
            Extrapolate.CLAMP
        );
        const scale = interpolate(translateX.value, inputRange, [0, 1, 0], Extrapolate.CLAMP)
        return {
            opacity: opacity,
            transform: [{
                scale
            }]
        }
    })
    const reanimatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateX.value,
            inputRange,
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        );
        const scale = interpolate(translateX.value, inputRange, [0.25, 1.125, 0.25], Extrapolate.CLAMP)


        return {
            opacity: opacity,
            transform: [{
                scale
            }]
        }
    })
    return (
        <Container width={PageWidth} height={PageHeight} alignItems={'center'} justifyContent={'center'} px={'50'}>
            <Box aspectRatio={1} width={CircleWidth} alignItems={'center'} justifyContent={'center'} mb='150'>
                <AnimatedBox
                    style={[
                        reanimatedCircleStyle,
                        { borderRadius: CircleWidth / 2 }
                    ]} width={'100%'} height={'100%'}
                    aspectRatio={1} bg={'$primary'}
                />
                <AnimatedImage
                    source={page.source} resizeMode={'contain'}
                    position={'absolute'} aspectRatio={1}
                    style={reanimatedImageStyle} height={PageHeight * .33}
                />
            </Box>
            <AnimatedBox style={reanimatedTextStyle}>
                <SemiBoldText fontName='Poppins' props={{
                    textAlign: 'center',
                    mb: 'lg',
                    fontSize: 32

                }}>
                    {page.title}
                </SemiBoldText>
                <BoldText fontName='Comfortaa' props={{
                    textAlign: 'center',
                    mb: 'lg',
                    fontSize: 16
                }}>
                    {page.description}
                </BoldText>
            </AnimatedBox>
        </Container>
    )
}
export default Page