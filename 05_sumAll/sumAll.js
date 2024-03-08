const sumAll = function(startNumber, endNumber) {
    sum = 0;
    if (typeof(startNumber) === typeof(2) && typeof(endNumber) === typeof(2)){
        if (startNumber < 0 || endNumber < 0) {
            return 'ERROR'
        }
        else if (endNumber > startNumber) {
            for (let i = startNumber; i <= endNumber; i++) {
                sum += i;
            }
        }
        else {
            for (let i = endNumber; i <= startNumber; i++) {
                sum += i;
            }
        }
    }
    else {
        return 'ERROR'
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
