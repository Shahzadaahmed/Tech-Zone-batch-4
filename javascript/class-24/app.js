

// setTimeout(function () {
//     for (var i = 1; i <= 5; i++) {
//         console.log(i);
//     };
// }, i * 1000);


// for (var i = 1; i <= 5; i++) {
//     console.log(i);

//     setTimeout(function () {
//         // console.log(i);
//     }, i * 1000);
// };


// console.log('Objects!');

// var fullName = "S M Ahmed Rana";

// var userData = {
//     userName: fullName,
//     fatherName: "Munawar Rana",
//     gender: "Male",
//     maritalStatus: false,
//     siblings: ["Umer", "Akbar", 'Asghar', "Ali"],
//     inARelation: true
// };

// delete userData.inARelation;

// userData.userName = "S M Ahmed Rana";
// userData.cast = "rana";
// userData.siblings.push('Awais');

// console.log(userData);
// console.log(typeof (userData));

// var checkPropExist = "motherName" in userData;
// console.log(checkPropExist);


// var checkPropExist = userData.hasOwnProperty("fatherNameee");
// console.log(checkPropExist);


var companyInfo = {
    name: "10 Pearls",
    location: "Shahrah e faisal",
    industry: "Software Development",
    employeesLength: "5000+",
    isInternational: true,
    multiLocations: true,
    callCompanyName: function () {
        // console.log('Yes I am working!');
        return "Hi my name is ahmed and i work in " + this.name;
    }
};

// console.log(companyInfo.callCompanyName());
// companyInfo.callCompanyName()

// this.alert('hello');

var userInput = prompt("Which company do you work for?");

if (userInput == companyInfo.name) {
    console.log('Office mates!');
}

else {
    console.log('Different company!');
};