// var a = "JavaScript";
// a = "Html";
// console.log(a);


// const x = "ahmed";
// x = "ali";
// console.log(x);

// var x;

// const x

// const arr = ['apple', 'banana'];
// arr.push('mango');
// console.log(arr);


// function varScoping() {
//     var x = 1;
//     console.log('x1: ', x);

//     if (true) {
//         var x = 2;
//         console.log('x2: ', x);
//     };

//     console.log('x3: ', x);
// };

// varScoping();



// function letScoping() {
//     let x = 1;
//     console.log('x1: ', x);

//     if (true) {
//         let x = 2;
//         console.log('x2: ', x);
//     };

//     console.log('x3: ', x);
// };

// letScoping();


// var x = 1;
// var x = 2;
// console.log(x);




// let x = 1;
// let x = 2;
// console.log(x);


// console.log(x);
// var x = 1;



// console.log(x);
// let x = 1;
// console.log(x);

// document.write(x);


// for (var i = 1; i <= 5; i++) {
//     // console.log(i);

//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// };



// for (let i = 1; i <= 5; i++) {
//     // console.log(i);

//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// };




// Advance way to write functions...!


// var x = 'ahmed';
// var num = 10;

// var info = {
//     name: 'ahmed',
//     title: 'Engineer'
// };

// info.married = false;



// function helloWorld() {
//     console.log('Hello World!');
// };

// helloWorld();



// const helloWorld = () => { console.log('Hello World!') };
// helloWorld();


// const helloWorld = (a) => console.log('Hello World: ' , a);
// helloWorld('ali');



const tester = (name) => {
    if (name == "john") {
        console.log(true);
    }

    else {
        console.log(false);
    }
};

tester('john');


// const tester = (name) => {
//     if (name == "john") console.log(true);
//     else console.log(false);
// };

// tester('john');


// setTimeout(function () {
//     console.log('Timer stopped!');
// }, 3000);

setTimeout(() => console.log('Timer stopped!'), 3000);