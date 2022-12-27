// import { NavLink } from 'react-router-dom';

// import { List } from './styledComponents/MoviesList.syled';
import { MovieCard } from 'components/Moviecard';

const TrendingMovie = ({ movies }) => {
  <div>
    {movies &&
      movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.original_title}
          poster={movie.poster_path}
          releaseDate={movie.release_date}
        />
      ))}
  </div>;
};

export default TrendingMovie;
