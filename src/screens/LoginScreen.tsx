import { Container } from '@/atoms'
import { SignedOutStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image } from 'react-native'


type Props = NativeStackScreenProps<SignedOutStackParamList>


export default function LoginScreen({ }: Props) {
    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            <Image source={require('../assets/images/Logo.png')} 
            style={{ height: '25%', width: '100%', marginVertical: 25 }} 
            resizeMode='contain' resizeMethod='auto' />
        </Container>
    )
}