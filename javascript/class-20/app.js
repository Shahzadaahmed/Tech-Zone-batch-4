// function greetUser(nameHandler) {
//     console.log(nameHandler);
//     console.log(typeof (nameHandler));
//     nameHandler();
// };

// function generateName() {
//     console.log('Ahmed');
// };

// greetUser(generateName);
// greetUser('ahmed');



// function callName(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     return fullName;
// };

// var result = callName("muhammad", "ahmed");
// console.log(result);





// function addValues(num1, num2) {
//     return num1 + num2;
// };

// var addition = addValues(2, 8);
// console.log(addition);



// function sayHello() {
//     var userInput = prompt("Enter name!");
//     console.log("Hi " + userInput);
// };

// sayHello();




// Note: Function for handeling square value...!
// function squareRoot(num) {
//     return num * num;
// };

// function handleCalculation(a, b, squareHandler) {
//     console.log('A: ', a);
//     console.log('B: ', b);

//     var equation = squareHandler(a) - (2 * a * b) + squareHandler(b);
//     // console.log(equation);
//     return equation;
// };

// var result = handleCalculation(6, 2, squareRoot);
// console.log(result);


function listWithANames(arr) {
    // console.log(arr);

    var arrayWithA = [];

    if (arr && arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            // console.log(arr[i]);

            if (arr[i].charAt(0) == 'a') {
                arrayWithA.push(arr[i]);
            };
        };
    };

    return arrayWithA;
};

var names = ["ahmed", "kashan", "mehran", "ali", "khurram", "shahzaib", "anees", "arsalan"];
var result = listWithANames(names);
console.log(result);