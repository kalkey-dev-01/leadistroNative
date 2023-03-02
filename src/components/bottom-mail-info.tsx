// import { leadsCollection } from '@/api/firebase'
// import { Alert, Linking } from 'react-native'
import React from 'react'
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import BottomSheet from '@/atoms/bottom-sheet'
import { Box, Pressable } from '@/atoms'
import { BoldText, RegularText, SemiBoldText } from './Typography'
import FeatherIcon from './icon'
import { useAtomValue } from 'jotai'

interface Props {
    onClose?: () => void
}
interface BottomMailInfoHandle {
    show: () => void
}

const MailInfo = React.forwardRef<BottomMailInfoHandle, Props>(
    ({ onClose }, ref) => {
        const refBottomSheet = React.useRef<RNBottomSheet>(null)
        const snapPoints = React.useMemo(() => ['60%', '90%'], [])
        // !!TODO: Add Delete and Send Functionality
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
                {/* Content */}
                <Box width={'100%'} height={'100%'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-start'} bg={'$navbarBackground'}>
                    <Pressable>
                        <BoldText fontName='Comfortaa' props={{
                            fontSize: 33,
                            letterSpacing: 1.34
                        }}>
                            Preview and Edit
                        </BoldText>
                    </Pressable>
                </Box>
            </BottomSheet>
        )
    }
)

type MailInfo = BottomMailInfoHandle

export default MailInfo