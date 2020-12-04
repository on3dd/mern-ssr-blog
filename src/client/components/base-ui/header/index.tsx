import React from 'react';
import styled from 'styled-components';

import Navbar from '@components/base-ui/header/Navbar';

const HeaderDiv = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Verdana, sans-serif;
`;

const InnerDiv = styled.div`
  width: 100%;
`;

const InnerTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Left = styled(ContentDiv)``;
const Right = styled(ContentDiv)``;

const Brand = styled.span`
  display: block;
  padding: 1rem 0;
  font-size: 2rem !important;
  font-family: inherit;
  font-weight: bolder;
`;

const BrandLink = styled.a`
  margin-right: 0.5ch;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
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
          <Brand className="header__brand">
            <BrandLink href="" className="header__link">
              on3dd
            </BrandLink>
            blog
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
