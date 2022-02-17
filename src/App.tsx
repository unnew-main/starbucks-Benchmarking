import React from 'react';
import styled from 'styled-components';
import { Header, MainBanner } from './components';

function App() {
  return (
    <Container>
      <ConTextContainer>
        <Header />
        <MainBanner></MainBanner>
      </ConTextContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ConTextContainer = styled.div`
  justify-content: center;
  align-items: center;
`;
export default App;
