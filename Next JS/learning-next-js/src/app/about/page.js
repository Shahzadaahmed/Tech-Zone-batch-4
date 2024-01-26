// Note: About component...!

'use client';

// Route: /about

import React from 'react'
import { useRouter } from 'next/navigation';
import Header from '@/components/header/header';

const About = () => {

    const router = useRouter();

    // Move screen handler...!
    const goToHome = () => {
        router.push("/");
    };

    return (
        <div>
            <Header screenName="About" />
            <button onClick={goToHome}> Go to home screen </button>
        </div>
    );
};

export default About;