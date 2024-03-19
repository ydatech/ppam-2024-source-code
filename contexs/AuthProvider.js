import React, { useState } from "react";

const AuthContext = React.createContext();


export function useAuth(){

    return React.useContext(AuthContext);
}

export default function AuthProvider({children}){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const signIn = ()=>{
        setIsLoggedIn(true);
    }

    const signOut = ()=>{
        setIsLoggedIn(false);
    }

    return <AuthContext.Provider value={{
        isLoggedIn,
        signIn,
        signOut
    }}>
        {children}
    </AuthContext.Provider>
}

