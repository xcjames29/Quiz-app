import Confetti from 'react-dom-confetti';

const config = {
    angle: "104",
    spread: "83",
    startVelocity: 40,
    elementCount: "97",
    dragFriction: "0.23",
    duration: "2230",
    stagger: "2",
    width: "16px",
    height: "16px",
    perspective: "356px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

export default function Question(props){

    let checkAnswer=(e)=>{
        // if(!isclicked){
            let isCorrect =false;
            if(props.correct===parseInt(e.target.id)) isCorrect=true;
            console.log(props.correct);
            document.querySelectorAll(".answer-box").forEach(e=>{
            })
            if(isCorrect){
                e.target.classList.add("success");
            }
            else{
                e.target.classList.add("wrong");
            }
            props.validation([isCorrect,e.target.id]);
        // }
    }
    return(
        <div className="question-container">
            <h2>Score {props.score?props.score:0}</h2>
            <h1>{props.quiz?props.quiz:"qweqweqweqweqweqweqw"}</h1>
            <div className="answer-container">
                <div className="answer-box"  onClick={checkAnswer} id="0">{props.option1}</div>
                <div className="answer-box"  onClick={checkAnswer} id="1">{props.option2}</div>
                <div className="answer-box"  onClick={checkAnswer} id="2">{props.option3}</div>
                <div className="answer-box"  onClick={checkAnswer} id="3">{props.option4}</div>
            </div>
        </div>        
    )
}