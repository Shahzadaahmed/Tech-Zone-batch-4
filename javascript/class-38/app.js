let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

// Note: Find intersection...!
// let intersectionData = arr1.filter((item, index) => {
//     // console.log(item);
//     return arr2.includes(item);
// });

// console.log('Intersection Data: ', intersectionData);


// Note: Find union...!

let mixedArr = [...arr1, ...arr2];
// console.log(mixedArr);

// let unionArr = mixedArr.filter((item, index) => {
//     console.log("Elements: ", item, "Key: ", index);

//     return mixedArr.indexOf(item) == index;
// });

// console.log('Union Data: ', unionArr);


// console.log(['1', '2', '3'].indexOf('3'))


const unionData = (arr) => {
    console.log('Arr: ', arr);

    let uniqueItems = [];

    for (let items of arr) {
        console.log(items);

        if (!uniqueItems.includes(items)) {
            uniqueItems.push(items);
        };
    };

    console.log('Union Data: ', uniqueItems);
}

unionData(mixedArr);