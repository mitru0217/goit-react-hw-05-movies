import React, { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { MovieById } from '../Api';

import { Loading, ErrorMessage } from './StyledPages/Home.styled';
import { AboutMovie } from 'components/AboutMovie';
import { BackLink } from 'components/BackLink';
import {
  AboutMovieContainer,
  InformationList,
  InformationItem,
  MovieDetailsContainer,
  InfoSection,
  AdditionalSection,
  Title,
} from 'pages/StyledPages/MoveDetails.styled';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const { id } = useParams();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(location);
  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setMovies([]);
        const response = await MovieById(id);
        const moviesById = response.data;
        setMovies([moviesById]);

        setError('');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
    return () => {};
  }, [id]);
  return (
    <main>
      {loading && (
        <Loading>
          <RotatingLines strokeColor="blue" />
        </Loading>
      )}
      <AboutMovieContainer>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <MovieDetailsContainer>
          <InfoSection>
            {movies &&
              movies.map(movie => (
                <AboutMovie
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                  vote={movie.vote_average}
                  date={movie.release_date.split('-')[0]}
                  overview={movie.overview}
                  genres={movie.genres}
                />
              ))}
          </InfoSection>
          <AdditionalSection>
            <Title>Additional Information</Title>
            <InformationList>
              <InformationItem>
                <Link to="cast">Cast</Link>
              </InformationItem>
              <InformationItem>
                <Link to="reviews">Reviews</Link>
              </InformationItem>
            </InformationList>
          </AdditionalSection>
        </MovieDetailsContainer>
      </AboutMovieContainer>
      {error && movies.length !== 0 && (
        <ErrorMessage>Error while loading data. Try again later.</ErrorMessage>
      )}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
