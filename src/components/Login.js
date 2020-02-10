import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [username, setUsername] = useState('')

    const handleChange = event => {
        setUsername(event.target.value)
    }
    const login = event => {
        event.preventDefault();
        setLoading(true)

        axiosWithAuth()
            .get(`${username}`)
            .then(res => {
                console.log(res)
                localStorage.setItem('username', username)
                setLoading(false)
                props.history.push('/smash')
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setError(err.response.data.message)
            })
    }
    
    return (
        <div>
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