import { Box, Container, Pressable, TextInput } from "@/atoms";
import { BoldText, RegularText, SemiBoldText } from "@/components/Typography";
import { HomeDrawerParamList, RootStackParamList } from "@/navs";
import { PromptAtom } from "@/state/searchbar";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAtom } from "jotai";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import auth from '@react-native-firebase/auth'
import FeatherIcon from "@/components/icon";
type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "bot">, NativeStackScreenProps<RootStackParamList>>

function DistroBertQuery() {
    const [promptValue, setPromptValue] = useAtom(PromptAtom);
    const safeAreaInsets = useSafeAreaInsets();
    const handlePress = () => {
        console.log(promptValue, promptValue.length)
    }
    return (
        <>
            <Box position={'absolute'} bottom={-safeAreaInsets.bottom + 7.5} flexDirection={'row'} width={'100%'} justifyContent={'space-between'} px={'md'} alignItems={'center'}>
                <TextInput
                    width={'75%'}
                    placeholder="Ask  distroBERT to Assist You"
                    value={promptValue}
                    onChangeText={setPromptValue}
                    fontSize={16}
                    autoCapitalize="none"
                    color="$foreground"
                    autoCorrect={false}
                    autoComplete={'off'}
                    placeholderColor="$fieldInputPlaceholderTextColor"
                />
                <Pressable width={'20%'} borderRadius={'20'} onPress={handlePress} borderColor={'$foreground'} borderWidth={1} alignItems={'center'} justifyContent={'center'}>
                    <RegularText fontName="Poppins" props={{
                        fontSize:20
                    }}>
                        Send
                    </RegularText>
                </Pressable>
            </Box>
        </>
    )
}

export default function BotScreen({ navigation }: Props) {
const user = auth().currentUser
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'} py={'md'}>
            <Box flexDirection={'row-reverse'} width={'94.5%'} borderRadius={'hg'} alignSelf={'center'} alignItems={'center'} justifyContent={'space-between'} borderColor={'$headerBarBackground'} borderWidth={2}>
                <Pressable onPress={() => console.log('Clicked')} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$fieldInputBackground'} borderColor={'$foreground'} borderWidth={2}>
                    {
                        user?.displayName !== null ?
                            <BoldText fontName='Poppins' props={{
                                fontSize: 20,
                                color: '$foreground'
                            }}>
                                {user?.displayName?.toString().charAt(0)}
                            </BoldText> :
                            <FeatherIcon name='user' size={20} color={'$foreground'} />
                    }
                </Pressable>
                <SemiBoldText fontName='Comfortaa' props={{ fontSize: 22, pt: 'xs' }}>distroBERT</SemiBoldText>
                <Pressable onPress={() => navigation.openDrawer()} alignItems={'center'} justifyContent={'center'} width={40} height={40} borderRadius={'hg'} bg={'$headerBarBackground'}>
                    <FeatherIcon name='menu' size={20} color={'$foreground'} />
                </Pressable>
            </Box>

            <DistroBertQuery />
        </Container>
    )
}

