import React from 'react';

const Smash = (props) => {
    let username = localStorage.getItem('username')

    return (
        <div>
            <h1>{username}</h1>
            <button onClick={() => {
                props.history.push("/")
                localStorage.removeItem('username')
                }}>LOGOUT</button>
        </div>
    )
}

export default Smash;