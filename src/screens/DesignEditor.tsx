import { Container, Pressable } from '@/atoms'
import { BoldText } from '@/components/Typography'
import MailDesignSheet, { MailDesignSheetRefProps } from '@/components/bottom-mail-info'
import { EditorStacksList, HomeDrawerParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'


type Props = CompositeScreenProps<NativeStackScreenProps<EditorStacksList, 'DesignMail'>, DrawerScreenProps<HomeDrawerParamList>>



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
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            <Pressable onPress={onPress} height={50} width={50} bg={'$foreground'} />
            <MailDesignSheet ref={mdbsRef}>
                <BoldText fontName='Poppins' props={{ fontSize: 22 }}>
                    Hi BS
                </BoldText>
            </MailDesignSheet>
        </Container>
    )
}