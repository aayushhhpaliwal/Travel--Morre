import React from "react";
import Footer from "../../components/Footer/Footer";
import { UniversalFlexDiv } from "../../components/TypographyAssets/TypographyAssets";
import TravelSlider from "../../components/TravelSlider/TravelSlider"

import Banner from "../../components/Banner/banner";
import Services from "../../components/Services/Services";
function Home() {
  return (
    <UniversalFlexDiv flexDirection={"column"} alignItems={"inherit "}>
      <Banner />
    <TravelSlider />
    <Services />
      <Footer></Footer>
    </UniversalFlexDiv>
  );
}

export default Home;
