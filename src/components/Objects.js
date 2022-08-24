import styled, { keyframes } from 'styled-components';
import { merge,bounce,swing } from 'react-animations';


export default function Objects(props) {
  const { dimensions, sceneTop, sceneLeft, sceneWidth, sceneHeight, rotater} = props; 
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
        <Front style={{ position: 'absolute', width: `${dimensions}px`, height: `${dimensions}px`,
                        transform: `rotateY(${0 + rotater}deg) translateZ(${dimensions /2}px)`}}> </Front>
        <Back style={{ position: 'absolute', width: `${dimensions}px`, height: `${dimensions}px`,
                       transform: `rotateY(${180 + rotater}deg) translateZ(${dimensions /2}px)`}}>  </Back>

        <Top style={{ position: 'absolute', width: `${dimensions}px`, height: `${dimensions}px`,
                       transform: `rotateX(90deg) rotateZ(-${rotater}deg)  translateZ(${dimensions /2}px)`}}>                      
        </Top>
                       
        <Bottom style={{ position: 'absolute', width: `${dimensions}px`, height: `${dimensions}px`,
                       transform: `rotateX(-90deg) rotateZ(${rotater}deg)  translateZ(${dimensions /2}px)` }}>
        </Bottom>

        <Left style={{ position: 'absolute', width: `${dimensions}px`, height: `${dimensions}px`,
                       transform: `rotateY(${-90 + rotater}deg) translateZ(${dimensions /2}px)`}}></Left>
        <Right style={{ position: 'absolute', width: `${dimensions}px`, height: `${dimensions}px`,
                       transform: `rotateY(${90 + rotater}deg) translateZ(${dimensions /2}px)`}}> </Right>

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
  animation: mover 30s linear infinite;
  @keyframes mover {
    0% {
      transform: translateZ(100px) rotateX(90deg) rotateY(-30deg); 
    } 20% {
      transform: translateZ(-100px) rotateX( 10deg);
    } 40% {
      transform: translateZ(100px) rotateY(-250deg)
    } 60% {
      transform: translateZ(-100px) rotateX(340deg)
    } 80% {
      transform: translateZ(-100px) rotateY(60deg) rotateX(-190deg)
    } 100% {
      transform: translateZ(100px) rotateY(-30deg)  rotateX( 90deg);
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
