import styled from 'styled-components';

export const Container = styled.div`
  background: url('https://www.starbucks.co.kr/common/img/main/store_bg.jpg');
  background-size: 100% auto;
  height: 400px;
  position: relative;
  width: 100%;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  position: absolute;
  width: 1280px;
  height: 100%;
  left: 50%;
  margin-left: -640px;
`;

export const BgImage01 = styled.div<{ scroll: number }>`
  background-image: url('https://www.starbucks.co.kr/common/img/main/store_exp_img01.png');
  height: 228px;
  left: 390px;
  position: absolute;
  top: 149px;
  width: 228px;
  z-index: 5;
  opacity: ${({ scroll }) => (scroll > 2000 ? 1 : 0)};
  transition: 2s ease-out;
`;
export const BgImage02 = styled.div<{ scroll: number }>`
  background-image: url('https://www.starbucks.co.kr/common/img/main/store_exp_img02.png');
  height: 312px;
  left: 160px;
  position: absolute;
  top: 0;
  width: 366px;
  z-index: 4;
  opacity: ${({ scroll }) => (scroll > 2000 ? 1 : 0)};
  transition: 2s ease-out;
`;
export const BgImage03 = styled.div<{ scroll: number }>`
  background-image: url('https://www.starbucks.co.kr/common/img/main/store_exp_img03.png');
  height: 142px;
  left: 520px;
  position: absolute;
  top: -60px;
  width: 343px;
  z-index: 4;
  opacity: ${({ scroll }) => (scroll > 2000 ? 1 : 0)};
  transition: 2s ease-out;
`;
export const BgImage04 = styled.div<{ scroll: number }>`
  background-image: url('	https://www.starbucks.co.kr/common/img/main/store_exp_img04.png');
  height: 102px;
  position: absolute;
  right: 30px;
  top: 298px;
  width: 230px;
  z-index: 4;
  opacity: ${({ scroll }) => (scroll > 2000 ? 1 : 0)};
  transition: 2s ease-out;
`;
export const TitleImage = styled.div<{ scroll: number }>`
  background-image: url('	https://www.starbucks.co.kr/common/img/main/store_txt01.png');
  height: 54px;
  position: absolute;
  right: ${({ scroll }) => (scroll > 2000 ? '149px' : '-400px')};
  opacity: ${({ scroll }) => (scroll > 2000 ? 1 : 0)};

  overflow: hidden;
  top: 100px;
  width: 385px;
  z-index: 4;
  transition: 1.5s ease-out;
`;
export const SubTitleImage = styled.div<{ scroll: number }>`
  background: url('	https://www.starbucks.co.kr/common/img/main/store_txt02.png');
  height: 61px;
  position: absolute;
  right: ${({ scroll }) => (scroll > 2000 ? '168px' : '-400px')};
  opacity: ${({ scroll }) => (scroll > 2000 ? 1 : 0)};

  overflow: hidden;
  top: 168px;
  width: 366px;
  z-index: 4;
  transition: 1.5s ease-out;
  transition-delay: 0.5s;
`;
export const ButtonWrapper = styled.div<{ scroll: number }>`
  position: absolute;
  line-height: 34px;
  position: absolute;
  right: ${({ scroll }) => (scroll > 2000 ? '410px' : '-400px')};
  opacity: ${({ scroll }) => (scroll > 2000 ? 1 : 0)};

  top: 258px;
  z-index: 4;
  transition: 2s ease-out;
  transition-delay: 0.5s;
`;
