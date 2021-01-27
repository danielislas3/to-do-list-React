import React, { useContext } from 'react'
import { api } from '../../utils/Api'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { UserContext } from '../../helpers/UserContext'

export const LoginScreen = () => {

  const { dispatchUser } = useContext(UserContext)

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })
  let history = useHistory();

  const { email, password } = formValues

  const handleLogin = async (e) => {
    e.preventDefault()
    const log = await api.login({ email, password })
    console.log(log.status);
    if (log.status === 200) {
      dispatchUser({
        type: 'login',
        payload: log.data.user,
      });
      history.push("/dashboard");

    } else {
      sendError(log.message)
    }
  }

  const sendError = (e) => {
    console.log(e);
  }
  return (
    <>
      <h1 className="auth__title">Login</h1>

      <form onSubmit={handleLogin}>
        <input className="auth__input"
          required
          type="text"
          autoComplete="off"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange} />

        <input className="auth__input mb-1"
          required
          type="password"
          autoComplete="off"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange} />

        <button className="mb-3 btn btn-primary btn-block" type="submit">Login</button>
      </form>
      <hr />
      <Link className="mt-3" to="/auth/signup">Create new account</Link>

    </>
  )
}
