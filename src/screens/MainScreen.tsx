import { Box, Container, Pressable, ScrollView } from '@/atoms'
import { BoldText, RegularText } from '@/components/Typography'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import auth from '@react-native-firebase/auth'
import FeatherIcon from '@/components/icon'

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">, NativeStackScreenProps<RootStackParamList>>

export default function MainScreen({ navigation }: Props) {
    const user = auth().currentUser
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'} py={'md'} px={'md'} >
            <ScrollView width={'100%'}>
                {/* Header Bar */}
                <Box flexDirection={'row-reverse'} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                    <Pressable onPress={() => console.log('Clicked')} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$fieldInputBackground'} borderColor={'$foreground'} borderWidth={2}>
                        {
                            user?.displayName !== null ?
                                <BoldText fontName='Poppins' props={{
                                    fontSize: 20,
                                    color: '$foreground'
                                }}>
                                    {user?.displayName?.toString().charAt(0)}
                                </BoldText> :
                                <FeatherIcon name='user' size={20} color={'$foreground'} />
                        }
                    </Pressable>
                    <Pressable onPress={() => navigation.openDrawer()} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$headerBarBackground'}>
                        <FeatherIcon name='menu' size={20} color={'$foreground'} />
                    </Pressable>
                </Box>
                {/* Body Section */}
                <Box flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} width={'100%'} my={'lg'}>
                    <BoldText fontName='Poppins' props={{
                        fontSize: 45,
                        mb: 'sm'
                    }}>
                        You Have Not Saved Any Leads
                    </BoldText>
                    <Pressable onPress={() => navigation.navigate('Emp', {})} flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'}>
                        <RegularText fontName='Comfortaa' props={{
                            fontSize: 20,
                            color: '$foreground'
                        }}>
                            Start Researching Leads
                        </RegularText>
                        <FeatherIcon name='search' size={22.5} style={{
                            paddingHorizontal: 10
                        }} color={'$foreground'} />
                    </Pressable>
                </Box>
            </ScrollView>
        </Container>
    )
}