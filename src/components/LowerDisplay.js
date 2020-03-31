import React from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

const LowerDisplay = ({player1, player2, randomPlayer2}) => {
    return (
        <div className="lower-container">
            <PlayerOne 
            player1={player1}
            />
            <PlayerTwo 
            player2={player2}
            randomPlayer2={randomPlayer2}
            />
        </div>
    )
}

export default LowerDisplay;