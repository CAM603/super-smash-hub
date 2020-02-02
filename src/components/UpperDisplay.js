import React from 'react';
import Followers from './Followers';
import Stats from './Stats';

const UpperDisplay = (props) => {
    
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.push('/')
    }
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div>
                    <p onClick={() => logOut()}>Back</p>
                </div>
                <div style={{display: 'flex'}}>
                    <p onClick={() => props.prevPage()}>Prev</p>
                    <h2>Followers Battle</h2>
                    <p onClick={() => props.nextPage()}>Next</p>
                </div>
            </div>
            <div style={{minHeight: '400px'}}>
                {props.fighting 
                    ?
                    <Stats 
                    player1={props.player1}
                    player2={props.player2}
                    />
                    :
                    <Followers
                    followers={props.followers}
                    loading={props.loading}
                    changePlayer2={props.changePlayer2}
                    />
                }
                <p onClick={() => props.setFighting(!props.fighting)}>Hi</p>
            </div>
        </div>
    )
}

export default UpperDisplay;