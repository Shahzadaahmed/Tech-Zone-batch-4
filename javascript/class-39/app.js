// function testing() {
//     console.log('Hello world!');
// };

// testing();


// const testing = () => {
//     console.log('Hello world!');
// }
// testing();



// let obj = {
//     name: "ahmed",
//     company: "10 Pearls",
//     hasLaptop: true,
//     getDetails: () => {
//         console.log(`Hi my name is ${obj.name}`)
//     }
// };

// console.log(obj);
// obj.getDetails();



// Note: Making a constructor function...!

// function company(comName, industry) {
//     this.companyName = comName;
//     this.companyIndustry = industry;
// };

// let company1 = new company("QBS Co", "Software Development");
// console.log(company1);

// let company2 = new company("Hamdard Uni", "Education");
// console.log(company2);


// Oop Implementation...!


class Person {
    constructor(name, title, age) {
        this.personName = name;
        this.personTitle = title;
        this.personAge = age
    }

    company = "QBS Co";
    getBioData = () => {
        console.log(`Hi, My name is ${this.personName}, I work in ${this.company}!`);
    }
};

let person1 = new Person('Bilal', 'Front-End Developer', '26');
console.log(person1);
// person1.getBioData();

// let Person2 = new Person('Faraz', 'Marketer', '30');
// console.log(Person2);
// Person2.getBioData();



// Note: Making a new class...!

class AnotherPerson extends Person {
    constructor(name, title, age) {
        super(name, title, age);
    }
    hasLaptop = true;
};

let anotherPerson1 = new AnotherPerson('John Smith', "Accountant", 45);
console.log(anotherPerson1);

// anotherPerson1.getBioData();