import * as S from './LineNotice.style';
export function LineNotice() {
  return (
    <S.Container>
      <S.LineNoticeBg />
      <S.LineNoticeBg />
      <S.LineNoticeContent>
        <S.LeftContent>
          <S.LeftTitle>공지사항</S.LeftTitle>
          <S.LeftList>시스템 개선 및 점검 일정</S.LeftList>
          <S.LeftPlusButtonWrapper>
            <S.LeftPlusButton src="https://www.starbucks.co.kr/common/img/common/btn_notice_plus.png" />
          </S.LeftPlusButtonWrapper>
        </S.LeftContent>
        <S.RightContent>
          <S.RightTitle>스타벅스 프로모션</S.RightTitle>
          <S.RightMoreButtonWrapper>
            <S.RightMoreButton src="https://image.istarbucks.co.kr/common/img/common/btn_prom_down.png" />
          </S.RightMoreButtonWrapper>
        </S.RightContent>
      </S.LineNoticeContent>
    </S.Container>
  );
}
