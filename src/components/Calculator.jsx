import React, { useState } from "react";
import NumberButton from "./NumberButton";
import './Calculator.css'
import Display from "./Display";

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

    return (
        <div>
            <h1>Calculator</h1>

            <Display content={content} />

            <div clasName="container">
                <div className="number-container">
                    <NumberButton value="7" handleButtonPress={handleButtonPress} id="seven" />
                    <NumberButton value="8" handleButtonPress={handleButtonPress} id="eight" />
                    <NumberButton value="9" handleButtonPress={handleButtonPress} id="nine" />
                    <NumberButton value="4" handleButtonPress={handleButtonPress} id="four" />
                    <NumberButton value="5" handleButtonPress={handleButtonPress} id="five" />
                    <NumberButton value="6" handleButtonPress={handleButtonPress} id="six" />
                    <NumberButton value="1" handleButtonPress={handleButtonPress} id="one" />
                    <NumberButton value="2" handleButtonPress={handleButtonPress} id="two" />
                    <NumberButton value="3" handleButtonPress={handleButtonPress} id="three" />
                    <NumberButton value="0" handleButtonPress={handleButtonPress} id="zero" />
                    <NumberButton value="." handleButtonPress={handleButtonPress} id="decimal" />
                    <NumberButton value="C" handleButtonPress={handleButtonPress} id="clear" />
                </div>

                <ul>
                    <h2 id="add">+</h2>
                    <h2 id="subtract">-</h2>
                    <h2 id="multiply">x</h2>
                    <h2 id="divide">/</h2>
                </ul>

            </div>




            <h2 id="equals">=</h2>
        </div>


    )



}

export default Calculator