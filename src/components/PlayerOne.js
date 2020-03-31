import React from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';


const PlayerOne = (props) => {
    
    return (
        <div className="player-card">
            <Card>
                <CardImg src={props.player1.avatar_url} />
                <CardBody>
                    <h3>{props.player1.login}</h3>
                    <h3>Player 1</h3>
                    <h3>P1</h3>
                </CardBody>
            </Card>
        </div>
    )
}

export default PlayerOne;