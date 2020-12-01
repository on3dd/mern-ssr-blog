import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '@utils/constants';

const NavbarDiv = styled.nav`
  display: block;
  width: 100%;
`;

const NavbarUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: inherit;
  margin: 0;
  padding: 0;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    flex-direction: row;
  }
`;

const NavbarLi = styled.li`
  display: block;
  list-style: none;
  color: ${COLORS.grayLighten};

  &:hover {
    color: ${COLORS.grayDarken};
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    &:not(:first-child) {
      margin-left: 1.5rem;
    }
  }
`;

const NavbarLink = styled(NavLink)`
  color: inherit;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: lowercase;
  transition: all 0.1s ease-out;

  &.is-active {
    color: ${COLORS.black};
  }
`;

const routes = [
  { to: '/', name: 'home' },
  { to: '/programming', name: 'programming' },
  { to: '/music', name: 'music' },
  { to: '/other', name: 'other' },
];

const Navbar: React.FC = () => (
  <NavbarDiv className="navbar">
    <NavbarUl className="navbar__links">
      {routes.map((el) => (
        <NavbarLi key={el.name} className="navbar__links">
          <NavbarLink
            to={el.to}
            exact
            activeClassName="is-active"
          >
            {el.name}
          </NavbarLink>
        </NavbarLi>
      ))}
    </NavbarUl>
  </NavbarDiv>
);

export default Navbar;
