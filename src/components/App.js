
import NavButtons from '../components/NavButtons';
import {AppProvider} from '../helper/AppContext.js';
import React from 'react'; 
import styled from 'styled-components';


const AppContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  
`;


function App() {
  return (
    <AppContainer className="App">
      <NavButtons />
    </AppContainer>
  );
}


export default function AppWrapper() {
  return (
    <AppProvider>
      <App></App>
  </AppProvider>
  )
}

