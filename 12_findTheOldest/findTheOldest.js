const findTheOldest = function(peopleWithDates) {
    //console.log(peopleWithDates);
    const currentYear = (new Date()).getFullYear();
    //console.log(currentYear);
    const peopleWithAges = peopleWithDates.map(
        ({name, yearOfBirth, yearOfDeath}) => 
        ({
            name: name.valueOf(), 
            age: yearOfDeath ? yearOfDeath - yearOfBirth : currentYear - yearOfBirth,
        }));
    console.log(peopleWithAges);

    let agesSorted = peopleWithAges.sort(function(a, b) {
        if (a.age > b.age) {
            return -1;
        }
        if (a.age < b.age) {
            return 1;
        }
        return 0;
    });
    
    return agesSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
