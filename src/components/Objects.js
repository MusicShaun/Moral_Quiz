import styled, { keyframes } from 'styled-components';
import { merge,bounce,swing } from 'react-animations';


export default function Objects(props) {
  const { sceneWidth, sceneHeight, sceneTop, sceneLeft, cubeWidth, cubeHeight, size, rotater} = props; 
  return (<>
  <ViewPort>
    <Scene style={{
      width: `${sceneWidth}px`,
      height: `${sceneHeight}px`,
      top: `${sceneTop}%`,
      left: `${sceneLeft}%`,
      }}
      >
      <Wrapper>
        <Front style={{ position: 'absolute', width: `${cubeWidth}px`, height: `${cubeHeight}px`,
                        transform: `rotateY(${0 + rotater}deg) translateZ(${size}px)`}}> </Front>
        <Back style={{ position: 'absolute', width: `${cubeWidth}px`, height: `${cubeHeight}px`,
                       transform: `rotateY(${180 + rotater}deg) translateZ(${size}px)`}}>  </Back>

        <Top style={{ position: 'absolute', width: `${cubeWidth}px`, height: `${cubeHeight}px`,
                       transform: `rotateX(90deg) rotateZ(-${rotater}deg) translateZ(${size}px)`}}>                      
        </Top>
                       
        <Bottom style={{ position: 'absolute', width: `${cubeWidth}px`, height: `${cubeHeight}px`,
                       transform: `rotateX(-90deg) rotateZ(${rotater}deg)  translateZ(${size}px)` }}>
        </Bottom>

        <Left style={{ position: 'absolute', width: `${cubeWidth}px`, height: `${cubeHeight}px`,
                       transform: `rotateY(${-90 + rotater}deg) translateZ(${size}px)`}}></Left>
        <Right style={{ position: 'absolute', width: `${cubeWidth}px`, height: `${cubeHeight}px`,
                       transform: `rotateY(${90 + rotater}deg) translateZ(${size}px)`}}> </Right>

      </Wrapper>
    </Scene>
  </ViewPort>
</>)
}
const mergedAn = merge(swing, bounce);
const AAnimation = keyframes`${mergedAn}`;

const ViewPort = styled.div`
  position: absolute;
  left: 10vw;
  height: 10vh;
  width: 80vw;
  height: 80vh;
  animation: 30s ${AAnimation} infinite;
`;
const Scene = styled.div`
  position: absolute;
  perspective: 600px;
  color: white;
  font-size: 1rem;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
  animation: mover 30s linear alternate infinite;
  @keyframes mover {
    0% {
      transform: translateZ(-100px) rotateY(   30deg); 
    } 33% {
      transform: translateZ(-100px) rotateX( -90deg);
    } 66% {
      transform: translateZ(-100px) rotateY(-150deg)
    } 100% {
      transform: translateZ(-100px) rotateX(-190deg)
    }
  }
`;
const Front = styled.div`
  background-color: #fddcb4;
`;
const Back = styled.div`
  background-color: #fddb9b;
`;
const Top = styled.div`
  background-color: #fcde82;
`;
const Bottom = styled.div`
  background-color: #d0d2c6;
`;
const Left = styled.div`
  background-color: #b5dbfd;
`;
const Right = styled.div`
  background-color: #ffaff2;
`;
