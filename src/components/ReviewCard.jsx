import { ReviewWrapper } from 'components/styledComponents/Reviews.styled';

export const ReviewCard = ({ author, content }) => {
  return (
    <ReviewWrapper>
      <h3> {author}</h3>
      <p>{content}</p>
    </ReviewWrapper>
  );
};
