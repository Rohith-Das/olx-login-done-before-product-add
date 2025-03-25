
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCodsK-RfAJf3LxUBRoZKWEt4YsS-15kbc",
  authDomain: "olx-clone-5581c.firebaseapp.com",
  projectId: "olx-clone-5581c",
  storageBucket: "olx-clone-5581c.firebasestorage.app",
  messagingSenderId: "130778192820",
  appId: "1:130778192820:web:21055901c3137a12d0f0e1",
  measurementId: "G-RZXVYGDTPF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const db=getFirestore(app)

const signup=async(name,email ,password )=>{
    try {
        const userCred=await createUserWithEmailAndPassword(auth,email,password)
        const user=userCred.user

        await updateProfile(user,{displayName:name})
        await addDoc(collection(db,"users"),{
            uid:user.uid,
           displayName: name,
            email,
            createdAt :new Date()
        });
        console.log(user,"user")
        console.log(user.displayName,"username is")
        return user
    } catch (error) {
        console.error("Signup error:", error);
        throw error;  
    }
}

const login = async(email,password)=>{
    try {
        const userCred=await signInWithEmailAndPassword(auth,email,password)
        return userCred.user
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
}

const logout=async()=>{
    try {
        signOut(auth)
    } catch (error) {
        
    }
}

export {auth,db,signup,login,logout}