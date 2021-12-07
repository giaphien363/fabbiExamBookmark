import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';

import Main from './pages/Main';

Auth.propTypes = {};

function Auth() {
  const match = useRouteMatch();

  console.log(match.url);

  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Signup} />
     
      <Route component={NotFound} />
    </Switch>
  );
}

export default Auth;