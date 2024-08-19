// Note: SignUp component...!

"use client"
import React, { useState, useEffect } from 'react';

const SignUp = () => {

    // States...!
    const [formStates, setFormStates] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [users, setUsers] = useState([]);

    // Note: CLear states....!
    const clearStates = () => {
        setFormStates({
            name: "",
            email: "",
            password: ""
        });
    };

    // Note: Check duplicate user...!
    const checkDuplicateUser = (email) => {
        let duplicateFound = false;

        let usersClone = [...users];
        for (let items of usersClone) {
            // console.log('User: ', items);

            if (items.email == email) {
                duplicateFound = true;
                break;
            };
        };

        return duplicateFound;
    };

    // Note: Function to register user...!
    const saveUser = () => {
        // console.log(formStates);

        let isDuplicate = checkDuplicateUser(formStates.email);
        // console.log('DuplicateFound: ', isDuplicate);

        if (isDuplicate) {
            alert(`User with the email address ${formStates.email} has already saved!`);
        }

        else {
            let fetchUsers = [...users]
            fetchUsers.push(formStates);
            setUsers(fetchUsers);
            localStorage.setItem("UsersList", JSON.stringify(fetchUsers));
            clearStates();
            alert("User saved successfully!");
        };
    };

    // Note: Mounted hook...!
    useEffect(() => { // For UsersList
        if (localStorage.getItem("UsersList") != null) {
            let fetchUsers = localStorage.getItem("UsersList");
            let jsonData = JSON.parse(fetchUsers);
            setUsers(jsonData);
            // console.log('Users fetched successfully: ', jsonData);
        }

        else localStorage.setItem("UsersList", JSON.stringify([]));
    }, []);

    // Note: This hook will work on every update of users state...!
    // useEffect(() => {
    //     console.log('Users: ', users);
    // }, [users]);

    return (
        <div>
            <h1> SignUp Screen! </h1>

            <label>
                Name:
                <input
                    type='text'
                    placeholder='Enter Your Name'
                    value={formStates.name}
                    onChange={(e) => setFormStates({ ...formStates, name: e.target.value })}
                />
            </label> <br />

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

            <button onClick={saveUser}>
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;