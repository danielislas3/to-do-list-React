import React, { useContext } from 'react'
import { UserContext } from '../../helpers/UserContext'
import { TodoEntry } from './TodoEntry'

export const TodoEntries = ({tasks}) => {
  const { user, dispatchUser } = useContext(UserContext)
  
  return (
      <div className="todo__entries">
        {
        tasks.map(e => (
          <TodoEntry key={e._id} task={e} user={user}/>
          ))
        }
      </div>
  )
}
