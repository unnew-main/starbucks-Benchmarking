import { Button } from './Atoms';
import * as S from './MainBanner.style';
export function MainBanner() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleWrapper>
          <S.TitleImageWrapper>
            <S.TitleImage src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_main_slogan.png" />
          </S.TitleImageWrapper>
          <S.ButtonWrapper>
            <Button borderColor="greenWhite" fontColor="greenWhite" padding="29px">
              자세히 보기
            </Button>
          </S.ButtonWrapper>
        </S.TitleWrapper>
        <S.ImgsWrapper>
          <S.ImgWrapper>
            <S.DrinkImg src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_latte.png" />
          </S.ImgWrapper>
          <S.ImgWrapper>
            <S.DrinkImg src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_drink_2.png" />
          </S.ImgWrapper>
          <S.ImgWrapper>
            <S.DrinkImg src="https://image.istarbucks.co.kr/img/event/2022/2022_Strawberry_frappuccino_0203.png" />
          </S.ImgWrapper>
        </S.ImgsWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
