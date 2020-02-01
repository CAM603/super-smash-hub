import React from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

const LowerDisplay = ({player1, player2}) => {
    return (
        <div>
            <PlayerOne 
            player1={player1}
            />
            <PlayerTwo 
            player2={player2}
            />
        </div>
    )
}

export default LowerDisplay;