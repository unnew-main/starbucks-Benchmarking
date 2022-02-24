import styled from 'styled-components';
import { Button } from '../features';
export function Reserve() {
  return (
    <Container>
      <LogoWrapper>
        <Logo src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_title.png" />
        <ButtonWrapper>
          <Button borderColor={'#b9813e'} fontColor={'#b9813e'} padding={'25px'} fontWeight={'bold'}>
            자세히 보기
          </Button>
        </ButtonWrapper>
      </LogoWrapper>
      <BgWrapper>
        <Bg src="https://image.istarbucks.co.kr/upload/common/img/main/2022/reserve_2022_ethiopia_visual.jpg" />
      </BgWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 82px;

  z-index: 3;
`;
const Logo = styled.img``;

const BgWrapper = styled.div`
  position: absolute;
  right: -20%;
  top: 0;
  z-index: 1;
`;
const Bg = styled.img`
  width: auto;
`;
const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 23px;
  padding-left: 254px;
  z-index: 3;
`;
