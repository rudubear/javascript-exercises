const sumAll = function(num1, num2) {
    if ((typeof num1 === "number" && typeof num2 === "number") &&
        (Number.isInteger(num1) && Number.isInteger(num2)) && 
        (num1 > 0 && num2 > 0)) {
            if (num1 === num2) {
                return num1 + num2;
            }
            else {
                let smallNumber = (num2 < num1) ? num2 : num1;
                let largeNumber = (num2 < num1) ? num1 : num2;
                let sum = 0;
                for(let i = smallNumber; i <= largeNumber; i++) {
                    sum += i;
                }
                return sum;
            } 
    } else 
        return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
