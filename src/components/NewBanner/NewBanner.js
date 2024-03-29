import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function NewBanner() {
  return (
    <div style={{ borderRadius: "100rem" }}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper1"
        id="myTopBannerSwiper"
        loop={true}
      >
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/dubai02.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/maldives5.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/maldives3.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/maldives4.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/maldives6.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/kerala1.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/maldives1.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/maldives2.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/thailand1.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="topBannerImage"
            src="New/thailand2.jpg"
            className="bannerimg1"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
