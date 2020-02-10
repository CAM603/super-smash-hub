import React from 'react';

const PlayerTwo = (props) => {
    let pic;
    if(props.player2.avatar_url) {
        pic = props.player2.avatar_url
    } else {
        pic = null
    }
    return (
        <>
            <img 
            style={{width: '100px'}} 
            src={pic} 
            
            />
        </>
    )
}

export default PlayerTwo;