/*
JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following 
are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to 
validate or reject the US phone number based on any combination of the formats provided above. The area code is required. 
If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US 
phone number; otherwise return false.
*/

function telephoneCheck(str) {
    let regex = /[0123456789()]/, parenIndex = [], numStr = '';

    if (str[0] === '-') {  //Checks for edge case when '-' is at beginning of phone number
        return false;
    }

    for (let i = 0; i < str.length; i++) {  //Go through the phone number, adding all numbers and parens () to numStr
        if (regex.test(str[i])) {
            numStr += str[i];
            if (str[i] === ')' || str[i] === '(') {  //If paren(s) found, keep track of the index
                parenIndex.push(i);
            }
        }
    }

    if (numStr.length - parenIndex.length === 11) {  //If the number is 11 digits (including long distance 1, area code, number)
        //Make sure 1 is present, and parens are properly spaced
        if (numStr.charAt(0) !== '1' || (parenIndex.length !== 0 && parenIndex.length !== 2)) {
            return false;
        }
        //If number passes checks return true
        return true;
    }
    else if (numStr.length - parenIndex.length === 10) { //If the number is 10 digits (including area code, number)
        //If any more of less then a single set of parens
        if (parenIndex.length > 2 || parenIndex.length === 1) {
            return false;
        }
        //Else if there is a single set of parens
        else if (parenIndex.length === 2) {
            if (parenIndex[1] - parenIndex[0] !== 4) {  //Check to make sure parens are in proper place in number
                return false;
            }
        }
        //If number passes checks return true
        return true;
    }

    //Any phone number strings without the proper amount of numbers is automatically false
    return false;
}

function telephoneCheck(str) {
    /*
    ^ denotes the beginning of the string.
    (1\s?)? allows for “1” or “1 ” if there is one.
    \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
    x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits 
    by themselves with no parentheses.
    [\s\-]? checks for spaces or dashes between the groups of digits.
    $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it 
    from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
    */
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;   //Fancy regex
    return regex.test(str);
}

console.log(telephoneCheck("555)-555-5555"))

/*
telephoneCheck("555-555-5555") should return a boolean.
Passed
telephoneCheck("1 555-555-5555") should return true.
Passed
telephoneCheck("1 (555) 555-5555") should return true.
Passed
telephoneCheck("5555555555") should return true.
Passed
telephoneCheck("555-555-5555") should return true.
Passed
telephoneCheck("(555)555-5555") should return true.
Passed
telephoneCheck("1(555)555-5555") should return true.
Passed
telephoneCheck("555-5555") should return false.
Passed
telephoneCheck("5555555") should return false.
Passed
telephoneCheck("1 555)555-5555") should return false.
Passed
telephoneCheck("1 555 555 5555") should return true.
Passed
telephoneCheck("1 456 789 4444") should return true.
Passed
telephoneCheck("123**&!!asdf#") should return false.
Passed
telephoneCheck("55555555") should return false.
Passed
telephoneCheck("(6054756961)") should return false
Passed
telephoneCheck("2 (757) 622-7382") should return false.
Passed
telephoneCheck("0 (757) 622-7382") should return false.
Passed
telephoneCheck("-1 (757) 622-7382") should return false
Passed
telephoneCheck("2 757 622-7382") should return false.
Passed
telephoneCheck("10 (757) 622-7382") should return false.
Passed
telephoneCheck("27576227382") should return false.
Passed
telephoneCheck("(275)76227382") should return false.
Passed
telephoneCheck("2(757)6227382") should return false.
Passed
telephoneCheck("2(757)622-7382") should return false.
Passed
telephoneCheck("555)-555-5555") should return false.
Passed
telephoneCheck("(555-555-5555") should return false.
Passed
telephoneCheck("(555)5(55?)-5555") should return false.
*/