
import React from 'react'
import {Image} from 'react-native'
import { SignedOutStackParamList } from '@/navs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Container, TextInput, TouchableOpacity } from '@/atoms';
import { BoldText } from '@/components/Typography';

type Props = NativeStackScreenProps<SignedOutStackParamList>

export default function RegisterScreen({ }: Props) {

        return (
                <Container justifyContent={'flex-start'} alignItems={'center'}>
                        <Image source={require('../assets/images/leadistroCircLogo.png')}
                                style={{ height: '25%', width: '100%', marginVertical: 25 }}
                                resizeMode='contain' resizeMethod='auto' />
                        <Box flexDirection={'row-reverse'}>
                                <TextInput placeholder='Enter Email' px={'md'} borderColor={'white'} borderWidth={2} width={'75%'} mb={'lg'} />
                        </Box>
                        <Box flexDirection={'row-reverse'}>
                                <TextInput placeholder='Enter Password' px={'md'} borderColor={'white'} borderWidth={2} width={'75%'} mb={'lg'} />
                        </Box>
                        <TouchableOpacity borderColor={'white'} borderWidth={2} width={'50%'} justifyContent='center' height={'7.5%'} alignItems={'center'}>
                                <BoldText fontName='Poppins' props={{ fontSize: 28 }}>
                                        Log In
                                </BoldText>
                        </TouchableOpacity>
                </Container>
        )
}