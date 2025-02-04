
import { Container, ScrollView } from '@/atoms'
import RichEditor, { RichEditorProps} from '@/atoms/rich-text'
import EmailEditor, { EmailEditorBar } from '@/components/wysiwygEmailEditor'
import { EditorStacksList, HomeDrawerParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { actions } from 'react-native-pell-rich-editor'
import { Dimensions } from 'react-native'




type Props = CompositeScreenProps<NativeStackScreenProps<EditorStacksList, 'DesignMail'>, DrawerScreenProps<HomeDrawerParamList>>


const { width: WindowWidth, height: WindowHeight } = Dimensions.get('window')


export default function DesignEditor({ }: Props) {
    const richText = React.useRef<RichEditorProps>(null!);
    return (
      <Container justifyContent={'center'} alignItems={'center'}>
          <EmailEditor height={WindowHeight * 0.9} width={WindowWidth * 0.95}>        
            <ScrollView width={'100%'} bg='$foreground'>
            <RichEditor 
            allowFileAccess={true}
            defaultParagraphSeparator='<div style={{minWidth: "100%";}}>Line</div>'
            ref={richText} 
            onChange={desc => {
              console.log(desc);            
            }}
            placeholder='Write something here'
            /> 
            </ScrollView>
         </EmailEditor>
         <EmailEditorBar 
          editor={richText}
          actions={[
            actions.alignFull,
            actions.alignLeft,
            actions.alignCenter,
            actions.alignRight,
            actions.checkboxList,
            actions.code,
            actions.fontSize,
            actions.keyboard,
            actions.indent,
            actions.outdent,
            actions.insertBulletsList,
            actions.restoreSelection
          ]}
          width={WindowWidth * 0.9}
         />
      </Container>
    )
}
    // const [header, setHeader] = useAtom(head);
    // const [bodySection, setBodySection] = useAtom(body);
    // const [, setGap] = useAtom(gap)
    // const mdbsRef = React.useRef<MailDesignSheetRefProps>(null)
    // const onPress = React.useCallback(() => {
    //     const { current: mdbs } = mdbsRef
    //     const isActive = mdbs?.isActive();
    //     if (isActive) {
    //         mdbs?.scrollTo(0);
    //     } else {
    //         mdbs?.scrollTo(-200);
    //     }
    // }, []);
    // const modalRef = React.useRef<BottomSheetModal>(null)
    // const snapPoints = React.useMemo(() => ['50%', '80%'], [])
    // const addDesignBlock = React.useCallback(() => {
    //     const { current: modal } = modalRef
    //     modal?.present()
    // }, [])
    // const handleSheetChanges = React.useCallback((index: number) => {
    //     console.log('handleSheetChanges', index);
    // }, []);
    // const source = {
    //     html: `
    //   <p style='text-align:left;'>
    //     This is a placeholder paragraph text tag,
    //     you need to start making the components.
    //     This is html inside a string. its much easier than you think 
    //     WebView is now atomised
    //   </p>`
    // };
    // const paragraph_one: string = `<div class="text-lg">How Are Ya mate</div>`
    // const colorHexCode: string = '#f0f0f0';
    // const WebViewRef = React.useRef<WebViewProps>(null!)
    // const [query, setQuery] = useAtom(queryAtom);
// <BottomSheetModalProvider>
//             <Container justifyContent={'center'} alignItems={'center'} >
//                 {/* Email Editor */}
//                 <EmailEditor height={WindowHeight * 0.9} width={WindowWidth * 0.95}>
//                     {/* <WebView
//                         ref={WebViewRef}
//                         setBuiltInZoomControls={false}
//                         mixedContentMode='compatibility'
//                         flex={1}
//                         scalesPageToFit={false}
//                         source={{
//                             html: `${header}
//                             ${bodySection}`
//                         }}
//                         automaticallyAdjustContentInsets={false} /> */}
                        
//                 </EmailEditor>
//                 <EmailEditorBar width={WindowWidth * 0.9} onPressUp={onPress} onAddDesignBlock={addDesignBlock} />
//                 {/* Blocks Modal */}
//                 <Modal
//                     backdropComponent={
//                         props => (
//                             <BottomSheetBackdrop
//                                 {...props}
//                                 appearsOnIndex={0}
//                                 disappearsOnIndex={-1}
//                             />
//                         )
//                     }
//                     ref={modalRef} bottomInset={75} snapPoints={snapPoints} onChange={handleSheetChanges} detached={true}>
//                     <Box width={'100%'} height={'90%'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
//                         <Box width={'50%'} height={'90%'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
//                             <Pressable onPress={onClick}>
//                                 <SemiBoldText fontName='Poppins' props={{
//                                     fontSize: 20,
//                                     letterSpacing: 0.75
//                                 }}>
//                                     Text
//                                 </SemiBoldText>
//                             </Pressable>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Boxed Text
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Image
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Image Group
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Image Card
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Image + Caption
//                             </SemiBoldText>
//                         </Box>
//                         <Box width={'50%'} height={'90%'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'center'}>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Button
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Video
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Carousel
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Drop Down
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Footer
//                             </SemiBoldText>
//                             <SemiBoldText fontName='Poppins' props={{
//                                 fontSize: 20,
//                                 letterSpacing: 0.75
//                             }}>
//                                 Paragraph
//                             </SemiBoldText>
//                         </Box>
//                     </Box>
//                 </Modal>
//                 {/* Reanimated Modal */}
//                 <MailDesignSheet ref={mdbsRef}>
//                     <Box width={'100%'} height={'100%'} bg={'$navbarBackground'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'}>
//                         <SemiBoldText fontName='Poppins' props={{
//                             fontSize: 26, letterSpacing: 0.5, px: 'lg'
//                         }}>
//                             Preview and Edit Template
//                         </SemiBoldText>
//                         <Box justifyContent={'space-between'} alignItems={'center'} width={'100%'} my={'md'} px={'lg'} bg={'$fieldInputPlaceholderTextColor'} flexDirection={'row'}>
//                             <BoldText fontName={'Comfortaa'} props={{
//                                 fontSize:18,
//                                 color: '$foreground'
//                             }}>
//                                 Set Gap Between Elements
//                             </BoldText>
//                             <TextInput keyboardType='numeric' value={query} onChangeText={setQuery} placeholder='20' />
//                         </Box>
//                         <Box justifyContent={'space-between'} alignItems={'center'} width={'100%'} my={'md'} px={'lg'} bg={'$fieldInputPlaceholderTextColor'} flexDirection={'row'}>
//                             <BoldText fontName={'Comfortaa'} props={{
//                                 fontSize:18,
//                                 color: '$foreground'
//                             }}>
//                                 Set Color Of The design
//                             </BoldText>
//                             <TextInput keyboardType='numeric' value={query} onChangeText={setQuery} placeholder='20' />
//                         </Box>
//                         <Box justifyContent={'space-between'} alignItems={'center'} width={'100%'} my={'md'} px={'lg'} bg={'$fieldInputPlaceholderTextColor'} flexDirection={'row'}>
//                             <BoldText fontName={'Comfortaa'} props={{
//                                 fontSize:18,
//                                 color: '$foreground'
//                             }}>
//                                 Set The Typography
//                             </BoldText>
//                             <TextInput keyboardType='numeric' value={query} onChangeText={setQuery} placeholder='20' />
//                         </Box>
//                         <Box justifyContent={'space-between'} alignItems={'center'} width={'100%'} my={'md'} px={'lg'} bg={'$fieldInputPlaceholderTextColor'} flexDirection={'row'}>
//                             <BoldText fontName={'Comfortaa'} props={{
//                                 fontSize:18,
//                                 color: '$foreground'
//                             }}>
//                                 Set body Text
//                             </BoldText>
//                             <TextInput keyboardType='numeric' value={query} onChangeText={setQuery} placeholder='20' />
//                         </Box>
//                         <Box justifyContent={'space-between'} alignItems={'center'} width={'100%'} my={'md'} px={'lg'} bg={'$fieldInputPlaceholderTextColor'} flexDirection={'row'}>
//                             <BoldText fontName={'Comfortaa'} props={{
//                                 fontSize:18,
//                                 color: '$foreground'
//                             }}>
//                                 Set Gap Between Elements
//                             </BoldText>
//                             <TextInput keyboardType='numeric' value={query} onChangeText={setQuery} placeholder='20' />
//                         </Box>
//                     </Box>
//                 </MailDesignSheet>
//             </Container>
//         </BottomSheetModalProvider>