import { Box, Container, Pressable, ScrollView } from '@/atoms';
import { BoldText, MediumText } from '@/components/Typography';
import CCHeader from '@/components/ccHeader';
import { HomeDrawerParamList, RootStackParamList } from '@/navs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import firestore from '@react-native-firebase/firestore'
import FeatherIcon from '@/components/icon';

type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'CreateContacts'>, NativeStackScreenProps<RootStackParamList>>

export default function CreateContactsPage({ navigation }: Props) {

    const handleSidebarToggle = React.useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])
    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'}>
            <CCHeader onSidebarToggle={handleSidebarToggle} />
            <ScrollView mt='75' px={'xl'} pt={'lg'} flexDirection={'column'} width={'100%'}>
                <Box width={'100%'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'}>
                    <BoldText fontName='Poppins' props={{
                        fontSize: 28,
                    }}>
                        Grow Audience
                    </BoldText>
                    <FeatherIcon name='users' size={20} style={{ marginHorizontal: 10, marginVertical: 10 }} />
                </Box>
                {/* Manually */}
                <Pressable onPress={() => console.log('Clicked')} flexDirection={'row'} borderColor={'$foreground'} borderWidth={2} borderRadius={'10'} my={'lg'} py={'sm'} px={'sm'} alignItems={'center'} justifyContent={'space-between'}>
                    <MediumText fontName='Poppins' props={{
                        fontSize: 22
                    }}>
                        Import Contacts
                    </MediumText>
                    <FeatherIcon name='user-plus' size={20} />
                </Pressable>
            </ScrollView>
        </Container>
    )
}