import React, { useState } from 'react'
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNav.module.css"
import { ReactComponent as LeftArrow } from '../../../Assets/left-nav.svg';
import { useEffect } from 'react';

export default function CarouselLeftNav() {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning)


    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsBeginning(swiper.isBeginning)
        })
    }, [])

    return (
        <div className={styles.LeftNav}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )
}
