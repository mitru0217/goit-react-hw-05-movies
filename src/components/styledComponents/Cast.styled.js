import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  ${
    '' /* margin-top: -15px;
  padding-top: 15px; */
  }
  padding: 20px;
`;

export const CardItem = styled.li`
  margin: 0;

  list-style: none;
  text-decoration: none;
  color: black;
  flex-basis: calc(100% / 5 - 15px);
  border: 1px solid #eee;
  margin-left: 15px;
  margin-top: 15px;
  border: none;

  /* background-color: ${p => p.theme.colors.background.movieItems}; */
`;
export const CastCardImg = styled.img`
  display: block;
  width: 100%;

  object-fit: cover;
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 420px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Span = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
export const Character = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.normal};
`;
