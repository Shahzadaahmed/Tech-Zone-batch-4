// let car = {
//     carName: "Corola",
//     modal: "2020",
//     color: "white",
//     automatic: true,
//     manual: true,
//     ac: true,
//     carDetails: function () {
//         console.log('This: ', this);
//         console.log(`Car name is ${this.carName} and it's color is ${this.color}`);
//     }
// };

// console.log(car);
// car.carDetails();



// let car = {
//     carName: "Corola",
//     modal: "2020",
//     color: "white",
//     automatic: true,
//     manual: true,
//     ac: true,
//     carDetails: () => {
//         console.log('This: ', this);
//         console.log(`Car name is ${this.carName} and it's color is ${this.color}`);
//     }
// };

// console.log(car);
// car.carDetails();

// console.log(window);



// Note: What is Polymorphism in OOP JavaScript


/*
// Class 1
class FirstClass {
    runFunction() {
        console.log('Polymorphism in OOP JavaScript');
    }
};

// Class 2
class SecondClass extends FirstClass {
    runFunction() {
        console.log(5 * 10);
    }
};

// Class 3
class ThirdClass extends SecondClass {
    runFunction(name) {
        console.log('My name is ', name);
    }
};

let class1 = new FirstClass();
console.log(class1);
class1.runFunction();


let class2 = new SecondClass();
console.log(class2);
class2.runFunction();



let class3 = new ThirdClass();
console.log(class3);
class3.runFunction('ahmed');
*/




// Note: What is Encapsulation in OOP JavaScript...!

/*
// Class 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    city = "karachi";

    addAddress(add) {
        this.address = add;
    }
};




// Class 2
class NewPerson extends Person {
};

let person1 = new Person('john', '20');
person1.addAddress('texas');
// console.log(person1);




let person2 = new NewPerson('andrew', '40');
person2.addAddress('washington');
console.log(person2);
*/



// Note: What is Abstraction in OOP JavaScript...!


const employeeDetail = (name, add) => {
    let employeeName = name;
    let employeeAddress = add;

    // getDetailsNoAccess() {
    //     console.log(`Hi my name is ${employeeName} and i live in ${employeeAddress}, and This info cannot be accessed!`)
    // }

    this.getDetailsAccess = function () {
        console.log(`Hi my name is ${employeeName} and i live in ${employeeAddress}, and This info can be accessed!`);
    }
};

let employee = new employeeDetail('ahmed', 'nazimabad');
console.log(employee);
console.log(employee.employeeName);
// console.log(employee.getDetailsNoAccess());
console.log(employee.getDetailsAccess());