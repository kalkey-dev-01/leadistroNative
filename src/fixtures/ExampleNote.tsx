import * as React from 'react'
import { EmployeeContact } from '@/models/model'
import { Box, TouchableOpacity } from '@/atoms'
import SwipeableView, { BackViewProps } from '@/components/swipable-view'
import ExampleListActionView from '@/components/example-list-actions-view'
import { BoldText, MediumText, RegularText, SemiBoldText } from '@/components/Typography'
import FeatherIcon from '@/components/icon'
import theme from '@/themes/DarkSpace'
import { Linking, Alert } from 'react-native'
import { useAtomValue } from 'jotai'
import { searchQueryAtom } from '@/state/searchbar'


export interface ExampleItemProps extends EmployeeContact {
  onPress: (id: string | number, data: EmployeeContact) => void
  onSwipeLeft?: (linkedin_id: string | number, done: () => void) => void
}

export interface EmployeeItemProps extends EmployeeContact {
  onPress: (id: EmployeeContact) => void
  onSwipeLeft?: (linkedin_id: string | number, done: () => void) => void
}


// export const EmployeeListItems: React.FC<EmployeeItemProps> = React.memo(props => {
//   const { onPress, onSwipeLeft, uid } = props
//   const renderBackView = React.useCallback(
//     ({ progress }: BackViewProps) => (
//       <ExampleListActionView progress={progress} />
//     ),
//     []
//   )
//   return (
//     <>
//       <SwipeableView
//         bg="yellow"
//         onSwipeLeft={handleSwipeLeft}
//         backView={renderBackView}
//       >
//         <Box bg="$background" borderBottomWidth={1} borderBottomColor={'white'}>
//           <TouchableOpacity
//             bg="$background"
//             px="lg"
//             py="sm"
//             onPress={handlePress}
//           >
//             <Text ellipsizeMode='tail' fontSize={22} fontWeight={'700'}>{`${props.first_name} ${props.last_name}`}</Text>
//             <Text ellipsizeMode='tail' fontSize={18} fontWeight={'bold'} my='xs'>{props.description.length >= 10 ? props.description : 'No Description Provided To Company'}</Text>
//             <Text ellipsizeMode='tail' fontSize={18} fontWeight={'bold'} mb='xs'>{props.company_name}</Text>
//             <Text ellipsizeMode='tail' fontSize={18} fontWeight={'bold'} mb='xs'>{props.personal_email === '' ? 'No Personal Email Provided' : props.personal_email}</Text>
//             <Text ellipsizeMode='tail' fontSize={18} fontWeight={'bold'} mb='xs'>{props.city}</Text>
//           </TouchableOpacity>
//         </Box>
//       </SwipeableView>
//     </>
//   )
// })


