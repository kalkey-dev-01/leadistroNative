import { Box, Container, Pressable } from '@/atoms'
import { BoldText } from '@/components/Typography'
import MailInfo from '@/components/bottom-mail-info'
import { EditorStacksList, HomeDrawerParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler'


type Props = CompositeScreenProps<NativeStackScreenProps<EditorStacksList, 'DesignMail'>, DrawerScreenProps<HomeDrawerParamList>>


type bsCallback = () => any
// !TODO - The Background Needs to be the 'Preview of the email placeholder'
// !TODO -  and the foreground is the bottomsheet which goes up to 70% of the screen
// !! REF- FIGMA Screenshots 
export default function DesignEditor({ navigation }: Props) {
    const [concealMailItem, setConcealMailItem] = React.useState<(() => void) | null>(null)
    const refMailInfo = React.useRef<MailInfo>(null)
    const handleMailInfoCallback = React.useCallback((_conceal: () => void) => {
        const { current: menu } = refMailInfo
        if (menu) {
            menu.show()
            setConcealMailItem(() => _conceal)
        }
    }, [])
    const handleMailInfoClose = React.useCallback(() => {
        concealMailItem && concealMailItem()
        setConcealMailItem(null)
    }, [concealMailItem])
    return (


        <Container justifyContent={'center'} width={'100%'} height={'100%'} alignItems={'center'}>
            <Pressable onPress={(e: any) => handleMailInfoCallback(e)} height={50} width={50} position={'absolute'} top={20} bg={'$foreground'} />
            <MailInfo ref={refMailInfo} onClose={handleMailInfoClose} />
        </Container>



    )
}