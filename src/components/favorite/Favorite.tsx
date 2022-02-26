import styled from 'styled-components';
import { Button } from '../Atoms';
export function Favorite() {
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>
            <Title src="https://image.istarbucks.co.kr/img/event/2022/fav_prod_txt01_0216.png" />
          </TitleWrapper>
          <SubTitleWrapper>
            <SubTitle src="	https://image.istarbucks.co.kr/img/event/2022/fav_prod_txt02_0216.png" />
          </SubTitleWrapper>
          <ButtonWrapper>
            <Button fontColor="white" borderColor="white" fontWeight="bold" padding="25px">
              자세히 보기
            </Button>
          </ButtonWrapper>
        </ContentWrapper>
        <FavImageWrapper>
          <FavImage src="	https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Spring_pick_img.png" />
        </FavImageWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 800px;

  background-image: url('https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-color: #45434c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.img``;
const SubTitleWrapper = styled.div`
  margin-bottom: 50px;
`;
const SubTitle = styled.img``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FavImageWrapper = styled.div``;
const FavImage = styled.img``;
