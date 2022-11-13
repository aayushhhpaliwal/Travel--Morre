import React from "react";
import {
  BannerContainer,
  BannerSecond,
  BannerFirst,
  BannerHead,
  BannerSubHead,
  Test,
} from "./elements";
import travelmorreLogo from "../../assets/banner.jpg";
import TravelCardForBanner from "../TravelCardForBanner/TravelCardForBanner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SystemSecurityUpdate } from "@mui/icons-material";

function banner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
          <div
            style={{
              width: "60rem",
              height: "50rem",
              marginTop: "30rem",
            }}
          >
            <Carousel
              responsive={responsive}
              draggable={true}
              showDots={true}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {[...Array(5)].map((index) => (
                <TravelCardForBanner></TravelCardForBanner>
              ))}
            </Carousel>
          </div>
        </BannerSecond>
      </Test>

      <></>
    </BannerContainer>
  );
}

export default banner;
