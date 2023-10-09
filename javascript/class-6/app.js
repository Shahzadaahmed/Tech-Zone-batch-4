var askAge = Number(prompt("Please enter your age!"));

if (askAge >= 18) {
    var askQualification = prompt("Enter your qualification!");

    if (askQualification == "masters" || askQualification == "bachelors") {
        var askName = prompt("Enter your name!");
        console.log('Hi, Your name is ' + askName + ", age is " + askAge + ", qualification is ", askQualification + ", You are eligible for this position");
    }

    else {
        console.log('Qualification is not enough!');
    };
}

else {
    console.log('Age is not enough!');
};