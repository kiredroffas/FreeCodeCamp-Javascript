/*
Intermediate Algorithm Scripting: Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
    let max = Math.max(arr[0],arr[1]);
    let min = Math.min(arr[0],arr[1]);
    console.log("min: " + min + " max: " + max);
  
    let rangeSum = 0;
    for(let i = min; i <= max; i++) {
      rangeSum += i;
    }
    console.log(rangeSum);
    return rangeSum;
  }
  
sumAll([4,1]);

/*
sumAll([1, 4]) should return a number.
Passed
sumAll([1, 4]) should return 10.
Passed
sumAll([4, 1]) should return 10.
Passed
sumAll([5, 10]) should return 45.
Passed
sumAll([10, 5]) should return 45.
*/