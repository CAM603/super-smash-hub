import React from 'react';

const Follower = ({follower}) => {
    return (
        
        <img style={{width: '100px'}} src={follower.avatar_url} />
        
    )
}

export default Follower;