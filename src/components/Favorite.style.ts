import styled from 'styled-components';

export const Container = styled.div`
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

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
`;

export const SubTitleWrapper = styled.div`
  margin-bottom: 50px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
