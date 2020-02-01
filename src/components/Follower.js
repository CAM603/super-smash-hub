import React from 'react';

const Follower = ({follower, changePlayer2}) => {
    return (
        
        <img
        onClick={() => changePlayer2(follower.login)}
        style={{width: '100px'}} 
        src={follower.avatar_url} 
        />
        
    )
}

export default Follower;