
import React from 'react'
import { Alert } from 'react-native'
import { SignedOutStackParamList } from '@/navs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Container, Pressable, TextInput } from '@/atoms';
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography';
import auth from '@react-native-firebase/auth'
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/fixtures/zodSchema';
import Image from '@/atoms/image';
import FeatherIcon from '@/components/icon';
import { PasswordAtom } from '@/state/passwordState';
import { useAtom } from 'jotai';
import { onGoogleSignIn } from '@/fixtures/GoogleOAuth';
import { loadingAtom } from '@/state/searchbar';
import theme from '@/themes/DarkSpace';
import Loading from '@/components/loading-spin-animation';
import firestore from '@react-native-firebase/firestore'
type Props = NativeStackScreenProps<SignedOutStackParamList>




export default function RegisterScreen({ }: Props) {
        const [loading, setLoading] = useAtom(loadingAtom)
        const {
                control,
                handleSubmit,
                formState: { errors }
        } = useForm({
                resolver: zodResolver(RegisterSchema)
        })

        const onSubmit = async (data: FieldValues) => {
                setLoading(true)
                await auth()
                        .createUserWithEmailAndPassword(data.email, data.password)
                        .then(() => Alert.alert('Welcome to your Leadistro', 'Your account has been successfully created', [{ style: 'cancel' }]))
                        .catch(e => Alert.alert('Error Creating Account', e.message))
                firestore().collection('users').doc(auth().currentUser?.email?.toString()).set({
                        userEmail: auth().currentUser?.email,
                        uid: auth().currentUser?.uid,
                })
                setLoading(false)

        }
        const [secure, setSecure] = useAtom(PasswordAtom)
        // if (errors.email?.message) {
        //         return Alert.alert('Please', errors.email?.message.toString(), [{
        //                 style: 'cancel'
        //         }])
        // }
        // if (errors.password?.message) return Alert.alert('Please', errors.password?.message.toString(), [{
        //         style: 'cancel'
        // }])
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
                <Container justifyContent={'flex-start'} alignItems={'center'}>
                        <Box justifyContent={'center'} height={'40%'} width={'100%'} alignItems={'center'} flexDirection={'column'} bg={'$background'} >
                                <Box alignItems={'center'} justifyContent={'center'} width={175} height={175} borderColor={'$foreground'} borderWidth={5} borderRadius={'hg'}
                                        my={'lg'}
                                >
                                        <Image source={require('../assets/images/leadistroWhite.png')} width={100} height={100}
                                                resizeMethod='auto' resizeMode='contain' borderRadius={'sm'}
                                        />
                                </Box>
                                {/* Heading */}
                                <BoldText fontName='Comfortaa' props={{
                                        fontSize: 28,
                                        my: 'xl'
                                }}>
                                        Let's create your account
                                </BoldText>
                                {/* SubHeading */}
                                <RegularText fontName='Poppins' props={{
                                        fontSize: 19,
                                        mb: 'md',
                                        textAlign: 'center',
                                        px: "xl"
                                }}>
                                        Search leads and Create contacts, with our specialized software.
                                </RegularText>

                        </Box>
                        <Box justifyContent={'flex-start'} py={'lg'} width={'100%'} height={'60%'} alignItems={'center'} flexDirection={'column'} bg={'$fieldInputBackground'} borderTopRightRadius={'lg'} borderTopLeftRadius={'lg'}>
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
                                {
                                        errors.email?.message
                                        &&
                                        <RegularText fontName='Comfortaa'>
                                                {errors.email?.message.toString()}
                                        </RegularText>
                                }
                                {/* Password Input Field */}
                                <Box
                                        mb='lg' flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
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
                                {
                                        errors.password?.message
                                        &&
                                        <RegularText fontName='Comfortaa'>
                                                {errors.password?.message.toString()}
                                        </RegularText>
                                }
                                <Box mt={'md'} px={'xl'} py={'sm'} borderRadius={'lg'} bg={'$foreground'}>
                                        <Pressable onPress={handleSubmit(onSubmit)}>
                                                <BoldText fontName='Poppins' props={{
                                                        color: '$background',
                                                        fontSize: 30,
                                                        textAlign: 'center',
                                                }}>
                                                        Create Account
                                                </BoldText>
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
                                {/* Google Sign In Button */}
                                <Pressable flexDirection={'row'} width={'72.5%'} alignItems={'center'} justifyContent={'space-between'} borderRadius={'md'} borderColor={'$foreground'} borderWidth={.75}
                                        onPress={onGoogleSignIn}                                >
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
                                                Sign Up With Google
                                        </MediumText>
                                </Pressable>
                        </Box>
                </Container>
        )
}