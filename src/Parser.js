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
  input = removeDuplicateOps(input);
  var result = parseInputHelper(input);
  sum = 0;
  inputInts = [];
  inputStr = "";
  return result;
} 

function removeDuplicateOps(input){
    //match duplicate ops
    var opsRegex = /[+\-*]{2,}/g;
    var plusMinus = /[+-]{2,}/g;
    var matches = input.match(opsRegex);
    if (matches) {
        matches.forEach(element => {
            if(matches.every(m => m.match(plusMinus))) {
                input = input.replace(element, element.substring(element.length - 1));
            }
 
        });
    }
    return input;
}

const parseInputHelper = (input) => {
    //base case
    if (input.length === 0) {
        inputInts.push(parseFloat(checkSign(inputStr)));
        doSum();
        return sum;
    }

    if(parseFloat(input[0]) || input[0] === '.' || input[0] === '0') {
        inputStr += input[0];   
    } else {
        if (op.length > 0 && !parseInt(inputStr) 
            && (input[0] === '-' || input[0] === '+')){
            inputStr += input[0]
        } else {
            inputInts.push(parseFloat(checkSign(inputStr)));
            inputStr = "";
    
            // do intermediary op
            if (op.length > 0 ){
                doSum()
            } 
            
            op = input[0];
        } 
        
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

function checkSign(input){
    var number = input.match(/[0-9]+(.[0-9]+)*/)[0];

    //count +es
    var plusMatches = input.match(/\+/);
    var plusCount = plusMatches? plusMatches.length : 0;
    var minusMatches = input.match(/-/);
    var minusCount = minusMatches ? minusMatches.length : 0;
        
    if(minusCount > plusCount) {
            return -number;
    }
    
    return number;
}

export default ParseInput;