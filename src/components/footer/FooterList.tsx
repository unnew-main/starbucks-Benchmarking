import styled from 'styled-components';

export function FooterList() {
  return (
    <Container>
      <UlList>
        <LiHeader>COMPANY</LiHeader>
        <LiItem>한눈에 보기</LiItem>
        <LiItem>스타벅스 사명</LiItem>
        <LiItem>스타벅스 소개</LiItem>
        <LiItem>국내 뉴스룸</LiItem>
        <LiItem>세계의 스타벅스</LiItem>
        <LiItem>글로벌 뉴스룸</LiItem>
      </UlList>
      <UlList>
        <LiHeader>CORPORATE SALES</LiHeader>
        <LiItem>단체 및 기업 구매 안내</LiItem>
      </UlList>
      <UlList>
        <LiHeader>PARTNERSHIP</LiHeader>
        <LiItem>신규 입점 제의</LiItem>
        <LiItem>협력 고객사 등록신청</LiItem>
      </UlList>
      <UlList>
        <LiHeader>ONLINE COMMUNITY</LiHeader>
        <LiItem>페이스북</LiItem>
        <LiItem>트위터</LiItem>
        <LiItem>유튜브</LiItem>
        <LiItem>인스타그램</LiItem>
      </UlList>
      <UlList>
        <LiHeader>RECRUIT</LiHeader>
        <LiItem>채용 소개</LiItem>
        <LiItem>채용 지원하기</LiItem>
      </UlList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: flex-start;
`;

const UlList = styled.div`
  width: 20%;
`;

const LiHeader = styled.div`
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: bold;
`;
const LiItem = styled.div`
  font-size: 12px;
  font-weight: bold;

  margin-bottom: 7px;
`;
