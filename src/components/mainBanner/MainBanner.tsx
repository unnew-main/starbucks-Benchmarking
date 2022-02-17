import React from 'react';
import styled from 'styled-components';
import { Button } from '../features';

export function MainBanner() {
  return (
    <Container>
      <BackgroundWrapper></BackgroundWrapper>

      <Wrapper>
        <TitleWrapper>
          <ImageWrapper>
            <TitleImage src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_main_slogan.png" />
          </ImageWrapper>
          <Button borderColor={'#47967c'} fontColor={'#47967c'}>
            자세히 보기
          </Button>
        </TitleWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: auto;
  height: 58vw;
  position: relative;
  background: no-repeat center/80% url('https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_main_bg.jpg');
`;

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 9;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  justify-content: flex-start;
  align-items: flex-start;
  z-index: 9;
  width: 50%;
`;
const ImageWrapper = styled.div`
  position: absolute;

  top: 10.5%;
  left: 10.5%;
  margin: auto;
`;
const TitleImage = styled.img`
  width: 100%;
`;

const BackgroundWrapper = styled.div`
  /* position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
`;
