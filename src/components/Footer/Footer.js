import React from "react";

import { FooterContainer } from "./elements.js";

import {
  LogoHeader,
  UniversalFlexDiv,
  ImageContainerForFooter,
  SubHeader,
} from "../TypographyAssets/TypographyAssets";
import { Typography } from "@mui/material";

import Facebook from "../../assets/fb.png";
import Instagram from "../../assets/insta.png";
import Twitter from "../../assets/twitter.png";
import Whatsapp from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";
import data from "../../assets/Data/data.js";
import "./styles.css";
function Footer() {
  return (
    <FooterContainer>
      <UniversalFlexDiv
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"1.2rem"}
        padding={"1rem"}
      >
        <LogoHeader fsize={"2rem"} fweight={900}>
          TravelMorre.
        </LogoHeader>

        <Typography variant="body1">
          Making our customers happy is our first priority
        </Typography>

        <UniversalFlexDiv
          padding={"0rem"}
          gap={"2rem"}
          justifyContent={"flexStart"}
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/108738228710554"
          >
            <ImageContainerForFooter
              src={Facebook}
              width={"2rem"}
              height={"2rem"}
            ></ImageContainerForFooter>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/travelmorre"
          >
            <ImageContainerForFooter
              src={Instagram}
              width={"2rem"}
              height={"2rem"}
            ></ImageContainerForFooter>
          </a>

          {/* <ImageContainerForFooter
            src={Twitter}
            width={"2rem"}
            height={"2rem"}
          ></ImageContainerForFooter> */}

          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/919354029660?text=Hey,%20I%20want%20to%20Explore%20more%20about%20travelMorre%20Services...%20"
          >
            <ImageContainerForFooter
              src={Whatsapp}
              width={"2rem"}
              height={"2rem"}
            ></ImageContainerForFooter>
          </a>
        </UniversalFlexDiv>
      </UniversalFlexDiv>

      <div id="footerLastLinks">
        <UniversalFlexDiv alignItems={"start"} gap="4rem">
          <UniversalFlexDiv
            flexDirection={"column"}
            alignItems={"Flexstart"}
            gap="0"
          >
            <Typography variant="h6"> Top Destinations</Typography>

            {data.map((place, index) => (
              <a
                target="_blank"
                rel="noreferrer"
                href={place.link}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Typography variant="caption">{place.title}</Typography>
              </a>
            ))}

            {/* <Typography variant="caption">Dubai</Typography>
          <Typography variant="caption">Maldives</Typography>
          <Typography variant="caption">Bali</Typography>
          <Typography variant="caption">Thailand</Typography>
          <Typography variant="caption">Andaman & Nicobar</Typography> */}
          </UniversalFlexDiv>

          {/* <UniversalFlexDiv flexDirection={"column"} alignItems={"start"}> */}
          {/* <Typography variant="h6">Support</Typography> */}
          {/* <Typography>FAQ</Typography>
          <Typography>How It Works</Typography> */}
          {/* </UniversalFlexDiv> */}
          {/* <UniversalFlexDiv flexDirection={"column"} alignItems={"start"}>
          <Typography>Company</Typography>
          <Typography>About Us</Typography>
          <Typography>Services</Typography>
        </UniversalFlexDiv> */}
        </UniversalFlexDiv>
      </div>
    </FooterContainer>
  );
}

export default Footer;
