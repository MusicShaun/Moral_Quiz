import React, {useState, useEffect} from 'react'
import Confetti from 'react-confetti';
import {useWindowSize} from './useWindowSize';

export default function Sonfetti()  {

  const {width, height} = useWindowSize();

  const [reducer, setReducer] = useState(200);
  useEffect(()=>{
    let myInterval = setInterval(() => {
            if (reducer > 0) {
              setReducer(reducer - 100);
            }
            if (reducer === 0) {
                  clearInterval(myInterval)
            }
        }, 1600)
        return ()=> {
            clearInterval(myInterval);
          };
    });


  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={reducer}
    />
  )
}

// https://www.npmjs.com/package/react-confetti