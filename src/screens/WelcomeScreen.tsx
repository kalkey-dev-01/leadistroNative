import { Box, Container, TouchableOpacity } from '@/atoms'
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography'
import { SignedOutStackParamList } from '@/navs'
import theme from '@/themes/DarkSpace'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image } from 'react-native'

// import { Divider } from 'react-native-paper'

type Props = NativeStackScreenProps<SignedOutStackParamList>

// !!TODO - UI Needs Improvement

export default function WelcomeScreen({ navigation }: Props) {
    return (

        <Container justifyContent={'flex-start'} alignItems={'center'}>

            <Box justifyContent={'space-between'} height={'40%'} alignItems={'center'} flexDirection={'column'} bg={'$sidebarBackground'} borderBottomLeftRadius={"lg"} borderBottomRightRadius={"lg"}>
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
                <Image source={require('../assets/images/leadistroWhite.png')} resizeMode='contain' style={{ width: 100, height: 100, top: 47.5, borderRadius: 12.5 }} />
            </Box>
            {/* CTA Section*/}
            <Box flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'60%'}>
                {/* Login Button */}
                <Box borderColor={'$foreground'} my={'lg'} borderRadius={'lg'} borderWidth={2} px={'xxl'}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} px={'lg'} android_ripple={{ color: 'black', borderless: true }}  >
                        <MediumText fontName='Poppins' props={{
                            fontSize: 35,
                            textAlign: 'center',
                            pt: 'xs',
                        }}>
                            Login
                        </MediumText>
                    </TouchableOpacity>
                </Box>
                {/* Divider */}
                <Box flexDirection={'row'} alignItems='center' my='lg'>
                    <Box flex={1} height={1} backgroundColor='$foreground' />
                    <Box width={50}>
                        <BoldText fontName='Poppins' props={{ fontSize: 15, color: '$foreground', textAlign: 'center' }}>
                            Or
                        </BoldText>
                    </Box>
                    <Box flex={1} height={1} backgroundColor='$foreground' />
                </Box>
                {/* Register Button */}
                <Box borderColor={'$foreground'} my={'lg'} borderRadius={'lg'} borderWidth={2} px={'xl'}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} px={'lg'} android_ripple={{ color: 'black', borderless: true }}  >
                        <SemiBoldText fontName='Comfortaa' props={{
                            fontSize: 20,
                            textAlign: 'center',
                            pb: 'xs'
                        }}>
                            Register your Account
                        </SemiBoldText>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Container>
    )
}

{/* <TouchableOpacity onPress={() => navigation.navigate('Login',undefined)} borderColor={'white'}
             borderWidth={1} justifyContent={'center'} mb={'lg'}
              alignContent={'center'} height={'10%'} width='75%'>
                <SemiBoldText fontName='Poppins' props={{ fontSize: 28 }}> Login </SemiBoldText>
            </TouchableOpacity> */}
