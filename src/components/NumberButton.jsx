import "./Calculator.css"
function NumberButton(props){
    
    return (
        <button className="button" onClick={() => props.handleButtonPress(props.value)}>
            <h2 id={props.id}>{props.value}</h2>
        </button>
        
    )
}

export default NumberButton