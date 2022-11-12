import React from "react";
import {
  BannerContainer,
  BannerSecond,
  BannerFirst,
  BannerHead,
  BannerSubHead,
  Test,
} from "./home-element";
import travelmorreLogo from "../../assets/banner.jpg";

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
        <BannerSecond></BannerSecond>
      </Test>
    </BannerContainer>
  );
}

export default banner;
