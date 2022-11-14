import React from "react";
import Footer from "../../components/Footer/Footer";
import { UniversalFlexDiv } from "../../components/TypographyAssets/TypographyAssets";
import TravelSlider from "../../components/TravelSlider/TravelSlider"

import Banner from "../../components/Banner/banner";
function Home() {
  return (
    <UniversalFlexDiv flexDirection={"column"} alignItems={"inherit "}>
      <Banner />
    <TravelSlider />
      <Footer></Footer>
    </UniversalFlexDiv>
  );
}

export default Home;
