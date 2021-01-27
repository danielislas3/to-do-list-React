import React, { useContext } from 'react'
import { TaskContext } from '../../helpers/TaskContext'
import { api } from '../../utils/Api'

export const NotesAppBar = ({ form }) => {
  const { tasks, dispatchTasks } = useContext(TaskContext)

  const handleCreate = async () => {
    console.log('asdasd');
    const res = await api.createTask(form)

    if (res.status === 201) {
      const { task } = res.data
      console.log('antes dis');
      dispatchTasks({
        type: 'add',
        payload: task
      })
    } else {
      return []
    }
  }
  return (
    <div className="notes__appbar">
      <span>Fecha</span>
      <div>
        <button className="btn" onClick={() => {
          handleCreate();
        }}>Save</button>
      </div>

    </div>
  )
}
