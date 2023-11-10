// Topic: Hoisting...!

// x = 'apple';
// console.log(x);

// var x;

// x;
// var x = 'a';

// console.log(x);


// x = 'apple';
// let x;

// console.log(x);


// Topic: Rest parameters...!

// const namesHandler = (name1, name2) => {
//     console.log('Name 1: ', name1);
//     console.log('Name 2: ', name2);
// };

// namesHandler('john', 'smith');







// const namesHandler = (name1, name2, ...params) => {
//     console.log('Name 1: ', name1);
//     console.log('Name 2: ', name2);
//     console.log('Rest data: ', params);
// };

// namesHandler('john', 'smith', 'ahmed', 'trish', 'akbar', 'faraz', 'anderson');


// const namesHandler = (...names) => {
//     // console.log('Data: ' , names);

//     if (names) {
//         for (let item of names) {
//             console.log(item);
//         };
//     };
// };

// namesHandler('john', 'smith', 'ahmed', 'trish', 'akbar', 'faraz', 'anderson');



// const sumOfNums = (...nums) => {
//     console.log('Nums data: ', nums);

//     let sum = 0;
//     for (let num of nums) {
//         // console.log(num);

//         sum = sum + num;
//     };

//     console.log('Sum: ', sum);
// };

// sumOfNums(2, 88, 6, 101, 4, 9);




// Topic: Spread operators...!

// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let x = [101, 102, 103];
// let c = a.concat(b);
// console.log(c);

// Now solve this using ecma script...!

// let c = [...a, ...b, ...x];
// // console.log(c);

// let nums = [20, 40, 60];

// let result = [...c, ...nums];
// // console.log(result);


// let uInput = +prompt('Enter any num!');

// let addData = [...result, uInput];
// console.log(addData);



// let employee = {
//     name: 'John',
//     title: "Engineer"
// };

// let details = {
//     ownHouse: false,
//     married: false
// };

// let obj = { ...employee, ...details };
// console.log(obj);



// const userName = 'ahmed';
// const company = "QBS Corporation";

// let obj = {
//     name: userName,
//     com: company
// };


// let obj = {
//     userName,
//     company
// };

// console.log(obj);



// let employee = {
//     myName: "faraz",
//     title: "Digital Marketer",
//     hasLaptop: true,
//     medical: false
// };

// delete employee.title;

// console.log(employee);

// let { myName, title } = employee;

// console.log('Name: ', myName);
// console.log('Title: ', title);



// let a = 10;
// let b = 20;
// let c = 30;


var a, b, c;
let userName = prompt("Enter name!");

[a, b, c, userName] = [10, 20, 30, userName];

console.log('a: ', a);
console.log('b: ', b);
console.log('c: ', c);
console.log('Name: ', userName)