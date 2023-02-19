import React from 'react'
import RNBottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import BottomSheet from '@/atoms/bottom-sheet'
import { Box } from '@/atoms'
import { BoldText, MediumText, RegularText, SemiBoldText } from './Typography'
import FeatherIcon from './icon'
import { useAtomValue } from 'jotai'
import { singleContactAtom } from '@/state/singleContactState'

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
        // !!TODO: Add Functionality
        React.useImperativeHandle(ref, () => ({
            show: () => {
                const { current: bottomSheet } = refBottomSheet
                if (bottomSheet) {
                    bottomSheet.snapToIndex(0)
                }
            }
        }))
        const data = useAtomValue(singleContactAtom)
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
                <Box flexDirection={'column'} height={'100%'} width={'100%'} my={'lg'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                    {/* Call to Action */}
                    <Box flexDirection={'row'} width={'100%'} px={'50'} my={'md'} justifyContent={'center'} alignItems={'center'}>
                        <RegularText fontName='Poppins' props={{
                            fontSize: 25, numberOfLines: 2, pr: '50'
                        }}>
                            Send Customized Email To This Contact
                        </RegularText>
                        <Box justifyContent={'center'} alignItems={'center'} bg={'$primary'} px={'sm'} py={'sm'} borderRadius={'10'} borderWidth={1} borderColor={'$foreground'}>
                            <FeatherIcon name='send' size={35} />
                        </Box>
                    </Box>
                    {/* Divider */}
                    <Box flexDirection={'row'} alignItems='center' my={'xl'}>
                        <Box flex={1} height={1} backgroundColor='$foreground' />
                        <Box width={50}>
                            <SemiBoldText fontName='Comfortaa' props={{ fontSize: 15, color: '$foreground', textAlign: 'center' }}>
                                Or
                            </SemiBoldText>
                        </Box>
                        <Box flex={1} height={1} backgroundColor='$foreground' />
                    </Box>
                    {/* Call to Action */}
                    <Box flexDirection={'row'} width={'100%'} px={'50'} my={'md'} justifyContent={'center'} alignItems={'center'}>
                        <BoldText fontName='Poppins' props={{
                            fontSize: 25, numberOfLines: 0.5, pr: '50'
                        }}>
                            Save This Contact To Cold Leads List
                        </BoldText>
                        <Box justifyContent={'center'} alignItems={'center'} bg={'$primary'} px={'sm'} py={'sm'} borderRadius={'10'} borderWidth={1} borderColor={'$foreground'}>
                            <FeatherIcon name='save' size={35} />
                        </Box>
                    </Box>
                    {/* Misc Info */}
                    {/* Divider */}
                    <Box flexDirection={'row'} alignItems='center' my={'xl'}>
                        <Box flex={1} height={1} backgroundColor='$foreground' />
                        <Box width={50}>
                            <SemiBoldText fontName='Comfortaa' props={{ fontSize: 15, color: '$foreground', textAlign: 'center' }}>
                                Or
                            </SemiBoldText>
                        </Box>
                        <Box flex={1} height={1} backgroundColor='$foreground' />
                    </Box>
                    {/* Call to Action */}
                    <Box flexDirection={'row'} width={'100%'} px={'50'} my={'md'} justifyContent={'center'} alignItems={'center'}>
                        <BoldText fontName='Comfortaa' props={{
                            fontSize: 25, numberOfLines: 2, pr: '50',
                        }}>
                            Delete and Report this Contact.
                        </BoldText>
                        <Box justifyContent={'center'} alignItems={'center'} bg={'$primary'} px={'sm'} py={'sm'} borderRadius={'10'} borderWidth={1} borderColor={'$foreground'}>
                            <FeatherIcon name='trash-2' size={35} />
                        </Box>
                    </Box>
                    {
                        data.industry && <></>
                    }
                </Box>
            </BottomSheet>
        )
    }
)

type MoveContactSheet = MoveContactSheetHandle

export default MoveContactSheet