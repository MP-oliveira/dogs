import React, { usesState } from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = usesState('');
  const [password, setPassword] = usesState('');
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        {/* <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        /> */}
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm