const sumAll = function(firstNum, secondNum) {
    if (typeof(firstNum) != 'number' || typeof(secondNum) != 'number') {
        return "ERROR";
    }
    if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }

    let beginNum = firstNum;
    let endNum = secondNum;

    if (firstNum > secondNum) {
        endNum = firstNum;
        beginNum = secondNum;
    }
    let sum = 0;
    for (i=beginNum; i<=endNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
