import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import {
  NavbarContainer,
  ImageContainer,
  NavbarInsideContainer,
  NavbarHeaders,
  FlexDiv,
  NavbarBtnDiv,
} from "./elements.js";

import travelmorreLogo from "../../assets/travelmorre.png";
import ArrowDown from "../../assets/arrowDown.png";
import SearchIcon from "../../assets/SearchIcon.png";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInsideContainer>
        {/* travel morre logo */}

        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/919354029660?text=Hey,%20I%20want%20to%20Explore%20more%20about%20travelMorre%20Services...%20"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <FlexDiv>
            <ImageContainer
              src={travelmorreLogo}
              width={"2rem"}
              height={"2rem"}
            ></ImageContainer>
            <NavbarHeaders fsize={"2rem"} fweight={900}>
              Travelmorre.
            </NavbarHeaders>
          </FlexDiv>
        </a>

        {/* <FlexDiv>
          <NavbarHeaders>Discover</NavbarHeaders>
          <ImageContainer
            src={ArrowDown}
            width={"0.7rem"}
            height={"0.7rem"}
          ></ImageContainer>
        </FlexDiv>

        <NavbarHeaders>Creators</NavbarHeaders>
        <NavbarHeaders>Collectors</NavbarHeaders> */}
      </NavbarInsideContainer>
      <NavbarInsideContainer>
        {/* <ImageContainer
          src={SearchIcon}
          width={"1rem"}
          height={"1rem"}
        ></ImageContainer>
        <NavbarHeaders>Search</NavbarHeaders>
        <NavbarHeaders>Toggle</NavbarHeaders> */}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://wa.me/919354029660?text=Hey,%20I%20want%20to%20Explore%20more%20about%20travelMorre%20Services...%20"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {/* <Button
            variant="contained"
            size="large"
            sx={{
              color: "#fff",
              backgroundColor: "#820EF3",
              padding: "1rem 3rem",
              borderRadius: "1.2rem",

              "@media (max-width: 400px)": {
                height: "1rem",
                // size: "small",
              },
            }}
          >
            Book Your Trip Now
          </Button> */}

          <NavbarBtnDiv>
            <NavbarHeaders>Book Your Trip Now</NavbarHeaders>
          </NavbarBtnDiv>
        </a>
        {/* <NavbarHeaders>Book Now</NavbarHeaders> */}
      </NavbarInsideContainer>
    </NavbarContainer>
  );
}

export default Navbar;
