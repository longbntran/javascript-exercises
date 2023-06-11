const removeFromArray = function(array, values) {
    const valArray = Array.isArray(values) ? values : [values];
    // console.log(valArray);
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i]);
    //     console.log(valArray.indexOf(array[i]) === -1);
    // }
    const result = array.filter(function(val) { 
        return valArray.indexOf(val) === -1;
    });
    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
// console.log(removeFromArray([1, 2, 3, 4], 3));