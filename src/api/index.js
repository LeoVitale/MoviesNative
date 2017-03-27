import axios from 'axios';

const API_KEY = 'bf51ad798857bbf879713ddc03fa0eca';

export const searchMovies = (text) => {
  return axios.get(`https://www.omdbapi.com/?s=${text}`)
}

export const getMovieDetails = () => {
  return axios.get(`https://api.themoviedb.org/3/movie/118340?language=pt-BR&api_key=${API_KEY}`)
}