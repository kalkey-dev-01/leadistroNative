import { Container } from '@/atoms'
import { EditorStacksList, HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">, NativeStackScreenProps<EditorStacksList>>

export default function DesignEditor({ navigation }: Props) {
    return (
        <Container>

        </Container>
    )
}