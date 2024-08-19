// Note: Importing required libraries...!
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const nodemailer = require("nodemailer");

const connectMongoDb = require("./src/database/db");
const UserModal = require("./src/models/user-model/user-model");
const credentials = require('./src/credentials/credentials');
const mongoose = require("mongoose");

const userRoutes = require("./src/routes/user-routes/user-routes");

// Note: Static variables...!
const app = express();
const port = 8080;

// Note: Connect DB...!
connectMongoDb();

// Express middlewares...!
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Note: Merging routes...!
app.use('/api', userRoutes);

// Note: Default / route Api...!
app.get(
    "/",
    (req, res) => {
        return res.redirect("https://www.google.com.pk");
        // return res.status(200).send({
        //     status: true,
        //     message: "Welcome to Back-End Development!"
        // });
    }
);



// Note: Api route to create user / save user...!
app.post(
    "/user/register",
    async (req, res) => {
        const {
            userName,
            userNum,
            userEmail,
            userPassword
        } = req.body;
        // console.log(`User data: ${JSON.stringify(req.body)}`);

        try {
            // 400:
            if (!userName || !userNum || !userEmail || !userPassword) {
                return res.status(400).send({
                    status: false,
                    message: "All fields are required!"
                });
            };

            // 404:
            const isUserExist = await UserModal.findOne({ email: userEmail });

            if (isUserExist) {
                return res.status(404).send({
                    status: false,
                    message: "User already exist"
                });
            };

            // Note: Encoding password...!
            const encodedPassword = btoa(userPassword);

            const userToSave = {
                userName,
                contactNum: userNum,
                email: userEmail,
                password: encodedPassword
            };

            // 200:
            const newUser = new UserModal(userToSave);
            const saveUser = await newUser.save();
            // console.log(`Save user: ${saveUser}`);

            if (saveUser) {
                return res.status(200).send({
                    status: true,
                    message: "User registered successfully!",
                    data: newUser
                });
            };
        }

        catch (error) {
            console.log(`Someting went wrong while saving user in DB: ${error}`);

            // 500:
            return res.status(500).send({
                status: false,
                message: "Someting went wrong while saving user in DB"
            });
        };
    }
);



// Note: Api route to login user...!
app.post(
    "/user/login",
    async (req, res) => {
        const { email, password } = req.body;
        try {
            // 400:
            if (!email || !password) {
                return res.status(400).send({
                    status: false,
                    message: "Email and password required!"
                });
            };

            // 401:
            const isUserExist = await UserModal.findOne({ email });
            // console.log(`Is user exist: ${isUserExist}`);

            if (!isUserExist) {
                return res.status(401).send({
                    status: false,
                    message: "User does not exist"
                });
            };

            // 402:
            const userPass = isUserExist.password;
            const decodePassword = atob(userPass);
            // console.log(`Decoded password: ${decodePassword}`);

            if (password != decodePassword) {
                return res.status(402).send({
                    status: false,
                    message: "Invalid password"
                });
            };

            // 200:
            return res.status(200).send({
                status: true,
                message: "You have logged in successfully",
                data: isUserExist
            });
        }

        catch (error) {
            // 500:
            console.log(`Something went wrong while login user: ${error}`);
            return res.status(500).send({
                status: false,
                message: "Something went wrong while login user"
            });
        };
    }
);



// Note: Function to send email to user...!
const sendEmailToUser = (email, url, uid) => {
    // console.log(`User email: ${email}`);

    let isMailSent = true;

    const encryptedId = btoa(uid);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: credentials.email,
            pass: credentials.password
        }
    });

    const receiverDetails = {
        from: credentials.email,
        to: email,
        subject: "Email Verification",
        text: `
        Please click the link and forget the password: ${url}
        User id: ${encryptedId}
        `
    };

    transporter.sendMail(
        receiverDetails,
        (err, emailInfo) => {
            if (!err) {
                // console.log('Email sent successfully: ', emailInfo);
            }

            else {
                isMailSent = false;
                console.log(`Something wong while sending email to user: ${err}`);
            };
        }
    );

    // console.log(`Status: ${isMailSent}`);
    return isMailSent;
};



// Note: Api route to verify user...!
app.post(
    "/user/verify",
    async (req, res) => {
        const { email } = req.body;

        try {
            // 400:
            if (!email) {
                return res.status(400).send({
                    status: false,
                    message: "Email is required"
                });
            };

            // 401:
            const isUserExist = await UserModal.findOne({ email });

            if (!isUserExist) {
                return res.status(401).send({
                    status: false,
                    message: "Account does not exist"
                });
            };

            // 200:
            const redirectedUrl = `http://localhost:8080/user/forgetPassword/portal`;
            const isEmailSent = sendEmailToUser(email, redirectedUrl, isUserExist._id);
            // console.log(`Email sent status: ${isEmailSent}`);

            if (isEmailSent) {
                return res.status(200).send({
                    status: true,
                    message: "Email verified successfully kindly check your email!"
                });
            };
        }

        catch (error) {
            // 500:
            console.log(`Something went wrong while verifying user: ${error}`);
            return res.status(500).send({
                status: false,
                message: "Something went wrong while verifying user"
            });
        };
    }
);



// Note: Api route to go to forget password web portal...!
app.get(
    "/user/forgetPassword/portal",
    (req, res) => {
        // const { id } = req.params;
        // console.log(`Uid: ${id}`);

        const webPortalUrl = "https://tech-zone-berry.surge.sh/";
        return res.redirect(webPortalUrl);
    }
);



// Note: Api route to go to update password...!\
app.put(
    "/user/update/password",
    async (req, res) => {
        const { userId, newPassword } = req.body;
        console.log(`Uid: ${userId}`);
        console.log(`New password: ${newPassword}`);

        try {
            // 400:
            if (!userId || !newPassword) {
                return res.status(400).send({
                    status: false,
                    message: "User id and new password required"
                });
            };

            const decodeUid = atob(userId);

            // 401:
            const isIdValid = mongoose.isValidObjectId(decodeUid);
            console.log(`Is id valid: ${isIdValid}`);

            if (!isIdValid) {
                return res.status(401).send({
                    status: false,
                    message: "Invalid user id"
                });
            };

            // 200:
            const encodeNewPassword = btoa(newPassword);
            const updatedUser = await UserModal.findByIdAndUpdate(
                decodeUid,
                { password: encodeNewPassword },
                { new: true }
            );

            if (updatedUser) {
                return res.status(200).send({
                    status: true,
                    message: "Password updated successfully",
                    data: updatedUser
                });
            };
        }

        catch (error) {
            // 500:
            console.log(`Something went wrong while updating password: ${error}`);
            return res.status(500).send({
                status: false,
                message: "Something went wrong while updating password"
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