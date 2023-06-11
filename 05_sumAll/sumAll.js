const sumAll = function(firstNum, secondNum) {
    if (typeof(firstNum) !== 'number' || typeof(secondNum) !== 'number') {
        return "ERROR";
    }
    else {
        if ((firstNum<0) || secondNum<0) {
            return "ERROR";
        }
        else {
            let max = Math.max(firstNum, secondNum);
            let min = Math.min(firstNum, secondNum);
            let result = 0;
            for (let i = min; i < max+1; i++) {
                result = result+ i;
            };
            return result;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
// console.log(sumAll(1,4));