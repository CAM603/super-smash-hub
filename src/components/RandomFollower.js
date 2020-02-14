import React from 'react';
let questionMark = require('../images/Question.png')

const RandomFollower = (props) => {

    return (
        <img
        src={questionMark}
        style={{width: '100px'}}
        onClick={props.randomPlayer2}
        />
    )
}

export default RandomFollower;