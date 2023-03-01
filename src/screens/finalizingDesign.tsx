import { Container } from '@/atoms'
import { BoldText } from '@/components/Typography'
import { EditorStacksList, HomeDrawerParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

type Props = CompositeScreenProps<NativeStackScreenProps<EditorStacksList, 'Finalize'>, DrawerScreenProps<HomeDrawerParamList>>

export default function Finalize({ }: Props) {

    return (
        <Container alignItems={'center'} justifyContent={'center'}>
            <BoldText fontName='Poppins'>Finalize Design</BoldText>
        </Container>
    )
}