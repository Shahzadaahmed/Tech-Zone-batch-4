// const user = {
//     name: "Ahmed",
//     company: "QBS Corporation"
// };

// let isExist = "namee" in user;
// console.log(isExist);

// let sentence = "Hi, My name is " + user.name + ". I work for " + user.company;
// console.log(sentence);

// let sentence = `Hi, My name is ${user.name}. I work for ${user.company}`;
// console.log(sentence);






// let names = ["ahmed", "hammad", "faraz", "fasih", "bilal"];

// let employees = [
//     {
//         id: 1,
//         employeeName: "ahmed",
//         title: "Software Engineer"
//     },

//     {
//         id: 2,
//         employeeName: "aizaz",
//         title: "Ui Ux Designer"
//     },

//     {
//         id: 3,
//         employeeName: "sheroz",
//         title: "Graphics Designer"
//     },

//     {
//         id: 4,
//         employeeName: "bilal",
//         title: "Front End Developer (React JS)"
//     },

//     {
//         id: 5,
//         employeeName: "Ahsan",
//         title: "SQA Engineer"
//     },
// ];

// console.log(employees);



// for (let i = 0; i < employees.length; i++) {
//     employees[i].onsite = true;
//     console.log(employees[i]);
// };


// for (let item of fruits) {
//     console.log(item);
// }


// for (let key in fruits) {
//     console.log(key);
// };


// let favEmployee = prompt('Enter employee name!');
// let names = ["ahmed", "hammad", "faraz", "fasih", "bilal"];
// let hasInclude = names.includes(favEmployee);

// console.log(hasInclude);


// let employees = [
//     {
//         id: 1,
//         employeeName: "ahmed",
//         title: "Software Engineer"
//     },

//     {
//         id: 2,
//         employeeName: "aizaz",
//         title: "Ui Ux Designer"
//     },

//     {
//         id: 3,
//         employeeName: "sheroz",
//         title: "Graphics Designer"
//     },

//     {
//         id: 4,
//         employeeName: "bilal",
//         title: "Front End Developer (React JS)"
//     },

//     {
//         id: 5,
//         employeeName: "Ahsan",
//         title: "SQA Engineer"
//     },
// ];

// for (let employee of employees) {
//     // console.log(employee);

//     if ([1, 2, 3].includes(employee.id)) {
//         // console.log(employee);

//         employee.onsite = true;
//     }

//     else {
//         employee.onsite = false;
//     };
// };

// console.log(employees);


// let onsiteEmployees = employees.filter((item, index) => {
//     // console.log(index, item);

//     if (!item.onsite) return item
// });

// console.log(onsiteEmployees);



// let names = ["ahmed", "hammad", "faraz", "fasih", "bilal"];

// let filterNames = names.filter((name, i) => {
//     if (name.charAt(0) == 'f') return name;
// });
// console.log(filterNames);


// let result = 'ahmed'.charAt(2);
// console.log(result);



// let nums = [2, 4, 6, 8, 10];
// // console.log(nums);

// let modifyData = nums.map((item, index) => {
//     // console.log(index, item);
//     // return item;

//     return item + 3;
// });

// console.log(modifyData);

// const divEl = document.getElementById("container");
// // console.log(divEl);

// let names = ["ahmed", "hammad", "faraz", "fasih", "bilal"];

// divEl.innerHTML = names.map((item, index) => {
//     return (`
//         <h3> ${item} </h3>
//     `);
// }).join("");

let employees = [
    {
        id: 1,
        employeeName: "ahmed",
        title: "Software Engineer",
        manager: true,
        underEmployees: [4, 6]
    },

    {
        id: 2,
        employeeName: "aizaz",
        title: "Ui Ux Designer",
        manager: true,
        underEmployees: [3]
    },

    {
        id: 3,
        employeeName: "sheroz",
        title: "Graphics Designer",
        manager: false,
        underEmployees: []
    },

    {
        id: 4,
        employeeName: "bilal",
        title: "Front End Developer (React JS)",
        manager: false,
        underEmployees: []
    },

    {
        id: 5,
        employeeName: "Ahsan",
        title: "SQA Engineer",
        manager: false,
        underEmployees: [4]
    },

    {
        id: 6,
        employeeName: "Zaman",
        title: "Engineer",
        manager: false,
        underEmployees: []
    },
];