const convertToCelsius = function(temp) {
    temp = (temp-32) * (5/9);
    console.log(temp);
    temp = Math.round(temp * 10)/10;
    return temp;
};

const convertToFahrenheit = function(temp) {
    temp = Math.round((temp * 1.8 + 32)*10)/10;
    return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
