import React from 'react'
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import BottomSheet from '@/atoms/bottom-sheet'
import { Box, Text } from '@/atoms'

interface Props {
    onClose?: () => void
}
interface MoveContactSheetHandle {
    show: () => void
}
const MoveContactSheet = React.forwardRef<MoveContactSheetHandle, Props>(
    ({ onClose }, ref) => {
        const refBottomSheet = React.useRef<RNBottomSheet>(null)
        const snapPoints = React.useMemo(() => ['60%', '90%'], [])

        React.useImperativeHandle(ref, () => ({
            show: () => {
                const { current: bottomSheet } = refBottomSheet
                if (bottomSheet) {
                    bottomSheet.snapToIndex(0)
                }
            }
        }))
        return (
            <BottomSheet
                ref={refBottomSheet}
                index={-1}
                snapPoints={snapPoints}
                backdropComponent={
                    props => (
                        <BottomSheetBackdrop
                            {...props}
                            appearsOnIndex={0}
                            disappearsOnIndex={-1}
                        />
                    )
                }
                detached={true}
                bottomInset={46}
                enablePanDownToClose={true}
                style={{ marginHorizontal: 12 }}
                onClose={onClose}

            >
                <Box justifyContent={'center'} alignItems={'center'}>
                    <Text fontWeight={'bold'}>
                        Move
                    </Text>
                </Box>
            </BottomSheet>
        )
    }
)

type MoveContactSheet  = MoveContactSheetHandle

export default MoveContactSheet