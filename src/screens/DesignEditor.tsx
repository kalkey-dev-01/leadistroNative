import { Box, Container, } from '@/atoms'
import Modal from '@/atoms/bottom-sheet-modal'
import { SemiBoldText } from '@/components/Typography'
import MailDesignSheet, { MailDesignSheetRefProps } from '@/components/bottom-mail-info'
import EmailEditor, { EmailEditorBar } from '@/components/wysiwygEmailEditor'
import { EditorStacksList, HomeDrawerParamList } from '@/navs'
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
// import BottomSheetModalProviderWrapper from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModalProvider/BottomSheetModalProvider'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Dimensions } from 'react-native'
import { } from '@faire/mjml-react/'
// import RenderHTML from 'react-native-render-html'
// import { Mjml, MjmlSection } from '@faire/mjml-react'

type Props = CompositeScreenProps<NativeStackScreenProps<EditorStacksList, 'DesignMail'>, DrawerScreenProps<HomeDrawerParamList>>

// !! Fix enrichment .com problem
const { width: WindowWidth, height: WindowHeight } = Dimensions.get('window')

// const a = 
//     (
//         <Mjml>
//             <MjmlSection backgroundColor="#f0f0f0" ></MjmlSection>
//             <MjmlSection backgroundColor="#f0f0a0" ></MjmlSection>
//             <MjmlSection backgroundColor="#f0a0f0" ></MjmlSection>
//             <MjmlSection backgroundColor="#a0f0f0" ></MjmlSection>
//             <MjmlSection backgroundColor="#d0f7b0" ></MjmlSection>
//         </Mjml>
//     )

// console.log(a);



export default function DesignEditor({ }: Props) {
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
    const snapPoints = React.useMemo(() => ['50%', '80%'], [])
    const addDesignBlock = React.useCallback(() => {
        const { current: modal } = modalRef
        modal?.present()
    }, [])
    const handleSheetChanges = React.useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    // const source = {
    //     html: `
    //   <p style='text-align:center;'>
    //     Hello World!
    //   </p>`
    // };
    return (
        <BottomSheetModalProvider>
            <Container justifyContent={'center'} alignItems={'center'} >
                <EmailEditor height={WindowHeight * 0.9} width={WindowWidth * 0.95}>
                    {/* <RenderHTML contentWidth={WindowWidth * 0.9} source={source} /> */}
                </EmailEditor>
                <EmailEditorBar width={WindowWidth * 0.8} onPressUp={onPress} onAddDesignBlock={addDesignBlock} />
                {/* <Pressable onPress={onPress} height={50} my="sm" width={50} bg={'$foreground'} /> */}
                <Modal
                    backdropComponent={
                        props => (
                            <BottomSheetBackdrop
                                {...props}
                                appearsOnIndex={0}
                                disappearsOnIndex={-1}
                            />
                        )
                    }
                    ref={modalRef} bottomInset={75} snapPoints={snapPoints} onChange={handleSheetChanges} detached={true}>
                    <Box width={'100%'} height={'90%'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                        <Box width={'50%'} height={'90%'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Text
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Boxed Text
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Image
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Image Group
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Image Card
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Image + Caption
                            </SemiBoldText>
                        </Box>
                        <Box width={'50%'} height={'90%'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Button
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Video
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Carousel
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Drop Down
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Footer
                            </SemiBoldText>
                            <SemiBoldText fontName='Poppins' props={{
                                fontSize: 20,
                                letterSpacing: 0.75
                            }}>
                                Paragraph
                            </SemiBoldText>
                        </Box>
                    </Box>
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