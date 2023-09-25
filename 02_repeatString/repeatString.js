const repeatString = function(string, num) {
    if ((Math.sign(num))===-1){
        string = 'ERROR';
    } else {
    string = string.repeat(num); 
    } 
    return string;
    
};

// Do not edit below this line
module.exports = repeatString;
