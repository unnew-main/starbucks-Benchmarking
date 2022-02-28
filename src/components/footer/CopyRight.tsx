import styled from 'styled-components';
import { Button } from '../Atoms';
export function CopyRight() {
  return (
    <Container>
      <CopyRightList>
        <CopyRightItem>개인정보처리방침</CopyRightItem>
        <CopyRightItem>영상정보처리기기 운영관리 방침</CopyRightItem>
        <CopyRightItem>홈페이지 이용약관</CopyRightItem>
        <CopyRightItem>위치정보 이용약관</CopyRightItem>
        <CopyRightItem>스타벅스 카드 이용약관</CopyRightItem>
        <CopyRightItem>비회원 이용약관</CopyRightItem>
        <CopyRightItem>My DT Pass 서비스 이용약관</CopyRightItem>
        <CopyRightItem>윤리경영 핫라인</CopyRightItem>
      </CopyRightList>
      <ButtonList>
        <ButtonWrapper>
          <Button fontColor="white" borderColor="white" padding="14px">
            찾아오시는 길
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button fontColor="white" borderColor="white" padding="16px">
            신규입점제의
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button fontColor="white" borderColor="white" padding="27px">
            사이트 맵
          </Button>
        </ButtonWrapper>
      </ButtonList>
      <CopyMenu>
        <CopyItem>사업자등록번호 : 201-81-21515</CopyItem>
        <CopyItem>주식회사 에스씨케이컴퍼니 대표이사 : 송 데이비드 호섭</CopyItem>
        <CopyItem>TEL : 1522-3232</CopyItem>
        <CopyItem>개인정보 책임자 : 하익성</CopyItem>
      </CopyMenu>
      <Copy>ⓒ 2022 Starbucks Coffee Company. All Rights Reserved.</Copy>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin-top: 40px;
  padding-bottom: 40px;
`;

const CopyRightList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CopyRightItem = styled.div`
  padding: 0 12px;
  font-size: 12px;
  font-weight: bold;
  border-left: 1px solid #393939;
  color: #ccc;
  :first-child {
    color: #00b050 !important;
    border-left: 0px;
  }
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const ButtonWrapper = styled.div`
  margin: 0 5px;
`;

const CopyMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const CopyItem = styled.div`
  margin: 0 8px;
  font-size: 12px;
  color: #999;
`;

const Copy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
  color: #999;
`;
