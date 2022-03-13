import { useState, useEffect } from 'react';
import { Button } from './Atoms';
import * as S from './Store.style';
export function Store() {
  const [onScroll, setOnScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOnScroll(window.scrollY);
    });
  }, []);
  return (
    <S.Container>
      <S.Wrapper>
        <S.BgImage01 scroll={onScroll} />
        <S.BgImage02 scroll={onScroll} />
        <S.BgImage03 scroll={onScroll} />
        <S.BgImage04 scroll={onScroll} />
        <S.TitleImage scroll={onScroll} />
        <S.TitleImage scroll={onScroll} />
        <S.SubTitleImage scroll={onScroll} />
        <S.ButtonWrapper scroll={onScroll}>
          <Button fontColor="black" borderColor="black" fontWeight="bold" padding="30px">
            매장 찾기
          </Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
