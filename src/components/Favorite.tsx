import { Button } from './Atoms';
import * as S from './Favorite.style';
export function Favorite() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.TitleWrapper>
            <S.Title src="https://image.istarbucks.co.kr/img/event/2022/fav_prod_txt01_0216.png" />
          </S.TitleWrapper>
          <S.SubTitleWrapper>
            <S.SubTitle src="	https://image.istarbucks.co.kr/img/event/2022/fav_prod_txt02_0216.png" />
          </S.SubTitleWrapper>
          <S.ButtonWrapper>
            <Button fontColor="white" borderColor="white" fontWeight="bold" padding="25px">
              자세히 보기
            </Button>
          </S.ButtonWrapper>
        </S.ContentWrapper>
        <S.FavImageWrapper>
          <S.FavImage src="	https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_pick_img.png" />
        </S.FavImageWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
