import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '../Atoms';
export function Magazine() {
  const [onScroll, setOnScroll] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOnScroll(window.scrollY);
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>
            <Title src="https://image.istarbucks.co.kr/img/event/2022/reserve_text_pc_220120.png" />
          </TitleWrapper>

          <ButtonWrapper>
            <Button borderColor="black" fontColor="black" padding="25px">
              자세히 보기
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
        <MagazineImageWrapper>
          <MagazineImage scroll={onScroll} src="https://image.istarbucks.co.kr/img/event/2022/reserve_visual_pc_220119.png" />
        </MagazineImageWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  background: url('https://image.istarbucks.co.kr/upload/common/img/main/2021/reserve_bg_pc.png');
  background-repeat: no-repeat;
  background-size: auto 353px;

  background-position: center;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleWrapper = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.img``;
const ButtonWrapper = styled.div`
  padding-left: 140px;
`;

const MagazineImageWrapper = styled.div``;
const MagazineImage = styled.img<{ scroll: number }>`
  opacity: ${({ scroll }) => (scroll > 1600 ? 1 : 0)};
  transition: 2s ease-out;
`;
