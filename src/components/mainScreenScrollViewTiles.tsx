import React from 'react'
import { SavedLeads } from '@/models/model'
import { Box, Pressable } from '@/atoms'
import { MediumText } from './Typography'
import FeatherIcon from './icon'
import { useNavigation } from '@react-navigation/native'
// import { HomeDrawerParamList } from '@/navs'
// import { DrawerScreenProps } from '@react-navigation/drawer'
import { Alert, Linking } from 'react-native'


const Tiles: React.FC<SavedLeads> = ({ fullName, emailId, linkedInAddress }) => {
    const nav = useNavigation()
    return (
        <Box py={'sm'} mb={'sm'} px={'md'} borderColor={'$foreground'} borderWidth={2}
            width={'100%'} flexDirection={'row'} borderRadius={'sm'}
            alignItems={'center'} justifyContent={'space-between'}>
            <MediumText
                fontName='Poppins'
                props={{
                    fontSize: 18
                }}
            >
                {fullName}
            </MediumText>
            <Box flexDirection={'row'}  >
                {emailId !== "" ?
                    <Pressable px={'sm'} py={'sm'} mr='md' borderRadius={'10'} borderColor={'$fieldInputBackground'}
                        bg={'red'} borderWidth={1} onPress={() => {
                            nav.navigate('Email' as never)
                            console.log('Email Id', emailId);
                        }}>
                        <FeatherIcon size={18} name={'mail'} />
                    </Pressable>
                    : null
                }
                <Pressable px={'sm'} py={'sm'} borderRadius={'10'} borderColor={'$fieldInputBackground'}
                    bg={'blue'} borderWidth={1} onPress={async () => {
                        let supported = await Linking.canOpenURL(linkedInAddress!.toString())
                        if (supported) {
                            await Linking.openURL(linkedInAddress!.toString())
                        } else {
                            Alert.alert('This Url Seems Weird', 'This User might not exist in linkedIn anymore, or they may have changed accounts', [{
                                text: 'Okay',
                                style: 'cancel'
                            }])
                        }
                    }} >
                    <FeatherIcon size={18} name={'linkedin'} />
                </Pressable>
            </Box>
        </Box>
    )
}

export default Tiles