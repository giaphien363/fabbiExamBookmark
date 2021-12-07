import React from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import NotFound from "../../components/NotFound";
import Main from "./pages/Main";

import { useToken } from "../../CustomHook/useToken";

Bookmark.propTypes = {};

function Bookmark() {
  const { access } = useToken();

  const history = useHistory();
  if (!access) {
    history.push("/login");
  }
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={Main} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Bookmark;
