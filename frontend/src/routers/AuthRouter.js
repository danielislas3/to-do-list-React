import React from 'react'
import { LoginScreen } from '../components/auth/LoginScreen'
import { SignupScreen } from '../components/auth/SignupScreen'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
export const AuthRouter = () => {
  return (
  
      <Switch>
        <Route
          exact
          path="/auth/login"
          component={LoginScreen} />
        <Route
          exact
          path="/auth/signup"
          component={SignupScreen} />

        <Redirect to="/auth/login" />
      </Switch>

 
  )
}
