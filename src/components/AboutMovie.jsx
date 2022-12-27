import {
  CardContainer,
  Info,
  Title,
  SubTitle,
  MovieImg,
  GenresList,
  Vote,
  Text,
} from 'components/styledComponents/AboutMovie.styled';
import ImgNotFound from '../Images/—Pngtree—image of video camera vector_5274660.png';

export const AboutMovie = ({
  id,
  poster,
  title,
  date,
  vote,
  overview,
  genres,
}) => {
  return (
    <CardContainer key={id}>
      <MovieImg
        src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : ImgNotFound}
        alt={title}
      ></MovieImg>

      <Info>
        <Title>
          {title}( {date})
        </Title>
        <Vote>
          Vote: <span style={{ color: 'black' }}>{vote}</span>
        </Vote>
        <SubTitle>Overview</SubTitle>
        <Text> {overview}</Text>
        <SubTitle>Genres </SubTitle>
        <GenresList>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </GenresList>
        ;
      </Info>
    </CardContainer>
  );
};
