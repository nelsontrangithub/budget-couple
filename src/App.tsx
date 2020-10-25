import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { ROUTES } from './constants/routes';
import Home from './components/Home';

const App: React.FunctionComponent = () => {
  return (
    <Router>
    <Switch>
      <Route exact path={ROUTES.HOME} component={Home} />
      {/* <Route path={ROUTES.SIGN_IN} component={SignIn} /> */}
      <Route component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
