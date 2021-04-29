export default function ResultTable(props){
    
    return(
        <div className="box">
            <div className="box1">
                {props.question}
            </div>
            <div className="box2">
                {props.option[props.correct]}
            </div>
            <div className={props.correct!==props.userAnswer?"wrong box3":"success box3"}>
                {props.option[props.userAnswer]}
            </div>
        </div>
    )
}