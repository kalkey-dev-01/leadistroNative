import { Box, Pressable } from '@/atoms'
import AnimatedBox from '@/atoms/animated-box'
import {renderToMjml} from '@faire/mjml-react/utils/renderToMjml'
import React from 'react'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { useAnimatedGestureHandler } from 'react-native-reanimated'
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

    return (
        <PanGestureHandler>
            <AnimatedBox width={width} height={height} borderRadius={'10'} bg={'$foreground'} >
                
            </AnimatedBox>
        </PanGestureHandler>
    )
}

export default EmailEditor

export const EmailEditorBar: React.FC<{ width: number, onPressUp: (event: GestureResponderEvent) => void }> = ({ width, onPressUp }) => {
    const safeAreaInsets = useSafeAreaInsets()
    const theme = useTheme<Theme>()
    return (
        <AnimatedBox flex={1} position={'absolute'} bottom={-safeAreaInsets.bottom}>
            <Box flexDirection={'row'} width={width} my={'lg'} bg={'$headerBarBackground'}
                alignItems={'center'} justifyContent={'space-between'}
                px={'xl'} py={'lg'} borderRadius={'lg'}
            >
                <FeatherIcon size={25} name={'edit'} />
                <FeatherIcon size={25} name={'plus-square'} />
                <FeatherIcon size={25} name={'chevron-up'} onPress={onPressUp} />
            </Box>
        </AnimatedBox>
    )
}