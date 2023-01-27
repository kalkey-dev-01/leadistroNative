import { Box } from '@/atoms';
import AnimatedBox from '@/atoms/animated-box';
import * as React from 'react';
import { SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import FeatherIcon from './icon';

interface Props {
  progress: Readonly<SharedValue<number>>
}

const ExampleListActionView: React.FC<Props> = ({ progress }) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: progress.value }
    ]
  }))
  return (
    <Box
      flex={1}
      bg="$primary"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
      pr="xl"
    >
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={iconStyle}
      >
        <FeatherIcon name="database" color="white" size={18} />
        <FeatherIcon name="arrow-right" color="white" size={12} />
      </AnimatedBox>
    </Box>
  )
}
export default ExampleListActionView

export const SSWListActionView: React.FC<Props> = ({ progress }) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: progress.value }
    ]
  }))
  return (
    <Box
      flex={1}
      bg="$primary"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-end"
      pr="xl"
    >
      <AnimatedBox 
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        style={iconStyle}
      >
        <FeatherIcon name="globe" color="white" size={20} style={{paddingHorizontal:2}} />
        <FeatherIcon name="save" color="white" size={14} style={{paddingHorizontal:2}} />
      </AnimatedBox>
    </Box>
  )
}