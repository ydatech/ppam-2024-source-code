import { Text, View, TouchableOpacity} from "react-native";

import {Link, router} from "expo-router";
import { useAuth } from "../contexs/AuthProvider";
export default function SignInScreen(){
    const {signIn} = useAuth();
    const handleSignIn = ()=>{
        signIn();
        router.replace("/home");
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 30}}>Sign In Screen</Text>
            <TouchableOpacity onPress={handleSignIn} style={{padding:10, borderColor: "black", borderWidth:1}}>
                    <Text>Sign In</Text>
            </TouchableOpacity>
            <Link href="/" >Go To Landing</Link>
            
        </View>
    );

    
}