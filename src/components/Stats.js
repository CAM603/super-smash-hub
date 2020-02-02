import React from 'react';

const Stats = (props) => {
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
            </div>
            <div>
                <p>{props.player2.login}</p>                
                <img style={{width: "200px"}} src={props.player2.avatar_url}/>
                <p>Followers: {props.player2.followers}</p>
                <p>Following: {props.player2.following}</p>
                <p>Public Repos: {props.player2.public_repos}</p>
            </div>
        </div>
    )
}

export default Stats;