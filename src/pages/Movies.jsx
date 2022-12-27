import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { ErrorMessage } from 'pages/StyledPages/Home.styled';
import {
  Span,
  Loading,
  Warning,
  InValidQuery,
} from 'pages/StyledPages/Movies.styled';
import { List } from 'components/styledComponents/MoviesList.syled';
import { MoviesItem } from 'components/styledComponents/MoviesItem.syled';
import { MovieCard } from 'components/Moviecard';
import { GetMoviesByQuery } from '../Api';

import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import {
  Header,
  Input,
  Button,
  Form,
} from 'components/styledComponents/SearchForm.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const onSubmit = async e => {
    e.preventDefault();
    if (query === '') {
      toast.error('Nothing to show yet. Enter your requst.', {
        duration: 1000,
      });
    }
    const form = e.currentTarget;
    setSearchParams(form !== '' ? { query: form.elements.query.value } : {});
    form.reset();
    try {
      setLoading(true);
      setMovies([]);
      const response = await GetMoviesByQuery(query);
      const MoviesByQuery = response.data.results;
      setMovies([...MoviesByQuery]);
      setError('');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    const loadMovies = async () => {
      try {
        setLoading(true);
        setMovies([]);
        const response = await GetMoviesByQuery(query);
        const MoviesByQuery = response.data.results;
        setMovies([...MoviesByQuery]);
        setError('');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
    return () => {};
  }, [query]);

  return (
    <main>
      <Header>
        <Form onSubmit={e => onSubmit(e)}>
          <Button type="submit">
            <FaSearch size={25} />
          </Button>
          <Input
            type="text"
            autocomplete="off"
            name="query"
            autoFocus
            placeholder="Search movies"
          />
        </Form>
        <Toaster />
      </Header>
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
        <ErrorMessage>Error while loading data. Try again later.</ErrorMessage>
      )}
      {!query ? (
        <Span>'While there is nothing to show'</Span>
      ) : (
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
                  />
                </Link>
              </MoviesItem>
            ))}
        </List>
      )}
    </main>
  );
};

export default Movies;
