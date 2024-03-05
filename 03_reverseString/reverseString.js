const reverseString = function(inputString) {
    let inputStringLength = inputString.length;
    let returnString = ""
    for (let i = inputStringLength - 1; i >= 0; i--) {
         returnString += inputString[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
