const removeFromArray = function(array1, ...args) {
    return array1.filter(x => !args.includes(x))

 //   The condition for filtering is defined using an arrow function: x => !args.includes(x). 
 //   This arrow function takes an element x from the array and checks if it is not included in the args array.
 //   The args array contains all the additional arguments passed to the function. In this case, the args array 
 //   will contain the values 3 and 2 because they were passed as additional arguments when calling the function.
};

// Do not edit below this line
module.exports = removeFromArray;
