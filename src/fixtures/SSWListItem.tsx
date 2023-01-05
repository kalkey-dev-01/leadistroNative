import { Box, TouchableOpacity } from '@/atoms'
import { BoldText, RegularText } from '@/components/Typography'
import { SSWListActionView } from '@/components/example-list-actions-view'
import SwipeableView, { BackViewProps } from '@/components/swipable-view'
import { ConvertCompanyNames } from '@/models/model'
import React from 'react'
// import { Image } from 'react-native'


export interface SSWItemProps extends ConvertCompanyNames {
    onPress: (id: string, data: ConvertCompanyNames) => void
    onSwipeLeft?: (logo: string, done: () => void) => void
}



const SSWListItem: React.FC<SSWItemProps> = React.memo(props => {
    const { onPress, onSwipeLeft, logo } = props
    const handlePress = React.useCallback(() => {
        onPress(logo, { ...props })
    }, [])
    const handleSwipeLeft = React.useCallback(
        (done: () => void) => {
            onSwipeLeft && onSwipeLeft(logo, done)
        },
        [logo, onSwipeLeft]
    )

    const renderBackView = React.useCallback(
        ({ progress }: BackViewProps) => (
            <SSWListActionView progress={progress} />
        ),
        []
    )
    return (
        <SwipeableView
            bg="yellow"
            onSwipeLeft={handleSwipeLeft}
            backView={renderBackView}
        >
            <Box bg="$background" borderBottomWidth={1} borderBottomColor={'white'}>
                <TouchableOpacity
                    bg="$background"
                    px="lg"
                    py="xl"
                    onPress={handlePress}
                >
                    <Box flexDirection={'column'} width={'100%'} justifyContent={'space-between'} alignItems={'flex-start'}>
                        <BoldText fontName='Comfortaa' props={{
                            fontSize: 25,
                            color: 'white'
                        }}>
                            {props.name}
                        </BoldText>
                        <RegularText fontName='Poppins' props={{
                            fontSize: 25,
                            color: 'white'
                        }}>
                            {props.domain}
                        </RegularText>
                        {/* <Image source={{ uri: props.logo }} style={{ maxHeight: 125, width: '100%', alignSelf: 'center', resizeMode: 'contain', marginTop: 25 }} /> */}
                    </Box>
                </TouchableOpacity>
            </Box>
        </SwipeableView>
    )
})

export default SSWListItem