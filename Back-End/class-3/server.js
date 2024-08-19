// Note: Importing required libraries...!
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

// Note: Static variables...!
const app = express();
const port = 8080;
const dbUrl = "mongodb+srv://TechzoneBatch4:techzone123@back-end-development.qzxrypo.mongodb.net/?retryWrites=true&w=majority&appName=Back-End-Development";

// API Methods:
// 1: POST.
// 2: GET.
// 4: DELETE.
// 3: PUT.

// Note: Mongo Database connection / configuration...!
mongoose
    .connect(
        dbUrl,
        { dbName: "TechZOne_DB" }
    )
    .then(() => {
        console.log('Mongo DB connected successfully!');
    })
    .catch(err => {
        console.log(`Something went wrong while connecting to database: ${err}`);
    });

//  User Schema:
const userSchema = new mongoose.Schema(
    {
        userName: String
    },
    {
        collection: "users_list"
    }
);

// User Modal...!
const UserModal = mongoose.model("users_list", userSchema);

// Express middlewares...!
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Note: Api route to save data in database...!
app.post(
    "/user/add",
    (req, res) => {
        const { _userName } = req.body;
        console.log(`User Name: ${_userName}`);

        // 400:
        if (!_userName) {
            return res.status(400).send({
                status: false,
                message: "User name is required!"
            });
        };

        // 200:
        const newUser = new UserModal({
            userName: _userName
        });

        newUser
            .save()
            .then((actualData) => {
                if (actualData) {
                    return res.status(200).send({
                        status: true,
                        message: "User added successfully",
                        data: newUser
                    });
                };
            })
            .catch(err => {
                console.log(`Something went wrong while saving user in DB: ${err}`);
            });
    }
);

// Note: Api route to fetch all data from database...!
app.get(
    "/users/fetch/all",
    async (req, res) => {
        try {
            const counts = await UserModal.find().countDocuments();
            // console.log(`Counts: ${counts}`);

            // 400:
            if (counts < 1) {
                return res.status(400).send({
                    status: false,
                    message: "No data found"
                });
            }

            // 200:
            const users = await UserModal.find();

            return res.status(200).send({
                status: true,
                message: "Users List",
                data: users
            });
        }

        catch (error) {
            console.log(`Something went wrong while fetching users list from DB: ${error}`);

            return res.status(500).send({
                status: false,
                message: "Something went wrong from server side"
            });
        };
    }
);

// Note: Api route to delete data from database...!
app.delete(
    "/user/delete/:id",
    async (req, res) => {
        const { id } = req.params;
        console.log(`Uid: ${id}`);

        try {
            // 200:
            const removeUser = await UserModal.findByIdAndDelete({ _id: id });
            if (removeUser) {
                return res.status(200).send({
                    status: true,
                    message: "User deleted succesfully!"
                });
            };
        }

        catch (error) {
            console.log(`Something went wrong while deleting user from DB: ${error}`);

            // 500:
            return res.status(500).send({
                status: false,
                message: "Something went wrong while deleting user from DB"
            });
        };
    }
);

// Note: Api route to update data in database...!
app.put(
    "/user/update",
    async (req, res) => {
        const { uid, updatedName } = req.body;
        console.log(`User id: ${uid}`);
        console.log(`New name: ${updatedName}`);

        try {
            // 400:
            if (!uid || !updatedName) {
                return res.status(400).send({
                    status: false,
                    message: "User id and updated name is required"
                });
            };

            // 401:
            const isUidValid = mongoose.isValidObjectId(uid);
            console.log(`Uid status: ${isUidValid}`);

            if (!isUidValid) {
                return res.status(401).send({
                    status: false,
                    message: "Invalid user id"
                });
            };

            // 200:
            const updateUser = await UserModal.findByIdAndUpdate(
                { _id: uid },
                { userName: updatedName },
                { new: true }
            );

            if (updateUser) {
                return res.status(200).send({
                    status: true,
                    message: 'User updated successfully',
                    data: updateUser
                });
            };
        }

        catch (error) {
            console.log(`Something went wrong while updating user in DB: ${error}`);

            // 500:
            return res.status(500).send({
                status: false,
                message: "Something went wrong while updating user in DB"
            });
        };
    }
);

// Server run...!
app.listen(
    port,
    () => {
        console.log(`Server is running on http://localhost:${port}`);
    }
);