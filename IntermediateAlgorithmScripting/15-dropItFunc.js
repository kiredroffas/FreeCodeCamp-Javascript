/*
Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns 
true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    // Drop them elements.
    let shiftCount = 0;   //Number of values to be dropped from front of arr

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === false) { //If func condition fails, have to remove element
            shiftCount++;  //Increment number of element to remove
        }
        else { //Else we've found the true condition
            break;
        }
    }

    for (let i = 0; i < shiftCount; i++) { //Remove the number of failed test elements
        arr.shift();
    }

    //console.log(arr);
    return (arr);
}

//More concise solution
function dropElements(arr, func) {
    while (!func(arr[0]) && arr.length > 0) {
        arr.shift();
    }
    return arr;
}

dropElements([0, 1, 0, 1], function (n) { return n === 1; });

/*
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
Passed
dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
Passed
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
Passed
dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
Passed
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
Passed
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
*/