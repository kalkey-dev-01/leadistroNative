import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main';
import Sidebar from './components/sidebar';
import { NavigatorScreenParams } from '@react-navigation/native';
import SSWScreen from './screens/ssw';
import LoginScreen from './screens/LoginScreen';

import { OnboardingScreens } from './screens/OnboardingScreens';
import auth from '@react-native-firebase/auth'
import { useAtom } from 'jotai';
import { AuthAtom } from './state/authStateAtom';
// import { loadingAtom } from './state/searchbar';
import React from 'react';
// import { Container, Box } from './atoms';
// import Loading from './components/loading-spin-animation';
// import theme from './themes/DarkSpace';
import WelcomeScreen from './screens/WelcomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { UserStateLoadingAtom } from './state/searchbar';
import { Box, Container } from './atoms';
import Loading from './components/loading-spin-animation';
import theme from './themes/DarkSpace';



export type HomeDrawerParamList = {
    Main: {

    },
    SSW: {

    }
}
export type RootStackParamList = {
    Home: NavigatorScreenParams<HomeDrawerParamList>

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
                name='SSW'
                component={SSWScreen}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    )
}

export const SignedOutNavigations = () => {
    return (
        <SignedOutStack.Navigator initialRouteName='Welcome' screenOptions={{ animation: 'fade' }}>
            <SignedOutStack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
            <SignedOutStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <SignedOutStack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
            <SignedOutStack.Screen name='OnBoarding' component={OnboardingScreens} options={{ headerShown: false }} />
        </SignedOutStack.Navigator>
    )
}

export const SignedInNavigations = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
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
