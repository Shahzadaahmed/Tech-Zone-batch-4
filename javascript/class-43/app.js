// const courseDetails = {
//     name: "ahmed",
//     fatherName: "munawar",
//     course: "mern"
// };

// let userInput1 = prompt("Enter your name?");
// let userInput2 = prompt("Enter your father name?");
// let userInput3 = prompt("Enter your course name?");

// const checkCondition = () => {
//     if (userInput1 != courseDetails.name) {
//         console.log('Name is invalid!');
//     }

//     else if (userInput2 != courseDetails.fatherName) {
//         console.log('Father name is invalid!');
//     }

//     else if (userInput3 != courseDetails.course) {
//         console.log('Course details is invalid!');
//     }

//     else {
//         console.log('You are ready to enroll: ', courseDetails);
//     }
// };



// const checkCondition = () => {
//     try {
//         if (userInput1 != courseDetails.name) throw "Name is invalid!";
//         else if (userInput2 != courseDetails.fatherName) throw "Father name is invalid!";
//         else if (userInput3 != courseDetails.course) throw "Course details is invalid!";
//         else {
//             console.log('You are ready to enroll: ', courseDetails);;
//         }
//     }

//     catch (err) {
//         console.log('Error: ', err);
//     };
// };

// checkCondition();

// let guessValue = prompt('Guess any number between 1 to 3!');

// let dicePromise = new Promise((resolve, reject) => {
//     let diceValue = Math.floor(Math.random() * 3) + 1;
//     console.log('Dice: ', diceValue);

//     if (diceValue == guessValue) resolve('You won the bid!');
//     else reject('You lost the bid!');
// });

// dicePromise
//     .then((data) => {
//         console.log('Promise succesfull: ', data);
//     })
//     .catch((err) => {
//         console.log('Promise rejected: ', err);
//     });

// const handlePromise = async () => {
//     try {
//         let response = await dicePromise;
//         console.log(response);
//     }

//     catch (error) {
//         console.log('Something went wrong with promise: ', error);
//     };
// };

// handlePromise();



// API Integration with async await...!

const apiCall = async () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    try {
        let res = await fetch(apiUrl);
        let actualData = await res.json();
        console.log(actualData);
    }

    catch (error) {
        console.log('Error occured: ', error);
    };
};

apiCall();