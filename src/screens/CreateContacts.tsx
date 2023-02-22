import { Box, Container, Pressable, ScrollView, TextInput } from '@/atoms';
import { BoldText, MediumText } from '@/components/Typography';
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
import { useForm } from 'react-hook-form';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'CreateContacts'>, NativeStackScreenProps<RootStackParamList>>

export default function CreateContactsPage({ navigation }: Props) {
    const [show, setShow] = React.useState<boolean>(false)
    const opacity = useSharedValue(0)
    const fadeStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    },[])
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(addSingleContactSchema)
    })
    const handleSidebarToggle = React.useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])
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
                <Pressable onPress={() => console.log('Clicked')} flexDirection={'row'} borderColor={'$foreground'} borderWidth={2} borderRadius={'10'} mt={'lg'} py={'sm'} px={'sm'} alignItems={'center'} justifyContent={'space-between'}>
                    <MediumText fontName='Poppins' props={{
                        fontSize: 22
                    }}>
                        Import Multiple Contacts
                    </MediumText>
                    <FeatherIcon name='users' size={20} />
                </Pressable>
                <Pressable onPress={() => {
                    setShow(true)
                    opacity.value = withTiming(1, { duration: 5000 })
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
                        <TextInput bg={'$navbarBackground'} borderColor={'$foreground'} mb={'md'} borderRadius={'10'} width={'95%'} borderWidth={1} />
                        <TextInput bg={'$navbarBackground'} borderColor={'$foreground'} mb={'md'} borderRadius={'10'} width={'95%'} borderWidth={1} />
                        <TextInput bg={'$navbarBackground'} borderColor={'$foreground'} mb={'md'} borderRadius={'10'} width={'95%'} borderWidth={1} />
                        <TextInput bg={'$navbarBackground'} borderColor={'$foreground'} mb={'md'} borderRadius={'10'} width={'95%'} borderWidth={1} />
                        <TextInput bg={'$navbarBackground'} borderColor={'$foreground'} mb={'md'} borderRadius={'10'} width={'95%'} borderWidth={1} />
                        <TextInput bg={'$navbarBackground'} borderColor={'$foreground'} mb={'md'} borderRadius={'10'} width={'95%'} borderWidth={1} />
                    </AnimatedBox>
                }
            </ScrollView>
        </Container>
    )
}