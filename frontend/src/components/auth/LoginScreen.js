import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
  return (
    <>
      <h1 className="auth__title">Login</h1>

      <form action="">
        <input className="auth__input" type="text" autoComplete="off" placeholder="email" name="email" />
        <input className="auth__input mb-1" type="password" autoComplete="off" placeholder="password" name="password" />

        <button className="mb-3 btn btn-primary btn-block" type="submit">Login</button>
      </form>
      <hr />
      <Link className="mt-3" to="/auth/signup">Create new account</Link>

    </>
  )
}
