import { NavLink } from 'react-router-dom';
import { List } from './styledComponents/MoviesList.syled';
import { MoviesItem } from './styledComponents/MoviesItem.syled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, original_title = 'Movie not found. Try later' }) => (
        <MoviesItem key={id}>
          <NavLink to={`${id}`}>{original_title}</NavLink>
        </MoviesItem>
      ))}
    </List>
  );
};
