/*
Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    //a-z range in ASCII is 97-122
    let code = str.charCodeAt(0);   //get the ascii value of the first letter

    for (let i = 0; i < str.length; i++) {  //for the length of the string
        //console.log(str[i].charCodeAt())
        if (str[i].charCodeAt() != code) {  //if letter doesnt match ascii number value, we found missing letter
            return String.fromCharCode(code);  //return ascii value in letter form
        }
        else {
            code++;  //otherwise increment ascii code value +1 to check for the next letter in alphabet
        }
    }
    return undefined;  //If entire string matches alphabet order, no missing letter in range
}

fearNotLetter("abcdefghijklmnopqrstuvwxyz");

/*
fearNotLetter("abce") should return "d".
Passed
fearNotLetter("abcdefghjklmno") should return "i".
Passed
fearNotLetter("stvwx") should return "u".
Passed
fearNotLetter("bcdf") should return "e".
Passed
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/