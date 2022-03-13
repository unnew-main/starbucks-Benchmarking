import { Button } from './Atoms';
import * as S from './NewRewards.style';
export function NewRewards() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.LogoWrapper>
          <S.Logo src="	https://image.istarbucks.co.kr/common/img/main/rewards-logo.png" />
        </S.LogoWrapper>
        <S.ContentsWrapper>
          <S.InfoWrapper>
            <S.InfoTextWrapper>
              <S.InfoTitle>스타벅스만의 특별한 혜택, 스타벅스 리워드</S.InfoTitle>
              <S.InfoDesc>
                스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요. <br />
                스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.
              </S.InfoDesc>
            </S.InfoTextWrapper>
            <S.InfoButtonWrapper>
              <Button borderColor="green" fontColor="white" backgroudColor="green" fontWeight="bold" padding="18.5px">
                회원가입
              </Button>
              <S.Air />
              <Button borderColor="white" fontColor="white" fontWeight="bold" padding="18.5px">
                로그인
              </Button>
            </S.InfoButtonWrapper>
          </S.InfoWrapper>
          <S.GiftWrapper>
            <S.GiftText>
              회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로 구매하시고, 편리하게 등록하세요!
              <br /> 카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
            </S.GiftText>
            <S.GiftButtonWrapper>
              <Button borderColor="white" fontColor="white" fontWeight="bold" padding="18.5px">
                e-Gift Card 선물하기
              </Button>
            </S.GiftButtonWrapper>
          </S.GiftWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
