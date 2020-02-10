import React from 'react';

let questionMark = require('../images/Question.png')

const PlayerTwo = (props) => {
    let pic;
    if(props.player2.avatar_url) {
        pic = props.player2.avatar_url
    } else {
        pic = questionMark
    }
    return (
        <>
            <img 
            style={{width: '100px'}} 
            src={pic} 
            />
        </>
    )
}

export default PlayerTwo;