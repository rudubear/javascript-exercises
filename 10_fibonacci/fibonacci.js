const fibonacci = function(num1) {
    let reqNum = Number(num1).valueOf();
    console.log(reqNum);
    if (reqNum <= 0) {
        return "OOPS";
    }
    else if (reqNum === 1 || reqNum === 2) {
        return 1;
    }
    else {
        let prevValue = 1;
        let prevPrevValue = 1;
        let retValue; 
        for(let i = 3; i <= reqNum; i ++){
            retValue = prevPrevValue + prevValue;
            prevPrevValue = prevValue;
            prevValue = retValue;
            console.log("retValue " + retValue +", prevValue" + prevValue + ", prevPrevValue", + prevPrevValue);
        }
        return retValue;
    }
    return 0;
};

// Do not edit below this line
module.exports = fibonacci;
