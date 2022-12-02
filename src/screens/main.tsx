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

            <HeaderBar>
                <TouchableOpacity m='xs' p={'xs'} rippleBorderless onPress={handleSidebarToggle}>
                    <FeatherIcon name='menu' size={22} />
                </TouchableOpacity>
                <Box alignItems={'center'} flex={1} ><Text fontSize={30}>Leadistro</Text></Box>
                <TouchableOpacity m='xs' p={'xs'} rippleBorderless>
                    <FeatherIcon name='more-vertical' size={22} />
                </TouchableOpacity>
            </HeaderBar>
            <Box mt={'100'} mb={'lg'} justifyContent={'space-between'} alignItems={'center'} backgroundColor={'$primary'} width={'90%'} flexDirection={'row'} py={'lg'} px={'lg'} style={{ borderRadius: 10 }}>
                <Text fontSize={22} letterSpacing={1} fontWeight={'800'}>Enrich Company</Text>
                <FeatherIcon name='menu' size={22} />
            </Box>
            <TextInput px={'md'} backgroundColor={'$foreground'} width={'80%'} />


        </Container>
    )
}