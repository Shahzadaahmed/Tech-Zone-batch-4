
// function highestThreeSalaries(salaries) {

//     var salariesClone = salaries.sort().reverse().slice(0, 3);
//     return salariesClone;
// };

// var numArr = [4, 9, 2, 5, 1, 7, 3];
// var result = highestThreeSalaries(numArr);
// console.log(result);


// function reverseCounting(endingPoint, startingPoint) {
//     for (var i = endingPoint; i >= startingPoint; i--) {
//         console.log(i);
//     };
// };

// reverseCounting(20, 5);



// function fullName(firstName, lastName) {
//     // console.log(firstName, lastName);
//     var name = firstName + " " + lastName;
//     return name;
// };

// var screen1Result = fullName("Muhammad", "Ahmed");
// console.log(screen1Result);

// var screen2Result = fullName("Muhammad", "Faraz");
// console.log(screen2Result);

// var screen3Result = fullName("Muhammad", "Ali");
// console.log(screen3Result);

// var x = fullName("Nick", "Smith");
// console.log(x);



// function squareRoot(num) {
//     return num * num;
// };

// var a = squareRoot(2);
// console.log(a);



// function reverseString(str) {
//     // console.log(str);
//     // console.log(str.length);
//     // console.log(str.indexOf('a'));

//     var output = "";

//     for (var i = str.length - 1; i >= 0; i--) {
//         console.log(str[i]);

//         output = output + str[i];
//     };

//     console.log(output);
// };

// reverseString("ahmed");


// var day = "tuesday";

// switch (day) {

//     case "monday":
//         console.log('Working day!');
//         break;

//     case "saturday":
//         console.log('Weekend day!');
//         break;

//     default:
//         console.log('Invalid input!');
// };

// var day = new Date().getDay()
// // console.log(day, typeof (day));

// switch (day) {

//     case 0:
//         console.log('Monday');
//         break;

//     case 4:
//         console.log('Today!');
//         break

//     default:
//         console.log('Invalid input!');
// };


function nameChecker(userName) {
    // console.log(userName);

    switch (userName) {
        case "ahmed":
            console.log('10 Pearls!');
            break;

        case "faraz":
            console.log("QBS Tech");
            break

        default:
            console.log('Invalid Data!');
    };
};

var input = prompt("Enter name!");
nameChecker(input);