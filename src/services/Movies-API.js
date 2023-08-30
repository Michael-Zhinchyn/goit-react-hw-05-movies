import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDU5MDZhNjdiYjRmODc1NTE2MjUxMWYwYmMwZmZjNSIsInN1YiI6IjY0ZTc4OGRlYzYxM2NlMDE0ZGZiODg4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._mEzgbWM_HLA1BRaNaEMWbU8KxVgihcTDELuXNFHkmI',
  },
};

export const getMovies = async endpoint => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, options);
    return response;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
