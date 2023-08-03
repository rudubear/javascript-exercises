const removeFromArray = function(ary, ...args) {
    const myArray = Array.from(ary);
    console.log(myArray);
    for(const arg of Array.from(args)) {
        console.log(arg);      
        for(let i = 0; i < myArray.length; i++) {
            if (myArray[i] === arg) {
                myArray.splice(i,1);
                console.log(myArray);
            } 
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
