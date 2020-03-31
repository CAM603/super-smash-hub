import React from 'react'
import { Link } from 'react-router-dom'

import Login from './Login'

const Home = (props) => {
    return (
        <div className="home-container">
            <h1>Super Smash Hub</h1>
            <Login {...props}/>
        </div>
    )
}

export default Home;