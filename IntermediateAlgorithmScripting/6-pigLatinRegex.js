/*
Intermediate Algorithm Scripting: Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let pigLatin = '';
  let regex = /[aeiou]/ig;   //i = case insensitive matching, g = global

  if (str[0].match(regex)) {    //If the first letter is a vowel, add 'way'
    //console.log('first is vowel')
    pigLatin = str + 'way';
  }
  else if (!str.match(regex)) {  //else if there are no vowels
    //console.log('no vowels')
    pigLatin = str + 'ay';
  }
  else {  //Else need to find all the consanents before the first vowel
    let index = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(regex)) {
        index = i;
        //console.log("vowel found at: " + i)
        pigLatin = str.substr(i) + str.substr(0, i) + 'ay';  //Make pigLatin word with letters after vowel, letters before vowel, and 'ay'
        break;
      }
    }
  }

  console.log("returned: " + pigLatin);
  return pigLatin;
}

translatePigLatin("eight");

/*
translatePigLatin("california") should return "aliforniacay".
Passed
translatePigLatin("paragraphs") should return "aragraphspay".
Passed
translatePigLatin("glove") should return "oveglay".
Passed
translatePigLatin("algorithm") should return "algorithmway".
Passed
translatePigLatin("eight") should return "eightway".
Passed
Should handle words where the first vowel comes in the end of the word.
Passed
Should handle words without vowels.
*/