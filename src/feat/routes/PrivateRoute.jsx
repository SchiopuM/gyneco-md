import React from "react";
import { useSigninCheck } from "reactfire";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const {
    data: { signedIn },
  } = useSigninCheck();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        signedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
