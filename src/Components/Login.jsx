import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
            <div>
                <label for="username">Username : </label>
                <input type="text" id="username" name="username" required />
            </div><br/>
            <div>
                <label for="password">Password : </label>
                <input type="password" id="password" name="password" required />
            </div><br/>
            <button type="submit">Login</button>
        </form>

    </div>
  )
}

export default Login
