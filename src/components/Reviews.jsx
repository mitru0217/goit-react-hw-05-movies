import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { GetMovieReview } from '../Api';
import { ReviewCard } from 'components/ReviewCard';
import { Loading, ErrorMessage } from 'pages/StyledPages/Home.styled';
import {
  ReviewList,
  ReviewItem,
} from 'components/styledComponents/Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setReviews([]);
        const response = await GetMovieReview(id);
        const movieReviews = response.data.results;
        setReviews([...movieReviews]);

        setError('');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
    setTimeout(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 500);
    return () => {};
  }, [id]);
  return (
    <section>
      {loading && (
        <Loading>
          <RotatingLines strokeColor="blue" />
        </Loading>
      )}
      <ReviewList>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewCard
                id={review.id}
                author={review.author}
                content={review.content}
              />
            </ReviewItem>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ReviewList>
      {error && reviews.length !== 0 && (
        <ErrorMessage>Error while loading data. Try again later.</ErrorMessage>
      )}
    </section>
  );
};

export default Reviews;
