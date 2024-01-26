// Q: Write a program in JavaScript to remove falsy values from the given array.
// Example: [0, 1, false, 2, '', 3, 'a', undefined, 'e', 23, NaN, 's', 34]

// Solution:
/*
const cleanData = (array) => {
    console.log('Array: ', array);

    let falsyArr = [false, 0, "", NaN, undefined, null];
    let filterArr = array.filter((item) => { return !falsyArr.includes(item) });
    console.log('Clean Arr: ', filterArr);
};

const arr = [0, 1, false, 2, '', 3, 'a', undefined, 'e', 23, NaN, 's', 34];
cleanData(arr);
*/














// Q: Write a program in JavaScript to find the longest word from the given array.
// Example: ["web", "applications", "designing", "mobile", "development"]

const findLongestWord = (array) => {
    // console.log("Array: ", array);

    let longestWord = "";
    // console.log(longestWord.length);

    for (let items of array) {
        // console.log(items);

        if (items.length > longestWord.length) longestWord = items;
    };

    console.log('Longest word: ', longestWord);
};

const arr = ["web", "applications", "designing", "mobile", "development"];
findLongestWord(arr);