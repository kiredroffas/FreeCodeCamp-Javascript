/*
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

//Long Version - go through char by char using switch statements
function convertHTML(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        //console.log(str[i]);
        if (str[i] !== '&' && str[i] !== '<' && str[i] !== '>' && str[i] !== '\"' & str[i] !== '\'') {
            newStr += str[i];
        }
        else {
            switch (str[i]) {
                case '&':
                    newStr += '&amp;';
                    break;
                case '<':
                    newStr += '&lt;'
                    break;
                case '>':
                    newStr += '&gt;'
                    break;
                case '\"':
                    newStr += '&quot;'
                    break;
                case '\'':
                    newStr += '&apos;'
                    break;
            }
        }
    }
    //console.log(newStr);  printed newStr will show the same string that was passed in (HTML gets converted before javascript is ran)
    return newStr;
}

//Short Version - regex replaces each symbol with html if they are present
function convertHTML(str) {
    str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
    return str;
}

convertHTML("Dolce & Gabbana");

/*
convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
Passed
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
Passed
convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
Passed
convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
Passed
convertHTML("Schindler's List") should return Schindler&​apos;s List.
Passed
convertHTML("<>") should return &​lt;&​gt;.
Passed
convertHTML("abc") should return abc.
*/