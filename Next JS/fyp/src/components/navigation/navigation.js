// Note: Navigation component...!

"use client";

import React, { useState, useEffect } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';
import Link from 'next/link';

const Navbar = () => {
    const [openNavSecond, setOpenNavSecond] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const [currentOrder, setCurrentOrder] = useState([]);

    // Note: Mounted hook...!
    useEffect(() => {
        if (localStorage.getItem("AuthenticatedUser") != null) {
            let fetchUser = localStorage.getItem("AuthenticatedUser");
            let actualUser = JSON.parse(fetchUser);
            console.log('Userrrrr: ', actualUser);
            if (fetchUser) setAuthUser(actualUser);
        };
    }, []);

    // Note: FUnction to log out user...!
    const logOutUser = () => {
        localStorage.setItem("AuthenticatedUser", JSON.stringify(null));
        window.location.reload();
        alert("You have logged out successfully!");
    };

    useEffect(() => {
        if (localStorage.getItem("YourOrder") != null) {
            let fetchCurrentOrder = localStorage.getItem("YourOrder");
            let jsonData = JSON.parse(fetchCurrentOrder);
            console.log(jsonData);
            setCurrentOrder(jsonData);
        };
    }, []);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>

                <MDBNavbarBrand href='#'>
                    E-Store App
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNavSecond(!openNavSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNavSecond}>
                    <MDBNavbarNav>
                        <MDBNavbarLink>
                            <Link href={'/'}>
                                Products
                            </Link>
                        </MDBNavbarLink>

                        {
                            (authUser && authUser?.email == "admin@gmail.com") ?
                                (
                                    <MDBNavbarLink>
                                        <Link href={'/add-product'}>
                                            Add Product
                                        </Link>
                                    </MDBNavbarLink>
                                )
                                : (null)
                        }

                        <MDBNavbarLink
                            disabled={authUser != null}
                        >
                            <Link href={'/signup'}>
                                Sign Up
                            </Link>
                        </MDBNavbarLink>

                        {
                            authUser ?
                                (
                                    <button onClick={logOutUser}>
                                        Log Out
                                    </button>
                                ) :
                                (
                                    <MDBNavbarLink>
                                        <Link href={'/login'}>
                                            Log In
                                        </Link>
                                    </MDBNavbarLink>
                                )
                        }

                        <MDBNavbarLink
                            disabled={authUser == null}
                        >
                            <Link href={'/cart'}>
                                Your Cart {currentOrder.length > 0 ? (<sup> {currentOrder.length} </sup>) : null}
                            </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink
                            disabled={authUser == null}
                        >
                            <Link href={'/orders'}>
                                Orders
                            </Link>
                        </MDBNavbarLink>
                    </MDBNavbarNav>
                </MDBCollapse>

                <MDBInputGroup
                    tag="form"
                    className='d-flex w-auto mb-3'
                    style={{
                        paddingTop: "20px"
                    }}
                >
                    {authUser ? authUser.name : 'No User'}
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;