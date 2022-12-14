import React from "react";
import Footer from "../../components/Footer/Footer";
import { UniversalFlexDiv } from "../../components/TypographyAssets/TypographyAssets";
import TravelSlider from "../../components/TravelSlider/TravelSlider";
import Partner from "../../Partners/Partner";
import Banner from "../../components/Banner/banner";
import Services from "../../components/Services/Services";
import NewBanner from "../../components/NewBanner/NewBanner";

function Home() {
  return (
    <UniversalFlexDiv
      gap={"0"}
      flexDirection={"column"}
      alignItems={"inherit "}
    >
      <NewBanner />
      <Banner />
      <TravelSlider />
      {/* <Services /> */}
      {/* <Partner /> */}
      <Footer />
    </UniversalFlexDiv>
  );
}

export default Home;
