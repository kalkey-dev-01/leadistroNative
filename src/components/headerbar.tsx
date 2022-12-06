import AnimatedBox, { AnimatedBoxProps } from '@/atoms/animated-box'
import Bar from '@/atoms/bar'
import React from 'react'


const HeaderBar: React.FC<AnimatedBoxProps> = ({ children, ...rest }) => {
    return (
        <AnimatedBox position={'absolute'} top={12.5} left={0} right={0} {...rest}>
            <Bar
                variant='headerBar'
                flexDirection='row'
                alignItems='center'
                mx='lg'
                my='md'
                px='sm'
                minHeight={44}
                >
                {children}
            </Bar>
        </AnimatedBox>
    )
}
export default HeaderBar