const sumAll = function(startNumber, endNumber) {
    sum = 0;
    if (startNumber < 0 || endNumber < 0) {
        return 'ERROR'
    }
    else if (typeof(startNumber) === typeof("hey") || typeof(endNumber) === typeof("hey")) {
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
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
