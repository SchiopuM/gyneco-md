import React from "react";
import ReactDOM from "react-dom";
import { Auth } from "./feat/comon/Auth";
import { useSigninCheck } from "reactfire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./feat/routes/PrivateRoute";
import Homepage from "./feat/components/HomePage";
import NavBar from "./feat/comon/navbar/Navbar";
import EducatieSexuala from "./feat/components/EducatieSexuala";

export const App = () => {
  const { status } = useSigninCheck();
  if (status === "loading") return <span>Loadin..</span>;
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Homepage />
          </Route>
          <PrivateRoute path="/quiz">
            <Homepage />
          </PrivateRoute>
          <PrivateRoute path="/webinars">
            <EducatieSexuala />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};
