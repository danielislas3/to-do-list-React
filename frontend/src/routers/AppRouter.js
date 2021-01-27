import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'; 

import { AuthRouter } from './AuthRouter';
import { TodoScreen } from '../components/todo/TodoScreen';


export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/auth"
            component={AuthRouter}
          />

          <Route
            exact
            path="/"
            component={TodoScreen}
          />

          <Redirect to="/auth/login" />


        </Switch>
      </div>
    </Router>

  )
}
