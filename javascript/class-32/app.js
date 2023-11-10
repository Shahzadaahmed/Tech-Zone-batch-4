// var str = "tiger";
// console.log(str);
// console.log(typeof str);

var bioData = {
    institute: "Tech Zone",
    branch: 1
};

var alphabets = ["a", "b", "c"];
var arrInStr = JSON.stringify(alphabets);

// console.log(bioData);
// console.log(typeof (bioData));

var dataInStr = JSON.stringify(bioData);
// console.log(dataInStr);
// console.log(typeof (dataInStr));

// Note: Saving data in local store (database)
localStorage.setItem("Info", dataInStr);
localStorage.setItem("Trainer", "Ahmed");
localStorage.setItem("Alphabets", arrInStr);


// Note: Fetching data from local store (database)

var fetchBioData = localStorage.getItem("Info");
// console.log(fetchBioData);

var dataInJson = JSON.parse(fetchBioData);
// console.log(dataInJson);


function handler() {
    // localStorage.removeItem("Trainer");
    // localStorage.clear();


    if (localStorage.getItem('Trainer') != null) {
        var fetchTrainerData = localStorage.getItem("Trainer");
        console.log('Trainer: ', fetchTrainerData);
    }

    else {
        console.log('No trainer data available');
        console.log(localStorage.getItem('Trainer'));
    }
};