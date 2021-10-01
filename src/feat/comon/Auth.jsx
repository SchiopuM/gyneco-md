import React from "react";
import { useAuth } from 'reactfire';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { useSigninCheck } from 'reactfire';


export const Auth = () => {
    const auth = useAuth();
    const {  data: signInCheckResult } = useSigninCheck();

    const signIn = async () => {
      const GoogleAuth = new GoogleAuthProvider();
        await signInWithPopup(auth, GoogleAuth);
      };

      const signOut = async () => {
        await auth.signOut();
      }
    console.log(auth);
    //console.log(signInCheckResult.signedIn);
    return (<>
    {!signInCheckResult?.signedIn 
    ?<button onClick= {signIn} >Login</button>
    :<button onClick= {signOut}>LogOut</button>
    }

        
      <div>Test</div>
      </>
    )}