import { Box, Container, TouchableOpacity } from '@/atoms'
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography'
import { SignedOutStackParamList } from '@/navs'
// import theme from '@/themes/DarkSpace'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image } from 'react-native'



type Props = NativeStackScreenProps<SignedOutStackParamList>



export default function WelcomeScreen({ navigation }: Props) {
    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            <Box justifyContent={'space-between'} height={'40%'} alignItems={'center'} flexDirection={'column'} bg={'$background'}>
                {/* Heading */}
                <BoldText fontName='Comfortaa' props={{
                    fontSize: 50,
                    my: 'xl'
                }}>
                    leadistro
                </BoldText>
                {/* SubHeading */}
                <RegularText fontName='Poppins' props={{
                    fontSize: 25,
                    mb: 'md',
                    textAlign: 'center',
                    px: "xl"
                }}>
                    Revolutionize lead Generation and Email Marketing
                </RegularText>
                {/* Logo */}
                <Image source={require('../assets/images/CircLogo.png')} resizeMode='contain' style={{ width: 125, height: 125, top: 62.5, borderRadius: 75, borderColor: '#fff',borderWidth:0.75 }} />

            </Box>
            {/* CTA Section*/}
            <Box flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'60%'} bg={'$sidebarBackground'} borderTopLeftRadius={"lg"} borderTopRightRadius={"lg"} zIndex={-10}>
                {/* Login Button */}
                <Box my={'lg'}  >
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} px={'lg'}  >
                        <MediumText fontName='Poppins' props={{
                            fontSize: 35,
                            textAlign: 'center',

                            style: {
                                includeFontPadding: false
                            }

                        }}>
                            Login
                        </MediumText>
                    </TouchableOpacity>
                </Box>
                {/* Divider */}
                <Box flexDirection={'row'} alignItems='center' my='lg'>
                    <Box flex={1} height={1} backgroundColor='$foreground' />
                    <Box width={50}>
                        <SemiBoldText fontName='Comfortaa' props={{ fontSize: 15, color: '$foreground', textAlign: 'center' }}>
                            Or
                        </SemiBoldText>
                    </Box>
                    <Box flex={1} height={1} backgroundColor='$foreground' />
                </Box>
                {/* Register Button */}
                <Box my={'lg'} px={'md'} py={'sm'} borderRadius={'xs'} bg={'$foreground'}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} android_ripple={{ color: 'black', borderless: true }}  >
                        <BoldText fontName='Poppins' props={{
                            color: '$background',
                            fontSize: 30,
                            textAlign: 'center',
                            style: {
                                includeFontPadding: false
                            }
                        }}>
                            Create Account
                        </BoldText>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Container>
    )
}


