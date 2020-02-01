import React from 'react';

const PlayerTwo = (props) => {
    console.log("player2", props.player2)
    return (
        <div>
            <img style={{width: '100px'}} src={props.player2.avatar_url} />
        </div>
    )
}

export default PlayerTwo;