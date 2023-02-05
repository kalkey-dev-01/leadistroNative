import { Container } from '@/atoms'
import { BoldText } from '@/components/Typography'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'Settings'>, NativeStackScreenProps<RootStackParamList>>

export default function Settings({ }: Props) {
    return (
        <Container alignItems={'flex-start'} justifyContent={'flex-start'} py={'50'} px={'50'}>
            <BoldText fontName='Comfortaa' props={{ fontSize: 25 }}>
                Settings
            </BoldText>
        </Container>
    )
}