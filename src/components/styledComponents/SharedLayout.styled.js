import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* background-color: gainsboro;
  height: 100%; */
  ${'' /* max-width: 960px; */}
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const Header = styled.header`
  /* width: 100%; */
  height: 50px;
  background-color: ${p => p.theme.colors.background.blue};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  /* margin-bottom: ${p => p.theme.space[4]}px; */
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
