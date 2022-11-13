import React from "react";

import { FooterContainer } from "./elements.js";

import {
  LogoHeader,
  UniversalFlexDiv,
  ImageContainer,
  SubHeader,
} from "../TypographyAssets/TypographyAssets";
import { Typography } from "@mui/material";

import Facebook from "../../assets/fb.png";
import Instagram from "../../assets/insta.png";
import Twitter from "../../assets/twitter.png";
import Whatsapp from "../../assets/whatsapp.png";

function Footer() {
  return (
    <FooterContainer>
      <UniversalFlexDiv
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"1.2rem"}
        padding={"1rem"}
      >
        <LogoHeader fSize={"2rem"} fWeight={900}>
          TravelMorre.
        </LogoHeader>

        <Typography variant="body1">
          ...Making our customers happy is our first priority
        </Typography>

        <UniversalFlexDiv
          padding={"0rem"}
          gap={"2rem"}
          justifyContent={"flexStart"}
        >
          <ImageContainer
            src={Facebook}
            width={"2rem"}
            height={"2rem"}
          ></ImageContainer>
          <ImageContainer
            src={Instagram}
            width={"2rem"}
            height={"2rem"}
          ></ImageContainer>
          <ImageContainer
            src={Twitter}
            width={"2rem"}
            height={"2rem"}
          ></ImageContainer>
          <ImageContainer
            src={Whatsapp}
            width={"2rem"}
            height={"2rem"}
          ></ImageContainer>
        </UniversalFlexDiv>
      </UniversalFlexDiv>
      <UniversalFlexDiv alignItems={"start"}>
        <UniversalFlexDiv flexDirection={"column"} alignItems={"start"}>
          <Typography>Top Destinations</Typography>
          <Typography>Dubai</Typography>
          <Typography>Switzerland</Typography>
          <Typography>Maldives</Typography>
          <Typography>USA</Typography>
          <Typography>Uk</Typography>
        </UniversalFlexDiv>
        <UniversalFlexDiv flexDirection={"column"} alignItems={"start"}>
          <Typography>Company</Typography>
          <Typography>About Us</Typography>
          <Typography>Services</Typography>
        </UniversalFlexDiv>
        <UniversalFlexDiv flexDirection={"column"} alignItems={"start"}>
          <Typography>Support</Typography>
          <Typography>FAQ</Typography>
          <Typography>How It Works</Typography>
        </UniversalFlexDiv>
      </UniversalFlexDiv>
    </FooterContainer>
  );
}

export default Footer;
