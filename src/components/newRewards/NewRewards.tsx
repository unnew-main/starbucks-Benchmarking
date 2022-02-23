import styled from 'styled-components';
import { Button } from '../features';
export function NewRewards() {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src="	https://image.istarbucks.co.kr/common/img/main/rewards-logo.png" />
        </LogoWrapper>
        <ContentsWrapper>
          <InfoWrapper>
            <InfoTextWrapper>
              <InfoTitle>스타벅스만의 특별한 혜택, 스타벅스 리워드</InfoTitle>
              <InfoDesc>
                스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요. <br />
                스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.
              </InfoDesc>
            </InfoTextWrapper>
            <InfoButtonWrapper>
              <Button borderColor={'#00704a'} fontColor={'#fff'} backgroudColor={'#00704a'} fontWeight={'bold'} padding={'18.5px'}>
                회원가입
              </Button>
              <Air />
              <Button borderColor={'#fff'} fontColor={'#fff'} fontWeight={'bold'} padding={'18.5px'}>
                로그인
              </Button>
            </InfoButtonWrapper>
          </InfoWrapper>
          <GiftWrapper>
            <GiftText>
              회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
              <br /> 카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
            </GiftText>
            <GiftButtonWrapper>
              <Button borderColor={'#fff'} fontColor={'#fff'} fontWeight={'bold'} padding={'18.5px'}>
                e-Gift Card 선물하기
              </Button>
            </GiftButtonWrapper>
          </GiftWrapper>
        </ContentsWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  height: 100%;
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: #1e3932;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;

  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const LogoWrapper = styled.div``;
const Logo = styled.img`
  width: 176px;
  height: 152px;
`;
const ContentsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  margin: 0 30px;
  padding-right: 30px;
`;
const InfoWrapper = styled.div`
  display: flex;
  position: relative;
`;
const InfoTextWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #4b615b;
  margin-bottom: 22px;
`;

const InfoTitle = styled.div`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 12px;
`;

const InfoDesc = styled.div`
  font-weight: bold;

  margin-bottom: 12px;
  font-size: 17px;
`;

const InfoButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  bottom: 40px;
`;

const Air = styled.div`
  width: 9px;
`;

const GiftWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const GiftText = styled.div``;
const GiftButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
