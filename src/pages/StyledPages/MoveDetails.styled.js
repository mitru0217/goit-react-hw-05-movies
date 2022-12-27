import styled from 'styled-components';

export const AboutMovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const InfoSection = styled.section`
  border-bottom: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const InformationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 16px;
`;

export const InformationItem = styled.li`
  margin-bottom: 10px;
`;
export const AdditionalSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  border-bottom: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.title};
  display: inline-block;
  margin: 0;
  padding: 0;
`;
export const Section = styled.section`
  background-color: lightblue;
`;
