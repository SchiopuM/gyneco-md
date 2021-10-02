import React from "react";
import { useAuth } from 'reactfire';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { useSigninCheck ,useUser} from 'reactfire';
import {Button} from 'react-bootstrap';
import { BsBoxArrowInRight } from "react-icons/bs";


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
      }

    return (<>
      
    {!signInCheckResult?.signedIn 
    ?<Button style={{backgroundColor:"#007344"}} onClick= {signIn} >Login <BsBoxArrowInRight /></Button>
    :<Button style={{backgroundColor:"#007344"}} onClick= {signOut}>{user?.displayName} <BsBoxArrowInRight size="25" /></Button>
    }
  </>
    )}