import quizArray from './quizArray';
import {useState, useContext} from 'react';
import {AppContext} from '../helper/AppContext.js';
import WelcomePage from './WelcomePage';
import MainContent from './MainContent';
import ClosingPage from './ClosingPage';
import styled from 'styled-components';
import {device} from '../helper/device';


export default function NavButtons() {

  const context = useContext(AppContext)
  const [quizQuestion] = useState([...quizArray]);
  const [counter , setCounter] = useState(0);
  const [welcomePage, setWelcomePage] = useState(false)
  let total = 0; 
  total = context.overallScore; 
  

  function handleNextButton() {
    setCounter(prevCounter => prevCounter + 1);
  }
  function handleBackButton() {
    setCounter(prevCounter => prevCounter - 1);
  }
  function handleReset() {
    setCounter(0)
  }
  function beginQuiz(){
    setWelcomePage(true)
  }

  console.log(`This is page ${counter + 1} (counter)`)
  console.log(`Running total  ${total}(grandTotal)`)
  console.log(`total ${context.overallScore}`)


  return ( <>

    <NavButtonWrapper>
      {!welcomePage && 
              <WelcomePage beginQuiz={beginQuiz} />}

      {(counter !== (quizArray.length) && welcomePage) && 
              <MainContent counter={counter} quizQuestion={quizQuestion} 
              handleBackButton={handleBackButton} handleNextButton={handleNextButton}/>}   


      {(counter === (quizArray.length) && welcomePage) && 
              <ClosingPage total={total} handleReset={handleReset} /> }
    </NavButtonWrapper>
  </>)
}


const NavButtonWrapper = styled.div`
  width: 80%;
  height: 80%;
  max-width: 1000px;
  max-height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: white;
  z-index: 3;

  @media ${device.mobile} {
    width: 90%;
    height: 92%;
  }
`;

