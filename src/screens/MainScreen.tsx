import { Box, Container } from '@/atoms'
import { BoldText, SemiBoldText } from '@/components/Typography'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import auth from '@react-native-firebase/auth'

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">, NativeStackScreenProps<RootStackParamList>>


export default function MainScreen({ navigation }: Props) {
    const user = auth().currentUser
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'} py={'md'} px={'md'} >
            <Box flexDirection={'column'} width={'100%'} alignItems={'flex-start'} justifyContent={'center'}>
                <BoldText fontName='Comfortaa' props={{
                    fontSize: 27.5,
                }}>
                    Account
                </BoldText>
                <SemiBoldText fontName='Poppins' props={{
                    fontSize: 25
                }}>
                    {user?.displayName}
                </SemiBoldText>
            </Box>
        </Container>
    )
}