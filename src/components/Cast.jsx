import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { GetMovieCast } from '../Api';
import { CastCard } from 'components/CastCard';
import { Loading, ErrorMessage } from 'pages/StyledPages/Home.styled';
import { CastList, CardItem } from 'components/styledComponents/Cast.styled';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setCasts([]);
        const response = await GetMovieCast(id);
        const movieCast = response.data.cast;
        setCasts([...movieCast]);

        setError('');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 500);
    loadMovies();
    return () => {};
  }, [id]);
  return (
    <section>
      {loading && (
        <Loading>
          <RotatingLines strokeColor="blue" />
        </Loading>
      )}
      <CastList>
        {casts &&
          casts.map(cast => (
            <CardItem key={cast.id}>
              <CastCard
                id={cast.id}
                profile={cast.profile_path}
                name={cast.name}
                character={cast.character}
              />
            </CardItem>
          ))}
      </CastList>
      {error && casts.length !== 0 && (
        <ErrorMessage>Error while loading data. Try again later.</ErrorMessage>
      )}
    </section>
  );
};

export default Cast;
