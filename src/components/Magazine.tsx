import { useState, useEffect } from 'react';
import { Button } from './Atoms';
import * as S from './Magazine.style';

export function Magazine() {
  const [onScroll, setOnScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOnScroll(window.scrollY);
    });
  }, []);
  return (
    <S.Container>
      <S.Wrapper>
        <S.ContentWrapper>
          <S.TitleWrapper>
            <img src="https://image.istarbucks.co.kr/img/event/2022/reserve_text_pc_220120.png" />
          </S.TitleWrapper>

          <S.ButtonWrapper>
            <Button borderColor="black" fontColor="black" padding="25px">
              자세히 보기
            </Button>
          </S.ButtonWrapper>
        </S.ContentWrapper>
        <div>
          <S.MagazineImage scroll={onScroll} src="https://image.istarbucks.co.kr/img/event/2022/reserve_visual_pc_220119.png" />
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
