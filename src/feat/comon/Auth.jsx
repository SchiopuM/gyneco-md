import React from "react";
import { useAuth } from 'reactfire';
import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { useSigninCheck ,useUser} from 'reactfire';


export const Auth = () => {
    const auth = useAuth();
    const {  status, data: signInCheckResult } = useSigninCheck();
    const { data: user } = useUser();

    const signIn = async () => {
      const GoogleAuth = new GoogleAuthProvider();
        await signInWithPopup(auth, GoogleAuth);
      };

      const signOut = async () => {
        await auth.signOut();
      }
      if(status === "loading"){
        return <div>loading..</div>
      }
    console.log(auth);
    console.log(signInCheckResult.signedIn);
    return (<>
    {!signInCheckResult?.signedIn 
    ?<button onClick= {signIn} >Login</button>
    :<button onClick= {signOut}>LogOut</button>
    }

        
      <div>{user?.displayName}</div>
      </>
    )}