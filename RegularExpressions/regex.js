/*
Regular Expressions: Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word "the" in the string "The dog chased the cat", you could use the following regular expression: /the/. 
Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the 
regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.
*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);   //returns true

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; //searches for literal string match of "Waldo"
let result = waldoRegex.test(waldoIsHiding);

/*
Regular Expressions: Match a Literal String with Different Possibilities
Using regexes like /coding/, you can look for the pattern "coding" in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the 
alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match "yes" or "no", the regex you want 
is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating 
them, like /yes|no|maybe/.
*/

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;  //Will return true if str contains dog,cat,bird, or fish
let result = petRegex.test(petString);

/*
Regular Expressions: Ignore Case While Matching
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case 
differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are 
"A", "B", and "C". Examples of lowercase are "a", "b", and "c".

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores 
case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can 
match the strings "ignorecase", "igNoreCase", and "IgnoreCase".
*/

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; //i flag makes regex ignore case
let result = fccRegex.test(myString);

/*
Regular Expressions: Extract Matches
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you 
found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:
"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; //
let result = extractStr.match(codingRegex);

/*
Regular Expressions: Find More Than the First Match
So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// Returns ["Repeat"]
To search or extract a pattern more than once, you can use the g flag.

let repeatRegex = /Repeat/g;      <---- g global flag
testStr.match(repeatRegex);
// Returns ["Repeat", "Repeat", "Repeat"]
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; //Returns all occurances of "Twinkle"
let result = twinkleStar.match(starRegex);

/*
Regular Expressions: Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a 
misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard 
character just like any other character in the regex. For example, if you wanted to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; //Matches with any string with format: (some char)un
//Matches run, sun, fun, pun, nun...
let result = unRegex.test(exampleStr);

/*
Regular Expressions: Match Single Character with Multiple Possibilities
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u".

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; //gets all the vowels from the string
let result = quoteSample.match(vowelRegex); 
//output: e,a,e,o,u,i,e,a,o,e,o,e,I,a,e,o,o,e,i,o,e,o,i,e,i