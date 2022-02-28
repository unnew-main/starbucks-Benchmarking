import styled from 'styled-components';

export function CopyRight() {
  return (
    <Container>
      <Wrapper>
        <List>
          <Item>
            <Img src="https://image.istarbucks.co.kr/common/img/footer/t_footer_award23.jpg" />
          </Item>
          <Item>
            <Img src="https://image.istarbucks.co.kr/common/img/footer/t_footer_award24.jpg" />
          </Item>
          <Item>
            <Img src="https://image.istarbucks.co.kr/common/img/footer/t_footer_award25.jpg" />
          </Item>
        </List>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: #282828;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Item = styled.div``;
const Img = styled.img`
  width: 210px;
`;
