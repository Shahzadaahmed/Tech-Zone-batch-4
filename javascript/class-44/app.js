// const h1El = document.getElementById("slider-header");

// const techIndustries = ["Google", "Microsoft", "Apple", "Facebook", "Tesla"];
// // console.log(techIndustries);

// let initialPoint = 0;

// const slide = () => {
//     // console.log(techIndustries[initialPoint]);
//     h1El.innerHTML = techIndustries[initialPoint];
//     initialPoint++;

//     if (initialPoint == techIndustries.length) initialPoint = 0;
// };

// setInterval(slide, 1000);

// let userInput = prompt("Enter your name?");
// console.log(userInput);

// if (userInput == "ahmed") {
//     console.log(true);
// }

// else {
//     console.log(false);
// };


// Note: Ternary operator...!
// let result = (userInput != 'ahmed') ? (false) : (true);
// console.log(result);


let userInput = prompt("Enter any string");

// let str = 'ahmed@gmail.com';
// let emailValidator = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// if (userInput.match(emailValidator)) console.log('Email is valid!');
// else console.log('Email is not valid! 😢');


let alphabetsValidator = /^[a-zA-Z]+$/;

if (userInput.match(alphabetsValidator)) console.log(true);
else console.log(false);