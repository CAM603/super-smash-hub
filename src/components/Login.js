import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')

    const handleChange = event => {
        setUsername(event.target.value)
    }
    const login = event => {
        event.preventDefault();

        axiosWithAuth()
            .get(`${username}`)
            .then(res => {
                localStorage.setItem('username', username)
                props.history.push('/smash')
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.message)
            })
    }
    
    return (
        <div className="login-container">
            <h3>Enter Your GitHub Username</h3>
            <form onSubmit={login}>
                <input
                type="text"
                placeholder="username"
                value={username}
                name="username"
                onChange={handleChange}
                />
                {error ? <p>Username {error}</p> : null}
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;