// step 1

// This is an inline comment
/* This is a multiline comment,
 more stuff to write*/

//step 2

var myName;

//step 3

var a;
a = 7;

//step 4

var b;
b = a

//step 5
var c = 9;

//step 6
var myFirstName = "Oageng";
var myLastName = "Mashele";

//step 7
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

/* step 8:
use camelCase when declaring variables */

//step 9
let catName = "Oli"
let catSound = "Meow!"

//step10
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome"
console.log(FCC, fact);

//step11
const sum = 10 + 10;

//step12
const difference = 45 - 33;

//step13
const product = 8 * 10;

//step 14
const quotient = 66 / 33;

//step15
let myVar = 87;
myVar++;

//step16
myVar--;

//step17
const ourDecimal = 5.7;
let myDecimal = 1.8;

//step18
const prod = 2.5 * 2.0;

//step19
const quot = 4.4 / 2.0;

//step20
const remainder = 11 % 3;

//step21
a += 12;
b += 9;
c += 7;

//step22
a -= 6;
b -= 15;
c -= 1;

//step23
a *= 5;
b *= 3;
c *= 10;

//step24
a /= 12;
b /= 4;
c /= 11;

//step25
const myString = "I am a \"double quoted\" string inside \"double quotes\".";

//step26
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//step27
const mySt = "FirstLine\n\t\\SecondLine\nThirdLine"

//step28
const myS = "This is the start. " + "This is the end."

//step29
let mySting = "This is the first sentence.";
mySting += " This is the second sentence."

//step30
const myName = "Oageng";
const myStrd = "My name is " + myName + " and I am well.";

//step31
const someAdjective = "fun!";
let myStrh = "Learning to code is ";
myStrh += someAdjective;

//step32
let lastNameLength = 0;
const lastName = "Lovelace"
lastNameLength = lastName.length

//step33
let firstLetterOfLastName = "";
const lastNamee = "Lovelace";
firstLetterOfLastName = lastNamee[0];

//step34
let myStrr = "Jello World";
myStrr = "Hello World;"

//step35
const thirdLetterOfLastName = lastName[2];

//step36
const lastLetterOfLastName = lastName[lastName.length - 1];

//step37
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

//step38: word blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "My " + myNoun + " which is " + myAdjective + " just " + myVerb + " and it was " + myAdverb; 

//step39: arrays
const myArray = ["Oageng", 21];

//step40
const myArray2 = [["Oageng", 21], ["Mashele", 07]];

//step41
const myArray3 = [50, 60, 70];
let myData = myArray3[0];

//step42
myArray3[0] = [45];

//step43
const myArray4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
const myData1 = myArray4[2][1];

//step44
const myArray1 = [["John", 23], ["cat", 2]];
myArray1.push(["dog", 3])

//step45
const myArray5 = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray5.pop();

//step46
const myArray6 = [["John", 23], ["dog", 3]];
removedFromMyArray = myArray6.shift();

//step47
myArray1.unshift(["Paul", 35])

//step48
const myList = [["Oats", 2], ["Tomato",6], ["rice",1], ["sugar",2], ["fish", 3]];

//step49
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

//step50
function functionWithArgs(a,b) {
    console.log(a+b);
}
functionWithArgs(5,2)

//step51
function timesFive(num) {
    return num * 5
}

//step52
let myGlobal = 10;
function fun1() {
    oopsGlobal = 5;
}
function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

//step53
function myLocalScope() {
    let myVar = 54;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

//step54
const outerWear = "T-Shirt";
function myOutfit() {
    const outerWear = "sweater";
    return outerWear;
}
myOutfit();

//step55
function addFive() {
    sum += 5;
}

//step56
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

//step57
function nextInLine(arr, item) {
    arr.push(item);
    let a = arr.shift();
    return a;
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//step58
function welcomeToBooleans() {
    return true;
}

//step59: IF statements
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue == true) {
        return "Yes, that was true"
    }
    return "No, that was false"
}

//step60
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

//step61
function testStrict(val) {
    if (val===7) {
      return "Equal";
    }
    return "Not Equal";
}
testStrict(10);

//step62
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
}
compareEquality(10, "10");

//step63
function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

//step64
function testStrictNotEqual(val) {
    if (val !== 17) {
      return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

//step65
function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
  
    if (val > 10) { 
      return "Over 10";
    }
  
    return "10 or Under";
}
testGreaterThan(10);

//step66
function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >=10 ) { 
      return "10 or Over";
    }
  
    return "Less than 10";
}
testGreaterOrEqual(10);

//step67
function testLessThan(val) {
    if (val < 25) {  
      return "Under 25";
    }
  
    if (val < 55) {  
      return "Under 55";
    }
  
    return "55 or Over";
}
testLessThan(10);

