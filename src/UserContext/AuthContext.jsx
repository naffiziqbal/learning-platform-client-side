import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  updateProfile,
} from "firebase/auth";
import app from "../Fireabse/firebse.init";

export const AuthProvider = createContext();
const auth = getAuth(app);
const gProvider = new GoogleAuthProvider()

const AuthContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Update User Profile
  const handleUpdateProfile = (profile) => {
    return updateProfile(profile);
  };
  // Log in User
  const logIn  = (email, password)=> {
    return signInWithEmailAndPassword(auth, email,password)
  }
//Handel Google Login 
const googleLogin =()=>{
    return signInWithRedirect(auth, gProvider)
}
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);
  const value = { user, createUser,logIn, handleUpdateProfile, loading, setLoading,googleLogin };
  return (
    <div>
      <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