export const ExampleListItem: React.FC<ExampleItemProps> = React.memo(props => {
  const { onPress, onSwipeLeft, linkedin_id, } = props
  const handlePress = React.useCallback(() => {
    onPress(linkedin_id, { ...props })
  }, [onPress, linkedin_id])
  const handleSwipeLeft = React.useCallback(
    (done: () => void) => {
      onSwipeLeft && onSwipeLeft(linkedin_id, done)
    },
    [linkedin_id, onSwipeLeft]
  )

  const renderBackView = React.useCallback(
    ({ progress }: BackViewProps) => (
      <ExampleListActionView progress={progress} />
    ),
    []
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const searchQuery = useAtomValue(searchQueryAtom)
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
          <Box flexDirection={'row'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <BoldText fontName='Comfortaa' props={{ fontSize: 27.5, mb: 'xs', ellipsizeMode: 'tail' }}>{`${props.first_name.charAt(0).toLocaleUpperCase() + props.first_name.slice(1, 8)} ${props.last_name.charAt(0).toLocaleUpperCase() + props.last_name.slice(1, 9)}`}</BoldText>
            <Box flexDirection={'row'} width={'22.5%'} justifyContent={props.social_url && props.personal_email !== '' ? "space-between" : 'flex-end'} alignItems={'center'} >
              {
                props.social_url && <FeatherIcon name={`linkedin`} style={{ backgroundColor: props.personal_email && props.social_url ? theme.colors.$navbarBackground : theme.colors.$sidebarSeparator, paddingHorizontal: 7.5, paddingVertical: 7.5, borderRadius: 4, borderColor: theme.colors.$navbarBackground, borderWidth: 0.5 }} size={22.5} />
              }
              {
                props.personal_email && <FeatherIcon name={`mail`} style={{ backgroundColor: props.personal_email && props.social_url ? theme.colors.$navbarBackground : theme.colors.$sidebarSeparator, paddingHorizontal: 7.5, paddingVertical: 7.5, borderRadius: 4, borderColor: theme.colors.$navbarBackground, borderWidth: 0.5 }} size={22.5} />
              }
            </Box>
            {/* <FeatherIcon name={props.personal_email && props.social_url !== "" ? `user` : `user-x`} style={{ backgroundColor: props.personal_email && props.social_url ? theme.colors.$navbarBackground : theme.colors.$sidebarSeparator, padding: 7.5, borderRadius: 5 }} size={25} /> */}
          </Box>

          <MediumText fontName='Poppins' props={{ fontSize: 22, mb: 'xs', ellipsizeMode: 'tail', numberOfLines: 1 }}>{props.headline}</MediumText>
          {
            <SemiBoldText fontName='Poppins' props={{ fontSize: 20, mb: 'xs', ellipsizeMode: 'tail' }}>{`${props.company_name}`}</SemiBoldText>

          }{
            props.personal_email &&
            <RegularText fontName='Poppins' props={{ fontSize: 20, mb: 'xs', ellipsizeMode: 'tail' }}>{props.personal_email}</RegularText>
          }
          <MediumText fontName='Poppins' props={{ fontSize: 20, mb: 'xs', ellipsizeMode: 'tail' }} >{props.city}</MediumText>
          {
            props.social_url !== false
              ?
              <>
                {
                  props.social_url && props.social_url.toString().includes('sales') === true && props.connections_count === ''
                    ?
                    <>
                      <TouchableOpacity
                        onPress={
                          React.useCallback(async () => {
                            let supported = await Linking.canOpenURL(props.social_url.toString())
                            if (supported) {
                              await Linking.openURL(props.social_url.toString())
                            } else {
                              Alert.alert('This Url Seems Weird', 'This User might not exist in linkedIn anymore, or they may have changed accounts', [{
                                text: 'Okay',
                                style: 'cancel'
                              }])
                            }
                          }, [])
                        }
                        flexDirection={'row'} width={'100%'} justifyContent="flex-start" alignItems={'center'}>
                        <SemiBoldText fontName='Poppins' props={{ fontSize: 22 }}>LinkedIn Sales Navigator </SemiBoldText>
                        <FeatherIcon name='compass' style={{ padding: 5 }} size={25} />
                      </TouchableOpacity>
                    </>
                    :
                    <>
                      <TouchableOpacity
                        onPress={
                          React.useCallback(async () => {
                            // console.log(props.social_url);
                            // Linking.openURL(props.social_url.toString())
                            let supported = await Linking.canOpenURL(props.social_url.toString())
                            // console.log(supported);
                            if (supported) {
                              await Linking.openURL(props.social_url.toString())
                            } else {
                              Alert.alert('This Url is false', 'This User might not exist in linkedIn anymore, or they may have changed accounts', [{
                                text: 'Okay',
                                style: 'cancel'
                              }])
                            }
                          }, [props.social_url])
                        }
                        flexDirection={'row'} width={'100%'} justifyContent="flex-start" alignItems={'center'}>
                        <SemiBoldText fontName='Poppins' props={{ fontSize: 22 }}>LinkedIn & Connections {props.connections_count} </SemiBoldText>
                      </TouchableOpacity>
                    </>
                }
              </>
              :
              null
          }
         
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  )
})
      // props.social_url &&
            // <Box flexDirection={'row'} width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            //   <FeatherIcon name={props.social_url.toString().in} size={25} />
            //   <MediumText fontName='Poppins' props={{ fontSize: 22, mb: 'xs', ellipsizeMode: 'tail', numberOfLines: 1 }}>{props.social_url}</MediumText>
            // </Box>

            // {
            //   props.skills.length > 0
            //     ?
            //     <Box flexDirection={'column'}>
            //       <BoldText fontName='Comfortaa'> Skills </BoldText>
            //       {props.skills.map((skills, index) => <React.Fragment key={index}>
            //         <SemiBoldText fontName='Poppins'>{skills}</SemiBoldText>
            //       </React.Fragment>)}
            //     </Box>
            //     :
            //     null
            // }