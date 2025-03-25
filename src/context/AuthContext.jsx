import { useState,useContext,useEffect,createContext } from "react";    

import { auth,signup,login,logout } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext=createContext();

export const AuthProvider=({children })=>{
    const[user,setuser]=useState(null)

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser)
        })
        return ()=>unsubscribe()
    },[])

    const logout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user,logout,signup,login}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=> useContext(AuthContext)