import React from 'react';
import styled from 'styled-components';
import { UtilItem } from './UtilItem';
export function Header() {
  return (
    <Container>
      <Logo src="https://www.starbucks.co.kr/common/img/common/logo.png" />
      <UtilNav>
        <UtilItem>Sign In</UtilItem>
        <UtilItem>My StarBucks</UtilItem>
        <UtilItem>Customer Service & Ideas</UtilItem>
        <UtilItem>Find a Store</UtilItem>

        <SearchImgWrapper>
          <SearchImg src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" />
        </SearchImgWrapper>
      </UtilNav>

      <div></div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 150px;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 20px;
`;
const Logo = styled.img`
  position: absolute;
  left: 0;
`;

const UtilNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchImgWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchImg = styled.img`
  width: 25px;
  height: 25px;
`;
