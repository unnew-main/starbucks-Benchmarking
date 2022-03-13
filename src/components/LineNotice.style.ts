import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 62px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineNoticeBg = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  :nth-child(1) {
    left: 0;
    background-color: #111;
  }
  :nth-child(2) {
    left: 50%;
    background-color: #f6f5ef;
  }
`;

export const LineNoticeContent = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  display: flex;
`;

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: rgb(255, 255, 255);
`;
export const LeftTitle = styled.div`
  width: 20%;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftList = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;

  width: 75%;
`;
export const LeftPlusButtonWrapper = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LeftPlusButton = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
export const RightContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightTitle = styled.div`
  width: 50%;
  font-weight: bold;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightMoreButtonWrapper = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RightMoreButton = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
