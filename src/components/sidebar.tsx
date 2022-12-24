import { Box } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BoldText, MediumText, SemiBoldText } from './Typography'
import { Image } from 'react-native'
import FeatherIcon from './icon'


const Sidebar: React.FC<DrawerContentComponentProps> = () => {
    return (
        <Box flex={1} bg={'$sidebarBackground'}>
            <SafeAreaView>
                <Image source={require('../assets/images/Logo.png')} style={{ maxHeight: 125, width: '100%',alignSelf:'center',resizeMode:'contain',marginTop:25 }} />
                <SemiBoldText props={{ textAlign:'center', variant: 'sidebar', fontSize: 35, m: 'lg' }}>
                    leadistro
                </SemiBoldText>
                <Box mt={"xl"} ml='lg' justifyContent={'space-between'} flexDirection={'column'} >
                    <BoldText props={{ variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1, }}>Search Similar Websites</BoldText>
                    <BoldText props={{ variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1, }}>Email Marketing</BoldText>
                    <BoldText props={{ variant: 'sidebar', fontSize: 18, my: 'xl', numberOfLines: 1, }}>Help Required?</BoldText>
                </Box>
                <Box mt='hg' mx={'lg'} flexDirection={'row'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'} flex={1}>
                 <FeatherIcon name='log-out' size={25}  />
                 <MediumText props={{variant:'sidebar', fontSize:20, mx:'lg'}}>Log Out</MediumText>
                </Box>
            </SafeAreaView>
        </Box>
    )
}

export default Sidebar