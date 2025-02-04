import { Box, Container } from '@/atoms'
import { BoldText, MediumText, SemiBoldText } from '@/components/Typography'
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
import { loadingAtom, responseDataAtom, searchQueryAtom } from '@/state/searchbar'
import { singleContactAtom } from '@/state/singleContactState'
import theme from '@/themes/solarised-dark'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAtom, useAtomValue } from 'jotai'

import React from 'react'





type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "Emp">, NativeStackScreenProps<RootStackParamList>>


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

export default function EmpScreen({ navigation }: Props) {
    const searchQuery = useAtomValue(searchQueryAtom)
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
    const [, setSingleContact] = useAtom(singleContactAtom)
    const handleEmployeeListItemSwipeLeft = React.useCallback((_linkedin_id: string | number, _data: EmployeeContact, _conceal: () => void) => {
        setSingleContact(_data)
        const { current: menu } = refMoveContactSheet
        if (menu) {
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
            <Container justifyContent={'center'} width={'100%'} height={'100%'} alignItems={'center'}>
                <SemiBoldText fontName='Comfortaa' props={{
                    textAlign: 'center',
                    px: 'lg',
                    fontSize: 28,
                    lineHeight: 34,
                    style: { top: 100, position: 'absolute' }
                }}>
                    Searching for your distro request <BoldText fontName='Poppins' props={{
                        lineHeight: 34,
                        fontSize: 28
                    }}>{searchQuery === undefined ? null : `' ${searchQuery.replace('.com', '')} '`}</BoldText>. This may take a moment.
                </SemiBoldText>
                <Loading col={theme.colors.white} />
            </Container>
        )
    }
    // console.log(searchQuery);


    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const EmployeeData = data.filter(emp => emp.personal_email != "")

    return (
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            {
                data !== undefined && data.length === 0
                    ?
                    <Box width={'100%'} mt='hg' >
                        <Card>
                            <Box height={'100%'} width={'100%'} borderRadius={'20'} px={'xl'} py={'xl'}
                                bg={'$navbarBackground'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'flex-start'}>
                                <BoldText fontName='Comfortaa' props={{ fontSize: 25 }} >
                                    Enrichment
                                </BoldText>
                                <MediumText fontName='Poppins' props={{ fontSize: 17 }} >
                                    Search to pull the Employee Distribution of company specific domains.
                                </MediumText>
                                <BoldText fontName='Comfortaa'>
                                    Note - <SemiBoldText fontName='Poppins'> Domains with high visibility rate will have leads </SemiBoldText>Whereas some domains may not have any leads at all.
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