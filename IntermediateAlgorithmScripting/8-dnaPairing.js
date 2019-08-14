/*
Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

//Version with if statements
function pairElement(str) {
    let newArr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            newArr.push(["A", "T"]);
        }
        else if (str[i] === 'T') {
            newArr.push(["T", "A"]);
        }
        else if (str[i] === 'C') {
            newArr.push(["C", "G"]);
        }
        else if (str[i] === 'G') {
            newArr.push(["G", "C"]);
        }
    }
    console.log(newArr);
    return newArr;
}

//Version with switch statements
function pairElement(str) {
    let pairs = [];

    let findPair = function (char) {
        switch (char) {
            case 'A':
                pairs.push(["A", "T"]);
                break;
            case 'T':
                pairs.push(["T", "A"]);
                break;
            case 'C':
                pairs.push(["C", "G"]);
                break;
            case 'G':
                pairs.push(["G", "C"]);
                break;
        }
    }
    for (let i = 0; i < str.length; i++) {
        findPair(str[i]);
    }
    console.log(pairs);
    return pairs;
}

pairElement("GCG");

/*
pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
Passed
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
Passed
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
*/