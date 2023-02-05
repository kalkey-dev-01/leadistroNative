import { Box, Container } from '@/atoms';
import { BoldText, SemiBoldText } from '@/components/Typography';
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
        <Container justifyContent={'flex-start'}  alignItems={'flex-start'}>
            <CCHeader onSidebarToggle={handleSidebarToggle} />
            <Box mt='100' px={'xl'} flexDirection={'column'} width={'100%'}>
                <Box width={'100%'} flexDirection={'row'} alignItems={'center'}>
                    <BoldText fontName='Comfortaa' props={{
                        fontSize: 23,
                    }}>
                        Retrive All Saved Contacts
                    </BoldText>
                    <FeatherIcon name='refresh-ccw' size={27} style={{paddingHorizontal:10}} />
                </Box>

            </Box>
        </Container>
    )
}