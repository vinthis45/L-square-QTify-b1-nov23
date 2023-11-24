import React, { useState } from 'react'
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNav.module.css"
import { ReactComponent as RightArrow } from '../../../Assets/right-nav.svg';
import { useEffect } from 'react';

export default function CarouselRightNav() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd)


    useEffect(() => {
        swiper.on("slideChange", function () {
            setIsEnd(swiper.isEnd)
        })
    }, [])

    return (
        <div className={styles.RightNav}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}
