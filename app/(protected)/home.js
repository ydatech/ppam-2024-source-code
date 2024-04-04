import { Text, View, TouchableOpacity} from "react-native";

import {Link, Stack} from "expo-router";
import { useAuth } from "../../contexs/AuthProvider";
export default function SignInScreen(){
    const {signOut} = useAuth();
    const handleSignOut = ()=>{
        signOut();
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Screen
                options={{
                    title: "Home"
                }}
            />
            <Text style={{fontSize: 30}}>Home Screen</Text>
            <TouchableOpacity onPress={handleSignOut} style={{padding:10, borderColor: "black", borderWidth:1}}>
                    <Text>Sign Out</Text>
            </TouchableOpacity>
           
        </View>
    );

    
}