import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
const user = auth().currentUser?.email?.toString()


export const usersCollectionWithEmailAsDoc = firestore().collection('users').doc(user)
export const leadsCollection = usersCollectionWithEmailAsDoc.collection('leads')
