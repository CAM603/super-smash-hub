import React from 'react';

const PlayerOne = (props) => {
    console.log('Player1', props.player1)
    return (
        <div>
            <img style={{width: '100px'}} src={props.player1.avatar_url} />
        </div>
    )
}

export default PlayerOne;