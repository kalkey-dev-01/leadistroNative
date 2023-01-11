import { Box, Container, TouchableOpacity } from '@/atoms'
import { BoldText, MediumText,  SemiBoldText } from '@/components/Typography'
import { SignedOutStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image } from 'react-native'
// import { Divider } from 'react-native-paper'

type Props = NativeStackScreenProps<SignedOutStackParamList>


export default function WelcomeScreen({ navigation }: Props) {
    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            <Box height={'40%'} justifyContent='center' flexDirection={'column'} alignItems={'center'} width={'100%'} backgroundColor='$headerBarBackground' borderBottomLeftRadius={'lg'} borderBottomRightRadius='lg'>
                <BoldText fontName='Comfortaa' props={{ fontSize: 44, color: 'white', pb: 'md' }}>leadistro</BoldText>
                <MediumText fontName='Comfortaa' props={{ fontSize: 20, color: '$foreground', mx: 'xxl', textAlign: 'center', pb: 'xxl' }}>Company researcher and a cold Email Marketing tool</MediumText>
            </Box>
            <Image source={require('../assets/images/leadistroCircLogo.png')}
                style={{ height: '20%', width: '100%', bottom: 100 }}
                resizeMode='contain' resizeMethod='auto' />
            <TouchableOpacity onPress={() => navigation.navigate('Login', undefined)}
                backgroundColor={'$sidebarSeparator'} borderColor='$foreground' borderWidth={2}
                alignItems='center' justifyContent={'center'}  minWidth={'50%'} width='66.5%' py='lg' borderRadius={'xs'}>
                <SemiBoldText props={{ fontSize: 24, color: '$foreground', pt: 'xs' }} fontName='Poppins'>login</SemiBoldText>
            </TouchableOpacity>
            <Box flexDirection={'row'} alignItems='center' my='lg'>
                <Box flex={1} height={1} backgroundColor='$foreground' />
                <Box width={50}>
                    <BoldText fontName='Poppins' props={{ fontSize: 15, color: '$foreground', textAlign: 'center' }}>
                        Or
                    </BoldText>
                </Box>
                <Box flex={1} height={1} backgroundColor='$foreground' />
            </Box>
            <TouchableOpacity
                onPress={() => navigation.navigate('Register', undefined)}
                backgroundColor={'$sidebarBackground'} borderColor='$foreground' borderWidth={2}
                alignItems='center' justifyContent={'center'} maxWidth='75%' minWidth={'50%'} width='66.5%' py='lg' borderRadius={'xs'}>
                <SemiBoldText props={{ fontSize: 22, color: '$foreground', pt: 'xs' }} fontName='Poppins'>Register</SemiBoldText>
            </TouchableOpacity>
        </Container>
    )
}

{/* <TouchableOpacity onPress={() => navigation.navigate('Login',undefined)} borderColor={'white'}
             borderWidth={1} justifyContent={'center'} mb={'lg'}
              alignContent={'center'} height={'10%'} width='75%'>
                <SemiBoldText fontName='Poppins' props={{ fontSize: 28 }}> Login </SemiBoldText>
            </TouchableOpacity> */}
