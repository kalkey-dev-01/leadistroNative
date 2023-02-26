import { Box, Container, Pressable, ScrollView, TextInput } from '@/atoms';
import { BoldText, MediumText, RegularText } from '@/components/Typography';
import CCHeader from '@/components/ccHeader';
import { HomeDrawerParamList, RootStackParamList } from '@/navs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
// import firestore from '@react-native-firebase/firestore'
import FeatherIcon from '@/components/icon';
import AnimatedBox from '@/atoms/animated-box';
import { addSingleContactSchema } from '@/fixtures/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { leadsCollection } from '@/api/firebase';
import { Alert } from 'react-native';

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'CreateContacts'>, NativeStackScreenProps<RootStackParamList>>

export default function CreateContactsPage({ navigation }: Props) {
    const [show, setShow] = React.useState<boolean>(false)
    const opacity = useSharedValue(0)
    const fadeStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    }, [])
    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm({
        resolver: zodResolver(addSingleContactSchema)
    })
    const handleSidebarToggle = React.useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])
    const { optional } = getValues()
    console.log(optional);
    const onSubmit = async (data: FieldValues) => {

        await leadsCollection.doc().set({
            ...data
        })
            .catch((e: any) => Alert.alert('Something Went Wrong', e.message))
            .then(() => Alert.alert('Successfully added the lead'))
    }
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'}>
            <CCHeader onSidebarToggle={handleSidebarToggle} />
            <ScrollView mt='75' px={'xl'} pt={'sm'} flexDirection={'column'} width={'100%'}>
                <Box width={'100%'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                    <BoldText fontName='Poppins' props={{
                        fontSize: 28,
                    }}>
                        Grow Audience
                    </BoldText>
                    <FeatherIcon name='users' size={20} style={{ marginHorizontal: 10, marginVertical: 10 }} />
                </Box>
                {/* Manually */}

                <Pressable onPress={() => {
                    setShow(!show)
                    opacity.value = withTiming(1, { duration: 2500 })
                }} flexDirection={'row'} borderColor={'$foreground'} bg={'$navbarBackground'} borderWidth={2} borderRadius={'10'} my={'lg'} py={'sm'} px={'sm'} alignItems={'center'} justifyContent={'space-between'}>
                    <MediumText fontName='Poppins' props={{
                        fontSize: 22
                    }}>
                        Create A Single Contact
                    </MediumText>
                    <FeatherIcon name='user-plus' size={20} />
                </Pressable>
                {
                    show &&
                    <AnimatedBox style={fadeStyle} justifyContent={'center'} alignItems={'center'} width={'100%'} flexDirection={'column'} px={'xs'} >
                        {/* Full Name */}
                        <Box
                            mb={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'95%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
                        >
                            <FeatherIcon name='user' size={25} style={{ paddingRight: 25 }} />
                            <Controller control={control} name={'fullName'} render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    placeholder='Name of the contact' px={'md'} borderColor={'white'} borderRadius={'md'}
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
                                        message: 'Full Name of this Contact is needed'
                                    }
                                }}
                            />
                        </Box>
                        {
                            errors.fullName?.message
                            &&
                            <Box mb={'lg'} flexDirection={'row'} width={'95%'} alignItems={'center'} px={'sm'} >
                                <FeatherIcon name='alert-triangle' size={12} color={'$foreground'} style={{
                                    paddingHorizontal: 7, paddingBottom: 2
                                }} />
                                <RegularText fontName='Comfortaa' props={{
                                    fontSize: 12
                                }}>
                                    {errors.fullName?.message.toString()}
                                </RegularText>
                            </Box>
                        }
                        {/* Personal Email */}
                        <Box
                            mb={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'95%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
                        >
                            <FeatherIcon name='mail' size={25} style={{ paddingRight: 25 }} />
                            <Controller control={control} name={'personal_email'} render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    placeholder='Email Address' px={'md'} borderColor={'white'} borderRadius={'md'}
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
                                        message: 'Personal Email is Required!'
                                    }
                                }}
                            />
                        </Box>
                        {
                            errors.personal_email?.message
                            &&
                            <Box mb={'lg'} flexDirection={'row'} width={'95%'} alignItems={'center'} px={'sm'} >
                                <FeatherIcon name='alert-triangle' size={12} color={'$foreground'} style={{
                                    paddingHorizontal: 7, paddingBottom: 2
                                }} />
                                <RegularText fontName='Comfortaa' props={{
                                    fontSize: 12
                                }}>
                                    {errors.personal_email?.message.toString()}
                                </RegularText>
                            </Box>
                        }
                        {/* headline */}
                        <Box
                            mb={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'95%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
                        >
                            <FeatherIcon name='trello' size={25} style={{ paddingRight: 25 }} />
                            <Controller control={control} name={'headline'} render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    placeholder='Job Title' px={'md'} borderColor={'white'} borderRadius={'md'}
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
                                        message: 'Name is required!'
                                    }
                                }}
                            />
                        </Box>
                        {
                            errors.headline?.message
                            &&
                            <Box mb={'lg'} flexDirection={'row'} width={'95%'} alignItems={'center'} px={'sm'} >
                                <FeatherIcon name='alert-triangle' size={12} color={'$foreground'} style={{
                                    paddingHorizontal: 7, paddingBottom: 2
                                }} />
                                <RegularText fontName='Comfortaa' props={{
                                    fontSize: 12
                                }}>
                                    {errors.headline?.message.toString()}
                                </RegularText>
                            </Box>
                        }
                        {/* linkedInAddress */}
                        <Box
                            mb={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'95%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
                        >
                            <FeatherIcon name='linkedin' size={25} style={{ paddingRight: 25 }} />
                            <Controller control={control} name={'linkedInAddress'} render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    placeholder='Paste their linkedIn Profile Link (Optional)' px={'md'} borderColor={'white'} borderRadius={'md'}
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
                                        value: false,
                                        message: 'This Field is optional'
                                    }
                                }}
                            />
                        </Box>
                        {
                            errors.linkedInAddress?.message
                            &&
                            <Box mb={'lg'} flexDirection={'row'} width={'95%'} alignItems={'center'} px={'sm'} >
                                <FeatherIcon name='alert-triangle' size={12} color={'$foreground'} style={{
                                    paddingHorizontal: 7, paddingBottom: 2
                                }} />
                                <RegularText fontName='Comfortaa' props={{
                                    fontSize: 12
                                }}>
                                    {errors.linkedInAddress?.message.toString()}
                                </RegularText>
                            </Box>
                        }
                        {/* company_name */}
                        <Box
                            mb={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'95%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
                        >
                            <FeatherIcon name='briefcase' size={25} style={{ paddingRight: 25 }} />
                            <Controller control={control} name={'company_name'} render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    placeholder='Company Name' px={'md'} borderColor={'white'} borderRadius={'md'}
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
                                        message: 'Name is required!'
                                    }
                                }}
                            />
                        </Box>
                        {
                            errors.company_name?.message
                            &&
                            <Box mb={'lg'} flexDirection={'row'} width={'95%'} alignItems={'center'} px={'sm'} >
                                <FeatherIcon name='alert-triangle' size={12} color={'$foreground'} style={{
                                    paddingHorizontal: 7, paddingBottom: 2
                                }} />
                                <RegularText fontName='Comfortaa' props={{
                                    fontSize: 12
                                }}>
                                    {errors.company_name?.message.toString()}
                                </RegularText>
                            </Box>
                        }
                        {/* city */}
                        <Box
                            mb={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'95%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={1.2}
                        >
                            <FeatherIcon name='map' size={25} style={{ paddingRight: 25 }} />
                            <Controller control={control} name={'city'} render={({ field: { onChange, value, onBlur } }) => (
                                <TextInput
                                    placeholder='Contact Location' px={'md'} borderColor={'white'} borderRadius={'md'}
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
                                        message: 'Location is required!'
                                    }
                                }}
                            />
                        </Box>
                        {
                            errors.city?.message
                            &&
                            <Box mb={'lg'} flexDirection={'row'} width={'95%'} alignItems={'center'} px={'sm'} >
                                <FeatherIcon name='alert-triangle' size={12} color={'$foreground'} style={{
                                    paddingHorizontal: 7, paddingBottom: 2
                                }} />
                                <RegularText fontName='Comfortaa' props={{
                                    fontSize: 12
                                }}>
                                    {errors.city?.message.toString()}
                                </RegularText>
                            </Box>
                        }
                        <Pressable onPress={handleSubmit(onSubmit)}
                            my={'md'} flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'space-between'}
                            width={'70%'} borderRadius={'lg'} borderColor={'$foreground'} borderWidth={2} px={'lg'} py={'sm'}
                        >
                            <FeatherIcon name='save' size={22} />

                            <BoldText fontName='Poppins' props={{
                                fontSize: 22
                            }}>
                                Save this Contact
                            </BoldText>

                        </Pressable>

                    </AnimatedBox>
                }
                <Pressable onPress={() => console.log('Clicked')} flexDirection={'row'} borderColor={'$foreground'} borderWidth={2} borderRadius={'10'} my={show === true ? 'lg' : 'xs'} py={'sm'} px={'sm'} alignItems={'center'} justifyContent={'space-between'}>
                    <MediumText fontName='Poppins' props={{
                        fontSize: 22
                    }}>
                        Import Multiple Contacts
                    </MediumText>
                    <FeatherIcon name='users' size={20} />
                </Pressable>
            </ScrollView>
        </Container>
    )
}