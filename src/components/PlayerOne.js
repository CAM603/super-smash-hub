import React from 'react';

const PlayerOne = (props) => {
    
    return (
        <div>
            <img style={{width: '100px'}} src={props.player1.avatar_url} />
        </div>
    )
}

export default PlayerOne;