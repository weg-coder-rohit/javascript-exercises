const removeFromArray = function(inputArray, itemToRemove) {
    let inputArrayLength = inputArray.length;
    let newArrayToReturn = [];

    inputArray.forEach(item => {
        if(item != itemToRemove) {
            newArrayToReturn.push(item);
        }
    });
    return newArrayToReturn;

};

// Do not edit below this line
module.exports = removeFromArray;
