import "./Calculator.css"

function InputButton(props){
    
    return (
        <button className="button" onClick={() => props.handleButtonPress(props.value)}>
            <h2 id={props.id}>{props.value}</h2>
        </button>
        
    )
}

export default InputButton