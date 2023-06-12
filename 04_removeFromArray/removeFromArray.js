const removeFromArray = function(array, values) {
    const valArray = Array.isArray(values) ? values : [values];
    const result = array.filter(function(val) { 
        return valArray.indexOf(val) === -1;
    });
    return result;
}

// Do not edit below this line
module.exports = removeFromArray;
