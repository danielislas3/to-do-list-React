import React, { useContext, useState } from 'react'
import { api } from '../../utils/Api'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { UserContext } from '../../helpers/UserContext'


export const SignupScreen = () => {
  const { dispatchUser } = useContext(UserContext)
  const [errorMessage, setErrorMessage]= useState({message:false})
  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
    name: ''
  })
  let history = useHistory();
  const { name, email, password } = formValues
  const sendError = (e) => {
    console.log(e);
  }
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const log = await api.signup(formValues)
      if (log.status === 201) {
        dispatchUser({
          type: 'login',
          payload: log.data.user,
        });
        history.push("/dashboard");

      } 
    } catch ({ response}) {
      setErrorMessage({ message: response.data.message})

    }

    

  }
  return (
    <>
      <h1 className="auth__title">Signup</h1>
      {errorMessage.message && <p className="alert alert-warning"><i className="fas fa-exclamation-triangle mr-1"></i>{errorMessage.message}</p>}

      <form onSubmit={handleRegister}>
        <input
          className="auth__input "
          type="email"
          autoComplete="off"
          placeholder="email" value={email}
          onChange={handleInputChange}
          name="email" required />
        <input
          className="auth__input "
          type="text"
          autoComplete="off"
          placeholder="name" value={name}
          onChange={handleInputChange}
          name="name"
          required />
        <input
          className="auth__input  mb-1"
          type="password"
          autoComplete="off"
          placeholder="password" value={password}
          onChange={handleInputChange}
          name="password"
          required />

        <button className="mb-3 btn btn-primary btn-block" type="submit">Signup</button>
      </form>
      <hr />
      <Link className="mt-3" to="/auth/login">Already registered?</Link>

    </>
  )
}
