import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Smash = (props) => {
    let username = localStorage.getItem('username')
    const [player1, setPlayer1] = useState({})
    const [player2, setPlayer2] = useState({})
    const [followers, setFollowers] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true)
        axiosWithAuth()
            .get(`/${username}`)
            .then(res => {
                
                setPlayer1(res.data)
                return axiosWithAuth().get(`/${username}/followers?page=1`)
            })
            .then(res => {
                setLoading(false)
                setFollowers(res.data)
                setPlayer2(res.data[0])
            })
            .catch(err => console.log(err))
    }, [])
    
    const changePlayer2 = (player) => {
        axiosWithAuth()
        .get(`/${player}`)
        .then(res => {
            setPlayer2(res.data)
        })
        .catch(err => console.log(err))
    }

    const nextPage = () => {
        axiosWithAuth()
        .get(`/${username}/followers?page=${page + 1}`)
        .then(res => {
            if(res.data.length > 0) {
                setFollowers(res.data)
                setPage(page + 1)
            } else {
                console.log('No more friends')
            }
        })
        .catch(err => console.log(err))
    }

    const prevPage = () => {
        if (page > 1) {
            axiosWithAuth()
            .get(`/${username}/followers?page=${page - 1}`)
            .then(res => {
                    setFollowers(res.data)
                    setPage(page - 1)
            })
            .catch(err => console.log(err))
        } else {
            console.log('Noooooo')
        }
    }

    return (
        <div>
            <div>{followers.map(follower => (
                <p onClick={() => changePlayer2(follower.login)}>{follower.login}</p>
            ))}</div>
            <h1>{player1.login}</h1>
            <h1>{player2.login}</h1>
            <button onClick={() => {
                props.history.push("/")
                localStorage.removeItem('username')
                }}>LOGOUT</button>
            <button onClick={() => prevPage()}>Prev</button>
            <button onClick={() => nextPage()}>Next</button>
        </div>
    )
}

export default Smash;