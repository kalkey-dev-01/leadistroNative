import { Box, Container, Text, TextInput, TouchableOpacity } from '@/atoms'
import HeaderBar from '@/components/headerbar'
import FeatherIcon from '@/components/icon'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback } from 'react'




type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Main">, NativeStackScreenProps<RootStackParamList>>


// type TabParamList = {
//     enco: undefined,
//     : {}
// }

// const Tabs = createMaterialBottomTabNavigator<TabParamList>()

// const HomeTabs: React.FC<{}> = () => {
//     return (
//         <>
//             <Tabs.Navigator initialRouteName='Home'>
//                 <Tabs.Screen />
//                 <Tabs.Screen />
//                 <Tabs.Screen />
//             </Tabs.Navigator>
//         </>
//     )
// }

export default function MainScreen({ navigation }: Props) {
    const handleSidebarToggle = useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])
    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            {/* <HelperList /> */}
            <HeaderBar>
                <TouchableOpacity m='xs' p={'xs'} rippleBorderless onPress={handleSidebarToggle}>
                    <FeatherIcon name='menu' size={22} />
                </TouchableOpacity>
                <Box alignItems={'center'} flex={1} >
                    <TextInput px={'md'}  style={{ borderRadius: 25 }} width={'100%'} color={'ebony'} letterSpacing={2.5} placeholder='Enter Company Domain' alignItems={'center'} justifyContent={'center'} />
                </Box>
                <TouchableOpacity m='xs' p={'xs'} rippleBorderless>
                    <FeatherIcon name='search' size={22} />
                </TouchableOpacity>
            </HeaderBar>
            



        </Container>
    )
}