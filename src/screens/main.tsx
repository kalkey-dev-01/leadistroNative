/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, } from '@/atoms'
import EmployeeExampleList from '@/components/example-list'
import HeaderBar from '@/components/headerbar'
import Loading from '@/components/loading-spin-animation'
// import FeatherIcon from '@/components/icon'
import MoveContactSheet from '@/components/move-contact'
import { ExampleData } from '@/fixtures/ExampleNote'
import StickyHeader from '@/hooks/sticky-header'
import { EmployeeContact } from '@/models/model'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { loadingAtom, responseDataAtom } from '@/state/searchbar'
import theme from '@/themes/solarised-dark'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { responseDataAtom } from '@/state/searchbar'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAtomValue } from 'jotai'
// import { useAtom } from 'jotai'
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
    const handleMoveEmployeeSheetClose = React.useCallback(() => {
        concealEmployeeListItem && concealEmployeeListItem()
        setConcealEmployeeListItem(null)
    }, [concealEmployeeListItem])
    const getData = async () => {
        try {
            const data = await AsyncStorage.getItem('Emp')
            return data !== null ? JSON.parse(data) : null
        } catch (error: any) {
            console.log(error.message);
        }
    }

    const data = useAtomValue(responseDataAtom)
    // console.log(data);
    const loading = useAtomValue(loadingAtom)
    // const loading = true
    if (loading) {
        return (
            <Container justifyContent={'center'} alignItems={'center'}>
                <Loading col={theme.colors.white} /> 
            </Container>
        )
    }

    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            {
                data !== undefined
                    ?
                    <EmployeeExampleList scrollInsetTop={headerHeight} onScroll={handleScroll} onItemPress={handleEmployeeListItemPress} onItemSwipeLeft={handleEmployeeListItemSwipeLeft} data={data} />
                    :
                    null
            }


            <HeaderBar onSidebarToggle={handleSidebarToggle} style={barStyle} onLayout={handleEmployeeListLayout}>
            </HeaderBar>

            <MoveContactSheet ref={refMoveContactSheet} onClose={handleMoveEmployeeSheetClose} />




        </Container>
    )
}