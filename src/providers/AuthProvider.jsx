import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosCommon from "../hooks/useAxiosCommon";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosCommon = useAxiosCommon();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updatedProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUserEmail = { email: userEmail };
      setUser(currentUser);

      const userInfo = {
        name: currentUser?.displayName,
        email: currentUser?.email,
        role: "user",
      };

      const getData = async () => {
        const { data } = await axiosCommon.post("/user", userInfo);
        console.log(data);
      };
      if (currentUser) {
        getData();
      }

      setLoading(false);

      if (currentUser) {
        const getToken = async () => {
          await axiosCommon.post("/jwt", loggedUserEmail, {
            withCredentials: true,
          });
        };
        getToken();
      } else {
        const deleteToken = async () => {
          await axiosCommon.post("/logout", loggedUserEmail, {
            withCredentials: true,
          });
        };
        deleteToken();
      }
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logInWithGoogle,
    updatedProfile,
    logIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
