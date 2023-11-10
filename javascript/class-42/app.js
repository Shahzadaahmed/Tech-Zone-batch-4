// let secondPromise = new Promise((resolve, reject) => {
//     let userInput = prompt('Enter your employee id!');

//     if (['123', '456', '789'].includes(userInput)) resolve('This is an active employee!');
//     else reject('Id no longer exist!');
// });

// secondPromise
//     .then((data) => {
//         console.log('Success:', data);
//     })
//     .catch((err) => {
//         console.log('Something went wrong with the second promise: ', err);
//     });


// API Integration in JavaScript

let ulEl = document.getElementById("list");

const apiCall = () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch()
        .then((response) => {
            // console.log(response);
            // console.log(response.json());

            if (response) return response.json();
        })
        .then((actualData) => {
            console.log(actualData);

            if (actualData && actualData.length > 0) {
                ulEl.innerHTML = actualData.map((item, index) => {
                    return (
                        `<li> ${item.name} </li>`
                    );
                }).join("");
            };
        })
        .catch((err) => {
            console.log("Something went wrong while api integration: ", err);
        });
};

apiCall();