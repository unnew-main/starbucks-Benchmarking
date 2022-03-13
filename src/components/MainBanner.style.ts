import styled, { keyframes } from 'styled-components';

export const OpacityAnimation = keyframes`
form{opacity: 0;}
to{opacity: 1;}
`;

export const Container = styled.div`
  width: 100%;
  height: 646px;
  position: relative;
  background: 100% url('https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_main_bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  z-index: 9;
  margin: auto;
  box-sizing: border-box;
  max-width: 1130px;
`;
export const TitleWrapper = styled.div`
  position: absolute;

  z-index: 9;
  width: 100%;
  height: 100%;
`;
export const TitleImageWrapper = styled.div`
  position: absolute;
  top: 9.1%;
  left: 0;
  margin: auto;
`;
export const TitleImage = styled.img`
  opacity: 0;
  animation-name: ${OpacityAnimation};
  animation-timing-function: ease-out;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  width: 355px;
`;
export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 9;
  top: 39.5%;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 355px;
  opacity: 0;
  animation-name: ${OpacityAnimation};
  animation-timing-function: ease-out;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
`;
export const ImgsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  opacity: 0;
  animation-name: ${OpacityAnimation};
  animation-timing-function: ease-out;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  :nth-child(1) {
    top: 42%;
    left: 14.7%;
    z-index: 9;
    width: 49%;
    max-width: 540px;
    animation-delay: 1s;
  }
  :nth-child(2) {
    top: 13%;
    left: 36.1%;
    z-index: 8;
    width: 44%;
    max-width: 491px;
    animation-delay: 1.5s;
  }
  :nth-child(3) {
    top: 8.8%;
    right: 0.9%;
    width: 25%;
    animation-delay: 2s;
    max-width: 274px;
  }
`;

export const DrinkImg = styled.img`
  position: absolute;
`;
