import styled, { keyframes } from 'styled-components';
import { merge, rubberBand,swing } from 'react-animations';
import React, {useRef, useEffect} from 'react'; 
import { gsap } from 'gsap';

export default function Objects2(props) {
  const { dimensions, sceneTop, sceneLeft, rotater, sceneHeight, sceneWidth} = props; 

  const testRef = useRef(null); 

  useEffect(() => {
    console.log(testRef)
    gsap.from(testRef.current,
       { 
        x: "random(800, -800, 5)",
        y: "random(800, -800, 5)",
        duration:20,
        ease:"none",
        repeat:-1,
        yoyo: true
      });
  },[])





  return (<>
  <ViewPort>
    <Scene ref={testRef} style={{
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
                       transform: `rotateX(90deg) rotateZ(-${rotater}deg) translateZ(${dimensions /2}px)`}}>                      
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

const mergedAn = merge(swing, rubberBand);
const AAnimation = keyframes`${mergedAn}`;
const ViewPort = styled.div`
  position: absolute;
  left: 10vw;
  top: 10vh;
  width: 80vw;
  height: 80vh;
  animation: 28s ${AAnimation} infinite; 
`;
const Scene = styled.div`
  position: absolute;
  perspective: 600px;
  color: white;
  font-size: 0.5rem;
  text-align: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;

  animation: mover 36s linear infinite alternate;
  @keyframes mover {
    0% {
      transform: translateZ(-100px) rotateX(-10deg) rotateY(150deg); 
    } 25% {
      transform: translateZ(100px) rotateX( 190deg);
    } 50% {
      transform: translateZ(-100px) rotateY(-80deg);
    } 75% {
      transform: translateZ(100px) rotateX(-190deg);
    } 100% {
      transform: translateZ(-100px) rotateX(-10deg) rotateY(150deg);     
    }
  }
`;

const Front = styled.div`
  background-color: #b4fdfd;
`;
const Back = styled.div`
  background-color: #fcc582;
`;
const Top = styled.div`
  background-color: #fcba69;
`;
const Bottom = styled.div`
  background-color: #ffb3f2;
`;
const Left = styled.div`
  background-color: #fca382;
`;
const Right = styled.div`
  background-color: #37fbfb;
`;
