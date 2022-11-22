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
  var result = parseInputHelper(input);
  sum = 0;
  inputInts = [];
  inputStr = "";
  return result;
} 

const parseInputHelper = (input) => {
    //base case
    if (input.length === 0) {
        inputInts.push(parseFloat(inputStr));
        doSum();
        return sum;
    }

    if(parseFloat(input[0]) || input[0] === '.' || input[0] === '0') {
        inputStr += input[0];   
    } else {
        inputInts.push(parseFloat(inputStr));
        inputStr = "";

        // do intermediry op
        if (op.length > 0 ){
            doSum()
        } 
        
        op = input[0];
        
    }
    return parseInputHelper(input.substring(1));
}

function doSum(){
    // if op is not empty at this point, sum everything
    if (op.length > 0){

        var operation = getOperation(op);
        if(operation === null){
            console.log("oops");
        }
        sum = inputInts.reduce(getOperation(op))

        inputInts = [sum];
        op = "";
    }
}


export default ParseInput;