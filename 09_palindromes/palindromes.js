const palindromes = function (string) {
    let originalString = string.split('');
    let reverseString = originalString.slice().reverse();
    originalString = originalString.toString('');
    reverseString = reverseString.toString('');
    originalString = originalString.toLowerCase().replaceAll("!", "").replaceAll(",","").replaceAll(".","").replaceAll(" ", "");
    reverseString = reverseString.toLowerCase().replaceAll("!", "").replaceAll(",","").replaceAll(".","").replaceAll(" ", "");
    console.log(originalString, reverseString);
    if (originalString === reverseString){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
