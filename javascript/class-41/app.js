// var myFunc = function () {
//     console.log('I am running!');
// };

// myFunc();

// function helloWorld() {
//     console.log('hello world!');
// };

// helloWorld();


// setTimeout(
//     helloWorld,
//     3000
// );


// setTimeout(() => {
//     console.log('I will arive in 10 seconds!');
// }, 10000);


// Promises
// Condition:
// 1: resolve = success.
// 2: reject = failure.
// 3: pending = in process.


// 1st promise...


/*
let firstPromise = new Promise((resolve, reject) => {
    let userInput = prompt('Enter any odd number!');

    if (userInput % 2 == 0) resolve('Promise resolved successfully!');
    else reject("Promise rejected!");
});

// console.log(firstPromise);

firstPromise
    .then((actualData) => {
        console.log('Success: ', actualData);
    })
    .catch((err) => {
        console.log('Something went wrong with the first promise: ', err);
    });
*/



// 2nd promise...!

/*
let secondPromise = new Promise((resolve, reject) => {
    let userInput = prompt('Enter your employee id!');

    if (['123', '456', '789'].includes(userInput)) resolve('This is an active employee!');
    else reject('Id no longer exist!');
});

secondPromise
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((err) => {
        console.log('Something went wrong with the second promise: ', err);
    });

*/

// Last example...!

const employees = [
    {
        empId: 1,
        empName: 'John',
        title: "Software Engineer"
    },

    {
        empId: 2,
        empName: 'Andrew',
        title: "Ui/Ux Designer"
    },

    {
        empId: 3,
        empName: 'Trish',
        title: "Network Engineer"
    },
];
const strData = JSON.stringify(employees);

const fetchData = new Promise((resolve, reject) => {
    if (employees.length > 0) resolve(strData);
    else reject('No data found!');
});

// fetchData
//     .then((employeeData) => {
//         // console.log(employeeData);

//         if (employeeData) {
//             let jsonData = JSON.parse(employeeData);
//             console.log('Employees: ', jsonData);
//         }
//     })
//     .catch((err) => {
//         console.log('Something went wrong while fetching employees: ', err);
//     });


fetchData
    .then((employeeData) => {
        // console.log(employeeData);

        return employeeData.json();
    })
    .then((actualData) => {
        console.log('Employees: ', actualData);
    })
    .catch((err) => {
        console.log('Something went wrong while fetching employees: ', err);
    });