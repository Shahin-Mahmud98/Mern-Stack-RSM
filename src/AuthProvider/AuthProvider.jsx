import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/Firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);
    // eslint-disable-next-line no-unused-vars
    const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
const [user,setUser] = useState();
const [loading,setLoading] = useState(true);



    
// Google Login Start
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider);
    }


// Google Login End

// Register/Email Password/Sign in Start
const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
};

const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
};

//Register/ Email Password /Sign in End

// Logout
const logout = () => {
    signOut(auth).then(()=>setUser(null));
}



useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth,(currentUser)=>{
        if (currentUser) {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
            
        }else{
            setLoading(false);
        }
    });

    return () =>{
        return unSubcribe();
    };

    
    
},[]);

    const authInfo = {user,googleLogin,createUser,signIn,logout,loading};

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;









