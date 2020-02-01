import React from 'react';
import Followers from './Followers';
import Stats from './Stats';

const UpperDisplay = (props) => {
    return (
        <div>
            // If not fighting: Board for followers. Else: Battle scene
            <div style={{minHeight: '400px'}}>
                <Followers
                followers={props.followers}
                loading={props.loading}
                changePlayer2={props.changePlayer2}
                />
                <Stats />
            </div>
        </div>
    )
}

export default UpperDisplay;