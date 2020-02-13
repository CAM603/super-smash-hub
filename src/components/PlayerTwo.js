import React from 'react';

let questionMark = require('../images/Question.png')

const PlayerTwo = (props) => {
    let pic;
    let username;

    if(props.player2.avatar_url) {
        pic = props.player2.avatar_url;
        username = <h3>{props.player2.login}</h3>
    } else {
        pic = questionMark;
        username = <h3>None</h3>
    }
    return (
        <>
            <img 
            style={{width: '100px'}} 
            src={pic} 
            />
            {username}
            <h3>Player 2</h3>
        </>
    )
}

export default PlayerTwo;