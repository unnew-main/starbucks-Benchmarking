import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms';
export function Reserve() {
  const [onScroll, setOnScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOnScroll(window.scrollY);
    });
  }, []);
  return (
    <Container>
      <LogoWrapper>
        <Logo src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_title.png" />
        <ButtonWrapper>
          <Button borderColor="brown" fontColor="brown" padding="25px" fontWeight="bold">
            자세히 보기
          </Button>
        </ButtonWrapper>
      </LogoWrapper>
      <BgWrapper>
        <Bg scroll={onScroll} src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_visual.jpg" />
      </BgWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-image: url('https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_visual_bg.jpg');
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 82px;

  z-index: 3;
`;
const Logo = styled.img``;

const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: auto;
  right: -20%;
  max-width: none;
  vertical-align: top;
  @media screen and (max-width: 1200px) {
    right: -40%;
  }
  @media screen and (max-width: 1100px) {
    right: -50%;
  }
  @media screen and (max-width: 1040px) {
    right: -60%;
  }
`;
const Bg = styled.img<{ scroll: number }>`
  width: auto;
  max-width: none;
  vertical-align: top;
  opacity: ${({ scroll }) => (scroll > 460 ? 1 : 0)};
  transition: 2s ease-out;
`;
const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 23px;
  padding-left: 254px;
  z-index: 3;
`;
