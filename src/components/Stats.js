import React, {useState} from 'react';

const Stats = (props) => {
    const [p1Chart, setP1Chart] = useState('')
    const [p2Chart, setP2Chart] = useState('')

    console.log(props.player1)
    console.log(props.player2)
    return (
        <div>
            <div>
                <p>{props.player1.login}</p>                
                <img style={{width: "200px"}} src={props.player1.avatar_url}/>
                <p>Followers: {props.player1.followers}</p>
                <p>Following: {props.player1.following}</p>
                <p>Public Repos: {props.player1.public_repos}</p>
                <img 
                src={`http://ghchart.rshah.org/${props.player1.login}`} 
                alt={`${props.player1.login}'s Github chart`}
                />
            </div>
            <div>
                <p>{props.player2.login}</p>                
                <img style={{width: "200px"}} src={props.player2.avatar_url}/>
                <p>Followers: {props.player2.followers}</p>
                <p>Following: {props.player2.following}</p>
                <p>Public Repos: {props.player2.public_repos}</p>
                <img 
                src={`http://ghchart.rshah.org/${props.player2.login}`} 
                alt={`${props.player2.login}'s Github chart`}
                />
            </div>
        </div>
    )
}

export default Stats;