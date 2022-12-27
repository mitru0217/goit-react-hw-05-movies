import ImgNotFound from '../Images/—Pngtree—image of video camera vector_5274660.png';
import { ItemImg } from './styledComponents/MoviesItem.syled';

export const MovieCard = ({ title, poster, releaseDate }) => {
  return (
    <>
      <ItemImg
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : ImgNotFound}
        alt={title}
      />
      {title}({releaseDate ? releaseDate.split('-')[0] : ''})
    </>
  );
};
