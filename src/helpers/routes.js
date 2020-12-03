import React from "react";
import { Route, Redirect } from "react-router-dom";

// if user is logged in and decides to go to /signin or /signup page then redirect them to /browse
// if user is not logged in and visits /signin or /signup then return children (sign in or sign up page)
export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }

        return null;
      }}
    />
  );
}

// Protected routes ( /browse )
export function ProtectedRoot({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location }
              }}
            />
          );
        }
        return null;
      }}
    />
  );
}
