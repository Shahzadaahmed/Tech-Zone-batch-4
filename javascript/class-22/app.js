// var school = "Custom Public School";

// function greetUser() {
//     var greet = "Hi";
//     console.log(greet);

//     console.log(school);
// };

// greetUser();

// console.log(greet);


var school = "Custom Public School";

// function callUser(firstName) {
//     // console.log(firstName);

//     return function innerFunc() {
//         var lastName = "rana";
//         var fullName = firstName + " " + lastName;
//         console.log(fullName);
//         return fullName
//     };

//     // innerFunc();
// };

// var result = callUser("ahmed");
// // console.log(result());
// result();

// innerFunc();


// function nameFunc(name1, name2) {
//     var firstName = name1;
//     var lastName = name2;
//     function fullName() {
//         console.log(firstName + " " + lastName);
//     };

//     fullName();
// };

// nameFunc("john", "smith");


// function outerFunc(outerValue) {
//     console.log('Outer value: ', outerValue);

//     function innerFunc(innerValue) {
//         console.log('Inner value: ', innerValue);
//         // return innerValue + outerValue;
//         console.log(innerValue + outerValue);
//     };

//     innerFunc(2);
//     fullName();
// };


// outerFunc(5);

// console.log(school);




// result(10);

// var result = outerFunc(5);

// var resultValue = result(10);
// console.log(resultValue);



// function myFunc() {
//     function abc() {
//         console.log('Yes running');
//     };

//     return abc;
// };

// var a = myFunc();
// a();


function counter(num) {
    // console.log(num);

    function increamentValue() {
        return num++;
    };

    return increamentValue;
};

var result = counter(2);
console.log(result());
console.log(result());
console.log(result());