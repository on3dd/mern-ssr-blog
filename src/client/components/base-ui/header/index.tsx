import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from '@components/base-ui/header/Navbar';

const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
`;

const InnerDiv = styled.div`
  width: 100%;
`;

const InnerTopBar = styled.div`
  display: flex;
  width: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled(ContentDiv)``;
const Right = styled(ContentDiv)``;

const Brand = styled(Link)`
  padding: 1rem 0;
  font-size: 2rem !important;
  font-family: inherit;
  font-weight: bolder;
  text-decoration: none;
`;

const InnerNavbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  font-family: inherit;
`;

const Header: React.FC = () => (
  <HeaderDiv className="header">
    <InnerDiv className="header__inner container">
      <InnerTopBar className="header__inner-topbar">
        <Left className="header__inner-left">
          <Brand to="/" className="header__brand">
            on3dd blog
          </Brand>
        </Left>
        <Right className="header__inner=right"></Right>
      </InnerTopBar>
      <InnerNavbar className="header__inner-navbar">
        <Navbar />
      </InnerNavbar>
    </InnerDiv>
  </HeaderDiv>
);

export default Header;
