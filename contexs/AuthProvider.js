import React, { useState, useEffect } from "react";
import auth from '@react-native-firebase/auth';

const AuthContext = React.createContext();


export function useAuth(){

    return React.useContext(AuthContext);
}

export default function AuthProvider({children}){
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if(!user)
        setIsLoggedIn(false);
        else
        setIsLoggedIn(true);

        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const signIn = (email,password)=>{
        // setIsLoggedIn(true);
        auth().signInWithEmailAndPassword(email,password);
    }

    const signUp = (email,password) =>{
        auth().signInWithEmailAndPassword(email,password);
    }

    const signOut = ()=>{
        // setIsLoggedIn(false);
        auth().signOut();
    }

    console.log("user",user)

    return <AuthContext.Provider value={{
        isLoggedIn,
        user,
        signIn,
        signOut
    }}>
        {children}
    </AuthContext.Provider>
}

