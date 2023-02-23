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
            <Box flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} width={'100%'} my={'lg'}>
                {/* //!! Write a if else clause if firestore doesnt have any leads show this */}
                {
                    data?.length === 0 || data?.length === undefined || data === undefined ?
                        <Box width={'100%'} px={'lg'} mt={'lg'} mx='md' alignSelf={'center'}>
                            <BoldText fontName='Comfortaa' props={{
                                fontSize: 28,
                                textAlign: 'center'
                            }}>
                                Your Saved Leads will Appear here.
                            </BoldText>
                            <Pressable mt='lg' alignSelf={'center'} onPress={() => navigation.navigate('Emp', {})} flexDirection={'row'}
                                width={'80%'} alignItems={'center'} justifyContent={'space-between'} px={'sm'} py={'sm'} borderRadius={'sm'}
                                borderColor={'$foreground'} borderWidth={2}
                            >
                                <RegularText fontName='Poppins' props={{
                                    fontSize: 20,
                                    color: '$foreground'
                                }}>
                                    Start Researching Leads
                                </RegularText>
                                <FeatherIcon name='search' size={22.5} color={'$foreground'} />
                            </Pressable>
                        </Box>
                        :
                        <Box width={'100%'} flexDirection={'column'}  >
                            <MediumText fontName='Comfortaa' props={{
                                fontSize: 40, mt: 'md', mb: 'sm', px: 'sm'
                            }} >
                                {data.length} Saved Leads
                            </MediumText>
                            <Box flexDirection={'row'} alignItems='center' my='sm' >
                                <Box flex={1} height={1} backgroundColor='$foreground' />
                                <Box flex={1} height={1} backgroundColor='$foreground' />
                            </Box>
                            <ScrollView maxHeight={'60%'} minHeight={'40%'} width={'100%'} px={'sm'}
                                showsVerticalScrollIndicator={false}
                            >
                                {
                                    data.map((item, index) =>
                                        <Tiles
                                            key={index}
                                            emailId={item.emailId}
                                            fullName={item.fullName}
                                            linkedInAddress={item.linkedInAddress}
                                        />
                                    )
                                }
                            </ScrollView>
                            <Box flexDirection={'row'} alignItems='center' my='sm' >
                                <Box flex={1} height={1} backgroundColor='$foreground' />
                                <Box flex={1} height={1} backgroundColor='$foreground' />
                            </Box>
                        </Box>
                }
            </Box>

        </Container>
    )
}