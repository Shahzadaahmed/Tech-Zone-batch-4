// Note: All user related routes / api's are defined here...!

const express = require("express");
const router = express.Router();
const UserModal = require('../../models/user-model/user-model');

// Note: Api route to greet user...!
router.get(
    '/user/greet',
    (req, res) => {
        return res.status(200).send("<h1> Welcome to Node JS! </h1>");
    }
);

// Note: Api route to fetch all users...!
router.get(
    "/users/fetch/all",
    (req, res) => {
        const users = ["John", "Smith", 'Nick'];
        return res.status(200).send({
            status: true,
            message: "Users list",
            data: users
        });
    }
);

module.exports = router;