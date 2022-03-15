import * as S from './FooterList.style';
export function FooterList() {
  return (
    <S.Container>
      <S.UlList>
        <S.LiHeader>COMPANY</S.LiHeader>
        <S.LiItem>한눈에 보기</S.LiItem>
        <S.LiItem>스타벅스 사명</S.LiItem>
        <S.LiItem>스타벅스 소개</S.LiItem>
        <S.LiItem>국내 뉴스룸</S.LiItem>
        <S.LiItem>세계의 스타벅스</S.LiItem>
        <S.LiItem>글로벌 뉴스룸</S.LiItem>
      </S.UlList>
      <S.UlList>
        <S.LiHeader>CORPORATE SALES</S.LiHeader>
        <S.LiItem>단체 및 기업 구매 안내</S.LiItem>
      </S.UlList>
      <S.UlList>
        <S.LiHeader>PARTNERSHIP</S.LiHeader>
        <S.LiItem>신규 입점 제의</S.LiItem>
        <S.LiItem>협력 고객사 등록신청</S.LiItem>
      </S.UlList>
      <S.UlList>
        <S.LiHeader>ONLINE COMMUNITY</S.LiHeader>
        <S.LiItem>페이스북</S.LiItem>
        <S.LiItem>트위터</S.LiItem>
        <S.LiItem>유튜브</S.LiItem>
        <S.LiItem>인스타그램</S.LiItem>
      </S.UlList>
      <S.UlList>
        <S.LiHeader>RECRUIT</S.LiHeader>
        <S.LiItem>채용 소개</S.LiItem>
        <S.LiItem>채용 지원하기</S.LiItem>
      </S.UlList>
    </S.Container>
  );
}
