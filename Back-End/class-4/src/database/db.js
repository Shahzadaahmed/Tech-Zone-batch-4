// Note: Mongo Database configuration file...!

const mongoose = require("mongoose");
const dbName = "TechZOne_DB";
const dbUrl = "mongodb+srv://TechzoneBatch4:techzone123@back-end-development.qzxrypo.mongodb.net/?retryWrites=true&w=majority&appName=Back-End-Development";

const connectMongoDb = async () => {
    try {
        const isDbConnected = await mongoose.connect(
            dbUrl,
            { dbName: dbName }
        );

        isDbConnected && console.log("Mongo DB connected successfully!");
    }

    catch (error) {
        console.log(`Something went wrong while connecting DB: ${error}`);
    };
};

module.exports = connectMongoDb;