import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Main from "./pages/Main/index";

const Auth = (props) => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.url} component={Main} />
    </Switch>
  );
};

Auth.propTypes = {};

export default Auth;
