import React from "react";
import Footer from "../../components/Footer/Footer";
import { UniversalFlexDiv } from "../../components/TypographyAssets/TypographyAssets";
import TravelSlider from "../../components/TravelSlider/TravelSlider";
import Partner from "../../Partners/Partner";
import Banner from "../../components/Banner/banner";
import Services from "../../components/Services/Services";

function Home() {
  return (
    <UniversalFlexDiv flexDirection={"column"} alignItems={"inherit "}>
      <Banner />
      <TravelSlider />
      <Services />
      {/* <Partner /> */}
      <Footer />
    </UniversalFlexDiv>
  );
}

export default Home;
