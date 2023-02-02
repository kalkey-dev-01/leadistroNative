import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { GoogleOAuthClient } from '@/api/googleOauthCred'


GoogleSignin.configure({
    webClientId: GoogleOAuthClient
})

export async function onGoogleSignIn() {
    await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
    })
    const { idToken } = await GoogleSignin.signIn()
    const credential = auth.GoogleAuthProvider.credential(idToken)
    return auth().signInWithCredential(credential)
        .then(user => firestore().collection('users').doc(user.user.email?.toString()).set({
            userEmail: user.user.email,
            uid: user.user.uid,
            lastLoginOn: new Date(Date.now()).toLocaleDateString(),
            additionalInfo: {
                name: user.additionalUserInfo?.profile?.name,
                picture: user.additionalUserInfo?.profile?.picture,
                isEmailVerified: user.additionalUserInfo?.profile?.email_verified,
            }
        }))

}