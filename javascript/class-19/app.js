// var arr = ["a", "b", "c"];
// arr.push("d");

// console.log(arr);



// function test() {
//     console.log('Functions is runing!');
// };

// test();



// function lunchTime() {
//     // console.log('It is lunch time!');

//     var a = 1;
//     var b = 2;
//     var c = a + b;
//     console.log(c);
// };

// lunchTime();




// function lunchTime() {
//     console.log('It is lunch time!');
// };

// lunchTime();
// lunchTime();
// lunchTime();
// lunchTime();
// lunchTime();




// function lunchTime(foodName) {
//     console.log("Food: " + foodName);
// };

// lunchTime("braoast");
// lunchTime("burger");
// lunchTime("biryani");



// function callName(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     console.log(fullName);
// };

// callName("muhammad", "ahmed");
// callName("john", "nick");




// function learningFunc(num1, num2, num3) {
//     var total = num1 + num2 + num3;
//     console.log(total);
// };

// var number1 = 16;
// var number2 = 14;

// learningFunc(number1, number2, 4);





// function printData(bigData) {
//     var clone = bigData.slice(0);
//     clone.push("d");
//     console.log(clone);
// };

// var arr = ["a", "b", "c"];
// printData(arr);



function sayHello(userName) {
    console.log("Hi " + userName);
};



function callEmployees(emp1, emp2, helloHandler) {
    console.log(emp1);
    console.log(emp2);
    console.log(helloHandler);

    helloHandler(emp1);
    helloHandler(emp2);
};


callEmployees("ahmed", "faraz", sayHello);