import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [loding, setLoding] = useState(true);
  const handelDark = () => {
    setIsDark(!isDark);
  };
  //   Sign UP
  const signupdata = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // google Login
  const handelGoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  // google Login end
  //   ProfileUpdate
  const userProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // user Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user Login End
  const logOut = () => {
    return signOut(auth);
  };
  //  Paser barir bt
  useEffect(() => {
    const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      unSubscrive();
    };
  }, []);
  //  Paser barir bt End
  const data = {
    user,
    loding,
    setUser,
    signupdata,
    userProfile,
    logOut,
    userLogin,
    handelGoogleLogin,
    isDark,
    setIsDark,
    handelDark,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
