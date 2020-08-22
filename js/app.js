function math (numberOne, numberTwo) {
    var result = ((numberOne + numberTwo) * 5);
    return result;
}

var score = 2;
var scoreTwo = 3;
var answer = math (score, scoreTwo);
console.log (answer);

var score = 3;
var scoreTwo = 4;
var answer = math (score, scoreTwo);
console.log (answer);

var score = 4;
var scoreTwo = 5;
var answer = math (score, scoreTwo);
console.log (answer);


function counting (string) {
    if (string.length > 10) {
        console.log (true);
    } else {
        console.log (false);
    }
}

var test = 'temperature';
var count = counting (test);

var test = 'corn';
var count = counting (test);

var test = 'A sentence with spaces';
var count = counting (test);

function letterSearch (stringArray) {
    for(var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].startsWith("ph")) {
            return stringArray[i];
        } else {
            console.log ("This does not begin with ph");
        }
    }
}

var strArray = ["banana", "apple", "photo", "end"];
var strResult = letterSearch (strArray);
console.log (strResult);

var strArray = ["pear", "phone", "book", "couch"];
var strResult = letterSearch (strArray);
console.log (strResult);

var strArray = ["gear", "table", "house", "photosynthesis"];
var strResult = letterSearch (strArray);
console.log (strResult);