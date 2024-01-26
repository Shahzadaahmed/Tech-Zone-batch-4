// Note: Contact component...!

// Route: /contact

// import React from 'react';

// const Contact = () => {
//     console.log('Working!');

//     return (
//         <div>
//             <h1> Contact Screen! </h1>
//         </div>
//     );
// };

// export default Contact;




"use client";
import React, { Component } from 'react';

// class component...!
class ContactScreen extends Component {
    constructor() {
        super();

        this.state = {
            color: "blue",
            count: 0,
            arr: []
        };
    };

    // Function to update color state...!
    updateColorState = () => {
        this.setState({
            color: "red",
            count: 1
        });
    };

    // Mounted life cycle event...!
    componentDidMount() {
        console.log('Component rendered successfully!');

        this.setState({
            color: "black"
        });
    };

    render() {
        // console.log('Hello class!');

        return (
            <div>
                <h1> Welcome to class components in Next JS! </h1>
                <h2> Oop topic! </h2>
                <h2> Fav color: {this.state.color} </h2>

                <button onClick={this.updateColorState}> Update State </button>
            </div>
        );
    };
};

export default ContactScreen;