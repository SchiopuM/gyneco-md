import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { FirebaseAppProvider, AuthProvider, useFirebaseApp } from "reactfire";
import { Provider } from "react-redux";
import store from "./redux/store";
import style from "./index.module.css";

const firebaseConfig = {
  apiKey: "AIzaSyApf4y7AhiL19mi4xq4lkyaoiRcMx_jupE",
  authDomain: "gyneco-md-d6205.firebaseapp.com",
  projectId: "gyneco-md-d6205",
  storageBucket: "gyneco-md-d6205.appspot.com",
  messagingSenderId: "35932457398",
  appId: "1:35932457398:web:3769cf38bf0982cb255917",
};

const AppInstance = () => {
  const firestoreInstance = getAuth(useFirebaseApp());
  return (
    <AuthProvider sdk={firestoreInstance}>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  );
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AppInstance />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
