import { Box, TouchableOpacity } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BoldText, MediumText, SemiBoldText } from './Typography'
import { Image } from 'react-native'
import FeatherIcon from './icon'
// import { HomeDrawerParamList } from '@/navs'

// TODO !! - Complete Navigation To Other Screens

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {


    return (
        <Box flex={1} bg={'$sidebarBackground'}>
            <SafeAreaView>
                <Image source={require('../assets/images/Logo.png')} style={{ maxHeight: 125, width: '100%', alignSelf: 'center', resizeMode: 'contain', marginTop: 25 }} />
                <SemiBoldText fontName='Comfortaa' props={{ textAlign: 'center', variant: 'sidebar', fontSize: 35, m: 'lg' }}>
                    leadistro
                </SemiBoldText>
                <Box mt={"xl"} ml='lg' justifyContent={'space-between'} flexDirection={'column'} >
                    <TouchableOpacity onPress={() => navigation.navigate('SSW')}><BoldText fontName='Comfortaa' props={{ variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1, }}>Search Similar Websites</BoldText></TouchableOpacity>
                    <BoldText fontName='Comfortaa' props={{ variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1, }}>Email Marketing</BoldText>
                    <BoldText fontName='Comfortaa' props={{ variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1, }}>Create Contact</BoldText>
                </Box>
                <Box mt='xl' mx={'lg'} flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'} flex={1}>
                    <FeatherIcon name='log-out' size={25} />
                    <MediumText fontName='Poppins' props={{ variant: 'sidebar', fontSize: 20, mx: 'lg' }}>Log Out</MediumText>
                </Box>
            </SafeAreaView>
        </Box>
    )
}

export default Sidebar