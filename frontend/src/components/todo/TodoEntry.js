import React, { useContext } from 'react'
import { TaskContext } from '../../helpers/TaskContext';
import { api } from '../../utils/Api';

export const TodoEntry = ({ task, user }) => {

  const { tasks, dispatchTasks } = useContext(TaskContext)

  const handleDelete = async taskId => {
   await api.deleteTask(taskId)
    const action = {
      type: 'delete',
      payload: taskId,
    };
    dispatchTasks(action);
  };
  return (
    <div className="todo__entry">
      <div className="todo__entry-picture">
        {task.status ? <i className="fas fa-check-square "></i> :
          <i className="fas fa-spinner fa-4x"></i>}
        {/* <i className="fas fa-spinner"></i> */}
      </div>
      <div className="todo__entry-body">

        <p className="todo__entry-title">{task.title}</p>
        <p className="todo__entry-content ">{task.description}</p>
        <p className="todo__entry-content ">{task.desciption}</p>

      </div>
      <div className="todo__entry-date-box">
        <span>Jueves </span>
        <p>15</p>
        {user._id === task.author && <i class="far fa-trash-alt pointer " onClick={() => {
          handleDelete(task._id);
        }}></i>}
      </div>
    </div>
  )
}
