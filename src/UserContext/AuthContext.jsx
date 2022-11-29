import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Fireabse/firebse.init";

export const AuthProvider = createContext();
export const auth = getAuth(app);
const gProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Update User Profile
  const handleUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  // Log in User
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Handel Google Login
  const googleLogin = () => {
    return signInWithRedirect(auth, gProvider);
  };
  //Handle Login With Github
  const githubLogin =()=>{
    return signInWithRedirect(auth, gitProvider);
  }
  //Handle Log Out
  const userLogOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);
  const value = {
    user,
    createUser,
    logIn,
    handleUpdateProfile,
    loading,
    setLoading,
    googleLogin,
    userLogOut,
    githubLogin,
  };
  return (
    <div>
      <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
