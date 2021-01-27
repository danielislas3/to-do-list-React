import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { TodoEntries } from './TodoEntries'
import { UserContext } from '../../helpers/UserContext'


export const Sidebar = () => {
  let history = useHistory();

  const { user, dispatchUser } = useContext(UserContext)


  const handleLogout = () => {
    dispatchUser({
      type: 'logout',
    });
    return history.push("/login");
  }
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });
  return (
    <aside className="todo__sidebar">
      <div className="todo__sidebar-navbar">
        <h3 className="mt-5">
          <span>Hola {user.name}</span>
        </h3>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="todo__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">Nueva tarea</p>
      </div>
      <TodoEntries />
    </aside>
  )
}
