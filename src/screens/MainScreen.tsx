import { Box, Container, Pressable, } from '@/atoms'
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import auth from '@react-native-firebase/auth'
import FeatherIcon from '@/components/icon'

import { Card } from '@/components/gradient-card'
import Image from '@/atoms/image'
// import { SavedLeads } from '@/models/model'
type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">, NativeStackScreenProps<RootStackParamList>>

export default function MainScreen({ navigation }: Props) {
    const user = auth().currentUser;
    // console.log(data?.length);
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'} py={'md'}  >
            {/* Header Bar */}
            <Box flexDirection={'row-reverse'} width={'94.5%'} borderRadius={'hg'} alignSelf={'center'} alignItems={'center'} justifyContent={'space-between'} borderColor={'$headerBarBackground'} borderWidth={2}>
                <Pressable onPress={() => console.log('Clicked')} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$fieldInputBackground'} borderColor={'$fieldInputPlaceholderTextColor'} borderWidth={2}>
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
                <SemiBoldText fontName='Comfortaa' props={{ fontSize: 22, pt: 'xs' }}>leadistro</SemiBoldText>
                <Pressable onPress={() => navigation.openDrawer()} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$headerBarBackground'}>
                    <FeatherIcon name='menu' size={20} color={'$foreground'} />
                </Pressable>
            </Box>
            {/* Body Section */}
            <Box flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} mt={'lg'} width={'100%'} >
                {/* Gradient Card */}
                <Card>
                    <Box width={'100%'} alignItems={'center'} justifyContent={'flex-start'} my={'lg'} mx={'lg'} flexDirection={'row'}>
                        <Image source={require('../assets/images/leadistroBlack.png')} width={27.5} height={27.5} mr={'md'} bg={'$foreground'} borderColor={'$fieldInputPlaceholderTextColor'} borderWidth={1} borderRadius={'xs'} />
                        <MediumText fontName='Poppins' props={{
                            fontSize: 22,
                        }}>
                            Start your Email Campaign
                        </MediumText>
                    </Box>
                    <Pressable onPress={() => navigation.navigate('Email', {})} flexDirection={'row'} alignItems={'center'} my={'sm'} mx={'lg'} px={'sm'} justifyContent={'flex-start'} >
                        <FeatherIcon name={'mail'} size={20} style={{ paddingRight: 16 }} />
                        <MediumText fontName='Poppins'>Design Your Email Template</MediumText>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('bot', {})} flexDirection={'row'} alignItems={'center'} my={'sm'} mx={'lg'} px={'sm'} justifyContent={'flex-start'} >
                        <FeatherIcon name={'command'} size={20} style={{ paddingRight: 16 }} />
                        <MediumText fontName='Poppins'>Use Ai Composed Emails</MediumText>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('CreateContacts', {})} flexDirection={'row'} alignItems={'center'} my={'sm'} mx={'lg'} px={'sm'} justifyContent={'flex-start'} >
                        <FeatherIcon name={'user-plus'} size={20} style={{ paddingRight: 16 }} />
                        <MediumText fontName='Poppins'>Save A Single Contact</MediumText>
                    </Pressable>
                    <Pressable onPress={() => { }} flexDirection={'row'} alignItems={'center'} my={'md'} mx={'lg'} px={'sm'} justifyContent={'flex-start'} >
                        <FeatherIcon name={'activity'} size={20} style={{ paddingRight: 16 }} />
                        <BoldText fontName='Comfortaa'>See Your Conversion Rate</BoldText>
                    </Pressable>
                </Card>
                <Box width={'100%'} my={'0'} pl={'xl'} ml={'sm'} alignSelf={'flex-start'}>
                    <Pressable mt='lg' onPress={() => navigation.navigate('Emp', {})} flexDirection={'row'}
                        width={'90%'} alignItems={'center'} justifyContent={'space-between'} px={'sm'} py={'sm'} borderRadius={'sm'}
                        borderColor={'$fieldInputPlaceholderTextColor'} borderWidth={2}
                    >
                        <RegularText fontName='Poppins' props={{
                            fontSize: 20,
                            color: '$foreground'
                        }}>
                            Start Researching Leads.
                        </RegularText>
                        <FeatherIcon name='search' size={21.25} color={'$sidebarForeground'} />
                    </Pressable>
                    <Pressable mt='lg' onPress={() => navigation.navigate('Settings', {})} flexDirection={'row'}
                        width={'90%'} alignItems={'center'} justifyContent={'space-between'} px={'sm'} py={'sm'} borderRadius={'sm'}
                        borderColor={'$fieldInputPlaceholderTextColor'} borderWidth={2}
                    >
                        <RegularText fontName='Poppins' props={{
                            fontSize: 20,
                            color: '$foreground'
                        }}>
                            Setup Your Company Account.
                        </RegularText>
                        <FeatherIcon name='user' size={21.25} color={'$sidebarForeground'} />
                    </Pressable>
                    <Pressable mt='lg' onPress={() => navigation.navigate('bot', {})} flexDirection={'row'}
                        width={'90%'} alignItems={'center'} justifyContent={'space-between'} px={'sm'} py={'sm'} borderRadius={'sm'}
                        borderColor={'$fieldInputPlaceholderTextColor'} borderWidth={2}
                    >
                        <RegularText fontName='Poppins' props={{
                            fontSize: 20,
                            color: '$foreground'
                        }}>
                            Chat with DistroGPT.
                        </RegularText>
                        <FeatherIcon name='command' size={21.25} color={'$sidebarForeground'} />
                    </Pressable>
                </Box>


            </Box>
        </Container>
    )
}