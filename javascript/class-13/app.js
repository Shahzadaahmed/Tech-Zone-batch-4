// for (var i = 1; i <= 3; i++) {
//     console.log("i " + i);

//     for (var j = 1; j <= 5; j++) {
//         console.log("j " + j);
//     };
// };



// var seniors = ["munawar", "faraz", "hammad", "abbas"];
// var juniors = ["ahmed", "ali", "umer", "asghar"];

// for (var i = 0; i < seniors.length; i++) {
//     console.log(seniors[i]);

//     for (var j = 0; j < juniors.length; j++) {
//         console.log(seniors[i] + " " + juniors[j]);
//     };
// };



// for (var i = 1; i <= 3; i++) {
//     console.log("i " + i);

//     for (var j = 1; j <= i; j++) {
//         console.log("j " + j);
//     };
// };

// var star = "*****";

// for (var i = 1; i <= 5; i++) {
//     // console.log(star);
//     document.write(star, "<br />");
// };



// var fullName = "muhammad ahmed";
// fullName = fullName.replace("ahmed", "ali");
// console.log(fullName.length);


// var sentence = "the quick brown fox jump over the lazy dog";
// console.log(sentence);
// console.log(typeof sentence);

// var strToArr = sentence.split(" ");
// // console.log(strToArr);

// for (var i = 0; i < strToArr.length; i++) {
//     // console.log(strToArr[i]);

//     if (strToArr[i] == "the") {
//         strToArr[i] = "a"
//     };
// };

// // console.log(strToArr);

// var arrToStr = strToArr.join(" ");
// console.log(arrToStr);

var sentence = "the quick brown fox jump over the lazy dog";
sentence = sentence.replaceAll("the", "a");
console.log(sentence);