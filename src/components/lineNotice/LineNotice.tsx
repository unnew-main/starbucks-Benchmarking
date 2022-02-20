import React from 'react';
import styled from 'styled-components';

export function LineNotice() {
  return (
    <Container>
      <LineNoticeBg />
      <LineNoticeBg />
      <LineNoticeContent>
        <LeftContent>
          <LeftTitle>공지사항</LeftTitle>
          <LeftList>시스템 개선 및 점검 일정</LeftList>
          <LeftPlusButtonWrapper>
            <LeftPlusButton src="https://www.starbucks.co.kr/common/img/common/btn_notice_plus.png" />
          </LeftPlusButtonWrapper>
        </LeftContent>
        <RightContent>
          <RightTitle>스타벅스 프로모션</RightTitle>
          <RightMoreButtonWrapper>
            <RightMoreButton src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png" />
          </RightMoreButtonWrapper>
        </RightContent>
      </LineNoticeContent>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 62px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineNoticeBg = styled.div`
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

const LineNoticeContent = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  display: flex;
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: rgb(255, 255, 255);
`;
const LeftTitle = styled.div`
  width: 20%;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftList = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;

  width: 75%;
`;
const LeftPlusButtonWrapper = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftPlusButton = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
const RightContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightTitle = styled.div`
  width: 50%;
  font-weight: bold;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const RightMoreButtonWrapper = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RightMoreButton = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
