/*
Intermediate Algorithm Scripting: Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric 
difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.

    newArr = arr1.filter(function (value) {
        if (!arr2.includes(value)) {
            return true;
        }
        return false;
    });

    newArr = newArr.concat(arr2.filter(function (value) {
        if (!arr1.includes(value)) {
            return true;
        }
        return false;
    }));

    console.log("newArr: " + newArr);
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

/*
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
Passed
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
Passed
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with 
one item.
Passed
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
Passed
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
Passed
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
Passed
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
Passed
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
Passed
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
Passed
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
Passed
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
Passed
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
Passed
[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
Passed
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
Passed
[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
*/