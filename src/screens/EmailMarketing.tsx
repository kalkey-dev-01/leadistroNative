import { Box, Container, Pressable, ScrollView } from '@/atoms';
import { BoldText, MediumText, RegularText } from '@/components/Typography';
import FeatherIcon from '@/components/icon';
import StickyHeader from '@/hooks/sticky-header';
import { HomeDrawerParamList, RootStackParamList } from '@/navs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';


type Props = CompositeScreenProps<DrawerScreenProps<HomeDrawerParamList, 'Email'>, NativeStackScreenProps<RootStackParamList>>

export default function EmailMarketing({ navigation }: Props) {

    const handleSidebarToggle = React.useCallback(() => {
        navigation.toggleDrawer()
    }, [navigation])

    return (
        <Container justifyContent={'flex-start'} alignItems={'flex-start'}>
            <Box alignItems={'center'} justifyContent={'space-between'} px={'lg'} my='md' flexDirection={'row'} width={'100%'}>
                <FeatherIcon size={25} name='menu' onPress={handleSidebarToggle} />
                <FeatherIcon size={20} name='mail' />
            </Box>
            <ScrollView width={'100%'} flexDirection={'column'} >
                <Pressable onPress={() => console.log('Clicked')} alignItems={'center'} flexDirection={'row'} mx={'lg'} my='sm' py='xs' px={'sm'}  justifyContent={'space-between'} borderColor={'$foreground'} borderWidth={2} borderRadius={'10'}>
                    <MediumText fontName='Poppins' props={{
                        fontSize:25,
                        
                    }}>
                        Send Batch Emails 
                    </MediumText>
                    <FeatherIcon name='send' size={22} />
                </Pressable>
                <Pressable onPress={() => console.log('Clicked')} alignItems={'center'} flexDirection={'row'} mx={'lg'} my='sm' py={'sm'} px={'md'}  justifyContent={'space-between'} bg={'$primary'}  borderRadius={'10'}>
                    <BoldText fontName='Comfortaa' props={{
                        fontSize:25,
                        
                    }}>
                        Design Your Mail 
                    </BoldText>
                    <FeatherIcon name='mail' size={22} />
                </Pressable>
            </ScrollView>
        </Container>
    )
}