import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 20px;
`;

export const ReviewItem = styled.li`
  margin: 0;

  list-style: none;
  text-decoration: none;
  color: black;
  border: 1px solid #eee;
  margin-left: 15px;
  margin-top: 15px;
  border: none;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 16px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
