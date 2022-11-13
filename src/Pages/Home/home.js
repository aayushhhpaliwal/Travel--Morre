import React from "react";
import Footer from "../../components/Footer/Footer";
import { UniversalFlexDiv } from "../../components/TypographyAssets/TypographyAssets";

import Banner from "../../components/Banner/banner";
function Home() {
  return (
    <UniversalFlexDiv flexDirection={"column"} alignItems={"inherit "}>
      <Banner />
      <Footer></Footer>
    </UniversalFlexDiv>
  );
}

export default Home;
