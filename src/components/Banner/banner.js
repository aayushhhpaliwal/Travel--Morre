import React from "react";
import {
  BannerContainer,
  BannerSecond,
  BannerFirst,
  BannerHead,
  BannerSubHead,
  Test,
  BannerCarouselContainer,
} from "./elements";
import travelmorreLogo from "../../assets/banner.jpg";
import TravelCardForBanner from "../TravelCardForBanner/TravelCardForBanner";
import Carousel from "react-multi-carousel";
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
import { SystemSecurityUpdate } from "@mui/icons-material";

function banner() {
  return (
    <BannerContainer>
      <BannerFirst>
        <BannerSubHead>Explore the World </BannerSubHead>
        <BannerHead>
          Plan your Beautiful
          <br />
          Memories with us
        </BannerHead>
        <hr width="80%"></hr>
        <BannerSubHead>
          <br></br>Discover New Destination ! <br></br>Its Never Too Late, To
          Try Something New{" "}
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
              <img src="Banner/2.jpg" className="bannerimg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="Banner/1.jpg" className="bannerimg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="Banner/3.jpg" className="bannerimg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="Banner/4.jpg" className="bannerimg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="Banner/5.jpg" className="bannerimg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src="Banner/2.jpg" className="bannerimg"></img>
            </SwiperSlide>
          </Swiper>
        </BannerSecond>
      </Test>
    </BannerContainer>
  );
}

export default banner;
