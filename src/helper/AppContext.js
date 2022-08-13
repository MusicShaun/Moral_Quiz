import React, {useState, createContext} from 'react'; 
import quizArray from '../components/quizArray';
const AppContext = createContext();

function AppProvider(props) {

    const [questionAnswer, setQuestionAnswer] = useState(new Array(quizArray.length).fill(0));
    const overallScore = questionAnswer.reduce((a,b) => a + b, 0);

    function handleAnswerEntry(arrPosition, value) {
      setQuestionAnswer(questionAnswer.map((item, index) => arrPosition === index ? item = value : item)); 
    }

    const value = {
      questionAnswer,
      handleAnswerEntry,
      overallScore
    }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );

}

export { AppContext, AppProvider };