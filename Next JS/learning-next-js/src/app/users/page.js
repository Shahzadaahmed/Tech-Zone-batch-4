"use client";

import React, { useEffect, useState } from 'react';

const Users = () => {

    const [usersList, setUsersList] = useState([]);

    // Note: Api call...!
    const apiCall = () => {
        let apiUrl = "https://jsonplaceholder.typicode.com/users";

        fetch(apiUrl)
            .then((success) => {
                // console.log(success);
                return success.json();
            })
            .then((actualData) => {
                console.log(actualData);

                if (actualData && actualData.length > 0) setUsersList(actualData);
            })
            .catch((err) => {
                console.log('SOmething went wrong while integrating api: ', err);
            });
    };

    // Mounted hook...
    useEffect(() => {
        // apiCall();

        if (usersList.length > 0) console.log('Data already fetched');
        else apiCall();
    }, [usersList]);

    return (
        <div>
            <h1> API call in Next JS! </h1>

            <ul>
                {
                    usersList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default Users;

// https://api.openweathermap.org/data/2.5/weather

// https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=4fcd41771cc91187db1651ddcc10916f


// official
// https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=4fcd41771cc91187db1651ddcc10916f