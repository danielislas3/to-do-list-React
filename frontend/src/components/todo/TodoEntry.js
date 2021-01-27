import React from 'react'

export const TodoEntry = ({ entry }) => {
  return (
    <div className="todo__entry">
      <div className="todo__entry-picture">
        <i className="fas fa-check-square fa-5x"></i>
        <i className="fas fa-spinner"></i>
      </div>
      <div className="todo__entry-body">
        <p className="todo__entry-title">Titulo</p>
        <p className="todo__entry-content ">descripcion</p>

      </div>
      <div className="todo__entry-date-box">
        <span>Jueves </span>
        <p>15</p>
      </div>
    </div>
  )
}
