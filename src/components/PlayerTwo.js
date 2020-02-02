import React from 'react';

const PlayerTwo = (props) => {
    
    return (
        <div>
            <img style={{width: '100px'}} src={props.player2.avatar_url} />
        </div>
    )
}

export default PlayerTwo;