import { Box, Container, Pressable, ScrollView } from '@/atoms'
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import auth from '@react-native-firebase/auth'
import FeatherIcon from '@/components/icon'
import firestore from '@react-native-firebase/firestore'
import { useAtom } from 'jotai'
import { firestoreDataAtom } from '@/state/firestoreStates'
import { Alert } from 'react-native'
import Tiles from '@/components/mainScreenScrollViewTiles'
import { Card } from '@/components/gradient-card'
import Image from '@/atoms/image'
// import { SavedLeads } from '@/models/model'
type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">, NativeStackScreenProps<RootStackParamList>>

export default function MainScreen({ navigation }: Props) {
    const user = auth().currentUser
    const [data, setData] = useAtom(firestoreDataAtom)

    React.useLayoutEffect(() => {
        firestore().collection('users')
            .doc(user?.email?.toString())
            .collection('leads').get()
            .then(querySnapshot => {
                let arr: { id: string; }[] = []
                querySnapshot.docs.forEach((doc) => {
                    arr.push({
                        ...doc.data(),
                        id: doc.id
                    })
                })
                setData(arr)
            }).catch((_e) => {
                Alert.alert('Error Caused while Retrieving Leads try again' + _e.message)
            })
    })
    // console.log(data?.length);
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'} py={'md'}  >
            {/* Header Bar */}
            <Box flexDirection={'row-reverse'} width={'94.5%'} borderRadius={'hg'} alignSelf={'center'} alignItems={'center'} justifyContent={'space-between'} borderColor={'$headerBarBackground'} borderWidth={2}>
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
                <SemiBoldText fontName='Comfortaa' props={{ fontSize: 22, pt: 'xs' }}>leadistro</SemiBoldText>
                <Pressable onPress={() => navigation.openDrawer()} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$headerBarBackground'}>
                    <FeatherIcon name='menu' size={20} color={'$foreground'} />
                </Pressable>
            </Box>
            {/* Body Section */}
            <Box flexDirection={'column'} justifyContent={'space-evenly'} alignItems={'center'} width={'100%'} >
                {/* Gradient Card */}
                <Card>
                    <Box width={'100%'} alignItems={'center'} justifyContent={'flex-start'} my={'lg'} mx={'lg'} flexDirection={'row'}>
                        <Image source={require('../assets/images/leadistroBlack.png')} width={27.5} height={27.5} mr={'md'} bg={'$foreground'} borderColor={'$foreground'} borderWidth={1} borderRadius={'xs'} />
                        <MediumText fontName='Poppins' props={{
                            fontSize: 22,
                        }}>
                            Start your Email Campaign
                        </MediumText>
                    </Box>
                    <Pressable onPress={() => navigation.navigate('Email', {})} flexDirection={'row'} alignItems={'center'} my={'sm'} mx={'lg'} px={'sm'} justifyContent={'flex-start'} >
                        <FeatherIcon name={'mail'} size={20} style={{ paddingRight: 16 }} />
                        <MediumText fontName='Poppins'>Design Your Email Template</MediumText>
                    </Pressable>
                    <Pressable onPress={() => { }} flexDirection={'row'} alignItems={'center'} my={'sm'} mx={'lg'} px={'sm'} justifyContent={'flex-start'} >
                        <FeatherIcon name={'cpu'} size={20} style={{ paddingRight: 16 }} />
                        <MediumText fontName='Poppins'>Use Ai Composed Emails</MediumText>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('CreateContacts', {})} flexDirection={'row'} alignItems={'center'} my={'sm'} mx={'lg'} px={'sm'} justifyContent={'flex-start'} >
                        <FeatherIcon name={'user-plus'} size={20} style={{ paddingRight: 16 }} />
                        <MediumText fontName='Poppins'>Save A Single Contact</MediumText>
                    </Pressable>
                    <Pressable onPress={() => { }} flexDirection={'row'} alignItems={'center'} my={'md'} mx={'lg'} px={'sm'} justifyContent={'flex-start'} >
                        <FeatherIcon name={'activity'} size={20} style={{ paddingRight: 16 }} />
                        <BoldText fontName='Comfortaa'>See Your Conversion Rate</BoldText>
                    </Pressable>
                </Card>
                {
                    // if nothing is saved on firestore
                    data?.length === 0 || data?.length === undefined || data === undefined ?
                        <Box width={'100%'} my={'xs'} pl={'xl'} ml={'sm'} alignSelf={'flex-start'}>
                            <BoldText fontName='Comfortaa' props={{
                                pl:"sm",fontSize: 16.5, letterSpacing: 1.65
                            }}>
                                Your Saved Leads will Appear here.
                            </BoldText>
                            <Pressable mt='lg' onPress={() => navigation.navigate('Emp', {})} flexDirection={'row'}
                                width={'90%'} alignItems={'center'} justifyContent={'space-between'} px={'sm'} py={'sm'} borderRadius={'sm'}
                                borderColor={'$foreground'} borderWidth={2}
                            >
                                <RegularText fontName='Poppins' props={{
                                    fontSize: 20,
                                    color: '$foreground'
                                }}>
                                    Start Researching Leads.
                                </RegularText>
                                <FeatherIcon name='search' size={22.5} color={'$foreground'} />
                            </Pressable>
                            <Pressable mt='lg' onPress={() => navigation.navigate('Emp', {})} flexDirection={'row'}
                                width={'90%'} alignItems={'center'} justifyContent={'space-between'} px={'sm'} py={'sm'} borderRadius={'sm'}
                                borderColor={'$foreground'} borderWidth={2}
                            >
                                <RegularText fontName='Poppins' props={{
                                    fontSize: 20,
                                    color: '$foreground'
                                }}>
                                    Setup Your Company Account.
                                </RegularText>
                                <FeatherIcon name='user' size={22.5} color={'$foreground'} />
                            </Pressable>
                        </Box>
                        :
                        <Box width={'100%'} flexDirection={'column'} alignItems={'center'}  >
                            <MediumText fontName='Poppins' props={{
                                fontSize: 35, my: 'sm', px: 'sm', letterSpacing: 1.25
                            }} >
                                Saved Leads  {data.length}
                            </MediumText>
                            <ScrollView height={'57.5%'} width={'89.5%'}
                                showsVerticalScrollIndicator={false}
                            >
                                {
                                    data.map((item, index) =>
                                        <Tiles
                                            id={item.id}
                                            key={index}
                                            emailId={item.emailId}
                                            fullName={item.fullName}
                                            linkedInAddress={item.linkedInAddress}
                                        />
                                    )
                                }
                            </ScrollView>
                        </Box>
                }

            </Box>
        </Container>
    )
}