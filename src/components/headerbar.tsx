import AnimatedBox, { AnimatedBoxProps } from '@/atoms/animated-box'
import { Alert, TextInput as RNTextInput } from 'react-native'
import { TextInput, TouchableOpacity } from '@/atoms'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

import { searchQueryAtom, inputFocusAtom, responseDataAtom, loadingAtom, EnrichSearchCount } from '@/state/searchbar'
import { useAtom } from 'jotai'
import React from 'react'
import axios from 'axios'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Theme } from '@/themes'
import { useTheme } from '@shopify/restyle'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import HeaderBarLeftButton from './header-bar-left-icon'
import FeatherIcon from './icon'
import { apikey, employeesApi } from '@/api/uri-with-keys'
// import { searchesCollection } from '@/api/firebase'
// import { EmployeeContact } from '@/models/model'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { EmployeeContact } from '@/models/model'

type Props = AnimatedBoxProps & {
  onSidebarToggle: () => any,

}

const currentDate = new Date();

// Get individual components of the date and time
const year = currentDate.getFullYear();        // e.g., 2023
const month = currentDate.getMonth() + 1;     // 0-indexed, so add 1 for actual month value (1-12)
const day = currentDate.getDate();            // 1-31
const hour = currentDate.getHours();          // 0-23
const minute = currentDate.getMinutes();      // 0-59
const second = currentDate.getSeconds();      // 0-59
const millisecond = currentDate.getMilliseconds();  // 0-999

// Format the date and time as a string
const formattedDateTime = `${day}-${month}-${year} ${hour}:${minute}:${second}.${millisecond}`;
console.log(formattedDateTime);

const HeaderBar: React.FC<Props> = props => {
  const { onSidebarToggle, ...rest } = props
  const safeAreaInsets = useSafeAreaInsets()
  const theme = useTheme<Theme>()
  const [data, setData] = useAtom(responseDataAtom)
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom)
  const [searchInputHasFocus, setSearchInputHasFocus] = useAtom(
    inputFocusAtom
  )
  const user = auth().currentUser?.email?.toString();
  const [, setLoading] = useAtom(loadingAtom)
  const [searchCount, setSearchCount] = useAtom(EnrichSearchCount);
  const refSearchInput = React.useRef<RNTextInput>(null)
  const handleSearchPostValue = async () => {
    setLoading(true)
    setSearchCount(searchCount + 1);
    await axios.post(employeesApi, { "api_key": apikey, 'domain': searchQuery }).then((res) => {
      // console.log('Started Res.data');
      setData(res.data['employees'])
      // console.log('Res  - > data - >  employees');
      // console.log(res.data['employees']);
    }).catch((error) => {
      Alert.alert('Something Went Wrong Please try again.' + error.message)
      console.log(error.message);
    }).finally(() => {
      setLoading(false)
      firestore().collection('users').doc(user).collection('searches').doc().set({
        searchQuery,
        searchCount,
        time: formattedDateTime,
        possibleLeads: data.length
      })
      console.log(searchQuery, searchCount, data.length);
      console.log('searchQuery', 'searchCount', 'possible leads');
      // console.log(data);
      console.log('done');
    })
  }
  const handleSearchInputFocus = () => {
    setSearchInputHasFocus(true)
  }

  const handleSearchInputBlur = () => {
    setSearchInputHasFocus(false)
  }

  const handleClearButtonPress = () => {
    setSearchQuery('')
  }
  const handleLeftButtonPress = React.useCallback(() => {
    if (searchInputHasFocus) {
      const { current: input } = refSearchInput
      if (input) input.blur()
      setSearchQuery('')
    } else {
      onSidebarToggle()
    }
  }, [searchInputHasFocus, onSidebarToggle])
  const safeAreaStyle = useAnimatedStyle(
    () => ({
      opacity: withTiming(searchInputHasFocus ? 1 : 0)
    }),
    [searchInputHasFocus]
  )
  const barStyle = useAnimatedStyle(
    () => ({
      marginHorizontal: withTiming(searchInputHasFocus ? 0 : theme.spacing.lg),
      borderRadius: withTiming(searchInputHasFocus ? 0 : theme.borderRadii.md, {
        duration: 600
      })
    }),
    [searchInputHasFocus]
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <AnimatedBox position="absolute" top={0} left={0} right={0} {...rest}>
      <AnimatedBox
        position="absolute"
        top={-safeAreaInsets.top}
        left={0}
        right={0}
        bottom={0}
        bg="$headerBarBackground"
        style={safeAreaStyle}
      ></AnimatedBox>
      <AnimatedBox
        flexDirection="row"
        alignItems="center"
        mx="lg"
        my="md"
        px="sm"
        minHeight={44}
        bg="$headerBarBackground"
        style={barStyle}
      >
        <HeaderBarLeftButton
          onPress={handleLeftButtonPress}
          backButtonVisible={searchInputHasFocus}
        />
        <TextInput
          ref={refSearchInput}
          flex={1}
          ml="sm"
          fontSize={16}
          autoCapitalize="none"
          color="$foreground"
          autoCorrect={false}
          autoComplete={'off'}
          placeholder="Search Employees from domain"
          placeholderColor="$fieldInputPlaceholderTextColor"
          value={searchQuery}
          onFocus={handleSearchInputFocus}
          onBlur={handleSearchInputBlur}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity
            m="xs"
            p="xs"
            rippleBorderless
            onPress={handleClearButtonPress}
          >
            <FeatherIcon name="x" size={22} />
          </TouchableOpacity>
        )}
        {searchQuery.length > 0 && (
          <TouchableOpacity
            m="xs"
            p="xs"
            rippleBorderless
            onPress={handleSearchPostValue}

          >
            <FeatherIcon name="search" size={22} />
          </TouchableOpacity>
        )}
      </AnimatedBox>
    </AnimatedBox>
  )
}


export default HeaderBar