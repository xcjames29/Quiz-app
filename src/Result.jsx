import { useHistory } from "react-router-dom";
import ResultTable from "./ResultTable";
export default function Result() {
    let history = useHistory();
    let data = history.location.state;
    console.log(data);
    return (
        <div className="result-container">
            <h1 className="sample">RESULT!</h1>
            <h1>Score: {data.score}</h1>
            <div className="resultTable">
                <div className="box">
                    <div className="box1">
                        <h3>Question</h3>
                    </div>
                    <div className="box2">
                        <h3>Correct Answer</h3>
                    </div>
                    <div className="box3">
                        <h3>User Answer</h3>
                    </div>
                </div>
                {data.question.map((elem, index) => {
                    return <ResultTable question={elem.question} option={elem.option} correct={elem.correct} userAnswer={data.answers[index]} />
                })}
            </div>

        </div>

    )
}