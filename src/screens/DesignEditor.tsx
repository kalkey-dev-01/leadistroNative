import { Box, Container, Pressable } from '@/atoms'
import Modal from '@/atoms/bottom-sheet-modal'
import { BoldText, SemiBoldText } from '@/components/Typography'
import MailDesignSheet, { MailDesignSheetRefProps } from '@/components/bottom-mail-info'
import EmailEditor, { EmailEditorBar } from '@/components/wysiwygEmailEditor'
import { EditorStacksList, HomeDrawerParamList } from '@/navs'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import BottomSheetModalProviderWrapper from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModalProvider/BottomSheetModalProvider'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Dimensions } from 'react-native'

type Props = CompositeScreenProps<NativeStackScreenProps<EditorStacksList, 'DesignMail'>, DrawerScreenProps<HomeDrawerParamList>>

// !! Fix enrichment .com problem
const { width: WindowWidth, height: WindowHeight } = Dimensions.get('window')


export default function DesignEditor({ navigation }: Props) {
    const mdbsRef = React.useRef<MailDesignSheetRefProps>(null)
    const onPress = React.useCallback(() => {
        const { current: mdbs } = mdbsRef
        const isActive = mdbs?.isActive();
        if (isActive) {
            mdbs?.scrollTo(0);
        } else {
            mdbs?.scrollTo(-200);
        }
    }, []);
    const modalRef = React.useRef<BottomSheetModal>(null)
    const snapPoints = React.useMemo(() => ['27.5%', '55%'], [])
    const addDesignBlock = React.useCallback(() => {
        const { current: modal } = modalRef
        modal?.present()
    }, [])
    const handleSheetChanges = React.useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <BottomSheetModalProvider>
            <Container justifyContent={'center'} alignItems={'center'} >
                <EmailEditor height={WindowHeight * 0.9} width={WindowWidth * 0.95} />
                <EmailEditorBar width={WindowWidth * 0.8} onPressUp={onPress} onAddDesignBlock={addDesignBlock} />
                {/* <Pressable onPress={onPress} height={50} my="sm" width={50} bg={'$foreground'} /> */}
                <Modal ref={modalRef}  snapPoints={snapPoints} onChange={handleSheetChanges} detached={true}>
                    <BoldText fontName='Poppins'>HI MOdal</BoldText>
                </Modal>
                <MailDesignSheet ref={mdbsRef}>
                    <Box width={'100%'} height={'100%'} bg={'$navbarBackground'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
                        <SemiBoldText fontName='Poppins' props={{
                            fontSize: 26, letterSpacing: 0.5, px: 'lg'
                        }}>Preview and Edit Template
                        </SemiBoldText>
                    </Box>
                </MailDesignSheet>
            </Container>
        </BottomSheetModalProvider>
    )
}