// var a = 2;
// var b = 4;
// var result = eval("2+2");
// console.log(result);


var divEl = document.getElementById("show-output");
// console.log(inputEl);
var btnVal = "";

function clickBtn1(num) {
    console.log(num);

    btnVal = btnVal + (num + "");
    divEl.innerHTML = btnVal;
};

function clickBtn2(num) {
    console.log(num);

    btnVal = btnVal + (num + "");
    divEl.innerHTML = btnVal;
};

function clickOpr(opr) {
    console.log(opr);

    btnVal = btnVal + (opr + "");
    divEl.innerHTML = btnVal;
};

function calculateValue() {

    if (btnVal) {
        var total = btnVal
        total = eval(btnVal);
        console.log(total);

        if ( total ) {
            divEl.innerHTML = "";
            divEl.innerHTML = total;
        }
    }
}