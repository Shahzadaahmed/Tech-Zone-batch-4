// Note: Importing required libraries...!
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const techIndustries = require("./dummy-data/dummy-data.js");

// Note: Static variables...!
const app = express();
const port = 8081;
let bucket = [];

// Express middlewares...!
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Note: We hace 4 methods to create an api...!
// 1: GET
// 2: POST
// 3: DELETE
// 4: PUT

// GET: For fetching data...!

// Note: Defualt / route...!
app.get(
    "/",
    (req, res) => {
        return res.status(200).send({
            status: true,
            message: "Welcome to server!"
        });
    }
);



// Note: /companies route...!
app.get(
    "/companies",
    (req, res) => {
        // 400:
        if (techIndustries.length < 1) {
            return res.status(400).send({
                status: false,
                message: "No Data"
            });
        };

        // 200:
        return res.status(200).send({
            status: true,
            message: "Tech Industries",
            data: techIndustries
        });
    }
);


/***** CRUD App using Node JS *****/

// Note: /todos route - GET...!
app.get(
    "/todos",
    (req, res) => {
        // 400:
        if (bucket.length < 1) {
            return res.status(400).send({
                status: false,
                message: "No Data!"
            });
        };

        // 200:
        const bucketClone = [...bucket];

        return res.status(200).send({
            status: true,
            message: "Todo Items",
            data: bucketClone
        });
    }
);


// Note: /add-todo route - POST...!
app.post(
    "/add-todo",
    (req, res) => {
        const { todoInput } = req.body;
        console.log(`Body: ${todoInput}`);

        // 400:
        if (!todoInput) {
            return res.status(400).send({
                status: false,
                message: "todoInput is required"
            });
        };

        // 200:
        let bucketClone = [...bucket];
        bucketClone.push(todoInput);
        bucket = bucketClone;

        return res.status(200).send({
            status: true,
            message: "Item added successfully"
        });
    }
);


// Note: /todo/delete/:id route - DELETE...!
app.delete(
    "/todo/delete/:id",
    (req, res) => {
        const { id } = req.params;
        console.log(`Todo Id: ${id}`);

        const bucketClone = [...bucket];

        // 400:
        if (bucketClone.length < 1) {
            return res.status(400).send({
                status: false,
                message: "No item found"
            });
        };

        // 200:
        bucketClone.splice(id, 1);
        bucket = bucketClone;

        return res.status(200).send({
            status: true,
            message: "Item deleted successfully"
        });
    }
);


// Note: /todo/update route - PUT...!
app.put(
    "/todo/update",
    (req, res) => {
        let { index, updatedValue } = req.body;
        console.log(`Index: ${index}`);
        console.log(`New Value: ${updatedValue}`);

        const bucketClone = [...bucket];

        // 400:
        if (!index || !updatedValue) {
            return res.status(400).send({
                status: false,
                message: "All properties are required!"
            });
        };

        // 404:
        if (bucketClone.length < 1) {
            return res.status(404).send({
                status: false,
                message: "No data found"
            });
        };

        // 200:
        bucketClone.splice(index, 1, updatedValue);
        bucket = bucketClone;

        return res.status(200).send({
            status: true,
            message: "Item updated successfully"
        });
    }
);

// Server run...!
app.listen(
    port,
    () => {
        console.log(`Server is running on http://localhost:${port}`);
    }
);