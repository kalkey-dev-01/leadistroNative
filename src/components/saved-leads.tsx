import { Container, ScrollView } from '@/atoms'
import React from 'react'
import Tiles from './mainScreenScrollViewTiles'
import { useAtom } from 'jotai';
import { firestoreDataAtom } from '@/state/firestoreStates';
import auth from '@react-native-firebase/auth'
// import FeatherIcon from '@/components/icon'
import firestore from '@react-native-firebase/firestore'
import { Alert } from 'react-native'
import { MediumText, SemiBoldText } from './Typography';

export default function SavedLeads() {
    const user = auth().currentUser;
    const [data, setData] = useAtom(firestoreDataAtom);
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
    return (
        <Container alignItems={'flex-start'} justifyContent={'flex-start'}>
            <MediumText fontName='Poppins' props={{
                fontSize: 21, my: 'sm', px: 'sm', letterSpacing: 1.25
            }} >
                Saved Leads  {data?.length}
            </MediumText>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {
                    data && data.map((item, index) =>
                        <Tiles
                            id={item.id}
                            key={index}
                            emailId={item.emailId}
                            fullName={item.fullName}
                            linkedInAddress={item.linkedInAddress}
                        />
                    )
                }
                {
                    data === undefined ?
                        <>
                            <SemiBoldText fontName='Poppins'>
                                Something Went Wrong
                            </SemiBoldText>
                        </>
                        : null
                }
            </ScrollView>
        </Container>
    )
}