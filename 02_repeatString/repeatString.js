const repeatString = function(str, num) {
    let returnstring = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            returnstring += str
        }
    }
    else {
        returnstring = "ERROR";
    }


    return returnstring;
};

// Do not edit below this line
module.exports = repeatString;
