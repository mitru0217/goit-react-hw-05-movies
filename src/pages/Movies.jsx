import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RotatingLines } from 'react-loader-spinner';
import SearchForm from 'components/SearchForm';
import { MoviesList } from 'components/MoviesList';
import { ErrorMessage } from 'components/styledComponents/Home.styled';
import {
  Container,
  Span,
  Loading,
  Warning,
  InValidQuery,
} from 'pages/StyledPages/Movies.styled';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    if (query === '') {
      return;
    }
    const loadMovies = async () => {
      const API_KEY = '38f6f2c88436f6a6fb5d137cfc7b2688';
      const BASE_URL = 'api.themoviedb.org/3/';
      try {
        setLoading(true);
        setMovies([]);
        const movies = await axios.get(
          `https://${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`,
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
  }, [query, page]);

  const addMovies = query => {
    setQuery(query);
    setPage(1);

    setMovies([]);
    setQuery(query);
  };
  return (
    <main>
      <SearchForm onSubmit={addMovies} />
      <Container>
        {movies.length === 0 && query && (
          <Warning>
            There are no images for query:
            <InValidQuery> {query}</InValidQuery>
          </Warning>
        )}

        {loading && (
          <Loading>
            <RotatingLines strokeColor="blue" />
          </Loading>
        )}
        {error && movies.length !== 0 && (
          <ErrorMessage>
            Error while loading data. Try again later.
          </ErrorMessage>
        )}
        {!query ? (
          <Span>'While there is nothing to show'</Span>
        ) : (
          <MoviesList movies={movies} />
        )}
      </Container>
    </main>
  );
};
