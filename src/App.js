import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoot } from "./helpers/routes";
import {useAuthListener} from './hooks';

function App() {
  const {user} = useAuthListener();
  return (
    <Router>
    <Switch>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      
      >
        <Signup />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact
      >
        <Home />
      </IsUserRedirect>

      <ProtectedRoot user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoot>

      </Switch>
    </Router>
  );
}

export default App;
