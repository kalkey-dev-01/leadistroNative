/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Box,
    // Box,
    Container
} from '@/atoms'
import { BoldText, RegularText, SemiBoldText } from '@/components/Typography'
import { Card } from '@/components/gradient-card'
import Loading from '@/components/loading-spin-animation'
import ConvertCompanyNamesList from '@/components/ssw-list'
import SSWHeaderBar from '@/components/sswHeader'
import StickyHeader from '@/hooks/sticky-header'
import { ConvertCompanyNames } from '@/models/model'
import { HomeDrawerParamList, RootStackParamList } from '@/navs'
import { loadingAtom, searchQueryAtom, sswAtom } from '@/state/searchbar'
import theme from '@/themes/DarkSpace'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAtom, useAtomValue } from 'jotai'
import React from 'react'


type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "SSW">, NativeStackScreenProps<RootStackParamList>>

// TODO - Work On this Screen and Integrate Drawer
export default function SSWScreen({ navigation }: Props) {
    const [, setSearchQuery] = useAtom(searchQueryAtom)
    const [, setData] = useAtom(sswAtom)
    const data = useAtomValue(sswAtom)
    const handleSidebarToggle = React.useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])
    const onItemPress = React.useCallback((_domain: string | number, _data: ConvertCompanyNames) => {
        // later
        console.log('lets see', _data);
        console.log('Wanna Save this figure it out', _domain);
    }, [])
    const onItemSwipeLeft = React.useCallback((_domain: string | number) => {
        navigation.navigate('Main', {})
        setSearchQuery(_domain.toString())
    }, [])
    // const loading = useAtomValue(loadingAtom)
    // const loading = true
    // if (loading) {
    //     return (
    //         <Container justifyContent={'center'} alignItems={'center'}>
    //             <Box alignItems={'center'} justifyContent='center'>
    //                 <Loading col={theme.colors.white} />
    //             </Box>
    //         </Container>
    //     )
    // }
    const { barStyle, handleListLayout, handleScroll, headerHeight } = StickyHeader()
    return (
        <>
            <Container justifyContent={'flex-start'} alignItems={'center'}>
                {
                    data.length === 0
                        ?
                        <Box width={'100%'} mt='hg' >
                            <Card>
                                <Box height={'100%'} width={'100%'} borderRadius={'lg'} px={'xl'} py={'xl'}
                                    bg={'$background'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'flex-start'}>
                                    <BoldText fontName='Comfortaa' props={{ fontSize: 25 }} >
                                        Search Similar Domains
                                    </BoldText>
                                    <RegularText fontName='Poppins' props={{ fontSize: 18 }} >
                                        Search the Domain Distro to find similar domains
                                    </RegularText>
                                    <BoldText fontName='Comfortaa'>
                                        Remember this only shows <SemiBoldText fontName='Poppins'> Top 5 </SemiBoldText> domains
                                    </BoldText>
                                </Box>
                            </Card>
                        </Box>
                        :
                        null
                }

                {
                    data !== undefined ?
                        <ConvertCompanyNamesList onItemPress={onItemPress} onItemSwipeLeft={onItemSwipeLeft} onScroll={handleScroll} scrollInsetTop={headerHeight} data={data} />
                        : null
                }
                <SSWHeaderBar onSidebarToggle={handleSidebarToggle} onLayout={handleListLayout} style={barStyle} />
            </Container>
        </>
    )
}