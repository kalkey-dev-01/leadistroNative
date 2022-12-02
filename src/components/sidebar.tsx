import { Box, Text } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const Sidebar: React.FC<DrawerContentComponentProps> = () => {
    return (
        <Box flex={1} bg={'$sidebarBackground'}>
            <SafeAreaView>
                <Text variant='sidebar' m='lg' fontSize={30}>
                    Leadistro
                </Text>
            </SafeAreaView>
        </Box>
    )
}

export default Sidebar