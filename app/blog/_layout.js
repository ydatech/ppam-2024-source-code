import {Slot, Stack} from 'expo-router';
import { Text , View} from 'react-native';
export default function AppLayout(){

    return <Stack screenOptions={{
        headerShown:false
    }}/>;
}