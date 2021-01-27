import React from 'react'
import { TodoEntry } from './TodoEntry'

export const TodoEntries = () => {
  const todos=[1,2,3,4,5,6]
  return (
      <div className="todo__entries">
        {
          todos.map(e => (
            <TodoEntry key={e} enty={e}/>
          ))
        }
      </div>
  )
}
