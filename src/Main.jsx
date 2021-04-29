
import { useState } from 'react';
import Question from './Question';


export default function Main(props){
    let [score, setScore] = useState(0);
    let [quizNum, setQuizNum] = useState(0);
    let validate =([index,correctIndex])=>{

    }
    let question =[
        {
            question:"Who is the founter of Microsoft?",
            option: ["Steve Jobs", "Steve Rogers","Kenny Rogers","Bill Gates"],
            correct: 3
        },
        {
            question:"Who is the founter of Facebook?",
            option: ["Clark Kent","Art Solivan","Mark Zuckerburg","Mark Zeus"],
            correct: 2
        }
    ]
    return(
        <div className="container">
            <Question key={quizNum} score={score} quiz={question[quizNum].question} option1={question[quizNum].option[0]} option2={question[quizNum].option[1]} option3={question[quizNum].option[2]} option4={question[quizNum].option[3]} />
        </div>        
    )
}