
import React from 'react'
import { Alert, Image } from 'react-native'
import { SignedOutStackParamList } from '@/navs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Container, TextInput, TouchableOpacity } from '@/atoms';
import { BoldText } from '@/components/Typography';
import auth from '@react-native-firebase/auth'
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/fixtures/zodSchema';

type Props = NativeStackScreenProps<SignedOutStackParamList>


// console.log(auth().currentUser?.email);

export default function RegisterScreen({ }: Props) {

        const {
                control,
                handleSubmit,
                formState: { errors }
        } = useForm({
                resolver: zodResolver(RegisterSchema)
        })
        
        const onSubmit = async(data: any) => {     
                  await auth().createUserWithEmailAndPassword(data.email,data.password).then(()=> Alert.alert('Welcome to your Leadistro','Your account has been successfully created',[{style:'cancel'}])).catch((e:any) => Alert.alert('Error Creating Account',e.message))
        }
        // console.log(handleSubmit(onSubmit));
        return (
                <Container justifyContent={'flex-start'} alignItems={'center'}>
                        <Image source={require('../assets/images/leadistroCircLogo.png')}
                                style={{ height: '25%', width: '100%', marginVertical: 25 }}
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
                        <TouchableOpacity onPress={handleSubmit(onSubmit)} borderColor={'white'} borderWidth={2} width={'50%'} justifyContent='center' height={'7.5%'} alignItems={'center'}>
                                <BoldText fontName='Poppins' props={{ fontSize: 28 }}>
                                        Register
                                </BoldText>
                        </TouchableOpacity>

                </Container>
        )
}