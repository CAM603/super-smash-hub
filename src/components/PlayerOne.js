import React from 'react';

const PlayerOne = (props) => {
    
    return (
        <>
            <img style={{width: '100px'}} src={props.player1.avatar_url} />
        </>
    )
}

export default PlayerOne;