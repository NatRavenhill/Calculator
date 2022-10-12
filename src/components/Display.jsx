import './Display.css';

function Display(props) {
    return (
        <div id="display">
            <h2>{props.content}</h2>
        </div>
    )
}

export default Display;