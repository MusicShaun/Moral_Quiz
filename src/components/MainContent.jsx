import Questions from "./Questions"
import InputsFive from "./InputsFive"
import styled from 'styled-components';
import {device} from './device';
import quizArray from "./quizArray";



export default function MainContent(props) {

  return (<>


      <MainContentWrapper>
        <Questions quizQuestion={props.quizQuestion} counter={props.counter}/>
        <InputsFive  counter={props.counter} />  

        <ButtonWrapper>
          <Button onClick={props.handleBackButton} disabled={props.counter === 0}>Back</Button>
          <Button onClick={props.handleNextButton} disabled={props.counter === quizArray.length}>Next</Button>
        </ButtonWrapper>
      </MainContentWrapper>

  </>)
}


const MainContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 95%;

`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
    @media ${device.mobile} {
      align-items: flex-end;
    }
`;

const Button = styled.button`
  margin: 2rem;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.5rem;
  background-color: transparent ;
  border: 1px solid grey;

  &:hover:enabled {
    background-color: rgb(249, 222, 86);
    cursor: pointer;
    border: 1px solid rgb(190, 249, 154);
    box-shadow: 5px 5px 5px rgb(177, 172, 172);
  }
  @media ${device.mobile} {
      margin: 0 1rem;
    }
  @media ${device.desktop} {
    padding: 3rem;
  }
`;