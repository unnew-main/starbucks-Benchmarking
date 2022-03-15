import { Button } from '../Atoms';
import * as S from './CopyRight.style';
export function CopyRight() {
  return (
    <S.Container>
      <S.FlexCenter>
        <S.CopyRightItem>개인정보처리방침</S.CopyRightItem>
        <S.CopyRightItem>영상정보처리기기 운영관리 방침</S.CopyRightItem>
        <S.CopyRightItem>홈페이지 이용약관</S.CopyRightItem>
        <S.CopyRightItem>위치정보 이용약관</S.CopyRightItem>
        <S.CopyRightItem>스타벅스 카드 이용약관</S.CopyRightItem>
        <S.CopyRightItem>비회원 이용약관</S.CopyRightItem>
        <S.CopyRightItem>My DT Pass 서비스 이용약관</S.CopyRightItem>
        <S.CopyRightItem>윤리경영 핫라인</S.CopyRightItem>
      </S.FlexCenter>
      <S.ButtonList>
        <S.ButtonWrapper>
          <Button fontColor="white" borderColor="white" padding="14px">
            찾아오시는 길
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Button fontColor="white" borderColor="white" padding="16px">
            신규입점제의
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <Button fontColor="white" borderColor="white" padding="27px">
            사이트 맵
          </Button>
        </S.ButtonWrapper>
      </S.ButtonList>
      <S.CopyMenu>
        <S.CopyItem>사업자등록번호 : 201-81-21515</S.CopyItem>
        <S.CopyItem>주식회사 에스씨케이컴퍼니 대표이사 : 송 데이비드 호섭</S.CopyItem>
        <S.CopyItem>TEL : 1522-3232</S.CopyItem>
        <S.CopyItem>개인정보 책임자 : 하익성</S.CopyItem>
      </S.CopyMenu>
      <S.Copy>ⓒ 2022 Starbucks Coffee Company. All Rights Reserved.</S.Copy>
    </S.Container>
  );
}
