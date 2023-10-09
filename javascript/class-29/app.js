// Elements

var errorEl = document.getElementById("show-error");
var userNameEl = document.getElementById('username');
var emailEl = document.getElementById("email");
var passwordEl = document.getElementById("password");

function clearAll() {
    userNameEl.value = "";
    emailEl.value = "";
    passwordEl.value = "";
};

function hideErr() {
    setTimeout(function () {
        errorEl.innerHTML = "";
    }, 3000);
};

function submitForm() {
    // console.log(userNameEl.value);
    // userNameEl.value = "";
    // userNameEl.focus();

    var user = {
        userName: userNameEl.value,
        email: emailEl.value,
        password: passwordEl.value
    };

    if (user.userName.trim().length < 1) {
        errorEl.innerHTML = "Username is required!";
        hideErr();
    }

    else if (user.email.trim().length < 1) {
        errorEl.innerHTML = "Email is required!";
        hideErr();
    }

    else if (user.password.length <= 6) {
        errorEl.innerHTML = "Password length should be greater than 6!";
        hideErr();
    }

    else {
        console.log("User: ", user);
        clearAll();
        // window.location = "https://www.google.com.pk";
        window.location = "./about.html";
    };
};



// var str = "  abcxyz   ";
// console.log(str.trim());
// console.log(str.trim().length);