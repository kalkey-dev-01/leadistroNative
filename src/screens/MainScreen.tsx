import { Container } from '@/atoms'
import { BoldText } from '@/components/Typography'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">, NativeStackScreenProps<RootStackParamList>>


export default function MainScreen({ navigation }: Props) {
    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            <BoldText fontName='Poppins'>
                Main Screen
            </BoldText>
        </Container>
    )
}