import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import Main from './pages/Main';

Photo.propTypes = {};

function Photo() {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={Main} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Photo;