import React from "react";
import { Button } from "@mui/material";
import Footer from "../Footer/Footer";
import { Typography } from "@mui/material";

import { UniversalFlexDiv } from "../TypographyAssets/TypographyAssets";

import Banner from "./banner";
function Home() {
  return (
    <UniversalFlexDiv flexDirection={"column"} alignItems={"inherit"}>
      <Banner />
      <Footer></Footer>
    </UniversalFlexDiv>
  );
}

export default Home;
