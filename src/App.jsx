import React from "react";
import { Auth } from "./feat/comon/Auth";
import { useSigninCheck } from "reactfire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./feat/routes/PrivateRoute";
import Homepage from "./feat/components/HomePage";

export const App = () => {
  const { status } = useSigninCheck();
  if (status === "loading") return <span>Loadin..</span>;
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <PrivateRoute path="/home">
          <Homepage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};
