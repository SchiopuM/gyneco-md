import React from "react";
import { useAuth } from "reactfire";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useSigninCheck, useUser } from "reactfire";
import { BsBoxArrowInRight } from "react-icons/bs";
import style from "./navbar/Navbar.module.css";
import arrow from "../../assets/arrow.png";

export const Auth = () => {
  const auth = useAuth();
  const { data: signInCheckResult } = useSigninCheck();
  const { data: user } = useUser();

  const signIn = async () => {
    const GoogleAuth = new GoogleAuthProvider();
    await signInWithPopup(auth, GoogleAuth);
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      {!signInCheckResult?.signedIn ? (
        <button className={style.btn} onClick={signIn}>
          Login <img src={arrow} alt="img" height="10px" />
        </button>
      ) : (
        <button className={style.btn} onClick={signOut}>
          {user?.displayName} <BsBoxArrowInRight size="25" />
        </button>
      )}
    </>
  );
};
