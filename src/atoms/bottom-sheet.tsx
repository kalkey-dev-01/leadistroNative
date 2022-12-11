import { Theme } from '@/themes';
import RNBottomSheet, { BottomSheetProps } from '@gorhom/bottom-sheet';
import { ColorProps, useTheme } from '@shopify/restyle';
import * as React from 'react';

type Props = BottomSheetProps & ColorProps<Theme>

const BottomSheet = React.forwardRef<RNBottomSheet, Props>(({ ...rest }, ref) => {
    const theme = useTheme<Theme>()
    const bgCol = theme.colors['$background']
    const handleColor = theme.colors['$foreground']
    return (
        <RNBottomSheet {...rest} ref={ref} handleIndicatorStyle={{
            backgroundColor: handleColor,
            opacity: 0.8,
        }}
            backgroundStyle={{
                backgroundColor: bgCol
            }}
        />
    )
})

export default BottomSheet