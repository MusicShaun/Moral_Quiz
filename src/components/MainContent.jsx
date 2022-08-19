import Questions from "./Questions"
import InputsFive from "./InputsFive"
import styled from 'styled-components';
import {device} from '../helper/device';
import quizArray from "./quizArray";
import { useState, useEffect } from 'react'; 


export default function MainContent(props) {

  const {counter } = props;
  const [toProceed, setToProceed] = useState(false); 
  const [truthyArray, setTruthyArray] = useState(new Array(5).fill(false)); 

  // RESETS CHECK ARRAY WHEN BACK OR NEXT IS CLICKED
  useEffect(()  => {
    setTruthyArray(check => check.map((item) => item = false));
  }, [counter]);

  useEffect(() => {
    const proceed = truthyArray.includes(true) 
    setToProceed(proceed)
  }, [truthyArray]) ;


  return (<>


      <MainContentWrapper>
      <Container>

        <Questions quizQuestion={props.quizQuestion} 
                    counter={props.counter}
                    />
        <InputsFive counter={props.counter} 
                    truthyArray={truthyArray}
                    setTruthyArray={setTruthyArray}
        />  

        <ButtonWrapper>
          <Button onClick={props.handleBackButton} disabled={props.counter === 0}>Back</Button>
          <Button 
              onClick={props.handleNextButton} 
              disabled={props.counter === quizArray.length || !toProceed}
              >Next</Button>
        </ButtonWrapper>

      </Container>
      </MainContentWrapper>

  </>)
}


const MainContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 95%;
  max-height: 1000px;
  max-width: 1000px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  border: 1px solid black;

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