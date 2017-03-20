import axios from 'axios';

export const searchMovies = (text) => {

    return axios.get(`https://www.omdbapi.com/?s=${text}`)
}