import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Sidebar from './components/sidebar';
import { NavigatorScreenParams } from '@react-navigation/native';
import SSWScreen from './screens/ssw';
import LoginScreen from './screens/LoginScreen';
import { useAtom, useAtomValue } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import auth from '@react-native-firebase/auth'
import { AuthAtom } from './state/authStateAtom';
import React from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { UserStateLoadingAtom } from './state/searchbar';
import { Box, Container } from './atoms';
import Loading from './components/loading-spin-animation';
import theme from './themes/DarkSpace';
import OnboardingScreens from './screens/OnboardingScreens';
import EmailMarketing from './screens/EmailMarketing';
import CreateContactsPage from './screens/CreateContacts';
import Settings from './screens/Setttings';
import EmpScreen from './screens/empScreen';
import MainScreen from './screens/MainScreen';
import DesignEditor from './screens/DesignEditor';
import Finalize from './screens/finalizingDesign';




export type HomeDrawerParamList = {
    Main: {

    },
    Emp: {

    },
    SSW: {

    },
    Email: {

    },
    CreateContacts: {

    },
    Settings: {

    }
}
export type EditorStacksList = {
    DesignMail: undefined,
    Finalize: undefined,
}
export type RootStackParamList = {
    Home: NavigatorScreenParams<HomeDrawerParamList>,
    DesignEditor: NavigatorScreenParams<EditorStacksList>
}

export type SignedOutStackParamList = {
    Register: undefined,
    Login: undefined,
    OnBoarding: undefined,
    Welcome: undefined
}

const SignedOutStack = createNativeStackNavigator<SignedOutStackParamList>()

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

const DesignStack = createNativeStackNavigator<EditorStacksList>()

function Home() {
    return (
        <Drawer.Navigator
            drawerContent={props => <Sidebar {...props} />}
            screenOptions={{
                drawerType: 'back',
                swipeEdgeWidth: 200
            }} initialRouteName='Main'>
            <Drawer.Screen
                name='Main'
                component={MainScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name='Emp'
                component={EmpScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name='SSW'
                component={SSWScreen}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name='Email'
                component={EmailMarketing}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name='CreateContacts'
                component={CreateContactsPage}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name='Settings'
                component={Settings}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

// const storage = createJSONStorage<boolean>(() => AsyncStorage)
export const SeenOnboaringAtom = atomWithStorage<boolean>('hasSeen', false,
)

export const SignedOutNavigations = () => {
    const hasSeen = useAtomValue(SeenOnboaringAtom)
    console.log(hasSeen, 'Seen');
    // console.log(!seen, 'Not ! Seen');

    return (
        <SignedOutStack.Navigator initialRouteName={hasSeen ? 'Welcome' : 'OnBoarding'} screenOptions={{ animation: 'fade' }}>
            <SignedOutStack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
            <SignedOutStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <SignedOutStack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
            {!hasSeen && <SignedOutStack.Screen name='OnBoarding' component={OnboardingScreens} options={{ headerShown: false }} />}
        </SignedOutStack.Navigator>
    )
}

export const SignedInNavigations = () => {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ animation: 'fade' }} >
            <Stack.Screen name='Home' component={Home} options={{
                headerShown: false
            }} />
            <Stack.Screen name='DesignEditor' component={MailDesign} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function MailDesign() {
    return (
        <DesignStack.Navigator initialRouteName='DesignMail' screenOptions={{ headerShown: false, animation: 'fade' }} >
            <DesignStack.Screen name='DesignMail' component={DesignEditor} />
            <DesignStack.Screen name='Finalize' component={Finalize} />
        </DesignStack.Navigator>
    )
}



export default function Navigations() {
    const [user, setUser] = useAtom(AuthAtom)
    const [loading, setLoading] = useAtom(UserStateLoadingAtom)


    React.useEffect(() => {
        auth().onAuthStateChanged(userState => {
            setLoading(true)
            setUser(userState)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return (
            <Container justifyContent={'center'} alignItems={'center'}>
                <Box alignItems={'center'} justifyContent='center'>
                    <Loading col={theme.colors.white} />
                </Box>
            </Container>
        )
    }
    return (
        <>{user ? <SignedInNavigations /> : <SignedOutNavigations />}</>
    )
}
