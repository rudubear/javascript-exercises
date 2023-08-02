const repeatString = function(str, totalReps) {
    let repeatedString = "";
    if (Number.isInteger(totalReps) && totalReps >= 0){
        for(rep = 0; rep < totalReps; rep++){
            repeatedString += String(str);
        }
        return repeatedString;
    }
    else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
