import { Container, Pressable } from '@/atoms'
import { BoldText } from '@/components/Typography'
import MailDesignSheet, { MailDesignSheetRefProps } from '@/components/bottom-mail-info'
import EmailEditor, { EmailEditorBar } from '@/components/wysiwygEmailEditor'
import { EditorStacksList, HomeDrawerParamList } from '@/navs'
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

    return ( 
        <Container justifyContent={'flex-start'} alignItems={'center'} py={'lg'}>
            <EmailEditor height={WindowHeight * 0.85} width={WindowWidth * 0.9} />
            <EmailEditorBar width={WindowWidth * 0.8} onPressUp={onPress} />
            {/* <Pressable onPress={onPress} height={50} my="sm" width={50} bg={'$foreground'} /> */}
            <MailDesignSheet ref={mdbsRef}>
                <BoldText fontName='Poppins' props={{ fontSize: 22 }}>
                    Add Subject
                </BoldText>
            </MailDesignSheet>
        </Container>
    )
}