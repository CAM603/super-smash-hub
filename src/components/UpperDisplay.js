import React from 'react';
import Followers from './Followers';
import Stats from './Stats';

const UpperDisplay = (props) => {
    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div>
                    <p>Back</p>
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
                    <Stats />
                    :
                    <Followers
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