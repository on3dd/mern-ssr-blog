import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../../utils/constants';

const NavbarDiv = styled.nav`
  display: block;
  width: 100%;
`;

const NavbarUl = styled.ul`
  display: flex;
  width: inherit;
  margin: 0;
  padding: 0;
`

const NavbarLi = styled.li`
  display: block;
  list-style: none;
  color: ${colors.grayLighten};

  &:hover {
    color: ${colors.grayDarken};
  }

  &:not(:first-child) {
    margin-left: 1.5rem;
  }
`;

const NavbarLink = styled(Link)`
  color: inherit;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: lowercase;
  transition: all .1s ease-out;
`;

const routes = [
  { to: '/', name: 'home' },
  { to: '/programming', name: 'programming' },
  { to: '/music', name: 'music' },
  { to: '/other', name: 'other' },
]

const Navbar: React.FC = () => (
  <NavbarDiv className="navbar">
    <NavbarUl className="navbar__links">
      {routes.map(el => (
        <NavbarLi key={el.name} className="navbar__links">
          <NavbarLink to={el.to}>{el.name}</NavbarLink>
        </NavbarLi>
      ))}
    </NavbarUl>
  </NavbarDiv>
)

export default Navbar;
