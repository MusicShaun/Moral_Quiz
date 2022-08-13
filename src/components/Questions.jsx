import {device} from './device';
import styled from 'styled-components';
import quizArray from './quizArray';


export default function Questions(props) {

  return (<>
  <QuestionsDiv>
     <QHeader>{props.counter !== quizArray.length ? `Q${props.counter + 1}` : null}</QHeader>
      <PHeader>{props.quizQuestion[props.counter]}</PHeader>
  </QuestionsDiv>

  </>)
}


const QuestionsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 25%;
  width: 100%;
  text-align: center;
    @media ${device.mobile} {
      justify-content: flex-start;
    }
`;
const QHeader = styled.h1`
  font-size: 2rem;
  padding-bottom: 0.5rem;
  margin: 0;
  @media ${device.desktop} {
      font-size: 3rem;
    }
`;
const PHeader = styled.p`
  font-size: 1.6rem;
  
  @media ${device.mobile} {
    margin: 0;
    font-size: 1.2rem;
  }
  @media ${device.desktop} {
      font-size: 2rem;
    }
`;

