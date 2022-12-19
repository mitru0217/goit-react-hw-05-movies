import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import { MoviesList } from 'components/MoviesList';
import { Loading } from './StyledPages/Home.styled';
import {
  HomeTitle,
  ErrorMessage,
} from 'components/styledComponents/Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadMovies = async () => {
      const API_KEY = '38f6f2c88436f6a6fb5d137cfc7b2688';
      const BASE_URL = 'api.themoviedb.org/3/';
      try {
        setLoading(true);
        setMovies([]);
        const movies = await axios.get(
          `https://${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
          { controller: controller.signal }
        );

        console.log(movies.data.results);

        setMovies([...movies.data.results]);

        setError('');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <main>
      {loading && (
        <Loading>
          <RotatingLines strokeColor="blue" />
        </Loading>
      )}
      {movies.length > 0 && <HomeTitle>Trending Movies </HomeTitle>}
      {error && (
        <ErrorMessage>Error while loading data. Try again later.</ErrorMessage>
      )}
      <MoviesList movies={movies} />
    </main>
  );
};
