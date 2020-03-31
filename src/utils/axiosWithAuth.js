import axios from 'axios'

export const axiosWithAuth = () => {

    return axios.create({
        baseURL: `https://api.github.com/users/`,
        // baseURL: `https://cors-anywhere.herokuapp.com/https://api.github.com/users/`,
    })
}