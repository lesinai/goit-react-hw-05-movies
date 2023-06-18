import axios from 'axios';
const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};
export const getTrendingMovie = async () => {
  const { data } = await axios.get('/trending/movie/day');

  return data;
};
export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);

  return data;
};
export const getReviewsById = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);

  return data;
};
export const getCastById = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);

  return data;
};
export const getMovieByName = async query => {
  const { data } = await axios.get(`/search/movie`, { params: { query } });

  return data;
};
