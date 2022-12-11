import { Box, Container, Text,  TouchableOpacity } from '@/atoms'
import EmployeeExampleList from '@/components/example-list'
import HeaderBar from '@/components/headerbar'
import FeatherIcon from '@/components/icon'
import MoveContactSheet from '@/components/move-contact'
import StickyHeader from '@/hooks/sticky-header'
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

// TODO - Make Use Of Axios And Create A logic for helpers

export default function MainScreen({ navigation, }: Props) {
    const [concealEmployeeListItem, setConcealEmployeeListItem] = React.useState<(() => void) | null>(null)
    const refMoveContactSheet = React.useRef<MoveContactSheet>(null)
    const { barStyle, handleEmployeeListLayout, handleScroll, headerHeight } = StickyHeader()
    const handleSidebarToggle = useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])
    const handleEmployeeListItemPress = React.useCallback((_linkedin_id: string) => {
        // later
        console.log('Pressed', _linkedin_id);

    }, [])
    const handleEmployeeListItemSwipeLeft = React.useCallback((_linkedin_id: string, _conceal: () => void) => {
        const { current: menu } = refMoveContactSheet
        if (menu) {
            console.log('show');
            menu.show()
            setConcealEmployeeListItem(() => _conceal)
        }
    }, [])
    const handleMoveEmployeeSheetClose = React.useCallback(()=>{
        concealEmployeeListItem && concealEmployeeListItem()
        setConcealEmployeeListItem(null)
    },[concealEmployeeListItem])
    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            <EmployeeExampleList scrollInsetTop={headerHeight} onScroll={handleScroll} onItemPress={handleEmployeeListItemPress} onItemSwipeLeft={handleEmployeeListItemSwipeLeft} />
            <HeaderBar onSidebarToggle={handleSidebarToggle} style={barStyle} onLayout={handleEmployeeListLayout}>
       
            </HeaderBar>
            <MoveContactSheet ref={refMoveContactSheet} onClose={handleMoveEmployeeSheetClose} />




        </Container>
    )
}