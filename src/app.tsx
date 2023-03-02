import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import Navigations from './navs'
import { ThemeProvider } from '@shopify/restyle'
import StatusBar from './components/status-bar'
import theme from './themes/DarkSpace'
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const App = () => {
    return (
        
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <StatusBar />
                <Navigations />
            </ThemeProvider>
        </NavigationContainer>
        
    )
}

export default App