import { useState } from "react";
import Confetti from 'react-confetti';
export default function Question(props){
    let [confetti,setConfetti] = useState(false);
    let checkAnswer=(e)=>{
            let isCorrect =false;
            if(props.correct===parseInt(e.target.id)) isCorrect=true;
            console.log(props.correct);
            document.querySelectorAll(".answer-box").forEach(e=>{
            })
            if(isCorrect){
                setConfetti(true);
                e.target.classList.add("success");
            }
            else{
                e.target.classList.add("wrong");
            }
            props.validation([isCorrect,e.target.id]);
    }
    return(
        <div className="question-container">
            <h2>Score {props.score?props.score:0}</h2>
            <h1>{props.quiz?props.quiz:"qweqweqweqweqweqweqw"}</h1>
            <div className="answer-container">
               {confetti && 
               <Confetti />
                }
                <div className="answer-box"  onClick={checkAnswer} id="0">{props.option1}</div>
                <div className="answer-box"  onClick={checkAnswer} id="1">{props.option2}</div>
                <div className="answer-box"  onClick={checkAnswer} id="2">{props.option3}</div>
                <div className="answer-box"  onClick={checkAnswer} id="3">{props.option4}</div>
            </div>
        </div>        
    )
}