import React from 'react';
import Followers from './Followers';
import Stats from './Stats';

const UpperDisplay = (props) => {
    
    const logOut = () => {
        localStorage.removeItem('username');
        props.history.push('/')
    }

    const battle = () => {
        if(props.player2.login) {
            props.setFighting(!props.fighting)
        } else {
            alert('No player 2 selected')
        }
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
                    <p onClick={battle}>Hi</p>
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
                    randomPlayer2={props.randomPlayer2}
                    followers={props.followers}
                    loading={props.loading}
                    changePlayer2={props.changePlayer2}
                    />
                }
                
            </div>
        </div>
    )
}

export default UpperDisplay;