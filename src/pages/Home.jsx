import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { GetTrendingMovies } from '../Api';
import { Loading, HomeTitle, ErrorMessage } from './StyledPages/Home.styled';

import { List } from 'components/styledComponents/MoviesList.syled';
import { MoviesItem } from 'components/styledComponents/MoviesItem.syled';
import { MovieCard } from 'components/Moviecard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setMovies([]);
        const response = await GetTrendingMovies();
        const trendingMovies = response.data.results;

        setMovies([...trendingMovies]);

        setError('');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
    return () => {};
  }, []);

  return (
    <main>
      {loading && (
        <Loading>
          <RotatingLines strokeColor="blue" />
        </Loading>
      )}
      {movies.length > 0 && <HomeTitle>Trending Movies </HomeTitle>}
      <List>
        {movies &&
          movies.map(movie => (
            <MoviesItem key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieCard
                  key={movie.id}
                  title={movie.original_title}
                  poster={movie.poster_path}
                  releaseDate={movie.release_date}
                  genres={movie.genres}
                />
              </Link>
            </MoviesItem>
          ))}
      </List>
      ;
      {error && (
        <ErrorMessage>Error while loading data. Try again later.</ErrorMessage>
      )}
    </main>
  );
};

export default Home;
