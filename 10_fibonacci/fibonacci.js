const fibonacci = function(num) {
    switch (typeof num) {
        case 'number':
            if (num < 0) {
                return "OOPS";
            }
            if (num === 0) {
                return 0;
            }
            if (num === 1) {
                return 1;
            }
            return fibonacci(num - 1) + fibonacci(num - 2);
            break;
        case 'string':
            let alternative = parseInt(num, 10);
            console.log(alternative);
            if (isNaN(alternative)) {
                return "OOPS";
            }
            if (alternative < 0) {
                return "OOPS";
            }
            if (alternative === 0) {
                return 0;
            }
            if (alternative === 1) {
                return 1;
            }
            return fibonacci(alternative - 1) + fibonacci(alternative - 2);
            break;
        default: "OOPS";
        break;
    }
};
// Do not edit below this line
module.exports = fibonacci;
