import React from 'react';
import Followers from './Followers';

const UpperDisplay = (props) => {
    return (
        <div>
            // If not fighting: Board for followers. Else: Battle scene
            <div style={{minHeight: '400px'}}>
                <Followers
                followers={props.followers}
                />
            </div>
            <h1>Upper Display</h1>
        </div>
    )
}

export default UpperDisplay;