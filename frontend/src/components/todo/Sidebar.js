import React from 'react'
import { TodoEntries } from './TodoEntries'

export const Sidebar = () => {
  return (
    <aside className="todo__sidebar">
      <div className="todo__sidebar-navbar">
        <h3 className="mt-5">
          <span>Hola Daniel</span>
        </h3>
        <button className="btn">Logout</button>
      </div>
      <div className="todo__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">Nueva tarea</p>
      </div>
      <TodoEntries/>
    </aside>
  )
}
