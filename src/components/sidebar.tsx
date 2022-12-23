import { Box } from '@/atoms'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SemiBoldText } from './Typography'


const Sidebar: React.FC<DrawerContentComponentProps> = () => {
    return (
        <Box flex={1} bg={'$sidebarBackground'}>
            <SafeAreaView>
                <SemiBoldText props={{ variant: 'sidebar', fontSize: 35, m: 'lg' }}>
                    leadistro
                </SemiBoldText>
            </SafeAreaView>
        </Box>
    )
}

export default Sidebar