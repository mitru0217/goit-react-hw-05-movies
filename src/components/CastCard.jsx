import {
  CastCardImg,
  CardWrapper,
  Span,
  Character,
} from 'components/styledComponents/Cast.styled';

import ImgNotFound from '../Images/—Pngtree—image of video camera vector_5274660.png';

export const CastCard = ({ profile, name, character }) => {
  return (
    <CardWrapper>
      <CastCardImg
        src={
          profile ? `https://image.tmdb.org/t/p/w500/${profile}` : ImgNotFound
        }
        alt={name}
      />
      <Span>Name: {name}</Span>
      <Span>
        Character: <Character>{character}</Character>
      </Span>
    </CardWrapper>
  );
};
