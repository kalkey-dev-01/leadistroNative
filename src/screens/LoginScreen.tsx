import { Box, Container, TextInput, TouchableOpacity } from '@/atoms'
import { BoldText } from '@/components/Typography'
import { SignedOutStackParamList } from '@/navs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Image } from 'react-native'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Alert } from 'react-native'


type Props = NativeStackScreenProps<SignedOutStackParamList>
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})
export default function LoginScreen({ }: Props) {
    const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) })
    const onSubmit = (data: any) => {
        Alert.alert(`Data is, ${JSON.stringify(data)}`)
        console.log(data)
        console.log(errors);

    }
console.log(errors);

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