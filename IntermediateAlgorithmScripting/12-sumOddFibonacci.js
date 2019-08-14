/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let currentFibNum = 0;
    let prevNum = 0;
    let prevPrevNum = 1;
    let oddFibSum = 0;

    while (currentFibNum < num) {
        currentFibNum = prevNum + prevPrevNum;  //Get the next Fib. number by adding prev two
        if (currentFibNum <= num) {    //If new Fib. number is less then or equal to threshold
            if (currentFibNum % 2 !== 0) {  //And odd
                oddFibSum += currentFibNum;  //Add to running sum
            }
        }
        prevPrevNum = prevNum;  //Set the next two previous Fib. numbers
        prevNum = currentFibNum;
    }

    console.log("Final odd sum: " + oddFibSum);
    return oddFibSum;
}

sumFibs(75025);

/*
sumFibs(1) should return a number.
Passed
sumFibs(1000) should return 1785.
Passed
sumFibs(4000000) should return 4613732.
Passed
sumFibs(4) should return 5.
Passed
sumFibs(75024) should return 60696.
Passed
sumFibs(75025) should return 135721.
*/