import React from 'react';
import Follower from './Follower';

const Followers = (props) => {
    return (
        <div>
            {props.loading ? <p style={{color:'red'}}>Loading</p>
            :
            props.followers.map(follower => (
                <Follower 
                follower={follower}
                changePlayer2={props.changePlayer2}
                />
            ))
        }
        </div>
    )
}

export default Followers