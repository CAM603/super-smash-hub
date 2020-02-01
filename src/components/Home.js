import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'

const Home = (props) => {
    return (
        <div>
            <h1>Super Smash Hub</h1>
            <Link to="/smash">
                <p>Smash</p>
            </Link>
            <h3>Login</h3>
            <Login {...props}/>
        </div>
    )
}

export default Home;