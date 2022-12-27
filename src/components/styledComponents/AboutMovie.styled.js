import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 16px;
`;

export const MovieImg = styled.img`
  display: block;
  width: 300px;
  object-fit: cover;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 32px;
`;
export const Title = styled.h2`
  color: ${p => p.theme.colors.title};
`;

export const SubTitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 0;
  color: ${p => p.theme.colors.title};
`;
export const GenresList = styled.ul`
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  list-style: none;
`;

export const Vote = styled.span`
  color: ${p => p.theme.colors.title};
`;
export const Text = styled.p`
  text-indent: 0;
  display: inline-block;
`;
