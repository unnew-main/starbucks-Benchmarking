import styled from 'styled-components';
import { Awards, CopyRight, FooterList } from './index';
export function Footer() {
  return (
    <Container>
      <Awards />
      <CopyRight />
      <FooterList />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
