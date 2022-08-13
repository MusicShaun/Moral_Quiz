import Confetti from "../hooks/Confetti"
import styled from 'styled-components';
import {device} from './device';
import quizArray from "./quizArray";



export default function ClosingPage(props) {

  let total = props.total;
  let oneScore = quizArray.length; 
  const twoScore = oneScore*2;
  const threeScore = oneScore*3; 
  const fourScore = oneScore*4; 

  return (<> 
  <LastScreenWrapper>
    <Confetti />
    <ScoreCard>Your overall score is: {total}</ScoreCard>   
    <Result>
      {total < oneScore 
          && <h2>You are failure to humanity.</h2>}

      {(total >= oneScore && total < twoScore) 
          && <h2>You're the type of person who doesn't put their trolleys away</h2>}

      {(total >= twoScore && total < threeScore)  
          && <h2>You are Lawful Evil</h2>}
          
      {(total >= threeScore && total < fourScore) 
          && <h2>Some choices are hard to make. Better safe than sorry.</h2>}

      {total >= fourScore 
          && <h2>Please attend my wedding.</h2>}
    </Result>
    <RetryButton onClick={props.handleReset}>Retry</RetryButton>
  </LastScreenWrapper>
</>)
}


const LastScreenWrapper = styled.section`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
`;

const ScoreCard = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  font-size: 3rem;
  height: 33%;
  width: 100%;

  @media ${device.mobile} {
    font-size: 2.4rem;
    width: 78%;
  }
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink ;
  font-size: 1.8rem;
  height: 33%;
  width: 80%;
  text-align: center;
  @media ${device.mobile} {
    font-size: 1.4rem;
    width: 78%;
  }
  @media ${device.desktop} {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;
const RetryButton = styled.button`
  padding: 1rem;
  width: 150px;
  height: 150px;
  font-size: 2rem;
  border-radius: 50%;
  border: 1px solid grey;
  cursor: pointer;
  background-color: rgb(255, 254, 242);

    &:hover:enabled {
    background-color: rgb(249, 222, 86);
    border: 1px solid rgb(190, 249, 154);
    box-shadow: 5px 5px 5px rgb(177, 172, 172);
    }
  @media ${device.mobile} {
  align-items: flex-end;
  }
`;


