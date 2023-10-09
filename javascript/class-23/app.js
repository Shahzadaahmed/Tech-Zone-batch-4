// function testing() {
//     console.log('Function is runing!')
// };

// testing();



// var testing = function () {
//     console.log('Function is runing!');
// };

// testing();



// var addTwoValues = function (a, b) {
//     // var a = 6;
//     // var b = 4;
//     console.log(a + b);
// };

// addTwoValues(1, 5);


// console.log('1 is running');


// var a = 2;
// console.log(a + " is running");

// console.log(x);


// console.log('3 is running');

// hello();

// function hello() {
//     console.log('4 is running');
// };

// var x = "abc";

// hello();

// console.log('5 is running');



// Note: For 1 time:

// function calling() {
//     console.log('Yes running!');
// };

// // calling();

// setTimeout(calling, 3000);


// setTimeout(function () {
//     console.log('I am working!');
// }, 5000);



// console.log('1 is running');

// var a = 2;
// console.log(a + " is running");

// setTimeout(function () {
//     console.log(x);
// }, 3000);

// console.log('3 is running');

// hello();

// function hello() {
//     console.log('4 is running');
// };

// var x = "abc";

// hello();

// console.log('5 is running');



// Note: For every time:

// setInterval(function () {
//     console.log('Interval is working!');
// }, 1000);

// var date = new Date();
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleDateString());


// setInterval(function () {
//     var date = new Date();
//     console.log(date.toLocaleTimeString());
// }, 1000);

// var a = 1;
// var stopInterval;

function stopTimer() {
    console.log('Timer stopped');
    clearInterval(stopInterval);
};

// stopInterval = setInterval(function () {
//     a++;
//     // console.log(a);
//     document.write(a);

//     if (a == 10) {
//         stopTimer();
//     };
// }, 1000);

var num = 1;

setTimeout(function () {
    num++
}, 500);

console.log('a')
console.log(num);

console.log('c');

// console.log(num);

// console.log(b);

setTimeout(function () {
    // var b = 'baloon';
    console.log(num);
}, 2000);

console.log(num);

// setTimeout(function () {
//     // var num = 1;
// }, 2000);