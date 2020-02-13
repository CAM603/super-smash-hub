import React, { useState } from 'react';

let questionMark = require('../images/Question.png')

const Follower = ({follower, changePlayer2}) => {
    const [loading, setLoading] = useState(true);

    return (
        
        <img
        onLoad={() => setLoading(false)}
        onClick={() => changePlayer2(follower.login)}
        style={{width: '100px'}} 
        src={!loading ? follower.avatar_url : questionMark} 
        />
        
    )
}

export default Follower;