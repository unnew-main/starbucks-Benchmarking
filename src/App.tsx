import React from 'react';
import styled from 'styled-components';
import { Header, MainBanner, LineNotice, NewRewards } from './components';

function App() {
  return (
    <Container>
      <Header />

      <ContextContainer>
        <MainBanner />
        <LineNotice />
        <NewRewards />
      </ContextContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  width: 100%;
  height: 100%;
`;
export default App;
