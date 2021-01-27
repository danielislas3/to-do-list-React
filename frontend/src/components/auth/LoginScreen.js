import React from 'react'
import { api } from '../../utils/Api'
import { Link, Redirect } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValues

  const handleLogin = async (e) => {
    e.preventDefault()
    const log = await api.login({ email, password })
    console.log(log.status);
    return log.status === 200 ? <Redirect to={{
      pathname: "/"
    }
    } /> : sendError(log.message)

  }

  const sendError = (e) => {
    console.log(e);
  }
  return (
    <>
      <h1 className="auth__title">Login</h1>

      <form onSubmit={handleLogin}>
        <input className="auth__input"
          type="text"
          autoComplete="off"
          placeholder="email"
          name="email"
          value={email}
          onChange={handleInputChange} />

        <input className="auth__input mb-1"
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
