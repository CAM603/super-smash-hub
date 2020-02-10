import React from 'react';

const PlayerOne = (props) => {
    
    return (
        <>
            <img style={{width: '100px'}} src={props.player1.avatar_url} />
            <h3>{props.player1.login}</h3>
            <h3>Player 1</h3>
        </>
    )
}

export default PlayerOne;