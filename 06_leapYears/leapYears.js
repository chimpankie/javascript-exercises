const leapYears = function(year) {
    if (!(year % 100 === 0) && year % 4 === 0){
        console.log("If 1", year);
        return true;
    } else if (year % 100 === 0 && year % 400 === 0){
        console.log("If 2", year);
        return true;

    }else {
        console.log("else", year);   
        return false;
    }

    }

// Do not edit below this line
module.exports = leapYears;
