import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main';
import Sidebar from './components/sidebar';
import { NavigatorScreenParams } from '@react-navigation/native';
import SSWScreen from './screens/ssw';
import LoginScreen from './screens/LoginScreen'; 
import { RegisterScreen } from './screens/RegisterScreen';
import { OnboardingScreens } from './screens/OnboardingScreens';


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
    Register: {},
    Login: {},
    OnBoarding: {}
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
        <SignedOutStack.Navigator initialRouteName='Login'>
            <SignedOutStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <SignedOutStack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
            <SignedOutStack.Screen name='OnBoarding' component={OnboardingScreens} options={{ headerShown: false }} />
        </SignedOutStack.Navigator>
    )
}



export default function Navigations() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
