import { Box, Container, Pressable, TextInput } from '@/atoms'
import { BoldText, MediumText, RegularText } from '@/components/Typography'
import { SignedOutStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Image from '@/atoms/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from 'react-native'
import { loginSchema } from '@/fixtures/zodSchema'
import auth from '@react-native-firebase/auth'
import FeatherIcon from '@/components/icon'


type Props = NativeStackScreenProps<SignedOutStackParamList>

export default function LoginScreen({ }: Props) {
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })
    const onSubmit = async (data: any) => {
        await auth().signInWithEmailAndPassword(data.email, data.password).then(() => Alert.alert('Logged In Successfully', 'Welcome Back we have new leads', [{ style: 'cancel' }])).catch((e: any) => Alert.alert('Error Caused While Logging in', e.message, [{ style: 'cancel' }]))
    }
    //     {errors.email && <BoldText fontName='Comfortaa'>{errors.email.message as string}</BoldText>}
    //     {errors.password && <BoldText fontName='Comfortaa'>{errors.password.message as string}</BoldText>}
    // onPress={handleSubmit(onSubmit)}

    return (
        <Container justifyContent={'flex-start'} alignItems={'center'} >
            <Box alignItems={'center'} justifyContent={'center'} width={175} height={175} bg='$foreground' borderRadius={'hg'}
                my={'lg'}
            >
                <Image source={require('../assets/images/leadistroBlack.png')} width={100} height={100}
                    resizeMethod='auto' resizeMode='contain' borderRadius={'sm'}
                />
            </Box>
            <Box px='xxl' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <MediumText fontName='Comfortaa' props={{
                    fontSize: 30,
                    letterSpacing: 1,
                    textAlign: 'center',
                    my:'md'
                }}>
                    Welcome back
                </MediumText>
                <RegularText fontName='Poppins' props={{
                    fontSize: 18,
                    letterSpacing: 0.5,
                    textAlign: 'center'
                }} >
                    We missed your Presense, Our Distro Just Got Updated.
                </RegularText>
            </Box>
            <Box my={'lg'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'} width={'85%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2} >
                <FeatherIcon name='mail' size={25} style={{ paddingRight: 25 }} />
                <Controller control={control} name={'email'} render={({ field: { onChange, value, onBlur } }) => (
                    <TextInput
                        placeholder='Enter Email' px={'md'} borderColor={'white'} borderRadius={'md'}
                        borderWidth={2} width={'80%'}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={e => onChange(e)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoComplete='email'
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
                        placeholder='Enter Password' px={'md'} borderColor={'white'} borderRadius={'md'}
                        borderWidth={2} width={'75%'} mb={'lg'}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={e => onChange(e)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoComplete='password'
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
            <Pressable
                borderColor={'white'} borderRadius={'md'} borderWidth={2} width={'50%'} justifyContent='center' height={'7.5%'} alignItems={'center'}>
                <BoldText fontName='Poppins' props={{ fontSize: 28 }}>
                    Log In
                </BoldText>
            </Pressable>
        </Container>
    )
}