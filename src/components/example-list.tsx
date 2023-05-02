import { Box } from "@/atoms";
import { ExampleListItem } from "@/fixtures/ExampleNote";
import { EmployeeContact } from "@/models/model";
// import { responseDataAtom } from "@/state/searchbar";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
// import { AxiosResponse } from "axios";
// import { useAtom, useAtomValue } from "jotai";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import {RecyclerListView , RecyclerListViewProps} from 'recyclerlistview';
import { FlatList, FlatListProps, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import Animated, { AnimateProps } from "react-native-reanimated";
const StyledFlatlist = createBox<Theme, AnimateProps<FlatListProps<EmployeeContact>>>(Animated.FlatList)

// const StyledRecyclerList = createBox<Theme, AnimateProps<RecyclerListViewProps>>(Animated.RecyclerListView)

interface Props {
    scrollInsetTop: number
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
    onItemPress: (id: string | number, data: EmployeeContact) => void
    onItemSwipeLeft: (id: string | number, data: EmployeeContact, cancel: () => void) => void
    data?: EmployeeContact[] 
}

const EmployeeExampleList: React.FC<Props> = ({ onScroll, scrollInsetTop, onItemPress, onItemSwipeLeft, data }) => {

    const renderItem = React.useCallback(({ item }: { item: EmployeeContact }) => {
        return <ExampleListItem {...item} onPress={onItemPress} onSwipeLeft={onItemSwipeLeft} />
    }, [])
    return (
        <StyledFlatlist
            contentInsetAdjustmentBehavior="automatic"
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.linkedin_id.toString()}
            width='100%'
            onScroll={onScroll}
            scrollEventThrottle={16}
            ListHeaderComponent={<Box width={'100%'} height={scrollInsetTop} />}
        />
    )
}

export default EmployeeExampleList





