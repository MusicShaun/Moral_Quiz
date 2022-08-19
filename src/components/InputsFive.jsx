
import { useContext} from 'react';
import {AppContext} from '../helper/AppContext';
import styled from 'styled-components';
import {device} from '../helper/device';
import quizArray from './quizArray';



export default function AnswerLog(props){

  const context = useContext(AppContext)
  const { counter, truthyArray, setTruthyArray } = props; 
 


  // RESETS array every click then assigns one true
  function handleChecking(truthyPos){
    setTruthyArray(truthyArray.map((item, index) => truthyPos === index ? item = !item : item ? item = !item : item = false))
  }

  //Send info to AppContext
  function handleBoxCheck(position, score, truthyPos ) {
    context.handleAnswerEntry(position, score);
    handleChecking(truthyPos);
  }

  return (<>
  {counter !== quizArray.length &&
    <AnswerLogDiv>
      <AnswerP>Less likely</AnswerP>

      <div key={0}> 
        <Input type='checkbox' id='Q1' 
          onChange={() => handleBoxCheck(counter,1, 0)}
          checked={truthyArray[0]}
          disabled={counter === quizArray.length}
        />
        <Label key='01' htmlFor='Q1'></Label>     
      </div>


      <div key={1}> 
        <Input type='checkbox' id='Q2' 
          onChange={() => handleBoxCheck(counter,2, 1)}
          checked={truthyArray[1]}
          disabled={counter === quizArray.length}
        />
        <Label key='02' htmlFor='Q2'></Label>     
      </div>

      <div key={2}> 
        <Input type='checkbox' id='Q3' 
          onChange={() => handleBoxCheck(counter,3, 2)}
          checked={truthyArray[2]}
          disabled={counter === quizArray.length}
        />
        <Label key='02' htmlFor='Q3'></Label>     
      </div>

      <div key={3}> 
        <Input type='checkbox' id='Q4' 
          onChange={() => handleBoxCheck(counter,4, 3)}
          checked={truthyArray[3]}
          disabled={counter === quizArray.length}
        />
        <Label key='04' htmlFor='Q4'></Label>     
      </div>

      <div key={4}> 
        <Input  type='checkbox' id='Q5' 
          onChange={() => handleBoxCheck(counter,5, 4)}
          checked={truthyArray[4]}
          disabled={counter === quizArray.length}
        />
        <Label key='05' htmlFor='Q5'></Label>     
      </div>


      <AnswerP>More likely</AnswerP>
    </AnswerLogDiv>
  }
  </>)
}


const AnswerLogDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 250px;

  @media ${device.mobile} {
    flex-direction: column;
    max-height: 500px;
  }
`; 

const Input = styled.input.attrs({
  type: 'checkbox'
})`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 30px; 
  border-radius: 50%;
  visibility: hidden;

  &:checked + label {
    background-color: #ccc;
    border: 1px solid #ccc;
  }
  &:checked + label:after{
    opacity: 1;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid black;

  &:after {
    border: 2.5px solid #66bb6a;
    background-color: #66bb6a;
    content: "";
    height: 7px;
    width: 7px;
    left: 6px;
    top: 6px;
    border-radius: 50%;
    transform: rotate(-45deg);
    opacity: 0; 
    @media ${device.desktop} {
    width: 20px;
    height: 20px;

    }
  }
  @media ${device.mobile} {
    margin: 5px;
  }
  @media ${device.desktop} {
    width: 50px;
    height: 50px;
  }
`; 
const AnswerP = styled.p`
  font-size: 1.2rem;

  @media ${device.desktop} {
      font-size: 2rem;
    }
`;