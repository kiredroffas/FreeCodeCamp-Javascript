/*
Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range 
between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. 
The answer here would be 6.
*/

function smallestCommons(arr) {
    let smallNum = 0;
    let largeNum = 0;

    if (arr[0] > arr[1]) {  //Account for provided range not being in numeric order
        largeNum = arr[0];
        smallNum = arr[1];
    }
    else {
        largeNum = arr[1];
        smallNum = arr[0];
    }

    let SCM = 0;            //Smallest Common Multiple
    let testNum = 0;        //Number to be tested to be divisable
    let divisableCount = 0; //Count of testNums that are evenly divisable
    let multiplier = 1;

    while (1) {
        testNum = smallNum * largeNum * multiplier;  //Get new test number
        divisableCount = 0;  //Reset divisable count
        for (let i = smallNum; i <= largeNum; i++) { //Check if testNum can be evenly divided by all sequential numbers in range
            if (testNum % i === 0) { //If can be divided evenly, increment count
                divisableCount++;
            }
        }

        if (divisableCount === largeNum - smallNum + 1) {  //If count equals the number of divisors in range
            SCM = testNum;  //We've found our smallest common multiple!
            break;
        }
        else {
            multiplier++;  //Otherwise we need to test the next possible multiple
        }
    }

    //console.log("SCM: " + SCM);
    return SCM;
}

smallestCommons([1, 13]);

/*
smallestCommons([1, 5]) should return a number.
Passed
smallestCommons([1, 5]) should return 60.
Passed
smallestCommons([5, 1]) should return 60.
Passed
smallestCommons([2, 10]) should return 2520.
Passed
smallestCommons([1, 13]) should return 360360.
Passed
smallestCommons([23, 18]) should return 6056820.
*/