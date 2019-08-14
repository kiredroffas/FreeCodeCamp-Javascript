/*
Intermediate Algorithm Scripting: Sum All Primes
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

//Modulo Implementation:
function sumPrimes(num) {
    let isPrime = function (n) {
        if (n < 2) {
            return false;
        }
        //An integer is prime if it is not divisible by any prime less than or equal to its square root
        var q = Math.floor(Math.sqrt(n));
        for (var i = 2; i <= q; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    let primeSum = 0;

    for (let i = 0; i <= num; i++) {
        if (isPrime(i) === true) {
            primeSum += i;
        }
    }
    return primeSum;
}

//Sieve of Eratosthenes Implementation (better efficiency)
function sumPrimes(num) {
    let SoE = function (num) {
        let array = [];
        let threshold = Math.sqrt(num);
        let primeList = [];

        //Make an array from 2 to (n - 1)
        for (let i = 0; i <= num; i++) {
            array.push(true);
        }
        //Set multiples of primes starting from 2, 3, 5... in array to false (not prime)
        for (let i = 2; i <= threshold; i++) {
            if (array[i]) {
                for (let j = i * i; j <= num; j += i) {
                    array[j] = false;
                }
            }
        }
        //Go through array of numbers, pushing a value to the primeList only if it is marked true (prime)
        for (let i = 2; i <= num; i++) {
            if (array[i]) {
                primeList.push(i);
            }
        }
        return primeList;
    };

    let primes = SoE(num);
    let primeSum = 0;
    for (let i = 0; i < primes.length; i++) {  //Sum up the list of primes
        primeSum += primes[i];
    }

    console.log("Sum of primes: " + primeSum);
    return primeSum;
}

sumPrimes(977);

/*
sumPrimes(10) should return a number.
Passed
sumPrimes(10) should return 17.
Passed
sumPrimes(977) should return 73156.
*/