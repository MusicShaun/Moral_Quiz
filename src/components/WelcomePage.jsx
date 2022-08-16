import styled from 'styled-components';
import {device} from './device';

export default function ClosingPage(props) {

  return (<> 
  <LastScreenWrapper>
    <Result>Moral Quiz
    </Result>
    <RetryButton onClick={props.beginQuiz}>Begin!</RetryButton>
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

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink ;
  font-size: 200%;
  font-weight: bold;
  height: 50%;
  width: 80%;
  text-align: center;
  @media ${device.mobile} {
    font-size: 3.4rem;
  }
  @media ${device.desktop} {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;
const RetryButton = styled.button`
  padding: 1rem;
  width: 80%;
  height: 50%;
  font-size: 3rem;
  border-radius: 10px;
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


