
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

    <Objects sceneTop={30} sceneLeft={70} 
    dimensions={80} rotater={25}
    />
    <Objects sceneWidth={15} sceneHeight={20} sceneTop={84} sceneLeft={50}  
    dimensions={60} rotater={125}
    />
    <Objects sceneWidth={30} sceneHeight={40} sceneTop={30} sceneLeft={10}  
    dimensions={20}  rotater={340}
    /> 
    <Objects sceneWidth={30} sceneHeight={40} sceneTop={90} sceneLeft={90}  
    dimensions={30}   rotater={220}
    />
    <Objects2 sceneWidth={30} sceneHeight={50} sceneTop={10} sceneLeft={0}  
    dimensions={80}  rotater={225}
    />
    <Objects2 sceneWidth={20} sceneHeight={30} sceneTop={50} sceneLeft={90}  
    dimensions={20}  rotater={40}
    />
     <Objects2 sceneWidth={40} sceneHeight={50} sceneTop={80} sceneLeft={0}  
    dimensions={60}  rotater={150}
    />
    <Objects2 sceneWidth={60} sceneHeight={50} sceneTop={27} sceneLeft={50}  
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

