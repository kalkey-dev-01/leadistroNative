import { Box, Container, Pressable, ScrollView } from '@/atoms';
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography';
import FeatherIcon from '@/components/icon';
import StickyHeader from '@/hooks/sticky-header';
import { HomeDrawerParamList, RootStackParamList } from '@/navs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import auth from '@react-native-firebase/auth'

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'Email'>, NativeStackScreenProps<RootStackParamList>>

export default function EmailMarketing({ navigation }: Props) {
    const user = auth().currentUser
    const handleSidebarToggle = React.useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])

    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'}>
            <Box my={'lg'} flexDirection={'row-reverse'} width={'94.5%'} borderRadius={'hg'} alignSelf={'center'} alignItems={'center'} justifyContent={'space-between'} borderColor={'$headerBarBackground'} borderWidth={2}>
                <Pressable onPress={() => console.log('Clicked')} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$fieldInputBackground'} borderColor={'$foreground'} borderWidth={2}>
                    {
                        user?.displayName !== null ?
                            <BoldText fontName='Poppins' props={{
                                fontSize: 20,
                                color: '$foreground'
                            }}>
                                {user?.displayName?.toString().charAt(0)}
                            </BoldText> :
                            <FeatherIcon name='user' size={20} color={'$foreground'} />
                    }
                </Pressable>
                <SemiBoldText fontName='Comfortaa' props={{ fontSize: 22, pt: 'xs' }}>Send / Design Emails</SemiBoldText>
                <Pressable onPress={handleSidebarToggle} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$headerBarBackground'}>
                    <FeatherIcon name='menu' size={20} color={'$foreground'} />
                </Pressable>
            </Box>
            <ScrollView width={'100%'} flexDirection={'column'} >
                <Pressable onPress={() => console.log('Clicked')} alignItems={'center'} flexDirection={'row'} mx={'lg'} my='sm' py='xs' px={'sm'} justifyContent={'space-between'} borderColor={'$foreground'} borderWidth={2} borderRadius={'10'}>
                    <MediumText fontName='Poppins' props={{
                        fontSize: 25,

                    }}>
                        Send Batch Emails
                    </MediumText>
                    <FeatherIcon name='send' size={22} />
                </Pressable>
                <Pressable onPress={() => console.log('Clicked')} alignItems={'center'} flexDirection={'row'} mx={'lg'} my='sm' py={'sm'} px={'md'} justifyContent={'space-between'} bg={'$primary'} borderRadius={'10'}>
                    <BoldText fontName='Comfortaa' props={{
                        fontSize: 25,

                    }}>
                        Design Your Mail
                    </BoldText>
                    <FeatherIcon name='mail' size={22} />
                </Pressable>
            </ScrollView>
        </Container>
    )
}