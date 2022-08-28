
import NavButtons from '../components/NavButtons';
import {AppProvider} from '../helper/AppContext.js';
import React from 'react'; 
import styled from 'styled-components';
import Objects from './Objects';
import Objects2 from './Objects2';
import { useWindowHeight} from '@react-hook/window-size';


const AppContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  
`;


function App() {

  const onlyHeight = useWindowHeight(); 
  return (

    <AppContainer className="App" style={{height: `${onlyHeight}px`}}>

      <NavButtons />

    <Objects sceneWidth={500} sceneHeight={400} sceneTop={30} sceneLeft={70} 
    dimensions={80} rotater={25}
    />
    <Objects sceneWidth={150} sceneHeight={200} sceneTop={84} sceneLeft={50}  
    dimensions={60} rotater={125}
    />
    <Objects sceneWidth={300} sceneHeight={400} sceneTop={30} sceneLeft={10}  
    dimensions={20}  rotater={340}
    /> 
    <Objects sceneWidth={300} sceneHeight={400} sceneTop={90} sceneLeft={90}  
    dimensions={30}   rotater={220}
    />
    <Objects2 sceneWidth={300} sceneHeight={500} sceneTop={10} sceneLeft={0}  
    dimensions={80}  rotater={225}
    />
    <Objects2 sceneWidth={200} sceneHeight={300} sceneTop={50} sceneLeft={90}  
    dimensions={20}  rotater={40}
    />
     <Objects2 sceneWidth={400} sceneHeight={500} sceneTop={80} sceneLeft={0}  
    dimensions={60}  rotater={150}
    />
    <Objects2 sceneWidth={600} sceneHeight={500} sceneTop={27} sceneLeft={50}  
    dimensions={36}  rotater={350}
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

