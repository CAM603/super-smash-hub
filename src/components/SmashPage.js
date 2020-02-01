import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import UpperDisplay from './UpperDisplay';
import LowerDisplay from './LowerDisplay';

const SmashPage = (props) => {
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
            <UpperDisplay 
            followers={followers}
            loading={loading}
            />
            <LowerDisplay />
        </div>
    )
}

export default SmashPage;