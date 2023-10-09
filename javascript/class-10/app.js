/***** Array logical programs *****/

// Solve program # 01:

// var mixedArr = ["ahmed", 1996, true, ["khurram", "ahmed"]];
// console.log(mixedArr);



// Solve program # 04:

// var arr = [];
// arr[0] = "Pokemon";
// arr[1] = "Dragon Ball Z";
// arr[2] = "Beyblade";
// arr[3] = "Popye";

// console.log("Cartoons:");
// console.log(arr.indexOf(arr[0]) + 1, arr[arr.indexOf(arr[0])]);
// console.log('Length of the array: ' , arr.length)


// Solve program # 05:

// var carsArr = ["audi", "volvo", "ford", "lamborgini"];

// console.log("Car at the first index of the array: ", carsArr.indexOf(carsArr[0]));
// console.log("Car at the first index of the array: ", carsArr[carsArr.indexOf(carsArr[0])]);



// Solve program # 07:
/*
var colorsArr = ["blue", "white", "black"];

// a:
var userInputA = prompt('Enter any color to add in start!');
colorsArr.unshift(userInputA);

// b:
var userInputB = prompt('Enter any color to add in end!');
colorsArr.push(userInputB);

// c:
colorsArr.unshift("lighblue", "red");

// d:
colorsArr.shift();

// e:
colorsArr.pop();

// f:
var userInputC = +prompt('At which index do you want to add a color');
var userInputD = prompt('Enter the  color name');
colorsArr.splice(userInputC, 0, userInputD);

// g:
var userInputE = +prompt('At which index do you want to delete a color');
var userInputF = +prompt('How many colors do you want to delete?');
colorsArr.splice(userInputE, userInputF);

console.log(colorsArr);
*/


// Solve program # 08:

// var citiesArr = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// var copyArr = citiesArr.slice(2, 4);
// console.log(copyArr);


// Solve program # 14:

// var multiArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];
// console.log(multiArr);


// Solve program # 14:
// var citiesArr = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

// console.log("First element: ", citiesArr[0]);
// console.log("Last element: ", citiesArr[citiesArr.length - 1]);
6

// Solve program # 16:

// var citiesArr = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// citiesArr.length = 0;

// console.log(citiesArr.length);

// Solve program # 17:

// var arr = ["john", "smith", "andrew", "ahmed"];
// var userInput = prompt("Enter any name!");

// if (arr.indexOf(userInput) != -1) {
//     console.log(userInput + " exist in the array!");
// }

// else {
//     console.log(userInput + " does not exist in the array!");
// }



// Solve program # 19:

// var word = prompt("Enter any word!");
// console.log(word.split("").reverse().join(""))

// if (word == word.split("").reverse().join("")) {
//     console.log(word + " is a pallindrome!");
// }

// else {
//     console.log(word + " is not a pallindrome!");
// };



// Solve program # 21:

var url = "https://jsonplaceholder.typicode.com/users"
console.log(url.slice(url.lastIndexOf("/") + 1));