/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let roman = "";
    let lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    for (let i in lookup) {    //Cycle through all of lookup
        while (num - lookup[i] >= 0) {  //While we still have num to be converted to roman numeral
            roman += i;        //Add new roman numeral
            num -= lookup[i];  //Subtract the value of the roman numeral from the num value
        }
    }
    //console.log(roman);
    return roman;
}

convertToRoman(99);

/*
convertToRoman(2) should return "II".
Passed
convertToRoman(3) should return "III".
Passed
convertToRoman(4) should return "IV".
Passed
convertToRoman(5) should return "V".
Passed
convertToRoman(9) should return "IX".
Passed
convertToRoman(12) should return "XII".
Passed
convertToRoman(16) should return "XVI".
Passed
convertToRoman(29) should return "XXIX".
Passed
convertToRoman(44) should return "XLIV".
Passed
convertToRoman(45) should return "XLV"
Passed
convertToRoman(68) should return "LXVIII"
Passed
convertToRoman(83) should return "LXXXIII"
Passed
convertToRoman(97) should return "XCVII"
Passed
convertToRoman(99) should return "XCIX"
Passed
convertToRoman(400) should return "CD"
Passed
convertToRoman(500) should return "D"
Passed
convertToRoman(501) should return "DI"
Passed
convertToRoman(649) should return "DCXLIX"
Passed
convertToRoman(798) should return "DCCXCVIII"
Passed
convertToRoman(891) should return "DCCCXCI"
Passed
convertToRoman(1000) should return "M"
Passed
convertToRoman(1004) should return "MIV"
Passed
convertToRoman(1006) should return "MVI"
Passed
convertToRoman(1023) should return "MXXIII"
Passed
convertToRoman(2014) should return "MMXIV"
Passed
convertToRoman(3999) should return "MMMCMXCIX"
*/