var elements = {
    parent: "container"
};

var divEl = document.getElementById(elements.parent);
// console.log(divEl.childNodes[1].innerText);
// console.log(divEl.firstElementChild);
// console.log(divEl.lastElementChild);
// console.log(divEl.lastChild.nodeValue);

// var targetArea = divEl.firstChild;
// console.log(targetArea);

for ( var i = 0; i < divEl.children.length; i++ ) {
    console.log(divEl.children[i].innerText);
}

// var pEl = document.getElementById("top-para");
// console.log(pEl.children);


// var bEl = document.getElementById("first-Para");
// console.log(bEl.parentNode.parentNode.children);


// var p3El = document.getElementById("paragraph3");
// console.log(p3El.nextSibling);
// console.log(p3El.nextElementSibling);

// console.log(p3El.previousSibling.previousSibling);
// console.log(p3El.previousElementSibling);