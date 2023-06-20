const findTheOldest = function() {
    const theOldestArray = Array.from(arguments).flat();
    let theOldest = theOldestArray.reduce ((obj, person) => {
        const isObjectEmpty = (obj) => {
            return Object.keys(obj).length === 0
        }
        if (isObjectEmpty(obj)) { 
            return person;
        }
        else {
            if (!person.yearOfDeath) { person.yearOfDeath = new Date().getFullYear(); }
            if (!obj.yearOfDeath) { obj.yearOfDeath = new Date().getFullYear();}
            let personYears = person.yearOfDeath - person.yearOfBirth;
            let objYears = obj.yearOfDeath -obj.yearOfBirth;
            return personYears>= objYears ? person : obj;
        } 
    }, {});
    return theOldest;
};
// Do not edit below this line
module.exports = findTheOldest;
