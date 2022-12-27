import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 50px;
  background-color: ${p => p.theme.colors.background.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: ${p => p.theme.borders.normal} black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};

  &.active {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.background.orangered};
  }
`;
