/*
Intermediate Algorithm Scripting: Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs 
(second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the 
returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name 
and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    let srcKeys = Object.keys(source);  //Get the names of the object fields to check collection for
  
    arr = collection.filter(function (value) { //Filter each value in the collection
      for(let i = 0; i < srcKeys.length; i++ ) { //For each field in source
        //If collection value doesnt have the source field, or the source field doesnt match exactly
        if(!value.hasOwnProperty(srcKeys[i]) || value[srcKeys[i]] !== source[srcKeys[i]]) {
          return false;
        }
      }
      return true;  //Otherwise field matches, return it to new array
    });
    //console.log(arr)
    return arr;
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/*
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) 
should return [{ first: "Tybalt", last: "Capulet" }].
Passed
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, 
{ "apple": 1, "bat": 2 }].
Passed
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return 
[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
Passed
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return 
[{ "apple": 1, "bat": 2, "cookie": 2 }].
Passed
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return 
[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
Passed
whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
*/