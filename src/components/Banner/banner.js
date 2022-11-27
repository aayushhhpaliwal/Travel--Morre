import React from "react";
import {
  BannerContainer,
  BannerSecond,
  BannerFirst,
  BannerHead,
  BannerSubHead,
  Test,
} from "./elements";
import "react-multi-carousel/lib/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/less/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Navigation } from "swiper";
import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

function banner() {
  return (
    <BannerContainer>
      <BannerFirst>
        {/* <BannerSubHead> </BannerSubHead> */}
        <BannerHead>Plan your trip with us</BannerHead>
        <hr width="80%"></hr>
        <BannerSubHead>
          <br></br>Explore New Destination At Best Price ! <br></br>Try
          Customized Trips, Curated by us and Selected by you.
        </BannerSubHead>
      </BannerFirst>

      <Test>
        <BannerSecond>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Navigation]}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                alt="secondBannerImage"
                src="Banner/2.jpg"
                className="bannerimg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="secondBannerImage"
                src="Banner/1.jpg"
                className="bannerimg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="secondBannerImage"
                src="Banner/3.jpg"
                className="bannerimg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="secondBannerImage"
                src="Banner/5.jpg"
                className="bannerimg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="secondBannerImage"
                src="Banner/2.jpg"
                className="bannerimg"
              ></img>
            </SwiperSlide>
          </Swiper>
        </BannerSecond>
      </Test>
    </BannerContainer>
  );
}

export default banner;
