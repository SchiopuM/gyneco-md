import React from "react";
import { useAuth } from "reactfire";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useSigninCheck, useUser } from "reactfire";
import { Button } from "react-bootstrap";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useHistory, useLocation } from "react-router";

export const Auth = () => {
  const auth = useAuth();
  const { data: signInCheckResult } = useSigninCheck();
  const { data: user } = useUser();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/quiz" } };

  const signIn = async () => {
    const GoogleAuth = new GoogleAuthProvider();
    await signInWithPopup(auth, GoogleAuth);
    history.replace(from);
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      {!signInCheckResult?.signedIn ? (
        <Button style={{ backgroundColor: "#007344" }} onClick={signIn}>
          Login <BsBoxArrowInRight />
        </Button>
      ) : (
        <Button style={{ backgroundColor: "#007344" }} onClick={signOut}>
          {user?.displayName} <BsBoxArrowInRight size="25" />
        </Button>
      )}
    </>
  );
};
