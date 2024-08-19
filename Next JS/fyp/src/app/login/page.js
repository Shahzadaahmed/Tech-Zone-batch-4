// Note: LogIn component...!

"use client"
import React, { useState, useEffect } from 'react';

const LogIn = () => {

    // States...!
    const [formStates, setFormStates] = useState({
        email: "",
        password: ""
    });
    const [users, setUsers] = useState([]);

    // Note: CLear states....!
    const clearStates = () => {
        setFormStates({
            email: "",
            password: ""
        });
    };

    // Note: FUnction to log in user...!
    const logInUser = () => {
        // console.log('Users: ', users);
        // console.log('Form Data: ', formStates);

        let userFound = false;
        let isUserFound = null;

        // Note: Searching for user...!
        for (let i = 0; i < users.length; i++) {
            // console.log(users[i]);

            if (users[i].email == formStates.email) {
                userFound = true;
                isUserFound = users[i];
                break;
            };
        };

        // Note: User found...!

        if (!userFound) alert("User does not exist!");
        else if (isUserFound.password != formStates.password) alert("Password did not match!");
        else {
            console.log('Finaly user found: ', isUserFound);
            localStorage.setItem("AuthenticatedUser", JSON.stringify(isUserFound));
            window.location.reload();
            alert("You have logged in successfully!");
            clearStates();
        }
    };

    // Note: Mounted hook...!
    useEffect(() => {
        // Fetching users from local storage...!
        let fetchUsers = localStorage.getItem("UsersList");
        let jsonData = JSON.parse(fetchUsers);
        setUsers(jsonData);
    }, []);

    return (
        <div>
            <h1> Log In Screen! </h1>

            <label>
                Email:
                <input
                    type='email'
                    placeholder='abc@xyz.com'
                    value={formStates.email}
                    onChange={(e) => setFormStates({ ...formStates, email: e.target.value })}
                />
            </label> <br />

            <label>
                Pasword:
                <input
                    type='password'
                    placeholder='*****'
                    value={formStates.password}
                    onChange={(e) => setFormStates({ ...formStates, password: e.target.value })}
                />
            </label> <br />

            <button onClick={logInUser}>
                Log In
            </button>
        </div>
    );
};

export default LogIn;