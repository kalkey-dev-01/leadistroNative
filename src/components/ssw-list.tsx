import { Box } from '@/atoms';
import SSWListItem from '@/fixtures/SSWListItem';
import { ConvertCompanyNames } from '@/models/model';
import { Theme } from '@/themes';
import { createBox } from '@shopify/restyle';
import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FlatList, FlatListProps, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import Animated, { AnimateProps } from "react-native-reanimated";

const StyledFlatlist = createBox<Theme, AnimateProps<FlatListProps<ConvertCompanyNames>>>(Animated.FlatList)
interface Props {
    scrollInsetTop: number
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
    onItemPress: (id: string | number, data: ConvertCompanyNames) => void
    onItemSwipeLeft: (id: string | number,  cancel: () => void) => void
    data?: ConvertCompanyNames[]
}

const ConvertCompanyNamesList: React.FC<Props> = ({ onItemPress, onItemSwipeLeft, onScroll, scrollInsetTop, data }) => {
    const renderItem = React.useCallback(({ item }: { item: ConvertCompanyNames }) => {
        return <SSWListItem {...item} onPress={onItemPress} onSwipeLeft={onItemSwipeLeft} />
    }, [])
    return (
        <StyledFlatlist
            contentInsetAdjustmentBehavior="automatic"
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.domain.toString()}
            width='100%'
            onScroll={onScroll}
            scrollEventThrottle={16}
            ListHeaderComponent={<Box width={'100%'} height={scrollInsetTop} />}
        />
    )
}
export default ConvertCompanyNamesList