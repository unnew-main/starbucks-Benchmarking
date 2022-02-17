import React from 'react';
import styled from 'styled-components';
import { UtilItem } from './UtilItem';
export function Header() {
  return (
    <Container>
      <MarginWrapper>
        <LogoWrapper>
          <Logo src="https://www.starbucks.co.kr/common/img/common/logo.png" />
        </LogoWrapper>
        <InfoWrapper>
          <UtilNav>
            <UtilItem>Sign In</UtilItem>
            <UtilItem>My StarBucks</UtilItem>
            <UtilItem>Customer Service & Ideas</UtilItem>
            <UtilItem>Find a Store</UtilItem>

            <SearchImgWrapper>
              <SearchImg src="https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png" />
            </SearchImgWrapper>
          </UtilNav>
        </InfoWrapper>
        <DropDownMenuNav>
          <DropDownMenu>COFFEE</DropDownMenu>
          <DropDownMenu>MENU</DropDownMenu>
          <DropDownMenu>STORE</DropDownMenu>
          <DropDownMenu padding={'10px 30px'}>RESPONSIBILITY</DropDownMenu>
          <DropDownMenu padding={'10px 35px'}>STARBUCKS REWARDS</DropDownMenu>
          <DropDownMenu>WHAT'S NEW</DropDownMenu>
        </DropDownMenuNav>
      </MarginWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background-color: #f6f5ef;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const MarginWrapper = styled.div`
  position: relative;
  height: 120px;

  margin: 0 30px;
`;

const InfoWrapper = styled.div`
  position: relative;
  width: 1100px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  cursor: pointer;
`;

const Logo = styled.img``;

const UtilNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;

const SearchImgWrapper = styled.div`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

const DropDownMenuNav = styled.div`
  position: relative;
  width: 1100px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
const DropDownMenu = styled.div<{ padding?: string }>`
  padding: ${({ padding }) => (padding ? padding : '10px 20px')};
  padding-bottom: 35px;
  font-size: 13px;
  cursor: pointer;

  :hover {
    background-color: #2c2a29;
    color: #669900;
    text-decoration: underline;
  }
`;
