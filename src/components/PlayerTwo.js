import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

let questionMark = require('../images/Question.png')

const PlayerTwo = (props) => {
    let pic;
    let username;

    if(props.player2.avatar_url) {
        pic = props.player2.avatar_url;
        username = <h3>{props.player2.login}</h3>
    } else {
        pic = questionMark;
        username = <h3>?</h3>
    }
    return (
        <div className="player-card">
            <Card>
                <CardImg src={pic}/>
                <CardBody>
                    {username}
                    <h3>Player 2</h3>
                    <h3>P2</h3>
                </CardBody>
            </Card>
        </div>
    )
}

export default PlayerTwo;