import { Box, Container, Pressable, TextInput } from "@/atoms";
import { BoldText, MediumText, RegularText, SemiBoldText } from "@/components/Typography";
import { HomeDrawerParamList, RootStackParamList } from "@/navs";
import { PromptAtom } from "@/state/searchbar";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAtom } from "jotai";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import auth from '@react-native-firebase/auth'
import FeatherIcon from "@/components/icon";
import { Card } from "@/components/gradient-card";
import Image from "@/atoms/image";

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, "bot">, NativeStackScreenProps<RootStackParamList>>

function DistroBertQueryBar() {
    const [promptValue, setPromptValue] = useAtom(PromptAtom);
    const safeAreaInsets = useSafeAreaInsets();
    const handlePress = () => {
        console.log(promptValue, promptValue.length)
    }
    return (
        <>
            <Box
                borderWidth={2}
                position={'absolute'}
                bottom={-safeAreaInsets.bottom + 9.5}
                flexDirection={'row'}
                width={'95%'}
                alignSelf={'center'}
                justifyContent={'space-between'}
                px={'md'}
                alignItems={'center'}
                borderRadius={'hg'}
                borderColor={'$foreground'}
            >
                <TextInput
                    width={'80%'}
                    placeholder="Ask distroBERT to Assist You"
                    value={promptValue}
                    onChangeText={setPromptValue}
                    fontSize={16}
                    autoCapitalize="none"
                    color="$foreground"
                    autoCorrect={false}
                    autoComplete={'off'}
                    placeholderColor="$fieldInputPlaceholderTextColor"
                />
                <Pressable
                    px={'xs'} py={'xs'}
                    borderRadius={'20'}
                    onPress={handlePress}
                    borderColor={'$foreground'}
                    bg={'$headerBarBackground'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <FeatherIcon name="arrow-right" size={25} />
                </Pressable>
            </Box>
        </>
    )
}
// TODO - IMPLEMENT BOT functionality, use DialogFlow or Any other Way to do it fast.

export default function BotScreen({ navigation }: Props) {
    const user = auth().currentUser
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'} py={'md'}>
            {/* Header Bar */}
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
            {/* Description //!!!!  Use IF ELSE OR TERNARY WHEN THE BOT STARTS ITS CONVERSATION THEREFORE GIVING THE BOT THE FULL SCREEN HEIGHT */}
            <Card>
                <Box width={'100%'} height={'100%'} flexDirection={'column'} bg={'$navbarBorderBottom'} justifyContent={'flex-start'} alignItems={'flex-start'} borderRadius={'20'}>
                    <Box width={'100%'} alignItems={'center'} justifyContent={'flex-start'} my={'lg'} mx={'lg'} flexDirection={'row'}>
                        <Image source={require('../assets/images/leadistroBlack.png')} width={27.5} height={27.5} mr={'md'} bg={'$foreground'} borderColor={'$foreground'} borderWidth={1} borderRadius={'xs'} />
                        <MediumText fontName='Poppins' props={{
                            fontSize: 22,
                        }}>
                            Chat with distroBERT
                        </MediumText>
                    </Box>
                    <Box px={'lg'} width={'100%'} height={'100%'} flex={1}>
                        <RegularText fontName="Comfortaa" props={{
                            fontSize: 17.5, letterSpacing: 0.5
                        }}>
                            Example on how to prompt?
                        </RegularText>
                        <BoldText fontName="Poppins" props={{
                            fontSize: 15.5, letterSpacing: 0.09, py: 'xs'
                        }}>
                            Can You list all the saved leads?
                        </BoldText>
                        <MediumText fontName="Comfortaa" props={{
                            fontSize: 15.5, letterSpacing: 0.09, py: 'xs', lineHeight:22
                        }}>
                            Yes I Can These Are All The Leads you have
                            been  saving for these past few days.
                            [ All Saved Leads ] . Do You Want me to run auto campaign?
                        </MediumText>
                    </Box>
                </Box>
            </Card>
            {/* Query Text Input */}
            <DistroBertQueryBar />
        </Container>
    )
}

