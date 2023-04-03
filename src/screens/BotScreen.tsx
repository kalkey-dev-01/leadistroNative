import { Box, Container, Pressable, TextInput } from "@/atoms";
import { BoldText } from "@/components/Typography";
import { HomeDrawerParamList, RootStackParamList } from "@/navs";
import { PromptAtom } from "@/state/searchbar";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAtom } from "jotai";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "bot">, NativeStackScreenProps<RootStackParamList>>

function GPTlikeTextInput() {
    const [promptValue, setPromptValue] = useAtom(PromptAtom);
    const safeAreaInsets = useSafeAreaInsets();
    const handlePress = () => {
        console.log(promptValue, promptValue.length)
    }
    return (
        <>
            <Box position={'absolute'} bottom={-safeAreaInsets.bottom} flexDirection={'row'} width={'100%'} justifyContent={'space-between'} px={'md'} alignItems={'center'}>
                <TextInput
                    width={'85%'}
                    placeholder="Ask distroGPT Any Thing"
                    value={promptValue}
                    onChangeText={setPromptValue}
                    fontSize={16}
                    autoCapitalize="none"
                    color="$foreground"
                    autoCorrect={false}
                    autoComplete={'off'}
                    placeholderColor="$fieldInputPlaceholderTextColor"
                />
                <Pressable width={'15%'} onPress={handlePress}>
                    <BoldText fontName="Poppins">
                        Send
                    </BoldText>
                </Pressable>
            </Box>
        </>
    )
}

export default function BotScreen({ navigation }: Props) {
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'} py={'md'}>
            <GPTlikeTextInput />
        </Container>
    )
}

