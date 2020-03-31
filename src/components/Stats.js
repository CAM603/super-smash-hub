import React, {useState, useEffect} from 'react';

let questionMark = require('../images/Question.png')

const Stats = (props) => {
    const [p1Loading, setP1Loading] = useState(true)
    const [p2Loading, setP2Loading] = useState(true)

    return (
        <div>
                <div>
                    <p>{props.player1.login}</p>                
                    <img style={{width: "200px"}} src={props.player1.avatar_url}/>
                    <p>Followers: {props.player1.followers}</p>
                    <p>Following: {props.player1.following}</p>
                    <p>Public Repos: {props.player1.public_repos}</p>
                    <img 
                        src={!p1Loading && !p2Loading ? `http://ghchart.rshah.org/${props.player1.login}` : questionMark} 
                        alt={`${props.player1.login}'s Github chart`}
                        onLoad={() => setP1Loading(false)}
                    />
                </div>
                <div>
                    <p>{props.player2.login}</p>                
                    <img style={{width: "200px"}} src={props.player2.avatar_url}/>
                    <p>Followers: {props.player2.followers}</p>
                    <p>Following: {props.player2.following}</p>
                    <p>Public Repos: {props.player2.public_repos}</p>
                    <img 
                        src={!p2Loading && !p1Loading ? `http://ghchart.rshah.org/${props.player2.login}` : questionMark} 
                        alt={`${props.player2.login}'s Github chart`}
                        onLoad={() => setP2Loading(false)}
                    />
                </div>
        </div>
        
    )
}

export default Stats;