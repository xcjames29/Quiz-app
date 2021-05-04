export default function ResultTable(props){
    
    return(
        <div className="box">
            <div className="box1">
                {props.question}
            </div>
            <div className="box2">
                {props.option[props.correct]}
            </div>
            <div className={props.correct===parseInt(props.userAnswer)?"success box3":"wrong box3"}>
                {props.option[props.userAnswer]?props.option[props.userAnswer]:""}
            </div>
        </div>
    )
}