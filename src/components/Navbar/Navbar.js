import React from "react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import {
  NavbarContainer,
  ImageContainer,
  NavbarInsideContainer,
  NavbarHeaders,
  FlexDiv,
} from "./elements.js";

import travelmorreLogo from "../../assets/travelmorreLogo.jpg";
import ArrowDown from "../../assets/arrowDown.png";
import SearchIcon from "../../assets/SearchIcon.png";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInsideContainer>
        {/* travel morre logo */}
        {/* <ImageContainer src={travelmorreLogo}></ImageContainer> */}

        <NavbarHeaders fSize={"2rem"} fWeight={900}>
          Travelmorre.
        </NavbarHeaders>

        <FlexDiv>
          <NavbarHeaders>Discover</NavbarHeaders>
          <ImageContainer
            src={ArrowDown}
            width={"0.7rem"}
            height={"0.7rem"}
          ></ImageContainer>
        </FlexDiv>

        <NavbarHeaders>Creators</NavbarHeaders>
        <NavbarHeaders>Collectors</NavbarHeaders>
      </NavbarInsideContainer>
      <NavbarInsideContainer>
        <ImageContainer
          src={SearchIcon}
          width={"1rem"}
          height={"1rem"}
        ></ImageContainer>
        {/* <NavbarHeaders>Search</NavbarHeaders> */}
        <NavbarHeaders>Toggle</NavbarHeaders>

        <Button
          variant="contained"
          size="large"
          sx={{
            color: "#fff",
            backgroundColor: "#820EF3",
            padding: "1rem 3rem",
            borderRadius: "1.2rem",
          }}
        >
          Book Trips Now
        </Button>
        {/* <NavbarHeaders>Book Now</NavbarHeaders> */}
      </NavbarInsideContainer>
    </NavbarContainer>
  );
}

export default Navbar;
