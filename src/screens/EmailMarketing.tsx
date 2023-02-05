import { Container } from '@/atoms';
import { BoldText } from '@/components/Typography';
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
        <Container justifyContent={'flex-start'} alignItems={'center'}>
            <BoldText fontName='Comfortaa' props={{
                fontSize: 24
            }}>
                Email Marketing
            </BoldText>
        </Container>
    )
}