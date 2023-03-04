import { BottomSheetModal as RNModal, BottomSheetModalProps } from '@gorhom/bottom-sheet'
import React from 'react'
import { ColorProps, useTheme } from '@shopify/restyle'
import { Theme } from '@/themes'


type Props = BottomSheetModalProps & ColorProps<Theme>

const Modal = React.forwardRef<RNModal, Props>(({ ...rest }, ref) => {
    const theme = useTheme<Theme>()
    const bgCol = theme.colors['$background']
    const handleColor = theme.colors['$foreground']
    return (
        <RNModal {...rest} ref={ref}
            handleIndicatorStyle={{
                backgroundColor: handleColor,
                opacity: 0.7,
            }}
            backgroundStyle={{
                backgroundColor: bgCol
            }}
        />
    )
})

export default Modal
