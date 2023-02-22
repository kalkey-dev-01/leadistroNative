import AnimatedBox, { AnimatedBoxProps } from "@/atoms/animated-box";
import { Theme } from "@/themes";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TextInput as RNTextInput } from 'react-native'
import { useAtom } from "jotai";
import { inputFocusAtom, searchContacts } from "@/state/searchbar";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import HeaderBarLeftButton from "./header-bar-left-icon";
import { TextInput, TouchableOpacity } from "@/atoms";
import FeatherIcon from "./icon";

type Props = AnimatedBoxProps & {
    onSidebarToggle: () => void
}

const CCHeader: React.FC<Props> = props => {
    const { onSidebarToggle, ...rest } = props
    const safeAreaInsets = useSafeAreaInsets()
    const theme = useTheme<Theme>()
    const [searchQuery, setSearchQuery] = useAtom(searchContacts)
    const [searchInputHasFocus, setSearchInputHasFocus] = useAtom(
        inputFocusAtom
    )
    const handleSearchInputFocus = () => {
        setSearchInputHasFocus(true)
    }

    const handleSearchInputBlur = () => {
        setSearchInputHasFocus(false)
    }

    const handleClearButtonPress = () => {
        setSearchQuery('')
    }
    const refSearchInput = React.useRef<RNTextInput>(null)
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
                    fontFamily={'Poppins'}
                    fontSize={16}
                    autoCapitalize="none"
                    color="$foreground"
                    autoCorrect={false}
                    autoComplete={'off'}
                    placeholder="Filter Saved Contacts Via Company Name"
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
                        onPress={() => {
                            console.log('Logic Where');
                        }}

                    >
                        <FeatherIcon name="search" size={22} />
                    </TouchableOpacity>
                )}
            </AnimatedBox>
        </AnimatedBox>
    )
}

export default CCHeader