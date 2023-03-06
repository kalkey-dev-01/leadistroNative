import { Box, Container, Pressable, TextInput } from '@/atoms'
import { BoldText, MediumText, RegularText } from '@/components/Typography'
import { SignedOutStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useForm, Controller, FieldValues } from 'react-hook-form'
import Image from '@/atoms/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from 'react-native'
import { loginSchema } from '@/fixtures/zodSchema'
import auth from '@react-native-firebase/auth'
import FeatherIcon from '@/components/icon'
import { useAtom } from 'jotai'
import { PasswordAtom } from '@/state/passwordState'
import { onGoogleSignIn } from '@/fixtures/GoogleOAuth'
import { loadingAtom } from '@/state/searchbar'
import Loading from '@/components/loading-spin-animation'
import theme from '@/themes/DarkSpace'



type Props = NativeStackScreenProps<SignedOutStackParamList>

export default function LoginScreen({ }: Props) {
    const [loading, setLoading] = useAtom(loadingAtom)
    const { control, handleSubmit, formState: { errors }, reset } = useForm({ resolver: zodResolver(loginSchema) })
    const onSubmit = async (data: FieldValues) => {
        setLoading(true)
        await auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(() => Alert.alert('Logged In Successfully', 'Welcome Back we have new leads', [{ style: 'cancel' }]))
            .catch(e => Alert.alert('Error Caused While Logging in', e.message, [{ style: 'cancel' }])).
            finally(() => setLoading(false))
        reset()
    }

    const [secure, setSecure] = useAtom(PasswordAtom)
    if (loading) {
        return (
            <>
                <Container justifyContent={'center'} alignItems={'center'}>
                    <Box alignItems={'center'} justifyContent='center'>
                        <Loading col={theme.colors.white} />
                    </Box>
                </Container>
            </>
        )
    }
    return (
        <>
            <Container justifyContent={'space-evenly'} alignItems={'center'} >
                {/* Login Header Image */}
                <Box alignItems={'center'} justifyContent={'center'} width={175} height={175} bg='$foreground' borderRadius={'hg'}
                    my={'lg'}
                >
                    <Image source={require('../assets/images/leadistroBlack.png')} width={100} height={100}
                        resizeMethod='auto' resizeMode='contain' borderRadius={'sm'}
                    />
                </Box>
                {/* Header */}
                <Box px='xxl' flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                    <MediumText fontName='Comfortaa' props={{
                        fontSize: 30,
                        letterSpacing: 1,
                        textAlign: 'center',
                        my: 'md'
                    }}>
                        Welcome back
                    </MediumText>
                    <RegularText fontName='Comfortaa' props={{
                        fontSize: 16,
                        letterSpacing: 0.5,
                        textAlign: 'center'
                    }} >
                        We missed your Presense, Our Distro Just Got Updated.
                        Added New Features, and a lot more.
                    </RegularText>
                </Box>
                <Box flex={1} width={'100%'} flexDirection={'column'} justifyContent={'space-around'} alignItems={'center'}>
                    {/* Email Input Field */}
                    <Box alignItems={'center'} width={'100%'} >
                        <Box
                            mb={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'85%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
                        >
                            <FeatherIcon name='mail' size={25} style={{ paddingRight: 25 }} />
                            <Controller control={control} name={'email'} render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    placeholder='Enter Email' px={'md'} borderColor={'white'} borderRadius={'md'}
                                    borderWidth={2} width={'82.5%'}
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={e => onChange(e)}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    autoComplete='off'
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
                        {
                            errors.email?.message
                            &&
                            <Box mb={'lg'} flexDirection={'row'} width={'80%'} alignItems={'center'} px={'sm'} >
                                <FeatherIcon name='alert-triangle' size={12} color={'$foreground'} style={{
                                    paddingHorizontal: 7, paddingBottom: 2
                                }} />
                                <RegularText fontName='Comfortaa' props={{
                                    fontSize: 12
                                }}>
                                    {errors.email?.message.toString()}
                                </RegularText>
                            </Box>
                        }
                        {/* Password Input Field */}
                        <Box
                            mb={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'85%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
                        >
                            <FeatherIcon name={secure ? 'eye' : 'eye-off'} size={25} style={{ paddingRight: 25 }} onPress={() => setSecure(!secure)} />
                            <Controller control={control} name={'password'} render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    placeholder='Password' px={'md'} borderColor={'white'} borderRadius={'md'}
                                    borderWidth={2} width={'82.5%'}
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={e => onChange(e)}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    autoComplete='off'
                                    secureTextEntry={!secure}
                                    textContentType='password'
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
                        {
                            errors.password?.message
                            &&
                            <Box mb={'lg'} flexDirection={'row'} width={'80%'} alignItems={'center'} px={'sm'} >
                                <FeatherIcon name='alert-triangle' size={12} color={'$foreground'} style={{
                                    paddingHorizontal: 7, paddingBottom: 2
                                }} />
                                <RegularText fontName='Comfortaa' props={{
                                    fontSize: 12

                                }} >
                                    {errors.password?.message.toString()}
                                </RegularText>
                            </Box>
                        }
                    </Box>
                    <Box mt={'md'} px={'xl'} py={'sm'} borderRadius={'lg'} bg={'$foreground'}>
                        <Pressable onPress={handleSubmit(onSubmit)}>
                            <BoldText fontName='Poppins' props={{
                                color: '$background',
                                fontSize: 30,
                                textAlign: 'center',
                            }}>
                                Login
                            </BoldText>
                        </Pressable>
                    </Box>
                </Box>

                {/* Divider */}
                {/* <Box flexDirection={'row'} alignItems='center' my='lg'>
                <Box flex={1} height={1} backgroundColor='$foreground' />
                <Box width={50}>
                    <SemiBoldText fontName='Comfortaa' props={{ fontSize: 15, color: '$foreground', textAlign: 'center' }}>
                        Or
                    </SemiBoldText>
                </Box>
                <Box flex={1} height={1} backgroundColor='$foreground' />
            </Box> */}
                {/* Google Sign In Button */}
                <Box mb={'xxl'} mt={"lg"}  >
                    <Pressable flexDirection={'row-reverse'} alignItems={'center'} onPress={onGoogleSignIn} px={'lg'} py={'sm'} borderRadius={'xs'} borderColor={'$foreground'} borderWidth={2} bg={'$background'}  >
                        <MediumText fontName='Poppins' props={{
                            fontSize: 22,
                            textAlign: 'center',
                        }}>
                            Log In with Google
                        </MediumText>
                        <Image source={require('../assets/images/OauthVec.png')} height={25} width={25} mr={'sm'} />
                    </Pressable>
                </Box>

            </Container>
        </>

    )
}