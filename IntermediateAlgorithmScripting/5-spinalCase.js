/*
Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    //Change the first letter to lowercase
    if (i === 0) {
      newStr += str[0].toLowerCase();
    }
    //Remove any spaces, underscores, and dashes, and mark spot for dash to be added with capital letter
    else if (str[i] === ' ' || str[i] === '_' || str[i] === '-') {
      newStr += str[i + 1].toUpperCase();
      i++;
    }
    //Else copy the string over normally
    else {
      newStr += str[i];
    }
  }
  //console.log("Removed symbols/spaces: " + newStr);

  let finalStr = ""

  for (let i = 0; i < newStr.length; i++) {
    //If letter is capitalized
    if (newStr[i] == newStr[i].toUpperCase()) {
      finalStr += '-' + newStr[i].toLowerCase(); //replace with a '-' and the letter in lowercase
    }
    //Else copy over normally
    else {
      finalStr += newStr[i];
    }
  }
  //console.log("finalStr: " + finalStr)
  return finalStr
}

spinalCase('This Is Spinal Tap');

/*
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
Passed
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
Passed
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
Passed
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
Passed
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/