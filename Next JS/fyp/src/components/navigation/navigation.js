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

    // Note: Mounted hook...!
    useEffect(() => {
        if (localStorage.getItem("AuthenticatedUser") != null) {
            let fetchUser = localStorage.getItem("AuthenticatedUser");
            // console.log('User: ', fetchUser);

            if (fetchUser) setAuthUser(fetchUser);
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

                        <MDBNavbarLink>
                            <Link href={'/signup'}>
                                Sign Up
                            </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink>
                            <Link href={'/login'}>
                                Log In
                            </Link>
                        </MDBNavbarLink>

                        <MDBNavbarLink
                            disabled={authUser != null}
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
                    Shahzada Ahmed
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;