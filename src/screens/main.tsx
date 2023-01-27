import { Box, Container } from '@/atoms'
import { BoldText, RegularText, SemiBoldText } from '@/components/Typography'
import EmployeeExampleList from '@/components/example-list'
import { Card } from '@/components/gradient-card'
// import { Card } from '@/components/gradient-card'
import HeaderBar from '@/components/headerbar'
import Loading from '@/components/loading-spin-animation'
import MoveContactSheet from '@/components/move-contact'
// import { ExampleData } from '@/fixtures/ExampleNote'
import StickyHeader from '@/hooks/sticky-header'
import { EmployeeContact } from '@/models/model'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { loadingAtom, responseDataAtom } from '@/state/searchbar'
import theme from '@/themes/solarised-dark'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAtomValue } from 'jotai'

import React from 'react'





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
    const [concealEmployeeListItem, setConcealEmployeeListItem] = React.useState<(() => void) | null>(null)
    const refMoveContactSheet = React.useRef<MoveContactSheet>(null)
    const { barStyle, handleListLayout, handleScroll, headerHeight } = StickyHeader()
    const handleSidebarToggle = React.useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])
    const handleEmployeeListItemPress = React.useCallback((_linkedin_id: string | number, _data: EmployeeContact) => {
        // later
        console.log('lets see', _data);
        
        console.log('Wanna Save this figure it out', _linkedin_id);
    }, [])
    const handleEmployeeListItemSwipeLeft = React.useCallback((_linkedin_id: string | number, _conceal: () => void) => {
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
    const data = useAtomValue(responseDataAtom)
    // console.log(data);
    const loading = useAtomValue(loadingAtom)
    // const loading = true
    if (loading) {
        return (
            <Container justifyContent={'center'} alignItems={'center'}>
                <Box alignItems={'center'} justifyContent='center'>
                        <Loading col={theme.colors.white} />
                </Box>
            </Container>
        )
    }


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const EmployeeData = data.filter(emp => emp.personal_email != "")
    
    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            {
                data.length === 0
                    ?
                    <Box width={'100%'} mt='hg' >
                        <Card>
                            <Box height={'100%'} width={'100%'} borderRadius={'lg'} px={'xl'} py={'xl'}
                                bg={'$background'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'flex-start'}>
                                <BoldText fontName='Comfortaa' props={{ fontSize: 25 }} >
                                    leadistroNative v0.1
                                </BoldText>
                                <RegularText fontName='Poppins' props={{ fontSize: 18 }} >
                                    Search to pull the Employee Distribution of company specific domains
                                </RegularText>
                                <BoldText fontName='Comfortaa'>
                                    Remember to type | <SemiBoldText fontName='Poppins'> .com </SemiBoldText> | after a company name
                                </BoldText>
                            </Box>
                        </Card>
                    </Box>
                    :
                    null
            }
            {
                data !== undefined
                    ?
                    <EmployeeExampleList
                        scrollInsetTop={headerHeight} onScroll={handleScroll}
                        onItemPress={handleEmployeeListItemPress} onItemSwipeLeft={handleEmployeeListItemSwipeLeft}
                        data={data}
                    />
                    :
                    null
            }
            <HeaderBar onSidebarToggle={handleSidebarToggle} style={barStyle} onLayout={handleListLayout}>
            </HeaderBar>
            <MoveContactSheet ref={refMoveContactSheet} onClose={handleMoveEmployeeSheetClose} />
        </Container>
    )
}