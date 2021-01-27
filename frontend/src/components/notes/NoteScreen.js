import React, { useContext } from 'react'
import { UserContext } from '../../helpers/UserContext'
import { useForm } from '../../hooks/useForm'
import { api } from '../../utils/Api'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

  const { user } = useContext(UserContext)

  const [formValues, handleInputChange] = useForm({
    title: '',
    description: '',
    author: user._id
  })
  const { title, description } = formValues


  return (
    <div className="notes_main-contet">
      <NotesAppBar form={formValues}/>
      <div className="notes__content">
        <input
          className="notes__title-input"
          type="text"
          placeholder="Titulo"
          name="title"
          onChange={handleInputChange}
          value={title} />
        <textarea
          className="notes__textarea"
          name="description"
          placeholder="Tengo que hacer..."
          cols="30"
          rows="10"
          value={description}
          onChange={handleInputChange}>

        </textarea>
      </div>
    </div>
  )
}
