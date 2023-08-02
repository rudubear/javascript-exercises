const reverseString = function(str) {
    let strAry = Array.from(str);
    let reversedAry = [];
    for(const letter of strAry) {
        reversedAry.unshift(letter);
    }
    let reversedStr = reversedAry.join("");
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
