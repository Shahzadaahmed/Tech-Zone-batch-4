// var listEl = document.getElementById("list");
// var targetLi = document.getElementById("apple-li");

// // console.log(listEl.firstElementChild);
// // console.log(targetLi);

// function removeHtmlTags() {
//     // listEl.removeChild(listEl.firstElementChild);
//     listEl.removeChild(targetLi);
//     // listEl.removeChild(listEl.lastElementChild);
// };


// function reloadHandler() {
//     window.location.reload();
//     // console.log(window.location);
// };

var imageEl = document.getElementById("dice-image");

function playDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    // console.log(imageEl.src);

    var newUrl = "./images/Dice" + dice + ".PNG";
    // console.log(newUrl);

    imageEl.src = newUrl;
    abc();
};


var playBtn = document.getElementById("play-btn");
// console.log(playBtn);

playBtn.disabled = true;