import React from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

const LowerDisplay = ({player1, player2, randomPlayer2}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', border: 'solid black 3px'}}>
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