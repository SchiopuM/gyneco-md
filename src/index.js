import React from "react";
import ReactDOM from "react-dom";
import { App } from './App';
import { getAuth } from 'firebase/auth';
import { FirebaseAppProvider, AuthProvider, useFirebaseApp } from 'reactfire';


const firebaseConfig = {
  apiKey: "AIzaSyAOQmBdMp7bErWveJF_LDJYNWnh2dscN8w",
  authDomain: "gyneco-md.firebaseapp.com",
  projectId: "gyneco-md",
  storageBucket: "gyneco-md.appspot.com",
  messagingSenderId: "933475377585",
  appId: "1:933475377585:web:0c4860cc4d84e3151e9d90"
}

const AppInstance = () => {
  const firestoreInstance = getAuth(useFirebaseApp());;
  return (
    <AuthProvider sdk={firestoreInstance}>
      <App />
    </AuthProvider>
  )
}

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AppInstance />
  </FirebaseAppProvider>,
  document.getElementById("root"));
