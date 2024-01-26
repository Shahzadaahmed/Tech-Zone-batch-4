// Navbar component...!

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';

import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#' className={styles.header}>Navigation bar</MDBNavbarBrand>

                {/* Tooggler */}
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>


                <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link href={'/'}> Home </Link>
                            </MDBNavbarLink>

                            {/* <Link href={'/'}> Home </Link> */}
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link href={'/about'}> About </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link href={'/contact'}> Contact </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link href={'/other'}> Other </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link href={'/users'}> Users </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link href={'/image-slider'}> Slider </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
};

export default Navbar;