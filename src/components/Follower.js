import React, { useState } from 'react';
import { Spinner } from 'reactstrap';

const Follower = ({follower, changePlayer2}) => {
    const [loading, setLoading] = useState(true);
    

    return (
        <>
        {loading ? <Spinner color="primary"/> : null}
        <img
            onLoad={() => setLoading(false)}
            onClick={() => changePlayer2(follower.login)}
            style={{width: '100px'}} 
            src={follower.avatar_url}            
        />
        </>
    )
}

export default Follower;