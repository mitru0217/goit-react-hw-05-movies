import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: auto;
`;

export const Span = styled.span`
  display: inline-block;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
  color: red;
`;

export const Loading = styled.div`
  margin: 0, auto;
`;

export const Warning = styled.h2`
  color: red;
`;
export const InValidQuery = styled.span`
  color: blue;
  text-decoration-style: solid;
`;
