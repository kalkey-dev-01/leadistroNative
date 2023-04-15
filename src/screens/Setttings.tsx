import { Box, Container, Pressable } from '@/atoms'
import { BoldText, MediumText, RegularText } from '@/components/Typography'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import auth from '@react-native-firebase/auth';
import FeatherIcon from '@/components/icon'
import { Card } from '@/components/gradient-card'
import Image from '@/atoms/image'
import { Alert } from 'react-native'


type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'Settings'>, NativeStackScreenProps<RootStackParamList>>

export default function Settings({ }: Props) {
    const user = auth().currentUser;
    return (
        <Container alignItems={'flex-start'} justifyContent={'flex-start'} py={'50'} px={'xl'}>
            <BoldText fontName='Comfortaa' props={{ fontSize: 25, px: 'xs' }}>
                Settings
            </BoldText>
            {user?.displayName &&
                <Box flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'flex-end'} mt={'xl'} width={'100%'}>
                    <RegularText fontName="Poppins" props={{ fontSize: 20, px: 'lg' }}>
                        {user?.displayName}
                    </RegularText>
                    <FeatherIcon name="user" size={30} />
                </Box>
            }
            <Box flexDirection={'row-reverse'} alignItems={'center'} justifyContent={'flex-end'} my={'xl'} width={'100%'}>
                <RegularText fontName="Comfortaa" props={{ fontSize: 20, px: 'lg' }}>
                    {user?.email}
                </RegularText>
                <FeatherIcon name="mail" size={30} />
            </Box>

            <Box flex={1} alignSelf={'center'}>
                <Card>
                    <Box width={'100%'} height={'100%'} flexDirection={'column'} bg={'$navbarBorderBottom'} justifyContent={'flex-start'} alignItems={'flex-start'} borderRadius={'20'}>
                        <Box width={'100%'} alignItems={'center'} justifyContent={'flex-start'} my={'lg'} mx={'lg'} flexDirection={'row'}>
                            <Image source={require('../assets/images/leadistroBlack.png')} width={27.5} height={27.5} mr={'md'} bg={'$foreground'} borderColor={'$foreground'} borderWidth={1} borderRadius={'xs'} />
                            <MediumText fontName='Poppins' props={{
                                fontSize: 22,
                            }}>
                                Leadistro Premium
                            </MediumText>
                        </Box>
                        <Box px={'lg'} width={'100%'} height={'100%'} flex={1}>
                            <BoldText fontName="Poppins" props={{
                                fontSize: 17.5, letterSpacing: 0.5
                            }}>
                                Unlocked All Premium Features
                            </BoldText>
                            <MediumText fontName="Poppins" props={{
                                fontSize: 15.5, letterSpacing: 0.09, pt: 'lg', pb: 'xs', lineHeight: 18
                            }}>
                                - Fetch Upto 1000 Available leads.
                            </MediumText>
                            <MediumText fontName="Poppins" props={{
                                fontSize: 15.5, letterSpacing: 0.09, py: 'xs', lineHeight: 18
                            }}>
                                - All Templates with Creator Mode.
                            </MediumText>
                            <MediumText fontName="Poppins" props={{
                                fontSize: 15.5, letterSpacing: 0.09, py: 'xs', lineHeight: 18
                            }}>
                                - Compose Mails with distroGPT.
                            </MediumText>
                            <MediumText fontName="Poppins" props={{
                                fontSize: 15.5, letterSpacing: 0.09, py: 'xs', lineHeight: 18
                            }}>
                                - Campaign Automation with distroGPT.
                            </MediumText>
                        </Box>
                    </Box>
                </Card>
            </Box>
            <Pressable
                flexDirection={'row'} borderRadius={'20'} borderColor={'$foreground'} borderWidth={2} px={'lg'} width={'100%'} alignItems={'center'} justifyContent={'flex-start'} mt={'50'}
                onPress={() => {
                    auth().signOut().then(() => Alert.alert('Signed Out', 'You Have been successfully signed out, We Will Update your Distro'))
                }}>
                <FeatherIcon
                    style={{ paddingRight: 15 }}
                    name='log-out'
                    size={22.5} />
                <BoldText fontName='Comfortaa' props={{
                    fontSize: 22, my: 'xl', numberOfLines: 1,
                }}>
                    Sign Out from this device.
                </BoldText>
            </Pressable>
        </Container>
    )
}