//step68
function testLessOrEqual(val) {
    if (val <= 12) {
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
}
testLessOrEqual(10);

//step69
function testLogicalAnd(val) {
    if (val <= 50 && val >=25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

//step70
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
      return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);

//step71
function testElse(val) {
    let result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
  
    else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4);

//step72
function testElseIf(val) {
    if(val >= 5 && val <= 10)
  return "Between 5 and 10";
    else if (val > 10) {
      return "Greater than 10";
    }
    else {
      return "Smaller than 5";
    }
}
testElseIf(7);

//step73
function orderMyLogic(val) {
    if (val >= 10) {
        return "Greater than or equal to 10";
    } 
    else if (val < 5) {
        return "Less than 5";
    } 
    else {
        return "Less than 10";
    }
}
orderMyLogic(7);

//step74
function testSize(num) {
    if (num < 5) {
        return "Tiny"
    }
    else if (num < 10) {
        return "Small"
    }
    else if (num < 15) {
        return "Medium"
    }
    else if (num <20) {
        return "Large"
    }
    else {
        return "Huge";
    }
}
testSize(7);

//step75 
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if(strokes === 1){
        return names[0];
    }
    else if(strokes <= par - 2) {
        return names[1];
    }
    else if(strokes <= par - 1) {
        return names[2];
    }
    else if( strokes == par) {
        return names[3];
    }
    else if( strokes <= par + 1) {
        return names[4];
    }
    else if( strokes <= par + 2) {
        return names[5];
    }
    else {
        return names[6];
    }
}
golfScore(5, 4);

//step76
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
    }
    return answer;
  }
caseInSwitch(1);

//step77
function switchOfStuff(val) {
    let answer = "";
   switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }
    return answer;
}
switchOfStuff(1);

//step78
function sequentialSizes(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
    }
    return answer;
}
sequentialSizes(1);

//step79
function chainToSwitch(val) {
    let answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42: 
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7: 
            answer = "Ate Nine";

    }
    return answer;
}
chainToSwitch(7);

//step80
function isLess(a, b) {
    return a < b;
}
isLess(10, 15);

//step81
function abTest(a, b) {
    if(a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

//step82
let count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
    var holdBet = 'Hold';
    if (count > 0) {
        holdBet = "Bet"
    }
    return count + " " + holdBet;
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

//step83: JavaScript Objects
const myDog = {
    name: "doggo",
    legs: 4,
    tails: 1,
    friends: ["bobby", "mya", "love"]
};

//step84
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

//step85
const testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj1["an entree"];
const drinkValue = testObj1["the drink"];

//step86
const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;
const player = testObj2[playerNumber];

//step87
const myDog1 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
}
myDog1.name = "Happy Coder";

//step88
myDog1.bark = "woof";

//step89
delete myDog1.tails;

//step90
function phoneticLookup(val) {
    let result = "";
  
    const lookUp = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }
    result = lookUp[val];
    
    return result;
}
phoneticLookup("charlie");

//step91
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    return "Not Found"
}

//step92
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
        "artist": "BLACKPINK",
        "title": "BORN PINK",
        "release_year": 2022,
        "formats": [
            "CD",
            "LP",
            "Digital"
        ]
    }
];

//step93
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

//step94
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
];
const secondTree = myPlants[1].list[1];

//step95
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
};
function updateRecords(records, id, prop, value) {
    const album = records[id];
    if (value === "") {
      delete album[prop];
    } else if (prop !== "tracks") {
      album[prop] = value;
    } else {
      album["tracks"] = album["tracks"] || [];
      album["tracks"].push(value);
    }
    return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//step96: loops
const myArray7 = [];
let n = 5;
while (n >= 0) {
    myArray7.push(n);
    n--;
}

//step97
const myArray8 = [];
for (let i = 1; i <= 5; i++) {
    ourArray8.push(i);
}

//step98
const myArray9 = [];
for (let i = 1; i <= 9; i += 2) {
    myArray9.push(i);
}

//step99
const myArray10 = [];
for (let i = 9; i >= 1; i -= 2) {
    myArray10.push(i);
}

//step100
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total+= myArr[i];
}

//step101
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for( let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//step102
const myArray11 = [];
let i = 10;
do {
    myArray11.push(i);
    i++;
} while (i < 5);

//step103: Recursion
function sum(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return sum(arr, n - 1 ) + arr[n - 1]; 
}

//step104
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
];
function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
        if( contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact"
}
lookUpProfile("Akira", "likes");

//step105
function randomFraction() {
    return Math.random();
}

//step106
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

//step107
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//step108
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("56")

//step109
function convertToInteger(str) {
    return parseInt(str, 2);
}
convertToInteger("10011")

//step110
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
checkEqual(1, 2)

//step111
function checkSign(num) {
    return (num >= 1) ? "positive" : (num < 0) ? "negative" : "zero";
}
checkSign(10);

//step112
function countdown(n){
    if (n <= 0) {
        return [];
    }
    let ary = countdown(n - 1);
    ary.unshift(n);
    return ary;
}

//step113
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
      } 
    else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
};