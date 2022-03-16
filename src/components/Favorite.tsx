import { Button } from './Atoms';
import * as S from './Favorite.style';
export function Favorite() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.TitleWrapper>
            <img src="https://image.istarbucks.co.kr/img/event/2022/fav_prod_txt01_0216.png" />
          </S.TitleWrapper>
          <S.SubTitleWrapper>
            <img src="	https://image.istarbucks.co.kr/img/event/2022/fav_prod_txt02_0216.png" />
          </S.SubTitleWrapper>
          <S.ButtonWrapper>
            <Button fontColor="white" borderColor="white" fontWeight="bold" padding="25px">
              자세히 보기
            </Button>
          </S.ButtonWrapper>
        </S.ContentWrapper>
        <div>
          <img src="	https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_pick_img.png" />
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
