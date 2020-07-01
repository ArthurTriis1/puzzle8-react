import axios from 'axios';

export default axios.create({
    baseURL: "https://puzzle8-resolver.herokuapp.com"
})