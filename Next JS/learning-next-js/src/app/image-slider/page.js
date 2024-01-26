// Note: ImageSlider component...!

"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Img1 from "@/images/slider-images/pikachu.png";
import Img2 from "@/images/slider-images/moltress.jpg";
import Img3 from "@/images/slider-images/charizard.jpg";
import Img4 from "@/images/slider-images/ho-oh.jpg";
import Img5 from "@/images/slider-images/mewtwo.jpg";

// let arr = ["Google", "Microsoft", "Facebook", "Apple", "Twitter"];
let arr = [Img1, Img2, Img3, Img4, Img5];

const ImageSlider = () => {

    // States...!
    let [initialCount, setInitialCount] = useState(0);
    let [sliderItems, setSliderItems] = useState(arr);

    // Note: Interval handler...!
    const sliderInterval = () => {
        setTimeout(() => {

            if (initialCount == sliderItems.length - 1) setInitialCount(0);
            else setInitialCount(initialCount + 1);
        }, 1000);
    };

    // Note: Mounted hook...!
    useEffect(() => {
        sliderInterval();
    }, [initialCount]);

    return (
        <div>
            <h1> Image Slider Next JS! </h1>
            {/* <h2> Slider Items: {sliderItems[initialCount]} </h2> */}

            <Image
                src={sliderItems[initialCount]}
                alt='Pokemon'
                priority={true}
                height={300}
                width={300}
                style={{ margin: "10px" }}
            />
        </div>
    );
};

export default ImageSlider;