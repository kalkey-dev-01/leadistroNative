import { Box } from "@/atoms";
import { ExampleData, ExampleItemProps, ExampleListItem } from "@/fixtures/ExampleNote";
import { EmployeeContact } from "@/models/model";
import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React from "react";
import { FlatList, FlatListProps, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import Animated, { AnimateProps } from "react-native-reanimated";
const StyledFlatlist = createBox<Theme, AnimateProps<FlatListProps<EmployeeContact>>>(Animated.FlatList)

interface Props {
    scrollInsetTop: number
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
    onItemPress: (id: string) => void
    onItemSwipeLeft: (id: string, cancel: () => void) => void
}

const EmployeeExampleList: React.FC<Props> = ({ onScroll, scrollInsetTop, onItemPress,onItemSwipeLeft }) => {
    const renderItem = React.useCallback(({ item }: { item: EmployeeContact }) => {
        return <ExampleListItem {...item}  onPress={onItemPress} onSwipeLeft={onItemSwipeLeft} />
    }, [])
    return (
        <StyledFlatlist
            contentInsetAdjustmentBehavior="automatic"
            data={ExampleData}
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