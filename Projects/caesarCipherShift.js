/*
JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings
of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and 
so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
    let regex = /[\s!@#.,$%?:^&*\-\/()_+{}]/; //Find whitespace (\s)/symbols
    let alphaRegex = /[A-Z]/  //Find capital letters
    let shifted = "";

    //Letters A-Z in ascii range from 65-90
    for (let i = 0; i < str.length; i++) {   //For each character in str
        if (alphaRegex.test(str[i])) { //If the char is not a symbol/space
            let ascii = str[i].charCodeAt();  //Get the ascii code
            if (ascii + 13 <= 90) {   //If shifting 13 doesnt go past the end of alphabet
                ascii += 13;         //Shift 13
                shifted += String.fromCharCode(ascii);  //Get new char from shifted ascii
            }
            else {  //Else if shifting 13 would go past the end of the alphabet
                let offset = 90 - ascii;  //Find offset value to the end of the alphabet
                let newIndex = 13 - offset + 64;  //Add the remaining offset to beginning of alphabet (starting at A: 65)
                shifted += String.fromCharCode(newIndex);  //Get new char from shifted ascii
            }
        }
        else { //Else if the char is a symbol/space
            shifted += str[i];  //Add it normally
        }
    }
    //console.log(shifted);
    return shifted;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

/*
rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
Passed
rot13("SERR CVMMN!") should decode to FREE PIZZA!
Passed
rot13("SERR YBIR?") should decode to FREE LOVE?
Passed
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/