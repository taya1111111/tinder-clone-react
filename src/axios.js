import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend1111111.herokuapp.com/'
})

export default instance