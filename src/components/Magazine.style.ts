import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  background: url('https://image.istarbucks.co.kr/upload/common/img/main/2021/reserve_bg_pc.png');
  background-repeat: no-repeat;
  background-size: auto 353px;

  background-position: center;
  overflow: hidden;
`;
export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  margin-bottom: 30px;
`;
export const ButtonWrapper = styled.div`
  padding-left: 140px;
`;

export const MagazineImage = styled.img<{ scroll: number }>`
  opacity: ${({ scroll }) => (scroll > 1600 ? 1 : 0)};
  transition: 2s ease-out;
`;
