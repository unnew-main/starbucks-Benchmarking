import React, { useState } from 'react';
import styled from 'styled-components';
import { UtilItem } from './UtilItem';
import { DropDownList } from './DropDownList';
import dropDownData from '../../dummy/dropDown';
export function Header() {
  const [menuHover, setMenuHover] = useState<boolean>(false);
  const [menuNum, setMenuNum] = useState<number>(0);
  const onMenuHover = (id: number) => {
    setMenuHover(true);
    setMenuNum(id);
  };
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
      </MarginWrapper>

      <DropDownMenuNav>
        <DropDownMenuWrapper>
          {dropDownData.map(({ title }, index) => (
            <DropDownMenuTitle className={`hover${menuNum === index && menuHover ? 'On' : 'Off'}`} onMouseOver={() => onMenuHover(index)}>
              <MenuTitle>{title}</MenuTitle>
            </DropDownMenuTitle>
          ))}
        </DropDownMenuWrapper>

        {menuHover && (
          <DropDownMenuListContainer
            onMouseOver={() => setMenuHover(true)}
            onMouseLeave={() => {
              setMenuHover(false);
            }}
          >
            <DropDownList menu={dropDownData[menuNum].menu} info={dropDownData[menuNum].info} />
          </DropDownMenuListContainer>
        )}
      </DropDownMenuNav>
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
  width: 100%;
  height: 100%;
  margin: 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  cursor: pointer;
`;

const Logo = styled.img``;
const InfoWrapper = styled.div`
  position: relative;
  width: 1100px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 10px;
`;

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
  position: absolute;
  top: 50%;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const DropDownMenuWrapper = styled.div`
  width: 75%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;
const DropDownMenuTitle = styled.div<{ padding?: string }>`
  padding: ${({ padding }) => (padding ? padding : '10px 20px')};
  padding-bottom: 35px;
  font-size: 13px;
  z-index: 9;
  cursor: pointer;

  &.hoverOn {
    background-color: #2c2a29;
    color: #669900;
    text-decoration: underline;
  }
`;
const MenuTitle = styled.div`
  width: 100%;
`;
const DropDownMenuListContainer = styled.div`
  position: absolute;

  top: 60px;
  width: 100vw;
  z-index: 10;
  background-color: #2c2a29;
`;
