import { Box, Container, Pressable, TouchableOpacity } from '@/atoms'
import Image from '@/atoms/image'
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography'
import { SignedOutStackParamList } from '@/navs'
// import theme from '@/themes/DarkSpace'

import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'




type Props = NativeStackScreenProps<SignedOutStackParamList>



export default function WelcomeScreen({ navigation }: Props) {
    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            <Box justifyContent={'center'} height={'40%'} alignItems={'center'} flexDirection={'column'} bg={'$background'}>
                <Box alignItems={'center'} pb={'hg'}>
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
                </Box>
            </Box>
            {/* Logo */}
            <Box alignItems={'center'} justifyContent={'center'}>
                <Image resizeMode='contain' width={100} height={100} zIndex={10} source={require('../assets/images/leadistroWhite.png')} backgroundColor={'$sidebarBackground'} position={'absolute'} borderRadius={'sm'} />
                <Box height={200} width={200} backgroundColor={'$sidebarBackground'} position={'absolute'} zIndex={0} borderRadius={'hg'} />
            </Box>
            {/* CTA Section*/}
            <Box flexDirection={'column'} justifyContent={'center'} alignItems={'center'} height={'60%'} bg={'$sidebarBackground'} borderTopLeftRadius={"lg"} borderTopRightRadius={"lg"} zIndex={-10}>
                {/* Login Button */}
                <Box my={'lg'}  >
                    <Pressable onPress={() => navigation.navigate('Login')} px={'lg'} py={'sm'} borderRadius={'xs'} borderColor={'$foreground'} borderWidth={2} bg={'$background'}  >
                        <MediumText fontName='Poppins' props={{
                            fontSize: 35,
                            textAlign: 'center',
                        }}>
                            Login
                        </MediumText>
                    </Pressable>
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
                        }}>
                            Create Account
                        </BoldText>
                    </TouchableOpacity>
                </Box>
            </Box>
        </Container>
    )
}


