
import NavButtons from '../components/NavButtons';
import {AppProvider} from '../helper/AppContext.js';
import React from 'react'; 
import styled from 'styled-components';
import Objects from './Objects';
import Objects2 from './Objects2';

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

    <Objects sceneWidth={500} sceneHeight={500} sceneTop={30} sceneLeft={10} 
    cubeHeight={80} cubeWidth={80} size={40} rotater={25}
    />
    <Objects sceneWidth={700} sceneHeight={700} sceneTop={90} sceneLeft={90}  
    cubeHeight={40} cubeWidth={40} size={20}  rotater={-125}
    />
    <Objects sceneWidth={400} sceneHeight={400} sceneTop={10} sceneLeft={70}  
    cubeHeight={20} cubeWidth={20} size={10}   rotater={340}
    />
    <Objects sceneWidth={800} sceneHeight={800} sceneTop={60} sceneLeft={30}  
    cubeHeight={30} cubeWidth={30} size={15}   rotater={120}
    />
    <Objects2 sceneWidth={300} sceneHeight={300} sceneTop={10} sceneLeft={0}  
    cubeHeight={80} cubeWidth={80} size={40}  rotater={225}
    />
    <Objects2 sceneWidth={400} sceneHeight={400} sceneTop={50} sceneLeft={30}  
    cubeHeight={20} cubeWidth={20} size={10}  rotater={-40}
    />
    <Objects2 sceneWidth={500} sceneHeight={500} sceneTop={80} sceneLeft={90}  
    cubeHeight={60} cubeWidth={60} size={30}  rotater={150}
    />
    <Objects2 sceneWidth={800} sceneHeight={800} sceneTop={27} sceneLeft={50}  
    cubeHeight={36} cubeWidth={36} size={18}  rotater={-150}
    />
      
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

