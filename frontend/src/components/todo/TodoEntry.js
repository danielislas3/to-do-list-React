import React, { useContext } from 'react'
import { TaskContext } from '../../helpers/TaskContext';
import { api } from '../../utils/Api';

export const TodoEntry = ({ task, user }) => {

  const { dispatchTasks } = useContext(TaskContext)

  const handleDelete = async taskId => {
    await api.deleteTask(taskId)

    dispatchTasks({
      type: 'delete',
      payload: taskId,
    });
  };
  const handleComplete = async taskId => {
    await api.completeTask(taskId)
    dispatchTasks({
      type: 'complete',
      payload: taskId,
    });
  };
  return (
    <div className="todo__entry">
      <div className="todo__entry-picture">
        {task.completed ? <i className="fas fa-check-square fa-4x"></i> :
          <i className="fas fa-spinner fa-4x"></i>}
        {/* <i className="fas fa-spinner"></i> */}
      </div>
      <div className="todo__entry-body">

        <p className="todo__entry-title">{task.title}</p>
        <p className="todo__entry-content ">{task.description}</p>

      </div>
      <div className="todo__entry-date-box">
        <span>Jueves </span>
        <p>15</p>
        <div className="todo_delete-box">

          {!task.completed && <i className="fas fa-check pointer" onClick={() => {
            handleComplete(task._id);
          }}></i>}
          {user._id === task.author && <i className="far fa-trash-alt pointer " onClick={() => {
            handleDelete(task._id);
          }}></i>}
        </div>
      </div>
    </div>
  )
}
