import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import styles from "./Carousel.module.css";
import CarouselLeftNav from "./CarouselLeftNav/CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav/CarouselRightNav";

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0, 1);
    }, [data])
    return <></>
}
export default function Carousel({data, renderComponent}) {
    return (
        <div className={styles.wrapper}>
            <Swiper
                style={{ padding: "0px 20px" }}
                initialSlide={0}
                modules={[Navigation]}
                slidesPerView={"auto"}
                spaceBetween={40}
                allowTouchMove>
                <Controls data={data} />
                <CarouselLeftNav />
                <CarouselRightNav />
                {data.map(ele => (
                   <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
