function testing(params) {
    console.log('Parameters: ', params);
};

function btn2Handler(num) {
    console.log('Num: ', Number(num));
}


function mouseOverHandler() {
    console.log('Cursor is on image!');
};


function mouseOutHandler() {
    console.log('Cursor is not on image!');
};

function imageHandler(params) {
    console.log(params);
    var replaceUrl = "./images/cup.jpg";
    if (params) { params.src = replaceUrl };
}