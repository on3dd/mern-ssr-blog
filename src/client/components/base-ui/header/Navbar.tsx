import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  ROUTES,
  COLORS,
  BREAKPOINTS,
} from '@utils/constants';

import Emoji from '@components/base-ui/emoji';

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

  @media (min-width: ${BREAKPOINTS.tablet}) {
    &:not(:first-child) {
      margin-left: 1.5rem;
    }
  }

  &:last-of-type {
    margin-left: auto;
  }
`;

const NavbarLink = styled(NavLink)`
  font-size: 1.2rem;
  text-transform: lowercase;
  color: ${COLORS.grayLighten};

  &.is-active {
    color: ${COLORS.primary} !important;
  }

  &:hover,
  &:focus {
    color: ${COLORS.grayDarken};
    text-decoration: none;
  }
`;

const Navbar: React.FC = () => (
  <NavbarDiv className="navbar">
    <NavbarUl className="navbar__links">
      {ROUTES.map((el) => (
        <NavbarLi key={el.name} className="navbar__links">
          <NavbarLink
            to={el.to}
            exact
            activeClassName="is-active"
          >
            {el.name}
            <Emoji value={el.emoji} ariaLabel={el.name} />
          </NavbarLink>
        </NavbarLi>
      ))}
    </NavbarUl>
  </NavbarDiv>
);

export default Navbar;
