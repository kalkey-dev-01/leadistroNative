import { Box, Container, Pressable, TextInput } from '@/atoms'
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography'
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
import { useAtom } from 'jotai'
import { PasswordAtom } from '@/state/passwordState'
import { onGoogleSignIn } from '@/fixtures/GoogleOAuth'
import { loadingAtom } from '@/state/searchbar'
import Loading from '@/components/loading-spin-animation'
import theme from '@/themes/DarkSpace'



type Props = NativeStackScreenProps<SignedOutStackParamList>

export default function LoginScreen({ }: Props) {
    const [loading, setLoading] = useAtom(loadingAtom)
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) })
    const onSubmit = async (data: any) => {
        setLoading(true)
        await auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then(() => Alert.alert('Logged In Successfully', 'Welcome Back we have new leads', [{ style: 'cancel' }]))
            .catch(e => Alert.alert('Error Caused While Logging in', e.message, [{ style: 'cancel' }])).
            finally(() => setLoading(false))

    }
    //     {errors.email && <BoldText fontName='Comfortaa'>{errors.email.message as string}</BoldText>}
    //     {errors.password && <BoldText fontName='Comfortaa'>{errors.password.message as string}</BoldText>}
    //      onPress={handleSubmit(onSubmit)}
    console.log(errors);
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

        <Container justifyContent={'flex-start'} alignItems={'center'} >
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
                <RegularText fontName='Poppins' props={{
                    fontSize: 18,
                    letterSpacing: 0.5,
                    textAlign: 'center'
                }} >
                    We missed your Presense, Our Distro Just Got Updated.
                </RegularText>
            </Box>
            {/* Email Input Field */}
            <Box
                my={'lg'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
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
            {/* Password Input Field */}
            <Box
                mb={'lg'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                width={'85%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
            >
                <FeatherIcon name={secure ? 'eye-off' : 'eye'} size={25} style={{ paddingRight: 25 }} onPress={() => setSecure(!secure)} />
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
                        secureTextEntry={secure}
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
            {/* Login Button */}
            <Pressable onPress={handleSubmit(onSubmit)}
                borderColor={'white'} borderRadius={'md'} borderWidth={2} width={'50%'} justifyContent='center' height={'7.5%'} alignItems={'center'} my='md'>
                <BoldText fontName='Poppins' props={{ fontSize: 28 }}>
                    Log In
                </BoldText>
            </Pressable>
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
            {/* Google Sign In Button */}
            <Pressable flexDirection={'row'} width={'72.5%'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'md'} borderColor={'$foreground'} borderWidth={.75}
                onPress={onGoogleSignIn}
            >
                <Box alignItems={'center'} justifyContent={'center'} width={45} height={45} borderColor={'$foreground'} borderWidth={1.25} borderRadius={'hg'}
                >
                    <Image source={require('../assets/images/leadistroWhite.png')} width={37.5} height={37.5}
                        resizeMethod='auto' resizeMode='contain' borderRadius={'hg'}
                    />
                </Box>

                <MediumText fontName='Poppins' props={{
                    color: '$foreground',
                    fontSize: 22,
                    textAlign: 'center',
                    pr: 'xl'
                }}>
                    Sign In With Google
                </MediumText>
            </Pressable>

        </Container>

    )
}