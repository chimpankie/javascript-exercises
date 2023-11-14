const fibonacci = function(fibNo) {
    if(Math.sign(fibNo) === 1){
    let lastNumber = 0;
    let nextNumber = 1;
    let fibNumber = fibNo;
    for(let i = 1; i < fibNumber; i++){
        let currentNumber = nextNumber;
        nextNumber += lastNumber
        lastNumber = currentNumber;
    }

    return nextNumber;
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
