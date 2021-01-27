import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes_main-contet">
      <NotesAppBar />
      <div className="notes__content">
        <input className="notes__title-input" type="text" placeholder="Titulo" name="title" />
        <textarea className="notes__textarea" name="description" placeholder="Tengo que hacer..." cols="30" rows="10"></textarea>
      </div>
    </div>
  )
}
