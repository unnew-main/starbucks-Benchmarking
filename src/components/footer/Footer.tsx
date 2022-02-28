import styled from 'styled-components';
import { Awards, CopyRight, FooterList } from './index';
export function Footer() {
  return (
    <Container>
      <FooterList />
      <Awards />
      <CopyRight />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #2c2a29;
  color: #fff;
  padding-top: 32px;
  padding-bottom: 35px;
`;
