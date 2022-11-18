var  inputStr = "";
var inputInts = [];
var op = "";
var sum = 0;

const getOperation = (sign) => {
    switch(sign) {
        case '+':
            return (a,b) => a + b;
        case '-':
            return (a,b) => a - b;
        case '*':
            return (a,b) => a * b;
        case '/':
            return (a,b) => a / b;
        default:
            return null;
    }
    
}

const ParseInput = (input) => {
    //base case
    if (input.length === 0) {
        inputInts.push(parseInt(inputStr));
        sum = inputInts.reduce(getOperation(op))
        return sum;
    }

    if(parseInt(input[0])) {
        inputStr += input[0];
    } else {
        inputInts.push(parseInt(inputStr));
        inputStr = "";
        op = input[0];
    }

    return ParseInput(input.substring(1));
}



export default ParseInput;