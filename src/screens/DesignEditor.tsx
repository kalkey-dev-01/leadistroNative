import { Container, Pressable } from '@/atoms'
import { BoldText } from '@/components/Typography'
import { EditorStacksList, HomeDrawerParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

type Props = CompositeScreenProps<NativeStackScreenProps<EditorStacksList, 'DesignMail'>, DrawerScreenProps<HomeDrawerParamList>>


// !TODO - The Background Needs to be the 'Preview of the email placeholder'
// !TODO -  and the foreground is the bottomsheet which goes up to 70% of the screen
// !! REF- FIGMA Screenshots 
export default function DesignEditor({ navigation }: Props) {
    return (
        <Container alignItems={'flex-start'} justifyContent={'flex-start'}>
            <Pressable onPress={() => navigation.navigate('Email', {})}>
                <BoldText fontName='Comfortaa'>Design Mail Using Templates</BoldText>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Finalize')}>
                <BoldText fontName='Comfortaa'>Design Mail Using The Classic Way</BoldText>
            </Pressable>
        </Container>
    )
}