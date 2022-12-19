import styled from 'styled-components';

export const MoviesItem = styled.li`
  margin: 0;
  padding: 10px;
  list-style: none;
  text-decoration: none;
  color: black;
  flex-basis: calc(100% / 5 - 15px);
  border: 1px solid #eee;
  margin-left: 15px;
  margin-top: 15px;
  height: 50px;
  background-color: ${p => p.theme.colors.background.movieItems};
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
