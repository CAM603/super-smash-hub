import React from 'react';
import Follower from './Follower';
import RandomFollower from './RandomFollower';

const Followers = (props) => {
    
    return (
        <div className="followers-container">
            {props.followers.map(follower => (
                <Follower
                    key={follower.login}
                    follower={follower}
                    changePlayer2={props.changePlayer2}
                />
                ))}
                <RandomFollower
                    randomPlayer2={props.randomPlayer2}
                />
        </div>
    )
}

export default Followers