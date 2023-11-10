// var div = document.getElementById("main-container");
// console.log(div);

// function changeBgColor() {
//     // if (div.style.backgroundColor === "yellow") {
//     //     div.style.backgroundColor = "blue";
//     // }

//     // else {
//     //     div.style.backgroundColor = "yellow";
//     // };

//     var dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// };



var showValue = document.getElementById("show");
var inputValues = "";

function click1(num) {
    console.log(num);
    inputValues = inputValues + num;
    // console.log(typeof (num));
    showValue.innerHTML = inputValues;
};

function click2(num) {
    console.log(num);
    inputValues = inputValues + num;
    showValue.innerHTML = inputValues;
};

function plus(opr) {
    console.log(opr);
    inputValues = inputValues + opr;
    showValue.innerHTML = inputValues;
};

function calculateValues() {
    if (inputValues != "") {
        var total = eval(inputValues);
        console.log(total);
        showValue.innerHTML = total;
    }
};


var result = eval('2 + 4 + 10');
console.log(result);