import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper1">
           <SwiperSlide>
      <img src="Banner/3.jpg" className="bannerimg1"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src="Banner/4.jpg" className="bannerimg1"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src="Banner/5.jpg" className="bannerimg1"></img>
      </SwiperSlide>
     
      </Swiper>
    </>
  );
}
