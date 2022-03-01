import styled from 'styled-components';
import { menuType, infoType } from '../../dummy/dropDown';

type DromDownType = {
  menu: menuType[];
  info: infoType[];
};
export function DropDownList({ menu, info }: DromDownType) {
  console.log(menu);
  return (
    <Container>
      <MenuListWrapper>
        {menu.map(({ title, list }, index) => (
          <MenuWrapper key={index}>
            <Title>{title}</Title>
            {list.map((data, index) => (
              <Item key={index}>{data}</Item>
            ))}
          </MenuWrapper>
        ))}
      </MenuListWrapper>
      <InfoContainer>
        <InfoWrapper>
          {info.map(({ title, info }, index) => (
            <MenuWrapper key={index}>
              <InfoTitle>{title}</InfoTitle>
              <InfoSubtitle>{info}</InfoSubtitle>
            </MenuWrapper>
          ))}
        </InfoWrapper>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
const MenuListWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  margin-left: -550px;
  left: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  flex-wrap: wrap;
`;
const MenuWrapper = styled.div`
  min-width: 220px;
`;
const Title = styled.div`
  font-size: 15px;
  margin-bottom: 12px;
  color: white;
  font-weight: bold;
`;

const Item = styled.div`
  font-size: 13px;
  color: #999;
  margin-bottom: 3px;
`;

const InfoContainer = styled.div`
  width: 100%;

  background-image: url('https://www.starbucks.co.kr/common/img/common/gnb_sub_txbg.jpg');
`;
const InfoWrapper = styled.div`
  position: relative;

  margin-left: -550px;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const InfoTitle = styled.div`
  color: #999;
  font-size: 14px;
  font-weight: bold;
`;
const InfoSubtitle = styled.div`
  color: #64a70b;
  font-size: 12px;
  margin-bottom: 5px;
`;
