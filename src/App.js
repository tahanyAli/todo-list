import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
const Container = styled.div`
background-color: papayawhip;
width: 50%;
height: 50%;
padding: 2rem;
margin: 0 auto;
`