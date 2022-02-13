import React from 'react';
import styled from 'styled-components';
import { Header, MainBanner } from './components';

function App() {
  return (
    <Container className="App">
      <Header />
      <MainBanner></MainBanner>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default App;
