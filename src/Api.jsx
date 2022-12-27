import axios from 'axios';

const API_KEY = '38f6f2c88436f6a6fb5d137cfc7b2688';
const BASE_URL = 'api.themoviedb.org/3/';

export const GetTrendingMovies = async () => {
  const response = await axios.get(
    `https://${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response;
};

export const MovieById = async id => {
  const response = await axios.get(
    `https://${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return response;
};

// export const GetMoviesByQuery = async (page, query) => {
//   const response = await axios.get(
//     `https://${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
//   );
//   return response;
// };

export const GetMoviesByQuery = async query => {
  const response = await axios.get(
    `https://${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&query=${query}`
  );
  return response;
};

export const GetMovieCast = async id => {
  const response = await axios.get(
    `https://${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const GetMovieReview = async id => {
  const response = await axios.get(
    `https://${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response;
};
