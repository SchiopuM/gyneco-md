import React from "react";
import { useSigninCheck } from "reactfire";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./feat/routes/PrivateRoute";
import Homepage from "./feat/components/HomePage";
import EducatieSexuala from "./feat/components/EducatieSexuala";
import QuizCard from "./QuizCard/QuizCard";
import Navbar from "./feat/comon/navbar/Navbar";

export const App = () => {
  const { status } = useSigninCheck();
  if (status === "loading") return <span>Loadin..</span>;
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <PrivateRoute path="/quiz">
            <QuizCard subject="virginitate" />
          </PrivateRoute>
          <PrivateRoute path="/webinars">
            <EducatieSexuala />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};
