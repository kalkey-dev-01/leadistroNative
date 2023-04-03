import { Box, Pressable } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BoldText } from './Typography'
import { Alert, } from 'react-native'
import FeatherIcon from './icon'
import auth from '@react-native-firebase/auth'
import Image from '@/atoms/image'
// import { HomeDrawerParamList } from '@/navs'

// TODO !! - Complete Navigation To Other Screens

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {


    return (
        <Box flex={1} bg={'$sidebarBackground'}>
            <SafeAreaView>
                <Box flexDirection={'column'} alignItems={'center'} mt={'lg'} justifyContent={'flex-start'} px={'md'} width={'100%'}>
                    <Image
                        source={require('../assets/images/leadistroWhite.png')}
                        height={75} width={75} borderRadius={'sm'}
                        resizeMode={'contain'} resizeMethod='auto' alignItems={'center'} justifyContent={'center'}
                    />
                    <BoldText fontName='Comfortaa' props={{ textAlign: 'center', variant: 'sidebar', fontSize: 32.5, px: 'lg', py: 'lg' }}>
                        leadistro
                    </BoldText>
                </Box>
                <Box mt={"xl"} ml='lg' justifyContent={'space-between'} flexDirection={'column'} >
                    <Pressable
                        flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'}
                        onPress={() => navigation.navigate('Emp')}>
                        <FeatherIcon
                            style={{ paddingRight: 15 }}
                            name='search'
                            size={20} />
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1,
                        }}>
                            Research Leads
                        </BoldText>
                    </Pressable>
                    <Pressable
                        flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'}
                        onPress={() => navigation.navigate('SSW')}>
                        <FeatherIcon
                            style={{ paddingRight: 15 }}
                            name='server'
                            size={20} />
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1,
                        }}>
                            Search Similar SEO
                        </BoldText>
                    </Pressable>
                    <Pressable
                        flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'}
                        onPress={() => navigation.navigate('Email')}>
                        <FeatherIcon
                            style={{ paddingRight: 15 }}
                            name='mail'
                            size={20} />
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1,
                        }}>
                            Send Custom Email
                        </BoldText>
                    </Pressable>
                    <Pressable
                        flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'}
                        onPress={() => navigation.navigate('CreateContacts')}>
                        <FeatherIcon
                            style={{ paddingRight: 15 }}
                            name='user-plus'
                            size={20} />
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 20, my: 'xl', numberOfLines: 1,
                        }}>
                            Create Contacts
                        </BoldText>
                    </Pressable>
                    <Pressable
                        flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'}
                        onPress={() => navigation.navigate('bot')}>
                        <FeatherIcon
                            style={{ paddingRight: 15 }}
                            name='cpu'
                            size={20} />
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 20, my: 'xl', numberOfLines: 1,
                        }}>
                            distroGpt-alpha
                        </BoldText>
                    </Pressable>
                    <Pressable
                        flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'}
                        onPress={() => navigation.navigate('Settings')}>
                        <FeatherIcon
                            style={{ paddingRight: 15 }}
                            name='settings'
                            size={20} />
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 20, my: 'xl', numberOfLines: 1,
                        }}>
                            Settings
                        </BoldText>
                    </Pressable>
                    <Pressable
                        flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'} mt={'50'}
                        onPress={() => {
                            auth().signOut().then(() => Alert.alert('Signed Out', 'You Have been successfully signed out, We Will Update your Distro'))
                        }}>
                        <FeatherIcon
                            style={{ paddingRight: 15 }}
                            name='log-out'
                            size={22.5} />
                        <BoldText fontName='Poppins' props={{
                            variant: 'sidebar', fontSize: 25, my: 'xl', numberOfLines: 1,
                        }}>
                            Log Out
                        </BoldText>
                    </Pressable>
                </Box>

            </SafeAreaView>
        </Box>
    )
}

export default Sidebar