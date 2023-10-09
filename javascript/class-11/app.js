var num = 5;
console.log(++num);  // Pre increament


var num = 5;
num++;
console.log(num);  // Post increament



var num = 5;
var equation = num++ + ++num;
console.log(equation);

console.log(num++ + ++num);
console.log();

var num = 5;
var eq = ++num + ++num + 2;
console.log(eq);




for (var i = 0; i < 10; i++) {
    console.log(i);
};





for (var j = 2; j <= 8; j++) {
    console.log(j);
};



for (var i = 10; i >= 5; i--) {
    console.log(i);
};



var animalsArr = ["lion", 'cat', 'mouse', 'deer', 'horse'];
console.log(animalsArr);

for (var i = 0; i < animalsArr.length; i++) {
    console.log(i, animalsArr[i]);
};


for (var i = animalsArr.length - 1; i >= 0; i--) {
    console.log(animalsArr[i]);
};

for (var i = 1; i <= 10; i++) {
    console.log(i);

    if (i == 5) {
        break;
    };
};