// Solution Q:1

// var str = "ahmed";
// var strToArr = str.split("");
// // console.log(strToArr);

// for (var i = 0; i < strToArr.length; i++) {
//     console.log(strToArr);

//     var lastItem = strToArr.pop();
//     strToArr.unshift(lastItem);
// };

// Solution Q:3

// var input1 = prompt("Enter the number of the table you want to print?");
// var input2 = prompt("What should be the length of the table?");

// for (var i = 1; i <= input2; i++) {
//     // console.log(i);

//     console.log(input1 + " x " + i + " = " + (i * input1));
// };

// Solution Q:5

// var fruits = ["apple", "banana", "mango"];

// console.log(fruits.indexOf(fruits[0]));

// for (var i = 0; i < fruits.length; i++) {
//     console.log("Element at index " + i + " is " + fruits[i]);
// }


// var userInput = prompt("Enter the number of items you want to purchase?");
// var items = [];

// // console.log(userInput);

// for (var i = 1; i <= userInput; i++) {
//     // console.log(i);

//     var askForItem = prompt("Enter value for index " + i);
//     items.push(askForItem);
// };

// console.log(items);


// Solution Q:7 c

// for (var i = 0; i <= 20; i++) {

//     if (i % 2 == 0) {
//         console.log(i);
//     };
// };


// var items = ["cake", "cookie", "chips"];
// var userInput = prompt("What do you want?");
// var itemFound = false;

// for (var i = 0; i < items.length; i++) {
//     if (items[i] == userInput) {
//         itemFound = true;
//         break;
//     };
// };


// if (itemFound) {
//     console.log(userInput + ' is available!');
// }

// else { console.log(userInput + ' is not available!'); };


// var numsArr = [24, 53, 78, 91, 12];
// var largestNum = 0;

// for (var i = 0; i < numsArr.length; i++) {
//     // console.log(numsArr[i]);

//     if (numsArr[i] > largestNum) {
//         largestNum = numsArr[i];
//     };
// };

// console.log(largestNum);


// for (var i = 0; i <= 20; i = i + 5) {
//     console.log(i);
// };





// var numnsArr = [12, 45, 3, 22, 34, 50];
// var userInput = +prompt("Kahan tk lana hy?");

// if (numnsArr.indexOf(userInput) != -1) {
//     // console.log(userInput + " is available in an array!");

//     var targetIndex = numnsArr.indexOf(userInput);
//     // console.log('Target index: ' , targetIndex);

//     for (var i = 0; i <= targetIndex; i++) {
//         console.log(numnsArr[i]);
//     };
// }

// else {
//     console.log(userInput + " is not available in an array!");
// };



// for (var i = 5; i >= 0; i = i - 0.5) {
//     console.log(i);
// }



// var executedValue = 1;

// for (var i = 1; i <= 7; i++) {
//     // console.log(i);

//     if (i % 2 != 0) {
//         executedValue = executedValue * i;
//     };
// };

// console.log(executedValue);



// var star = "";

// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 5; j++) {
//         star = star + "*";
//     };

//     star = star + "\n";
// };

// console.log(star);


// 18.b
// var star = "";

// for (var i = 1; i <= 5; i++) {

//     for (var j = 1; j <= i; j++) {
//         star = star + "*";
//     };

//     star = star + "\n";
// };

// console.log(star);


// 18.c

// var stars = "*****";
// // console.log(stars.length);

// for (var i = stars.length - 1; i >= 0; i--) {
//     console.log(stars);

//     stars = stars.slice(0, stars.length - 1);
// };


// var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
// // console.log(alphabets);
// var vowels = [];

// for (var i = 0; i < alphabets.length; i++) {
//     // console.log(alphabets[i]);

//     var eachAlpabet = alphabets[i];
//     if (eachAlpabet == "a" || eachAlpabet == "e" || eachAlpabet == "i" || eachAlpabet == "o" || eachAlpabet == "u") {
//         vowels.push(eachAlpabet);
//     };
// };

// console.log(vowels);

// var str = "aHmEd";
// // console.log(str);

// var initialChar = str.charAt(0).toUpperCase();
// // console.log(initialChar);

// var remainingChars = str.slice(1).toLowerCase();
// // console.log(remainingChars);

// var result = initialChar + remainingChars;
// console.log(result);


// var arr = ["john", "andrew", "arnold", "mark", "william"];
// var longestWord = "a";

// for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);

//     if (arr[i].length > longestWord.length) {
//         longestWord = arr[i];
//     };
// };

// console.log('Longest word: ', longestWord);


// var userInput = prompt("Enter any string with symbol");
// var symbolFound = false;

// for (var i = 0; i < userInput.length; i++) {
//     if (userInput[i] == "!" || userInput[i] == ".") {
//         symbolFound = true;
//         break;
//     };
// };

// if (symbolFound) {
//     console.log('Symbol found!');
// }

// else {
//     console.log(userInput);
// }


// var factorialNum = 5;
// var factorialValue = 1;

// for (var i = factorialNum; i >= 1; i--) {
//     // console.log(i);

//     factorialValue = factorialValue * i;
// }

// console.log(factorialValue);


// var sqRoot = 3;
// var sqValue = 1;

// for (var i = 1; i <= sqRoot; i++) {
//     // console.log(i);

//     sqValue = sqRoot * i;
// };

// console.log(sqValue);



// var str = "shahzadaahmed"
// var count = 0;

// for (var i = 0; i < str.length; i++) {
//     // console.log(str[i]);

//     if (str[i] == "a") {
//         // count++;
//         count = count + 1;
//     };
// };

// console.log(count);


// var str = "the quick brown box jump over the lazy dog"
// // console.log(str);
// var strToArr = str.split(" ");

// for (var i = 0; i < strToArr.length; i++) {
//     // console.log(strToArr[i]);

//     if (strToArr[i] == "the") {
//         strToArr[i] = "a";
//     };
// };

// console.log(strToArr.join(" "));




var str = "The Quick Brown Box Jump Over The Lazy Dog";
console.log(str);