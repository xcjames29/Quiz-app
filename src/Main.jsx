
import { useState } from 'react';
import Question from './Question';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
let interval;
export default function Main(props) {
    let question = [
        {
            question: "Who is the founder of Microsoft?",
            option: ["Steve Jobs", "Steve Rogers", "Kenny Rogers", "Bill Gates"],
            correct: 3
        },
        {
            question: "Who is the founder of Facebook?",
            option: ["Clark Kent", "Art Solivan", "Mark Zuckerburg", "Mark Zeus"],
            correct: 2
        },
        {
            question: "Who is your father?",
            option: ["Darth Vader", "Baby Shark", "R2D2", "BB8"],
            correct: 0
        }
    ]
    let history = useHistory();
    let [score, setScore] = useState(0);    
    let [quizNum, setQuizNum] = useState(0);
    let [userAnswer,setUserAnswer] = useState([]);
    let validate = async ([isCorrect,index]) => {
        clearInterval(interval);
        if (isCorrect) {
            setScore(score + 10);
        }

        let newAns = [...userAnswer];
        newAns.push(index);
        setUserAnswer(newAns);
        if (question.length - 1 > quizNum) {
            setTimeout(() => {
                setQuizNum(quizNum + 1);
               
            }, 3000);
        }
        else {
            setTimeout(()=>
            history.push({
                pathname: '/result',
                state: {  // location state
                  score: isCorrect?score+10:score,
                  question: question,
                  answers: newAns
                },
              }),3000); 
        }
        setWidth(100);
    }
    let noAnswer = ()=>{
        if(width<=0){
            validate([false,5]);
        }
    }
    let [width,setWidth] = useState(100);
    
    useEffect(()=>{
       interval = setInterval(() => {
            if(width>=0){
             setWidth(width--)
            }
            else{
                clearInterval(interval);
                noAnswer();
            }
        }, 30);
        return ()=> clearInterval(interval);
    }
    // eslint-disable-next-line
    ,[quizNum])

    return (
        <div className="container">
            <Question key={quizNum} validation={validate} correct={question[quizNum].correct} score={score} quiz={question[quizNum].question} option1={question[quizNum].option[0]} option2={question[quizNum].option[1]} option3={question[quizNum].option[2]} option4={question[quizNum].option[3]} />
            <div className="timer-container">
                <progress className="clock" id="health" value={width} max="100" onChange={noAnswer}></progress>
            </div>
        </div>
    )
}