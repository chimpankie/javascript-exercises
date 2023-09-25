const sumAll = function(num1, num2) {
    let output;
        if(num1 < 0 || num2 < 0 || num1 !== Number(num1) || num2 !== Number(num2)) {
            return "ERROR";
        }
        if (num1>num2) {
            [num1, num2] = [num2, num1];
         }
    for(let i = 0; i<=num2; i++){
            output += i;
        }
    
    

    return output
}

// Do not edit below this line
module.exports = sumAll;
