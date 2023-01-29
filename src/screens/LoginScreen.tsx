import { Box, Container, TextInput, TouchableOpacity } from '@/atoms'
import { BoldText } from '@/components/Typography'
import { SignedOutStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Image } from 'react-native'
import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from 'react-native'
import { loginSchema } from '@/fixtures/zodSchema'
import auth from '@react-native-firebase/auth'


type Props = NativeStackScreenProps<SignedOutStackParamList>

export default function LoginScreen({ }: Props) {
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })
    const onSubmit = async (data: any) => {
        await auth().signInWithEmailAndPassword(data.email, data.password).then(() => Alert.alert('Logged In Successfully', 'Welcome Back we have new leads', [{ style: 'cancel' }])).catch((e: any) => Alert.alert('Error Caused While Logging in', e.message, [{ style: 'cancel' }]))
    }


    return (
        <Container justifyContent={'flex-start'} alignItems={'center'} >
            <Image source={require('../assets/images/leadistroBlack.png')}
                style={{ height: '10%',  paddingVertical: 25, backgroundColor:'#fff' }}
                resizeMode='contain' resizeMethod='auto' />
            <Box flexDirection={'row-reverse'}>
                <Controller control={control} name={'email'} render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        placeholder='Enter Email' px={'md'} borderColor={'white'}
                        borderWidth={2} width={'75%'} mb={'lg'}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={e => onChange(e)}
                    />
                )}
                    rules={{
                        required: {
                            value: true,
                            message: 'Email is required!'
                        }
                    }}
                />
            </Box>
            <Box flexDirection={'row-reverse'}>
                <Controller control={control} name={'password'} render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        placeholder='Enter Password' px={'md'} borderColor={'white'}
                        borderWidth={2} width={'75%'} mb={'lg'}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={e => onChange(e)}
                    />

                )}
                    rules={{
                        required: {
                            value: true,
                            message: 'Password is required!'
                        }
                    }}
                />
            </Box>

            {errors.email && <BoldText fontName='Comfortaa'>{errors.email.message as string}</BoldText>}
            {errors.password && <BoldText fontName='Comfortaa'>{errors.password.message as string}</BoldText>}
            <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                borderColor={'white'} borderWidth={2} width={'50%'} justifyContent='center' height={'7.5%'} alignItems={'center'}>
                <BoldText fontName='Poppins' props={{ fontSize: 28 }}>
                    Log In
                </BoldText>
            </TouchableOpacity>
        </Container>
    )
}