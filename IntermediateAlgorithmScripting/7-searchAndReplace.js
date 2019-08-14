/*
Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" 
with the word "dog", it should be replaced as "Dog"
*/

//Long Version - Manual Character Check/Replacement
function myReplace(str, before, after) {
    let newStr = "";
    let beforeLength = before.length;  //length of word being changed to after
    let index = 0;
    let isUpperCase = false;

    //Get index where before starts in string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === before[0]) { //If letter matching first letter of before is found
            let k = 0;
            let check = 0;  //Check to see if the index we found is where the full before word is
            for (let j = i; j < i + beforeLength; j++) {
                if (str[j] === before[k]) {
                    check = 1;  //If all the letters match check = 1
                    k++;
                }
                else {
                    check = 0;  //If it isnt the before string check = 0
                    break;
                }
            }
            if (check === 1) { //If string matches before word
                index = i;  //Set index
                console.log("index of before is: " + index);
                if (str[i] === str[i].toUpperCase()) {  //If first character of before is capital
                    isUpperCase = true;
                }
                else { //Else first letter is lowercase
                    isUpperCase = false;
                }
            }
        }
    }

    if (isUpperCase === true) { //If before was capital, replace with capital after
        newStr += str.substr(0, index) + after.charAt(0).toUpperCase() + after.slice(1) + str.substr(index + before.length, str.length);
    }
    else {  //Else if before was lowercase, replace with lowercase after
        newStr += str.substr(0, index) + after + str.substr(index + before.length, str.length);
    }
    console.log(newStr);
    return newStr;
}

//Short Version - Utilizing Index/Replace Functions
function myReplace(str, before, after) {
    let index = str.indexOf(before);  //Get the index of before
    if (str[index] === str[index].toUpperCase()) { //If the index letter is capital
        after = after.charAt(0).toUpperCase() + after.slice(1);  //Change after to capital
    }

    let newStr = str.replace(before, after);  //Create new string reaplacing before with after
    console.log(newStr);
    return newStr;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

/*
myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
Passed
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
Passed
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
Passed
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
Passed
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
Passed
*/