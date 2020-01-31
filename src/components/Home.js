import React from 'react'
import { Link, Route } from 'react-router-dom'

import Login from './Login'

const Home = () => {
    return (
        <div>
            <h1>Super Smash Hub</h1>
            <Link to="/smash">
                <p>Smash</p>
            </Link>
            <h3>Login</h3>
            <Route exact path="/" component={Login}/>
        </div>
    )
}

export default Home;