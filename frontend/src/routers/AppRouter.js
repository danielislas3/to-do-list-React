import React, { useEffect, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { TodoScreen } from '../components/todo/TodoScreen';
import { taskReducer } from '../helpers/taskReducer';
import { userReducer } from '../helpers/userReducer';
import { TaskContext } from '../helpers/TaskContext';
import { UserContext } from '../helpers/UserContext';


export const AppRouter = () => {



  const [tasks, dispatchTasks] = useReducer(taskReducer, []);
  const [user, dispatchUser] = useReducer(userReducer, []);


  const contextTasks = {
    tasks,
    dispatchTasks,
  };

  const contextUser = {
    user,
    dispatchUser,
  };

  return (
    <TaskContext.Provider value={contextTasks}>
      <UserContext.Provider value={contextUser}>

        <Router>
          <div>
            <Switch>
              <Route
                path="/auth"
                component={AuthRouter}
              />

              <Route
                exact
                path="/dashboard"
                render={() => {
                  return user._id ? <TodoScreen /> : <AuthRouter />
                }}

              />

              <Redirect to="/auth/login" />


            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </TaskContext.Provider>

  )
}
