var imgEl = document.getElementById("custom-img");
// console.log(imgEl.attributes);

var checkAttribute = imgEl.hasAttribute("title");
// console.log(checkAttribute);

var fetchAttribute = imgEl.getAttribute('alt');
// console.log(fetchAttribute);

imgEl.setAttribute("title", "Gaming Keyboard");

// imgEl.setAttribute("onclick", "updateUrl()");

imgEl.setAttribute("onmouseover", "updateUrl()");
imgEl.setAttribute("onmouseout", "previousUrl()");

console.log(imgEl);
// console.log(imgEl.src);

function updateUrl() {
    var newUrl = "./images/computer.avif";
    imgEl.src = newUrl;

    imgEl.setAttribute("class", "img");
    console.log(imgEl);
};

function previousUrl() {
    var newUrl = "./images/keyboard.webp";
    imgEl.src = newUrl;
    imgEl.removeAttribute('class');
    console.log(imgEl);
};