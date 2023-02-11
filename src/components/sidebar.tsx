import { Box, Pressable, TouchableOpacity } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BoldText, MediumText, SemiBoldText } from './Typography'
import { Alert, Image } from 'react-native'
import FeatherIcon from './icon'
import auth from '@react-native-firebase/auth'
// import { HomeDrawerParamList } from '@/navs'

// TODO !! - Complete Navigation To Other Screens

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {


    return (
        <Box flex={1} bg={'$sidebarBackground'}>
            <SafeAreaView>
                <Image source={require('../assets/images/leadistroWhite.png')} style={{ maxHeight: 100, width: '100%', alignSelf: 'center', resizeMode: 'contain', marginTop: 25 }} />
                <SemiBoldText fontName='Comfortaa' props={{ textAlign: 'center', variant: 'sidebar', fontSize: 35, m: 'lg' }}>
                    leadistro
                </SemiBoldText>
                <Box mt={"xl"} ml='lg' justifyContent={'space-between'} flexDirection={'column'} >
                    <Pressable onPress={() => navigation.navigate('Emp')}>
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1,
                        }}>
                            Research Cold Leads
                        </BoldText>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('SSW')}>
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1,
                        }}>
                            Search Similar Websites
                        </BoldText>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Email')}>
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1,
                        }}>
                            Email Marketing
                        </BoldText>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('CreateContacts')}>
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1,
                        }}>
                            Create Contact
                        </BoldText>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Settings')}>
                        <BoldText fontName='Comfortaa' props={{
                            variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1,
                        }}>
                            Settings
                        </BoldText>
                    </Pressable>
                </Box>
                <TouchableOpacity onPress={() => {
                    auth().signOut().then(() => Alert.alert('Signed Out', 'You Have been successfully signed out, We Will Update your Distro'))
                }} mt='xl' mx={'lg'} flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'} flex={1}>
                    <FeatherIcon name='log-out' size={25} />
                    <MediumText fontName='Poppins' props={{ variant: 'sidebar', fontSize: 20, mx: 'lg' }}>Log Out</MediumText>
                </TouchableOpacity>

            </SafeAreaView>
        </Box>
    )
}

export default Sidebar