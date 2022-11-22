import React, { useState } from "react";
import InputButton from "./InputButton";
import './Calculator.css'
import Display from "./Display";
import ParseInput from "../Parser";

function Calculator() {
    const [content, setContent] = useState("0") 

    const handleButtonPress = (value) => {
        if (value === 'C') {
            setContent("0")
        } else if (content === '0') {
            setContent(value)
        } else {
            setContent(prevContent => prevContent + value)
        }
    }

    const handleEquals = () => {
        console.log(content)
        setContent(ParseInput(content));
    } 

    return (
        <div>
            <h1>Calculator</h1>

            <Display content={content} />

            <div id="main-container">
                <div id="number-container">
                    <InputButton value="7" handleButtonPress={handleButtonPress} id="seven" />
                    <InputButton value="8" handleButtonPress={handleButtonPress} id="eight" />
                    <InputButton value="9" handleButtonPress={handleButtonPress} id="nine" />
                    <InputButton value="4" handleButtonPress={handleButtonPress} id="four" />
                    <InputButton value="5" handleButtonPress={handleButtonPress} id="five" />
                    <InputButton value="6" handleButtonPress={handleButtonPress} id="six" />
                    <InputButton value="1" handleButtonPress={handleButtonPress} id="one" />
                    <InputButton value="2" handleButtonPress={handleButtonPress} id="two" />
                    <InputButton value="3" handleButtonPress={handleButtonPress} id="three" />
                    <InputButton value="0" handleButtonPress={handleButtonPress} id="zero" />
                    <InputButton value="." handleButtonPress={handleButtonPress} id="decimal" />
                    <InputButton value="C" handleButtonPress={handleButtonPress} id="clear" />
                </div>

                <div id="operations-container">
                    <InputButton value="+" handleButtonPress={handleButtonPress} id="add" />
                    <InputButton value="-" handleButtonPress={handleButtonPress} id="subtract"/>
                    <InputButton value="*" handleButtonPress={handleButtonPress} id="multiply"/>
                    <InputButton value="/" handleButtonPress={handleButtonPress} id="divide"/>
                </div>
            </div>

            <div id="equals-container">
                <InputButton id="equals-button" value="=" handleButtonPress={handleEquals}/>
            </div>
        </div>


    )



}

export default Calculator