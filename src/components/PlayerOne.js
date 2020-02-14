import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


const PlayerOne = (props) => {
    
    return (
        <div style={{width: '300px'}}>
            <Card>
                <CardImg top width="100%"  src={props.player1.avatar_url} />
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