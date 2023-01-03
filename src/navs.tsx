import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main';
import Sidebar from './components/sidebar';
import { NavigatorScreenParams } from '@react-navigation/native';
import SSWScreen from './screens/ssw';


export type HomeDrawerParamList = {
    Main: {

    },
    SSW: {
        
    }
}
export type RootStackParamList = {
    Home: NavigatorScreenParams<HomeDrawerParamList>

}



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
                options={{ headerShown: true }}
            />
        </Drawer.Navigator>
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
