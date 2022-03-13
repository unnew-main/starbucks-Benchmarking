import { useState, useEffect } from 'react';
import { Button } from './Atoms';
import * as S from './Reserve.style';
export function Reserve() {
  const [onScroll, setOnScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOnScroll(window.scrollY);
    });
  }, []);
  return (
    <S.Container>
      <S.LogoWrapper>
        <S.Logo src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_title.png" />
        <S.ButtonWrapper>
          <Button borderColor="brown" fontColor="brown" padding="25px" fontWeight="bold">
            자세히 보기
          </Button>
        </S.ButtonWrapper>
      </S.LogoWrapper>
      <S.BgWrapper>
        <S.Bg scroll={onScroll} src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_visual.jpg" />
      </S.BgWrapper>
    </S.Container>
  );
}
