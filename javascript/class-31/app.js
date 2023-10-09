// var divEl = document.getElementById("container");

// var h1El = document.createElement("h1");
// // console.log(h1El);

// var h1Text = document.createTextNode("Hello JS Class");

// h1El.appendChild(h1Text);

// // console.log(h1El);

// h1El.setAttribute("class", "header");

// divEl.appendChild(h1El);

var ulEl = document.getElementById("ul");
var inputEl = document.getElementById("todo-input");

function addItem() {
    var liTag = document.createElement('li');
    var liText = document.createTextNode(inputEl.value);

    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete Item");

    delBtn.appendChild(delBtnText);

    liTag.appendChild(liText);
    liTag.appendChild(delBtn);

    ulEl.appendChild(liTag);
    inputEl.value = "";
}